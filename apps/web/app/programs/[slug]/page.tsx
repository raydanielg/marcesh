import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowRight01Icon,
  SchoolIcon,
  StethoscopeIcon,
  UserGroupIcon,
  HandHelpingIcon,
  Tick02Icon,
} from "@hugeicons/core-free-icons"
import { PageHero } from "@/components/page-hero"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { CountUp } from "@/components/count-up"
import { Section } from "@/components/decorative"
import { CtaSection } from "@/components/cta-section"
import { ProjectCard } from "@/components/cards"
import { programs, getProgram } from "@/lib/data/programs"
import { projects } from "@/lib/data/projects"
import { pageMetadata } from "@/lib/seo"

const programIcons = {
  education: SchoolIcon,
  health: StethoscopeIcon,
  community: UserGroupIcon,
  support: HandHelpingIcon,
} as const

const categoryMap: Record<string, string> = {
  education: "Education",
  health: "Health",
  "community-development": "Community",
  "support-for-the-needy": "Support",
}

export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const program = getProgram(slug)
  if (!program) return {}
  return pageMetadata({
    title: `${program.title} Program | Marcesh Foundation`,
    description: program.description,
    path: `/programs/${program.slug}`,
  })
}

export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const program = getProgram(slug)
  if (!program) notFound()

  const related = projects
    .filter((p) => p.category === categoryMap[program.slug])
    .slice(0, 3)
  const others = programs.filter((p) => p.slug !== program.slug)

  return (
    <>
      <PageHero
        variant="image"
        image={program.image}
        eyebrow="Our Programs"
        title={program.title}
        description={program.tagline}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Programs", href: "/programs" },
          { label: program.title },
        ]}
      />

      {/* Overview + stats */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-3 lg:gap-16">
          <div className="lg:col-span-2">
            <SectionHeading eyebrow="Overview" title={`About the ${program.title} program`} className="mb-0" />
            {program.longDescription.map((para, i) => (
              <Reveal key={i} delay={100 + i * 80}>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{para}</p>
              </Reveal>
            ))}
          </div>
          <Reveal variant="right">
            <div className="rounded-2xl border bg-card p-6">
              <h3 className="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                Program at a glance
              </h3>
              <div className="mt-5 flex flex-col gap-5">
                {program.stats.map((s) => (
                  <div key={s.label} className="flex items-baseline justify-between border-b pb-4 last:border-0 last:pb-0">
                    <span className="text-sm text-muted-foreground">{s.label}</span>
                    <span className="font-display text-2xl font-bold text-primary">
                      <CountUp value={s.value} suffix={s.suffix} />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Objectives + activities */}
      <Section className="bg-secondary/40">
        <div className="grid gap-10 md:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading eyebrow="Objectives" title="What we're aiming for" className="mb-0" />
            <ul className="flex flex-col gap-3">
              {program.objectives.map((o, i) => (
                <Reveal key={o} delay={i * 60} as="li">
                  <div className="flex items-start gap-3 rounded-xl border bg-card p-4">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <HugeiconsIcon icon={Tick02Icon} strokeWidth={2.4} className="size-3" />
                    </span>
                    <span className="text-sm leading-relaxed">{o}</span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Activities" title="How we do it" className="mb-0" />
            <ol className="flex flex-col gap-3">
              {program.activities.map((a, i) => (
                <Reveal key={a} delay={i * 60} as="li">
                  <div className="flex items-start gap-4 rounded-xl border bg-card p-4">
                    <span className="font-display flex size-7 shrink-0 items-center justify-center rounded-lg bg-secondary text-sm font-bold text-secondary-foreground">
                      {i + 1}
                    </span>
                    <span className="pt-1 text-sm leading-relaxed">{a}</span>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      {/* Impact statement */}
      <Section className="relative overflow-hidden bg-deep py-16 text-deep-foreground md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-brand text-brand-foreground">
              <HugeiconsIcon icon={programIcons[program.icon]} strokeWidth={1.8} className="size-6" />
            </span>
          </Reveal>
          <Reveal delay={140}>
            <p className="font-display mt-6 text-xl leading-relaxed font-medium text-balance text-white md:text-2xl">
              {program.impact}
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Related projects */}
      {related.length > 0 && (
        <Section>
          <SectionHeading
            eyebrow="In the Field"
            title={`${program.title} projects`}
            description="Active and completed projects within this program area."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p, i) => (
              <Reveal key={p.slug} delay={i * 90}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {/* Other programs */}
      <Section className="bg-warm">
        <SectionHeading eyebrow="Keep Exploring" title="Our other programs" className="mb-8" />
        <div className="grid gap-4 sm:grid-cols-3">
          {others.map((p) => (
            <Link
              key={p.slug}
              href={`/programs/${p.slug}`}
              className="group flex items-center gap-4 rounded-2xl border bg-card p-5 transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-14px_rgb(0_0_0/0.15)]"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                <HugeiconsIcon icon={programIcons[p.icon]} strokeWidth={1.8} className="size-5" />
              </span>
              <div className="min-w-0">
                <h3 className="font-display truncate font-semibold">{p.title}</h3>
                <p className="truncate text-xs text-muted-foreground">{p.tagline}</p>
              </div>
              <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} className="ml-auto size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
            </Link>
          ))}
        </div>
      </Section>

      <CtaSection />
    </>
  )
}
