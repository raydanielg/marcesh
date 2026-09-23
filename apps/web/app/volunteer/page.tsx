import type { Metadata } from "next"
import { HugeiconsIcon } from "@hugeicons/react"
import { HandHelpingIcon, Tick02Icon } from "@hugeicons/core-free-icons"
import { PageHero } from "@/components/page-hero"
import { Section } from "@/components/decorative"
import { Reveal } from "@/components/reveal"
import { VolunteerForm } from "@/components/forms/volunteer-form"
import { images } from "@/lib/data/images"

export const metadata: Metadata = {
  title: "Volunteer",
  description:
    "Join Marcesh Foundation's volunteer network — offer your time and skills to support education, health and community initiatives in Kibaha, Pwani.",
}

const steps = [
  "Fill in the application form with your skills and availability.",
  "Our volunteer team reviews and reaches out about opportunities.",
  "Join an orientation and start making a difference.",
]

export default function VolunteerPage() {
  return (
    <>
      <PageHero
        variant="image"
        image={images.community}
        eyebrow="Volunteer"
        title="Give your time. Change a life."
        description="Join the volunteers powering Marcesh Foundation's work — no special qualifications needed, just commitment and care."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Get Involved", href: "/get-involved" }, { label: "Volunteer" }]}
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <Reveal>
              <span className="flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <HugeiconsIcon icon={HandHelpingIcon} strokeWidth={1.8} className="size-6" />
              </span>
              <h2 className="font-display mt-5 text-2xl font-semibold md:text-3xl">
                How volunteering works
              </h2>
            </Reveal>
            <ol className="mt-6 flex flex-col gap-5">
              {steps.map((s, i) => (
                <Reveal key={s} delay={i * 80} as="li">
                  <div className="flex gap-4">
                    <span className="font-display flex size-8 shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-bold text-secondary-foreground">
                      {i + 1}
                    </span>
                    <p className="pt-1 text-sm leading-relaxed">{s}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
            <Reveal delay={280} className="mt-8 rounded-xl border bg-warm p-4">
              <p className="text-sm leading-relaxed text-muted-foreground">
                Volunteers must be 16+ or accompanied by a guardian for field activities.
                Orientation and safeguarding guidance is provided to all volunteers.
              </p>
            </Reveal>
          </div>
          <Reveal variant="right" className="lg:col-span-3">
            <div className="rounded-3xl border bg-card p-6 shadow-[0_20px_50px_-24px_rgb(0_0_0/0.18)] md:p-9">
              <h2 className="font-display text-xl font-semibold md:text-2xl">Volunteer application</h2>
              <p className="mt-1.5 text-sm text-muted-foreground">
                Tell us about yourself and where you'd like to help.
              </p>
              <div className="mt-7">
                <VolunteerForm />
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  )
}
