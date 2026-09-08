import { seededHash, pick, range } from "@/lib/seed";

export type PlaceholderMood =
  | "interior"
  | "detail"
  | "portrait"
  | "exterior"
  | "texture";

export type PlaceholderTone = "cream" | "ivory" | "ink" | "sand";

const TONES: Record<
  PlaceholderTone,
  { from: string; to: string; line: string; wash: string }
> = {
  cream: { from: "#f5efe4", to: "#e6dac2", line: "#1f2e36", wash: "#ffffff" },
  ivory: { from: "#efe7d6", to: "#d8cbb2", line: "#1f2e36", wash: "#ffffff" },
  ink: { from: "#233139", to: "#141f25", line: "#f4eee1", wash: "#3d4f58" },
  sand: { from: "#e2d3b4", to: "#c3ac82", line: "#1f2e36", wash: "#ffffff" },
};

/**
 * A generative "architectural plate" used in place of real photography.
 * There is no Candlewood photo library yet, and every external stock-photo
 * host is unreachable from this environment, so rather than ship broken
 * <img> tags or generic grey boxes, each slot renders a small bespoke line
 * study in the brand palette — closer in spirit to a preliminary design
 * sketch than a stock photo. Swap in real photography later by passing a
 * `src` to <EditorialImage>; this component then simply stops being used.
 */
export default function PlaceholderArt({
  mood,
  tone = "cream",
  seed = mood,
  label,
  className,
}: {
  mood: PlaceholderMood;
  tone?: PlaceholderTone;
  seed?: string;
  label?: string;
  className?: string;
}) {
  const h = seededHash(seed);
  const palette = TONES[tone];
  const uid = `ph-${seed.replace(/[^a-z0-9]/gi, "")}`;

  return (
    <svg
      viewBox="0 0 400 500"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      role="img"
      aria-label={label ?? `${mood} placeholder illustration`}
    >
      <defs>
        <linearGradient id={`${uid}-bg`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={palette.from} />
          <stop offset="100%" stopColor={palette.to} />
        </linearGradient>
        <radialGradient id={`${uid}-glow`} cx={`${range(h, 15, 45)}%`} cy={`${range(h + 1, 5, 30)}%`} r="65%">
          <stop offset="0%" stopColor={palette.wash} stopOpacity="0.55" />
          <stop offset="100%" stopColor={palette.wash} stopOpacity="0" />
        </radialGradient>
        <filter id={`${uid}-grain`}>
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed={h % 50} stitchTiles="stitch" result="noise" />
          <feColorMatrix in="noise" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.035 0" />
        </filter>
      </defs>

      <rect width="400" height="500" fill={`url(#${uid}-bg)`} />
      <rect width="400" height="500" fill={`url(#${uid}-glow)`} />

      <g stroke={palette.line} strokeWidth="1.25" fill="none" opacity="0.7">
        {mood === "interior" && <InteriorMotif h={h} line={palette.line} />}
        {mood === "detail" && <DetailMotif h={h} />}
        {mood === "portrait" && <PortraitMotif h={h} />}
        {mood === "exterior" && <ExteriorMotif h={h} />}
        {mood === "texture" && <TextureMotif h={h} />}
      </g>

      <rect width="400" height="500" filter={`url(#${uid}-grain)`} opacity="0.5" />
      <rect
        x="10"
        y="10"
        width="380"
        height="480"
        fill="none"
        stroke={palette.line}
        strokeOpacity="0.3"
        strokeWidth="1"
      />

      {label && (
        <text
          x="28"
          y="472"
          fill={palette.line}
          opacity="0.55"
          fontSize="9"
          letterSpacing="2.4"
          fontFamily="var(--font-sans-body), sans-serif"
        >
          {label.toUpperCase()}
        </text>
      )}
    </svg>
  );
}

function InteriorMotif({ h, line }: { h: number; line: string }) {
  const winX = pick(h, [56, 260, 300]);
  const winY = pick(h + 3, [70, 90, 110]);
  return (
    <>
      {/* window / mullion */}
      <rect x={winX} y={winY} width="120" height="150" opacity="0.7" />
      <line x1={winX + 60} y1={winY} x2={winX + 60} y2={winY + 150} opacity="0.7" />
      <line x1={winX} y1={winY + 75} x2={winX + 120} y2={winY + 75} opacity="0.7" />
      {/* floor / horizon lines */}
      <line x1="0" y1="360" x2="400" y2="360" opacity="0.5" />
      <line x1="0" y1="372" x2="400" y2="368" opacity="0.3" />
      {/* a single furniture silhouette, simplified to a low filled mass */}
      <rect
        x={pick(h + 5, [40, 220])}
        y="332"
        width="150"
        height="28"
        fill={line}
        stroke="none"
        opacity="0.22"
      />
    </>
  );
}

function DetailMotif({ h }: { h: number }) {
  const cx = 200 + (h % 40) - 20;
  return (
    <>
      <path d={`M ${cx} 380 C ${cx - 10} 300, ${cx + 25} 260, ${cx + 8} 190`} opacity="0.55" />
      <ellipse cx={cx + 18} cy="230" rx="20" ry="9" opacity="0.5" transform={`rotate(${25} ${cx + 18} 230)`} />
      <ellipse cx={cx - 4} cy="270" rx="16" ry="7" opacity="0.5" transform={`rotate(${-20} ${cx - 4} 270)`} />
      <ellipse cx={cx + 6} cy="185" rx="24" ry="12" opacity="0.6" />
      <line x1="60" y1="400" x2="340" y2="400" opacity="0.3" />
    </>
  );
}

function PortraitMotif({ h }: { h: number }) {
  const shift = (h % 20) - 10;
  return (
    <>
      <circle cx={200 + shift} cy="200" r="70" opacity="0.85" />
      <path
        d={`M ${80 + shift} 440 C ${80 + shift} 310, ${320 + shift} 310, ${320 + shift} 440`}
        opacity="0.85"
      />
      <line x1="0" y1="470" x2="400" y2="470" opacity="0.35" />
      <line x1="0" y1="40" x2="400" y2="40" opacity="0.25" />
    </>
  );
}

function ExteriorMotif({ h }: { h: number }) {
  const roofShift = (h % 30) - 15;
  return (
    <>
      <path d={`M 80 220 L 200 ${120 + roofShift} L 320 220`} opacity="0.6" />
      <line x1="70" y1="220" x2="330" y2="220" opacity="0.6" />
      <line x1="110" y1="220" x2="110" y2="340" opacity="0.4" />
      <line x1="290" y1="220" x2="290" y2="340" opacity="0.4" />
      <rect x="180" y="270" width="40" height="70" opacity="0.4" />
      <line x1="60" y1="340" x2="340" y2="340" opacity="0.5" />
    </>
  );
}

function TextureMotif({ h }: { h: number }) {
  const lines = Array.from({ length: 26 });
  const angle = pick(h, [18, -18, 24]);
  return (
    <g transform={`rotate(${angle} 200 250)`}>
      {lines.map((_, i) => (
        <line key={i} x1={-100 + i * 22} y1="-100" x2={-100 + i * 22} y2="700" opacity="0.15" />
      ))}
    </g>
  );
}
