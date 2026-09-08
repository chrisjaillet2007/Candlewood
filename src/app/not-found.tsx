import Link from "next/link";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-[1000px] flex-col items-center justify-center px-6 py-32 text-center sm:px-10">
      <p className="text-eyebrow mb-6 text-ink-soft">404</p>
      <h1 className="font-display text-4xl leading-tight sm:text-5xl">
        This room isn&rsquo;t finished yet.
      </h1>
      <p className="mt-6 max-w-md text-[15px] leading-relaxed text-ink-soft sm:text-base">
        The page you’re looking for doesn’t exist, or has moved. Let’s get
        you back somewhere familiar.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-5">
        <Button href="/">Return Home</Button>
        <Link
          href="/portfolio"
          className="text-[13px] tracking-[0.12em] uppercase border-b border-ink/30 pb-1 hover:border-ink"
        >
          View Our Work
        </Link>
      </div>
    </section>
  );
}
