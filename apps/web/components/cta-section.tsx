import Link from "next/link"
import { buttonVariants } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"
import { SiteImage } from "./site-image"
import { Reveal } from "./reveal"
import { images } from "@/lib/data/images"

export function CtaSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <SiteImage image={images.cta} ratio="aspect-auto" className="absolute inset-0" rounded="rounded-none" />
      </div>
      <div className="absolute inset-0 bg-deep/85" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <h2 className="font-display text-3xl leading-tight font-semibold text-balance text-white md:text-5xl">
              Together, We Can Create Lasting Change.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-5 text-lg leading-relaxed text-white/75">
              Support initiatives that create opportunities, improve wellbeing and strengthen communities.
            </p>
          </Reveal>
          <Reveal delay={240} className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/donate"
              className={cn(buttonVariants({ size: "lg" }), "bg-brand text-brand-foreground hover:bg-brand/90")}
            >
              Support Our Mission
            </Link>
            <Link
              href="/get-involved"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white"
              )}
            >
              Get Involved
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
