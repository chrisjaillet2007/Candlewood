"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { NAV_LINKS } from "@/data/nav";
import { LogoMark } from "@/components/ui/Logo";

export default function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed inset-0 z-[60] flex flex-col bg-ink text-cream lg:hidden"
        >
          <div className="flex items-center justify-between px-6 py-4">
            <LogoMark variant="white" className="h-7 w-auto" />
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="relative h-6 w-6"
            >
              <span className="absolute top-1/2 left-1/2 h-px w-6 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-cream" />
              <span className="absolute top-1/2 left-1/2 h-px w-6 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-cream" />
            </button>
          </div>

          <nav className="flex flex-1 flex-col justify-center gap-2 px-8">
            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="font-display block py-3 text-4xl leading-tight"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="px-8 pb-10">
            <Link
              href="/contact"
              onClick={onClose}
              className="inline-block border-b border-cream/50 pb-1 text-[13px] tracking-[0.12em] uppercase"
            >
              Begin Your Journey
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
