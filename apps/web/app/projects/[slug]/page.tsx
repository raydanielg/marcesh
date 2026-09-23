import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { cn } from "@workspace/ui/lib/utils"
import { buttonVariants } from "@workspace/ui/components/button"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Location01Icon,
  Calendar03Icon,
  Tick02Icon,
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons"
import { PageHero } from "@/components/page-hero"
import { SectionHeading } from "@/components/section-heading"
import { SiteImage } from "@/components/site-image"
import { Reveal } from "@/components/reveal"
import { Section, Container } from "@/components/decorative"
import { CtaSection } from "@/components/cta-section"
import { ProjectCard, StatusBadge } from "@/components/cards"
import { projects, getProject } from "@/lib/data/projects"
import { formatDate, formatDateShort } from "@/lib/format"

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return {}
  return { title: project.title, description: project.summary }
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const related = projects.filter((p) => p.slug !== project.slug && p.category === project.category).slice(0, 3)
  const relatedFallback = related.length ? related : projects.filter((p) => p.slug !== project.slug).slice(0, 3)

  return (
    <>
      <PageHero
        variant="image"
        image={project.image}
        eyebrow={project.category}
        title={project.title}
        description={project.summary}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: project.title },
        ]}
      >
        <div className="flex flex-wrap items-center gap-4 text-sm text-white/80">
          <StatusBadge status={project.status} className="bg-white/15 text-white backdrop-blur-sm [&>span]:bg-white" />
          <span className="flex items-center gap-1.5">
            <HugeiconsIcon icon={Location01Icon} strokeWidth={2} className="size-4" />
            {project.location}
          </span>
          <span className="flex items-center gap-1.5">
            <HugeiconsIcon icon={Calendar03Icon} strokeWidth={2} className="size-4" />
            {formatDate(project.date)}
          </span>
        </div>
      </PageHero>

      {/* Overview */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
          <div className="lg:col-span-2">
            <SectionHeading eyebrow="Overview" title="About this project" className="mb-0" />
            {project.overview.map((p, i) => (
              <Reveal key={i} delay={100 + i * 80}>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{p}</p>
              </Reveal>
            ))}

            <Reveal delay={200} className="mt-10">
              <h3 className="font-display text-xl font-semibold">Objectives</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {project.objectives.map((o) => (
                  <li key={o} className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <HugeiconsIcon icon={Tick02Icon} strokeWidth={2.4} className="size-3" />
                    </span>
                    <span className="text-sm leading-relaxed">{o}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={260} className="mt-10">
              <h3 className="font-display text-xl font-semibold">Activities</h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {project.activities.map((a) => (
                  <li key={a} className="rounded-xl border bg-card p-4 text-sm leading-relaxed">
                    {a}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Sidebar: timeline */}
          <Reveal variant="right">
            <aside className="rounded-2xl border bg-card p-6 lg:sticky lg:top-24">
              <h3 className="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                Project timeline
              </h3>
              <ol className="mt-6 flex flex-col">
                {project.timeline.map((t, i) => (
                  <li key={t.label} className="relative flex gap-4 pb-6 last:pb-0">
                    {i < project.timeline.length - 1 && (
                      <span aria-hidden className="absolute top-6 left-[9px] h-full w-px bg-border" />
                    )}
                    <span
                      className={cn(
                        "relative z-10 mt-1 size-[19px] shrink-0 rounded-full border-2",
                        t.done ? "border-primary bg-primary" : "border-border bg-background"
                      )}
                    >
                      {t.done && (
                        <HugeiconsIcon icon={Tick02Icon} strokeWidth={3} className="absolute inset-0 m-auto size-2.5 text-primary-foreground" />
                      )}
                    </span>
                    <div>
                      <p className={cn("text-sm font-medium", !t.done && "text-muted-foreground")}>{t.label}</p>
                      <p className="text-xs text-muted-foreground">{formatDateShort(t.date)}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </aside>
          </Reveal>
        </div>
      </Section>

      {/* Impact + gallery */}
      <Section className="bg-secondary/40">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading eyebrow="Impact" title="What this project achieves" className="mb-0" />
            <Reveal delay={120}>
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">{project.impact}</p>
            </Reveal>
            {project.updates.length > 0 && (
              <Reveal delay={200} className="mt-8">
                <h3 className="font-display text-lg font-semibold">Latest updates</h3>
                <ul className="mt-4 flex flex-col gap-4">
                  {project.updates.map((u) => (
                    <li key={u.title} className="rounded-xl border bg-card p-4">
                      <p className="text-xs font-semibold tracking-wide text-brand uppercase">{formatDateShort(u.date)}</p>
                      <h4 className="mt-1.5 text-sm font-semibold">{u.title}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{u.body}</p>
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}
          </div>
          <div>
            <SectionHeading eyebrow="Gallery" title="From the field" className="mb-8" />
            <div className="grid grid-cols-2 gap-4">
              {project.gallery.map((g, i) => (
                <Reveal key={i} delay={i * 70} className={cn(i === 0 && "col-span-2")}>
                  <SiteImage image={g} ratio={i === 0 ? "aspect-[16/9]" : "aspect-[4/3]"} rounded="rounded-xl" />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Related projects */}
      <Section>
        <div className="mb-8 flex items-end justify-between">
          <SectionHeading eyebrow="Related" title="More projects to explore" className="mb-0" />
          <Link href="/projects" className={cn(buttonVariants({ variant: "ghost" }), "shrink-0 text-primary")}>
            All projects
            <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} className="size-4" />
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {relatedFallback.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </Section>

      <CtaSection />
    </>
  )
}
