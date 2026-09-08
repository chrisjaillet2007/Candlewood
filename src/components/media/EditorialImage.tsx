"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import PlaceholderArt, {
  type PlaceholderMood,
  type PlaceholderTone,
} from "./PlaceholderArt";

type EditorialImageProps = {
  src?: string;
  alt: string;
  mood: PlaceholderMood;
  tone?: PlaceholderTone;
  seed?: string;
  label?: string;
  aspect?: string;
  priority?: boolean;
  sizes?: string;
  reveal?: boolean;
  className?: string;
};

/**
 * The single image seam for the whole site. Every photograph-shaped slot —
 * hero, portfolio, founders, journal — renders through this component. Today
 * it always falls back to generative placeholder art (see PlaceholderArt);
 * once real Candlewood photography exists, pass `src` and it renders through
 * next/image instead. Nothing else in the app needs to change.
 */
export default function EditorialImage({
  src,
  alt,
  mood,
  tone = "cream",
  seed,
  label,
  aspect = "aspect-[4/5]",
  priority,
  sizes = "100vw",
  reveal = true,
  className = "",
}: EditorialImageProps) {
  const prefersReduced = useReducedMotion();

  const content = src ? (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      className="object-cover"
    />
  ) : (
    <PlaceholderArt
      mood={mood}
      tone={tone}
      seed={seed ?? alt}
      label={label}
      className="h-full w-full"
    />
  );

  if (!reveal) {
    return (
      <div className={`relative overflow-hidden ${aspect} ${className}`}>
        {content}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ clipPath: "inset(0 0 100% 0)" }}
      whileInView={{ clipPath: "inset(0 0 0% 0)" }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={
        prefersReduced
          ? { duration: 0 }
          : { duration: 1.1, ease: [0.16, 1, 0.3, 1] }
      }
      className={`relative overflow-hidden ${aspect} ${className}`}
    >
      <motion.div
        initial={{ scale: 1.08 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={
          prefersReduced
            ? { duration: 0 }
            : { duration: 1.4, ease: [0.16, 1, 0.3, 1] }
        }
        className="absolute inset-0"
      >
        {content}
      </motion.div>
    </motion.div>
  );
}
