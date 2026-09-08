import { ConfigError } from "./auth";

/**
 * Reads and writes files in the live GitHub repository via the REST API, so
 * that publishing a change from `/admin` is just a git commit — no
 * database, no separate photo host. See ADMIN.md for the one-time setup
 * (a GitHub token and a few environment variables).
 */

type GithubEnv = { token: string; repo: string; branch: string };

function getEnv(): GithubEnv {
  const token = process.env.GITHUB_TOKEN;
  const repo = process.env.GITHUB_REPO;
  const branch = process.env.GITHUB_BRANCH;
  if (!token) throw new ConfigError("GITHUB_TOKEN");
  if (!repo) throw new ConfigError("GITHUB_REPO");
  if (!branch) throw new ConfigError("GITHUB_BRANCH");
  return { token, repo, branch };
}

async function githubRequest(path: string, init?: RequestInit): Promise<Response> {
  const { token } = getEnv();
  return fetch(`https://api.github.com${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      ...(init?.headers ?? {}),
    },
    cache: "no-store",
  });
}

export type RepoFile = { text: string; sha: string };

/** Reads a file from the repo at the configured branch. Returns null if it doesn't exist yet. */
export async function readTextFile(path: string): Promise<RepoFile | null> {
  const { repo, branch } = getEnv();
  const res = await githubRequest(
    `/repos/${repo}/contents/${path}?ref=${encodeURIComponent(branch)}`
  );
  if (res.status === 404) return null;
  if (!res.ok) {
    throw new Error(
      `Couldn't read ${path} from GitHub (${res.status}). ${await res.text()}`
    );
  }
  const data = (await res.json()) as { content: string; sha: string };
  return {
    text: Buffer.from(data.content, "base64").toString("utf-8"),
    sha: data.sha,
  };
}

/**
 * Creates or updates a file in the repo (one commit). Pass the file's
 * current `sha` when overwriting an existing file (from a prior
 * `readTextFile` call); omit it when creating a new file.
 */
export async function writeFile(
  path: string,
  contentBase64: string,
  message: string,
  sha?: string
): Promise<void> {
  const { repo, branch } = getEnv();
  const res = await githubRequest(`/repos/${repo}/contents/${path}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      message,
      content: contentBase64,
      branch,
      committer: {
        name: "Candlewood Admin",
        email: "admin@candlewoodinteriors.com",
      },
      ...(sha ? { sha } : {}),
    }),
  });
  if (!res.ok) {
    throw new Error(
      `Couldn't publish ${path} to GitHub (${res.status}). ${await res.text()}`
    );
  }
}

export function textToBase64(text: string): string {
  return Buffer.from(text, "utf-8").toString("base64");
}
