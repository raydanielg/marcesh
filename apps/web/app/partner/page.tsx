import type { Metadata } from "next"
import { HugeiconsIcon } from "@hugeicons/react"
import { TeamWorkIcon, Tick02Icon } from "@hugeicons/core-free-icons"
import { PageHero } from "@/components/page-hero"
import { Section } from "@/components/decorative"
import { Reveal } from "@/components/reveal"
import { PartnerForm } from "@/components/forms/partner-form"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "Partner With Us | Marcesh Foundation",
  description:
    "Partner with Marcesh Foundation. Collaborate on education, health and community initiatives that create real impact in Kibaha, Pwani, Tanzania.",
  path: "/partner",
})

const benefits = [
  "Co-design programs that align with your organisation's goals",
  "Transparent reporting on the impact your partnership creates",
  "Recognition across our events, stories and community channels",
  "A trusted local partner with deep community roots",
]

export default function PartnerPage() {
  return (
    <>
      <PageHero
        eyebrow="Partner With Us"
        title="Let's build something lasting, together"
        description="Organisations, schools and institutions, join us in creating opportunities across the Pwani region."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Get Involved", href: "/get-involved" }, { label: "Partner" }]}
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <Reveal>
              <span className="flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <HugeiconsIcon icon={TeamWorkIcon} strokeWidth={1.8} className="size-6" />
              </span>
              <h2 className="font-display mt-5 text-2xl font-semibold md:text-3xl">
                Why partner with Marcesh?
              </h2>
            </Reveal>
            <ul className="mt-6 flex flex-col gap-3.5">
              {benefits.map((b, i) => (
                <Reveal key={b} delay={i * 70} as="li">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <HugeiconsIcon icon={Tick02Icon} strokeWidth={2.4} className="size-3" />
                    </span>
                    <span className="text-sm leading-relaxed">{b}</span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
          <Reveal variant="right" className="lg:col-span-3">
            <div className="rounded-3xl border bg-card p-6 shadow-[0_20px_50px_-24px_rgb(0_0_0/0.18)] md:p-9">
              <h2 className="font-display text-xl font-semibold md:text-2xl">Partnership enquiry</h2>
              <p className="mt-1.5 text-sm text-muted-foreground">
                Tell us about your organisation and the collaboration you have in mind.
              </p>
              <div className="mt-7">
                <PartnerForm />
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  )
}
