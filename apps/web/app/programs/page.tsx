import type { Metadata } from "next"
import Link from "next/link"
import { cn } from "@workspace/ui/lib/utils"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowRight01Icon,
  SchoolIcon,
  StethoscopeIcon,
  UserGroupIcon,
  HandHelpingIcon,
} from "@hugeicons/core-free-icons"
import { PageHero } from "@/components/page-hero"
import { SiteImage } from "@/components/site-image"
import { Reveal } from "@/components/reveal"
import { Section } from "@/components/decorative"
import { CtaSection } from "@/components/cta-section"
import { programs } from "@/lib/data/programs"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "Programs | Education, Health & Community Development | Marcesh Foundation",
  description:
    "Explore Marcesh Foundation's programs: education support, health initiatives, community development and support for people in need across Kibaha, Pwani, Tanzania.",
  path: "/programs",
})

const programIcons = {
  education: SchoolIcon,
  health: StethoscopeIcon,
  community: UserGroupIcon,
  support: HandHelpingIcon,
} as const

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Programs"
        title="Four pillars of lasting change"
        description="Each of our programs tackles a different barrier to a fair, healthy and educated society. Together they form one mission."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Programs" }]}
      />

      {programs.map((p, i) => (
        <Section key={p.slug} className={cn(i % 2 === 1 && "bg-secondary/40")}>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal variant={i % 2 === 0 ? "left" : "right"} className={cn(i % 2 === 1 && "lg:order-2")}>
              <div className="relative">
                <div
                  aria-hidden
                  className={cn(
                    "absolute size-full rounded-3xl border-2 border-brand/25",
                    i % 2 === 0 ? "-top-5 -left-5" : "-top-5 -right-5"
                  )}
                />
                <SiteImage image={p.image} ratio="aspect-[4/3]" rounded="rounded-3xl" className="relative" />
              </div>
            </Reveal>
            <div className={cn(i % 2 === 1 && "lg:order-1")}>
              <Reveal>
                <div className="flex items-center gap-4">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                    <HugeiconsIcon icon={programIcons[p.icon]} strokeWidth={1.8} className="size-6" />
                  </span>
                  <div>
                    <span className="text-xs font-semibold tracking-[0.18em] text-brand uppercase">
                      Program {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="font-display text-2xl font-semibold md:text-3xl">{p.title}</h2>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{p.description}</p>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{p.impact}</p>
              </Reveal>
              <Reveal delay={220} className="mt-7 flex flex-wrap gap-x-8 gap-y-3">
                {p.stats.map((s) => (
                  <div key={s.label}>
                    <div className="font-display text-2xl font-bold text-primary">
                      {s.value.toLocaleString()}
                      {s.suffix}
                    </div>
                    <div className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                      {s.label}
                    </div>
                  </div>
                ))}
              </Reveal>
              <Reveal delay={300} className="mt-8">
                <Link
                  href={`/programs/${p.slug}`}
                  className="inline-flex h-11 items-center gap-2 rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Explore the {p.title} Program
                  <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} className="size-4" />
                </Link>
              </Reveal>
            </div>
          </div>
        </Section>
      ))}

      <CtaSection />
    </>
  )
}
