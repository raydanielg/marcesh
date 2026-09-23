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
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { CountUp } from "@/components/count-up"
import { Section, Container } from "@/components/decorative"
import { CtaSection } from "@/components/cta-section"
import { StoryCard } from "@/components/cards"
import { stats, impactByYear, programDistribution } from "@/lib/data/stats"
import { programs } from "@/lib/data/programs"
import { stories } from "@/lib/data/stories"
import { projects } from "@/lib/data/projects"

export const metadata: Metadata = {
  title: "Our Impact",
  description:
    "See the difference Marcesh Foundation makes — people reached, programs delivered and stories of change across Kibaha, Pwani.",
}

const programIcons = {
  education: SchoolIcon,
  health: StethoscopeIcon,
  community: UserGroupIcon,
  support: HandHelpingIcon,
} as const

export default function ImpactPage() {
  const maxYear = Math.max(...impactByYear.map((y) => y.people))

  return (
    <>
      <PageHero
        variant="deep"
        eyebrow="Our Impact"
        title="Numbers tell part of the story"
        description="Behind every figure is a student back in class, a family with better health, a community a little stronger."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Impact" }]}
      >
        <div className="mt-8 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-3xl font-bold text-white md:text-4xl">
                <CountUp value={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-1 text-xs font-medium tracking-wide text-deep-foreground/60 uppercase">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </PageHero>

      {/* Chart: people reached per year */}
      <Section>
        <div className="grid items-end gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Growth"
              title="People reached, year by year"
              description="Our reach has grown steadily as programs deepen and volunteers multiply. Figures shown are demonstration values pending verified reports."
              className="mb-0"
            />
            <Reveal delay={180} className="mt-6">
              <p className="rounded-xl border bg-warm p-4 text-sm leading-relaxed text-muted-foreground">
                These are illustrative demo statistics. They are structured so real,
                verified figures can be connected easily when available.
              </p>
            </Reveal>
          </div>
          <Reveal variant="right">
            <div className="rounded-2xl border bg-card p-6">
              <div className="flex h-52 items-end gap-4 sm:gap-6">
                {impactByYear.map((y, i) => (
                  <div key={y.year} className="flex flex-1 flex-col items-center gap-2">
                    <span className="text-xs font-semibold text-primary">{y.people.toLocaleString()}+</span>
                    <div
                      className="w-full rounded-t-lg bg-gradient-to-t from-primary/70 to-primary transition-all"
                      style={{ height: `${(y.people / maxYear) * 100}%`, transitionDelay: `${i * 100}ms` }}
                    />
                    <span className="text-xs font-medium text-muted-foreground">{y.year}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 border-t pt-3 text-center text-xs text-muted-foreground">
                People supported per year (demo data)
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Program distribution */}
      <Section className="bg-secondary/40">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal variant="left">
            <div className="rounded-2xl border bg-card p-6">
              <h3 className="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                Where our effort goes
              </h3>
              <div className="mt-6 flex flex-col gap-5">
                {programDistribution.map((d, i) => (
                  <div key={d.label}>
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span className="font-medium">{d.label}</span>
                      <span className="text-muted-foreground">{d.value}%</span>
                    </div>
                    <div className="h-2.5 overflow-hidden rounded-full bg-muted">
                      <div
                        className={cn(
                          "h-full rounded-full",
                          i === 0 && "bg-primary",
                          i === 1 && "bg-brand",
                          i === 2 && "bg-deep",
                          i === 3 && "bg-primary/50"
                        )}
                        style={{ width: `${d.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-6 border-t pt-3 text-xs text-muted-foreground">
                Share of program effort by focus area (demo data)
              </p>
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Focus"
              title="Impact across every program"
              className="mb-0"
            />
            <div className="flex flex-col gap-4">
              {programs.map((p, i) => (
                <Reveal key={p.slug} delay={i * 80}>
                  <Link
                    href={`/programs/${p.slug}`}
                    className="group flex items-center gap-4 rounded-2xl border bg-card p-4 transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-14px_rgb(0_0_0/0.15)]"
                  >
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                      <HugeiconsIcon icon={programIcons[p.icon]} strokeWidth={1.8} className="size-5" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-display font-semibold">{p.title}</h3>
                      <p className="truncate text-sm text-muted-foreground">
                        {p.stats[0].value.toLocaleString()}
                        {p.stats[0].suffix} {p.stats[0].label.toLowerCase()}
                      </p>
                    </div>
                    <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Stories */}
      <Section>
        <div className="mb-10 flex items-end justify-between">
          <SectionHeading eyebrow="Human Impact" title="The stories behind the numbers" className="mb-0" />
          <Link href="/stories" className="hidden shrink-0 items-center gap-1.5 text-sm font-semibold text-primary sm:inline-flex">
            All stories
            <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} className="size-4" />
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stories.slice(0, 3).map((s, i) => (
            <Reveal key={s.slug} delay={i * 90}>
              <StoryCard story={s} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Project impact strip */}
      <Section className="bg-warm">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Projects" title="Every project moves the needle" className="mb-0" />
            <Reveal delay={120}>
              <p className="text-base leading-relaxed text-muted-foreground">
                With {projects.length} tracked initiatives across four focus areas, each
                project contributes measurable progress — from students equipped to households
                supported.
              </p>
            </Reveal>
            <Reveal delay={200} className="mt-6">
              <Link href="/projects" className="inline-flex h-11 items-center gap-2 rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
                Explore all projects
                <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} className="size-4" />
              </Link>
            </Reveal>
          </div>
          <div className="grid grid-cols-3 gap-4 text-center">
            {[
              { v: projects.filter((p) => p.status === "Ongoing").length, l: "Ongoing" },
              { v: projects.filter((p) => p.status === "Completed").length, l: "Completed" },
              { v: projects.filter((p) => p.status === "Upcoming").length, l: "Upcoming" },
            ].map((s, i) => (
              <Reveal key={s.l} delay={i * 90} className="rounded-2xl border bg-card p-6">
                <div className="font-display text-3xl font-bold text-primary md:text-4xl">
                  <CountUp value={s.v} />
                </div>
                <p className="mt-1 text-xs font-medium tracking-wide text-muted-foreground uppercase">{s.l}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <CtaSection />
    </>
  )
}
