import type { Metadata } from "next"
import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowUpRight01Icon, Location01Icon } from "@hugeicons/core-free-icons"
import { PageHero } from "@/components/page-hero"
import { SiteImage } from "@/components/site-image"
import { Reveal } from "@/components/reveal"
import { Section } from "@/components/decorative"
import { ProjectsBrowser } from "@/components/browsers"
import { CtaSection } from "@/components/cta-section"
import { StatusBadge } from "@/components/cards"
import { projects } from "@/lib/data/projects"
import { formatDateShort } from "@/lib/format"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "Projects & Community Initiatives | Marcesh Foundation",
  description:
    "Browse Marcesh Foundation's ongoing, completed and upcoming projects in education, health, community development and support for vulnerable communities in Kibaha, Pwani.",
  path: "/projects",
})

export default function ProjectsPage() {
  const featured = projects.find((p) => p.featured) ?? projects[0]!

  return (
    <>
      <PageHero
        eyebrow="Our Projects"
        title="Work happening right now"
        description="From classroom support to health outreach, explore the initiatives our volunteers and partners bring to life."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Projects" }]}
      />

      {/* Featured project */}
      <Section className="pt-14">
        <Reveal>
          <Link
            href={`/projects/${featured.slug}`}
            className="group relative grid overflow-hidden rounded-3xl border md:grid-cols-2"
          >
            <div className="relative min-h-64 overflow-hidden">
              <SiteImage
                image={featured.image}
                ratio="aspect-[16/10] md:aspect-auto md:h-full"
                rounded="rounded-none"
                className="md:absolute md:inset-0"
                imgClassName="transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <div className="flex flex-col justify-center gap-4 p-6 md:p-10">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-brand px-3 py-1 text-xs font-semibold text-brand-foreground">
                  Featured
                </span>
                <StatusBadge status={featured.status} />
                <span className="text-xs text-muted-foreground">{formatDateShort(featured.date)}</span>
              </div>
              <h2 className="font-display text-2xl leading-tight font-semibold text-balance md:text-3xl">
                {featured.title}
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">{featured.summary}</p>
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <HugeiconsIcon icon={Location01Icon} strokeWidth={2} className="size-4" />
                {featured.location}
              </div>
              <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                View Project
                <HugeiconsIcon icon={ArrowUpRight01Icon} strokeWidth={2} className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </Link>
        </Reveal>
      </Section>

      <Section className="pt-0">
        <ProjectsBrowser projects={projects} />
      </Section>

      <CtaSection />
    </>
  )
}
