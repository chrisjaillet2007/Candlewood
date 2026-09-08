# Setting Up the Admin Page (one-time)

The site has a built-in `/admin` page for updating the **portfolio** —
adding projects, uploading photos, editing details — without writing any
code or touching GitHub directly. This is a one-time setup for whoever
manages the hosting (you, or a developer); once it's done, the person doing
the day-to-day updates just needs a password.

## How it works, in short

`/admin` is password-protected. When someone publishes a change there, the
site commits that change directly to this GitHub repository — the same
repository this code lives in. If your host (Vercel, recommended) is
connected to this repo, that commit triggers an automatic rebuild, and the
change goes live in roughly a minute. There's no separate database and
nothing else to maintain.

## What you need to set up

Five environment variables, in your hosting provider's settings (for
Vercel: **Project Settings → Environment Variables**). See
`.env.example` for the same list with inline notes.

| Variable | What it is |
|---|---|
| `ADMIN_PASSWORD` | The password used to log in at `/admin`. Pick something the person updating the site can remember, or store in a password manager. |
| `SESSION_SECRET` | A random string used to sign login sessions. Generate one with `openssl rand -hex 32` (or any password generator) and never share it. |
| `GITHUB_TOKEN` | A GitHub Personal Access Token that lets the site commit changes. See below for how to create one. |
| `GITHUB_REPO` | `chrisjaillet2007/Candlewood` — this repository. |
| `GITHUB_BRANCH` | The branch your host deploys from (see below). |

### Creating the GitHub token

1. On GitHub: **Settings → Developer settings → Personal access tokens →
   Fine-grained tokens → Generate new token.**
2. Under **Repository access**, choose "Only select repositories" and pick
   this repo.
3. Under **Permissions → Repository permissions**, set **Contents** to
   **Read and write**. Nothing else is needed.
4. Generate the token and copy it immediately — GitHub only shows it once.
   Paste it into `GITHUB_TOKEN`.

This token only has access to this one repository, and only to read/write
files — it can't do anything else on your GitHub account.

### Picking `GITHUB_BRANCH`

This should be whichever branch your hosting provider actually deploys to
production. If you're using Vercel's default setup, that's the "Production
Branch" shown in **Project Settings → Git** — commonly `main`. Whatever
that value is, use the exact same one here.

### Deploying

If you haven't already: push this repository to GitHub (already done) and
import it at [vercel.com/new](https://vercel.com/new). Add the five
environment variables above in Vercel's project settings, then deploy.
Locally, copy `.env.example` to `.env.local` and fill in the same values to
test `/admin` on your own machine with `npm run dev`.

## Handing it off to whoever updates the site

Once the environment variables above are set and the site is deployed, the
only thing the person managing content day-to-day needs is:

1. The website address, with `/admin` after it (e.g.
   `https://candlewoodinteriors.com/admin`).
2. The `ADMIN_PASSWORD` you chose.

That's it — no GitHub account, no terminal, no code. From there, the
in-app instructions on the Portfolio page (add a project, upload a photo,
click Publish) are self-explanatory. Changes go live automatically within
about a minute; there's no separate "deploy" step to remember.

## Good to know / limitations

- **Photos are resized automatically** in the browser before upload (long
  side capped around 2000px, saved as JPEG), so there's no file-size limit
  to worry about in practice — even a large phone photo works fine.
- **Deleting a project** removes it from the site but leaves its photo
  files in the repository (harmless, just unused). A developer can clean
  these up from `public/portfolio/` occasionally if desired.
- **Only the portfolio is manageable from `/admin` today.** Services,
  testimonials, journal posts, and founder bios are still edited by hand in
  code — see `CONTENT.md`. This can be extended the same way later if
  useful.
- **Every publish is a real git commit** to your repository, authored as
  "Candlewood Admin" — so the portfolio's history is always visible and
  reversible (any commit can be reverted) even though nobody had to open
  GitHub to make the change.
- If `/admin` shows a message like "the `GITHUB_TOKEN` environment variable
  is missing," an environment variable above hasn't been set correctly yet
  in your hosting provider — this is the one thing worth double-checking if
  something doesn't work.
