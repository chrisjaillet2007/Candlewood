"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import Logo from "@/components/ui/Logo";
import { NAV_LINKS } from "@/data/nav";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = isHome && !scrolled && !menuOpen;
  const textTone = transparent ? "text-cream" : "text-ink";

  return (
    <>
      <motion.header
        initial={false}
        animate={{
          backgroundColor: transparent ? "rgba(250,246,239,0)" : "rgba(250,246,239,0.92)",
          borderColor: transparent ? "rgba(31,46,54,0)" : "rgba(31,46,54,0.08)",
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 sm:px-10">
          <Logo variant={transparent ? "white" : "ink"} className="h-7 w-auto sm:h-8" />

          <nav className="hidden items-center gap-9 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[13px] tracking-[0.08em] uppercase transition-colors duration-300 ${textTone} opacity-80 hover:opacity-100`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <Link
              href="/contact"
              className={`hidden text-[13px] tracking-[0.1em] uppercase border-b pb-0.5 transition-colors duration-300 sm:inline-block ${textTone} border-current/40 hover:border-current`}
            >
              Begin Your Journey
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className={`flex flex-col gap-1.5 lg:hidden ${textTone}`}
            >
              <span className="block h-px w-6 bg-current" />
              <span className="block h-px w-6 bg-current" />
            </button>
          </div>
        </div>
      </motion.header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
