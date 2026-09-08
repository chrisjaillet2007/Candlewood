import { createHmac, timingSafeEqual } from "crypto";

export const SESSION_COOKIE_NAME = "candlewood_admin_session";
const SESSION_TTL_MS = 1000 * 60 * 60 * 12; // 12 hours

export class ConfigError extends Error {
  constructor(varName: string) {
    super(
      `The site isn't fully set up yet — the ${varName} environment variable is missing. See ADMIN.md.`
    );
    this.name = "ConfigError";
  }
}

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new ConfigError(name);
  return value;
}

function sign(payload: string): string {
  return createHmac("sha256", requireEnv("SESSION_SECRET"))
    .update(payload)
    .digest("hex");
}

function safeEqual(a: string, b: string): boolean {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) return false;
  return timingSafeEqual(bufA, bufB);
}

/** A signed, expiring token for the admin session cookie — no server-side session store needed. */
export function createSessionToken(): string {
  const expires = Date.now() + SESSION_TTL_MS;
  const signature = sign(`admin.${expires}`);
  return `${expires}.${signature}`;
}

export function verifySessionToken(token: string | undefined | null): boolean {
  if (!token) return false;
  const [expiresRaw, signature] = token.split(".");
  if (!expiresRaw || !signature) return false;
  const expires = Number(expiresRaw);
  if (!Number.isFinite(expires) || expires < Date.now()) return false;
  try {
    return safeEqual(sign(`admin.${expiresRaw}`), signature);
  } catch {
    return false;
  }
}

export function checkPassword(candidate: string): boolean {
  const expected = requireEnv("ADMIN_PASSWORD");
  return safeEqual(expected, candidate);
}

export const SESSION_MAX_AGE_SECONDS = SESSION_TTL_MS / 1000;
