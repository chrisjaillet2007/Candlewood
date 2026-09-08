"use client";

import { motion, useReducedMotion } from "framer-motion";
import Button from "@/components/ui/Button";
import RevealText from "@/components/ui/RevealText";
import PlaceholderArt from "@/components/media/PlaceholderArt";

export default function Hero() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden bg-ink">
      <motion.div
        initial={{ opacity: 0, scale: 1.06 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        <motion.div
          animate={
            prefersReduced
              ? undefined
              : { scale: [1, 1.045, 1] }
          }
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <PlaceholderArt
            mood="interior"
            tone="ink"
            seed="hero-great-room"
            className="h-full w-full"
          />
        </motion.div>

        {/* a slow, near-imperceptible sweep of light across the room */}
        <motion.div
          aria-hidden
          initial={{ x: "-30%", opacity: 0 }}
          animate={
            prefersReduced
              ? { opacity: 0.12 }
              : { x: ["-30%", "20%"], opacity: [0, 0.16, 0] }
          }
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-transparent via-cream/40 to-transparent"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-ink/10" />
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pb-16 sm:px-10 sm:pb-20 lg:pb-24">
        <p className="text-eyebrow mb-6 text-cream/70">
          Interior Design &middot; Eastern Massachusetts
        </p>

        <RevealText
          as="h1"
          delay={0.5}
          lines={["The journey", "to comfort", "starts at Candlewood."]}
          className="font-display max-w-3xl text-[13vw] leading-[0.98] text-cream sm:text-6xl md:text-7xl lg:text-[5.5rem]"
        />

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-md text-[15px] leading-relaxed text-cream/80 sm:text-base"
        >
          A boutique interior design studio building beautiful, livable homes
          across Andover, Dover, Wellesley, and Eastern Massachusetts — and
          making the process feel effortless along the way.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center gap-5"
        >
          <Button href="/contact" variant="primary" className="!bg-cream !text-ink hover:!bg-cream/85">
            Begin Your Journey
          </Button>
          <Button href="/portfolio" variant="ghost" className="!text-cream !border-cream/40 hover:!border-cream">
            Explore Our Work
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 right-6 hidden text-[11px] tracking-[0.2em] text-cream/65 sm:right-10 sm:block"
      >
        SCROLL
      </motion.div>
    </section>
  );
}
