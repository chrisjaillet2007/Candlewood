/** Small deterministic hash so placeholder art varies by label without
 * relying on Math.random (which would cause server/client hydration
 * mismatches in Next.js). */
export function seededHash(input: string): number {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = (hash << 5) - hash + input.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

export function pick<T>(seed: number, options: T[]): T {
  return options[seed % options.length];
}

export function range(seed: number, min: number, max: number): number {
  const span = max - min;
  return min + (seed % 1000) / 1000 * span;
}
