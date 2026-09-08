"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Staggered line-by-line reveal for the handful of headlines that should
 * carry it (per the brief: hero + section leads only — do not animate every
 * piece of text on the page).
 */
export default function RevealText({
  lines,
  className = "",
  delay = 0,
  as: Tag = "h1",
}: {
  lines: ReactNode[];
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "p";
}) {
  const prefersReduced = useReducedMotion();

  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <motion.span
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: prefersReduced ? 0 : 0.9,
              delay: prefersReduced ? 0 : delay + i * 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="block"
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
