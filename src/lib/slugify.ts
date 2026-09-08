// Matches combining diacritical marks left behind by NFKD normalization
// (e.g. "e" + a combining acute accent, from decomposing the letter "e"
// with an accent).
const COMBINING_MARKS = /[\u0300-\u036f]/g;

export function slugify(input: string): string {
  const slug = input
    .toLowerCase()
    .normalize("NFKD")
    .replace(COMBINING_MARKS, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return slug || "project";
}

/** Appends -2, -3, ... until the slug no longer collides with `existing`. */
export function uniqueSlug(base: string, existing: string[]): string {
  if (!existing.includes(base)) return base;
  let i = 2;
  while (existing.includes(`${base}-${i}`)) i++;
  return `${base}-${i}`;
}
