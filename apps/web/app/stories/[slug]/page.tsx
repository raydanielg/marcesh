import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowRight01Icon,
  Location01Icon,
  Calendar03Icon,
  QuoteUpIcon,
} from "@hugeicons/core-free-icons"
import { Breadcrumb } from "@/components/page-hero"
import { SectionHeading } from "@/components/section-heading"
import { SiteImage } from "@/components/site-image"
import { Reveal } from "@/components/reveal"
import { Section, Container } from "@/components/decorative"
import { CtaSection } from "@/components/cta-section"
import { StoryCard } from "@/components/cards"
import { ShareButtons } from "@/components/share-buttons"
import { stories, getStory } from "@/lib/data/stories"
import { getProject } from "@/lib/data/projects"
import { formatDate } from "@/lib/format"
import { JsonLd } from "@/components/json-ld"
import { articleSchema, pageMetadata } from "@/lib/seo"

export function generateStaticParams() {
  return stories.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const story = getStory(slug)
  if (!story) return {}
  return pageMetadata({
    title: `${story.title} | Stories | Marcesh Foundation`,
    description: story.excerpt,
    path: `/stories/${story.slug}`,
    image: story.image.src,
    type: "article",
  })
}

export default async function StoryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const story = getStory(slug)
  if (!story) notFound()

  const related = stories.filter((s) => s.slug !== story.slug).slice(0, 3)
  const project = story.relatedProject ? getProject(story.relatedProject) : undefined

  return (
    <>
      <JsonLd
        data={articleSchema({
          headline: story.title,
          description: story.excerpt,
          path: `/stories/${story.slug}`,
          image: story.image.src,
          datePublished: story.date,
        })}
      />
      {/* Editorial hero */}
      <section className="relative">
        <div className="relative h-[52vh] min-h-[380px] w-full overflow-hidden">
          <SiteImage image={story.image} ratio="aspect-auto" className="absolute inset-0" rounded="rounded-none" priority imgClassName="animate-hero-drift" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        </div>
        <Container className="relative">
          <div className="-mt-32 max-w-3xl">
            <Reveal>
              <Breadcrumb
                light
                items={[
                  { label: "Home", href: "/" },
                  { label: "Stories", href: "/stories" },
                  { label: story.title },
                ]}
              />
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-4 flex items-center gap-3 text-sm text-white/80">
                <span className="rounded-full bg-brand px-3 py-1 text-xs font-semibold text-brand-foreground">
                  {story.category}
                </span>
                <span className="flex items-center gap-1.5">
                  <HugeiconsIcon icon={Location01Icon} strokeWidth={2} className="size-4" />
                  {story.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <HugeiconsIcon icon={Calendar03Icon} strokeWidth={2} className="size-4" />
                  {formatDate(story.date)}
                </span>
              </div>
            </Reveal>
            <Reveal delay={220}>
              <h1 className="font-display mt-4 text-3xl leading-tight font-semibold text-balance text-white md:text-5xl">
                {story.title}
              </h1>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Body */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="font-display text-xl leading-relaxed font-medium text-foreground/90 md:text-2xl">
              {story.intro}
            </p>
          </Reveal>
          {story.body.map((para, i) => (
            <Reveal key={i} delay={80}>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                {para}
              </p>
            </Reveal>
          ))}

          {story.quote && (
            <Reveal delay={120}>
              <blockquote className="relative my-10 rounded-2xl bg-warm p-8 md:p-10">
                <HugeiconsIcon icon={QuoteUpIcon} strokeWidth={1.4} className="absolute top-6 left-6 size-8 text-brand/40" />
                <p className="font-display relative text-xl leading-relaxed font-medium text-balance md:text-2xl">
                  “{story.quote.text}”
                </p>
                <cite className="mt-4 block text-sm font-semibold text-muted-foreground not-italic">
                  {story.quote.author}
                </cite>
              </blockquote>
            </Reveal>
          )}

          <Reveal delay={100}>
            <div className="rounded-2xl border border-primary/20 bg-secondary/40 p-6 md:p-8">
              <h2 className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
                The Impact
              </h2>
              <p className="mt-3 text-base leading-relaxed">{story.impact}</p>
            </div>
          </Reveal>

          {project && (
            <Reveal delay={120} className="mt-10">
              <Link
                href={`/projects/${project.slug}`}
                className="group flex items-center justify-between gap-4 rounded-2xl border bg-card p-5 transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-14px_rgb(0_0_0/0.15)]"
              >
                <div>
                  <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                    Related project
                  </span>
                  <h3 className="font-display mt-1 text-lg font-semibold">{project.title}</h3>
                </div>
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} className="size-4" />
                </span>
              </Link>
            </Reveal>
          )}

          <Reveal delay={140} className="mt-10 border-t pt-6">
            <ShareButtons title={story.title} path={`/stories/${story.slug}`} />
          </Reveal>
        </div>
      </Section>

      {/* Related stories */}
      <Section className="bg-secondary/40">
        <SectionHeading eyebrow="Keep Reading" title="More stories of change" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((s) => (
            <StoryCard key={s.slug} story={s} />
          ))}
        </div>
      </Section>

      <CtaSection />
    </>
  )
}
