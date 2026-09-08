import { SERVICES } from "@/data/services";
import SectionHeading from "@/components/ui/SectionHeading";
import EditorialImage from "@/components/media/EditorialImage";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import Line from "@/components/ui/Line";

const FEATURED = SERVICES.slice(0, 6);

export default function Services() {
  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-[1400px] px-6 py-28 sm:px-10 sm:py-36">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Services"
              title="A full-service studio, from first sketch to last pillow."
              description="Candlewood offers as much — or as little — support as a project calls for, all delivered with the same care."
            />
            <FadeIn delay={0.1} className="mt-10 hidden lg:block">
              <EditorialImage
                alt="Fabric swatches and material samples arranged on a work table"
                mood="detail"
                tone="sand"
                seed="services-materials"
                label="Materials"
                aspect="aspect-[4/5]"
              />
            </FadeIn>
          </div>

          <div className="lg:col-span-7">
            <Line className="mb-2" />
            {FEATURED.map((service, i) => (
              <FadeIn key={service.slug} delay={i * 0.05}>
                <div className="group grid grid-cols-[2.5rem_1fr] gap-4 border-b border-ink/10 py-7 sm:grid-cols-[3rem_1fr]">
                  <span className="font-display text-sm text-stone">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl">{service.name}</h3>
                    <p className="mt-2 max-w-md text-[15px] leading-relaxed text-ink-soft">
                      {service.summary}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}

            <FadeIn delay={0.35} className="mt-10">
              <Button href="/services" variant="secondary">
                View All Services
              </Button>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
