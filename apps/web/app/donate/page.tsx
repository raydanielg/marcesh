import type { Metadata } from "next"
import { HugeiconsIcon } from "@hugeicons/react"
import { ShieldIcon, HeartIcon, Tick02Icon } from "@hugeicons/core-free-icons"
import { PageHero } from "@/components/page-hero"
import { Section } from "@/components/decorative"
import { Reveal } from "@/components/reveal"
import { DonateForm } from "@/components/forms/donate-form"
import { CtaSection } from "@/components/cta-section"

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support Marcesh Foundation's mission — your contribution funds education, health and community initiatives in Kibaha, Pwani.",
}

const points = [
  "School supplies and learning materials for students",
  "Community health awareness and outreach",
  "Essential support for vulnerable families",
  "Volunteer-powered community initiatives",
]

export default function DonatePage() {
  return (
    <>
      <PageHero
        eyebrow="Donate"
        title="Your generosity becomes someone's opportunity"
        description="Every contribution — large or small — goes directly toward programs that improve lives in Kibaha, Pwani."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Get Involved", href: "/get-involved" }, { label: "Donate" }]}
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <Reveal>
              <span className="flex size-12 items-center justify-center rounded-2xl bg-brand text-brand-foreground">
                <HugeiconsIcon icon={HeartIcon} strokeWidth={1.8} className="size-6" />
              </span>
              <h2 className="font-display mt-5 text-2xl font-semibold md:text-3xl">
                Where your donation goes
              </h2>
            </Reveal>
            <ul className="mt-6 flex flex-col gap-3.5">
              {points.map((p, i) => (
                <Reveal key={p} delay={i * 70} as="li">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <HugeiconsIcon icon={Tick02Icon} strokeWidth={2.4} className="size-3" />
                    </span>
                    <span className="text-sm leading-relaxed">{p}</span>
                  </div>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={300} className="mt-8 flex items-start gap-3 rounded-xl border bg-warm p-4">
              <HugeiconsIcon icon={ShieldIcon} strokeWidth={1.8} className="mt-0.5 size-5 shrink-0 text-primary" />
              <p className="text-sm leading-relaxed text-muted-foreground">
                Marcesh Foundation is committed to transparency — we report openly on how
                contributions are used across our programs.
              </p>
            </Reveal>
          </div>
          <Reveal variant="right" className="lg:col-span-3">
            <div className="rounded-3xl border bg-card p-6 shadow-[0_20px_50px_-24px_rgb(0_0_0/0.18)] md:p-9">
              <h2 className="font-display text-xl font-semibold md:text-2xl">Make a donation</h2>
              <p className="mt-1.5 text-sm text-muted-foreground">
                Choose an amount or enter your own — in Tanzanian Shillings or US Dollars.
              </p>
              <div className="mt-7">
                <DonateForm />
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
      <CtaSection />
    </>
  )
}
