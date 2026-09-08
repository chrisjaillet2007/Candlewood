import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import PortfolioGrid from "@/components/work/PortfolioGrid";
import FinalCta from "@/components/home/FinalCta";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Selected interior design projects across Andover, Dover, Wellesley, and Eastern Massachusetts.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Selected work."
        description="A look at the kind of rooms and homes we love building — representative of our approach while our library of completed projects grows."
      />
      <div className="mx-auto max-w-[1400px] px-6 pb-28 sm:px-10 sm:pb-36">
        <PortfolioGrid />
      </div>
      <FinalCta />
    </>
  );
}
