import Hero from "@/components/home/Hero";
import BrandIntro from "@/components/home/BrandIntro";
import Transformation from "@/components/home/Transformation";
import FeaturedWork from "@/components/home/FeaturedWork";
import Services from "@/components/home/Services";
import Founders from "@/components/home/Founders";
import Process from "@/components/home/Process";
import NewEngland from "@/components/home/NewEngland";
import Testimonials from "@/components/home/Testimonials";
import FinalCta from "@/components/home/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandIntro />
      <Transformation />
      <FeaturedWork />
      <Services />
      <Founders />
      <Process />
      <NewEngland />
      <Testimonials />
      <FinalCta />
    </>
  );
}
