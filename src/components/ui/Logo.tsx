import Image from "next/image";
import Link from "next/link";

/**
 * The official Candlewood Interiors mark, extracted from the brand-supplied
 * artwork. Do not recreate the wordmark in a different typeface — these are
 * the only two approved renderings (ink for light grounds, white for dark /
 * photographic grounds).
 */
export function LogoMark({
  variant = "ink",
  className = "",
}: {
  variant?: "ink" | "white";
  className?: string;
}) {
  const src =
    variant === "ink"
      ? "/brand/candlewood-logo-ink.png"
      : "/brand/candlewood-logo-white.png";
  return (
    <Image
      src={src}
      alt="Candlewood Interiors"
      width={1202}
      height={368}
      className={className}
      priority
    />
  );
}

export default function Logo({
  variant = "ink",
  className = "h-8 w-auto sm:h-9",
}: {
  variant?: "ink" | "white";
  className?: string;
}) {
  return (
    <Link href="/" aria-label="Candlewood Interiors, home" className="shrink-0">
      <LogoMark variant={variant} className={className} />
    </Link>
  );
}
