"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function Line({
  className = "",
  tone = "ink",
}: {
  className?: string;
  tone?: "ink" | "cream";
}) {
  const prefersReduced = useReducedMotion();
  return (
    <motion.span
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={
        prefersReduced ? { duration: 0 } : { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
      }
      style={{ originX: 0 }}
      className={`block h-px w-full ${tone === "ink" ? "bg-ink/25" : "bg-cream/40"} ${className}`}
    />
  );
}
