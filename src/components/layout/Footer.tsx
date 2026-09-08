import Link from "next/link";
import { LogoMark } from "@/components/ui/Logo";
import { NAV_LINKS } from "@/data/nav";
import Line from "@/components/ui/Line";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-[1400px] px-6 py-20 sm:px-10">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <LogoMark variant="white" className="h-8 w-auto" />
            <p className="mt-6 max-w-xs text-[15px] leading-relaxed text-cream/70">
              Boutique interior design for Andover, Dover, Wellesley, and the
              Eastern Massachusetts communities we call home.
            </p>
          </div>

          <div>
            <p className="text-eyebrow mb-5 text-cream/65">Studio</p>
            <ul className="space-y-3 text-[15px] text-cream/80">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-cream">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-eyebrow mb-5 text-cream/65">Serving</p>
            <ul className="space-y-3 text-[15px] text-cream/80">
              <li>Andover</li>
              <li>Dover &amp; Wellesley</li>
              <li>Weston &amp; Sudbury</li>
              <li>Concord &amp; Lexington</li>
              <li>Greater Boston</li>
            </ul>
          </div>

          <div>
            <p className="text-eyebrow mb-5 text-cream/65">Connect</p>
            <ul className="space-y-3 text-[15px] text-cream/80">
              <li>
                <a href="mailto:hello@candlewoodinteriors.com" className="transition-colors hover:text-cream">
                  hello@candlewoodinteriors.com
                </a>
              </li>
              <li>
                <a href="tel:+19785550142" className="transition-colors hover:text-cream">
                  (978) 555-0142
                </a>
              </li>
              <li>Andover, Massachusetts</li>
            </ul>
          </div>
        </div>

        <div className="mt-16">
          <Line tone="cream" />
        </div>

        <div className="mt-8 flex flex-col gap-4 text-xs text-cream/60 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} Candlewood Interiors. All rights reserved.</p>
          <p className="italic font-display text-cream/60 text-sm">
            The journey to comfort starts at Candlewood.
          </p>
        </div>
      </div>
    </footer>
  );
}
