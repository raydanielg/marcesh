import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { HugeiconsIcon } from "@hugeicons/react"
import { Calendar03Icon, User02Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons"
import { PageHero, Breadcrumb } from "@/components/page-hero"
import { SectionHeading } from "@/components/section-heading"
import { SiteImage } from "@/components/site-image"
import { Reveal } from "@/components/reveal"
import { Section, Container } from "@/components/decorative"
import { CtaSection } from "@/components/cta-section"
import { NewsCard } from "@/components/cards"
import { ShareButtons } from "@/components/share-buttons"
import { news, getArticle } from "@/lib/data/news"
import { formatDate } from "@/lib/format"

export function generateStaticParams() {
  return news.map((n) => ({ slug: n.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) return {}
  return { title: article.title, description: article.excerpt }
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) notFound()

  const related = news.filter((n) => n.slug !== article.slug).slice(0, 3)

  return (
    <>
      <section className="bg-warm pt-28 pb-10">
        <Container>
          <Reveal>
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "News", href: "/news" },
                { label: article.title },
              ]}
            />
          </Reveal>
          <div className="mx-auto mt-8 max-w-3xl">
            <Reveal delay={100}>
              <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                  {article.category}
                </span>
                <span className="flex items-center gap-1.5">
                  <HugeiconsIcon icon={Calendar03Icon} strokeWidth={2} className="size-4" />
                  {formatDate(article.date)}
                </span>
                <span className="flex items-center gap-1.5">
                  <HugeiconsIcon icon={User02Icon} strokeWidth={2} className="size-4" />
                  {article.author}
                </span>
              </div>
            </Reveal>
            <Reveal delay={180}>
              <h1 className="font-display mt-4 text-3xl leading-tight font-semibold text-balance md:text-5xl">
                {article.title}
              </h1>
            </Reveal>
          </div>
        </Container>
      </section>

      <Section className="pt-10">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <SiteImage image={article.image} ratio="aspect-[16/9]" rounded="rounded-2xl" priority />
          </Reveal>
          <Reveal delay={100}>
            <p className="font-display mt-8 text-xl leading-relaxed font-medium text-foreground/90">
              {article.excerpt}
            </p>
          </Reveal>
          {article.body.map((para, i) => (
            <Reveal key={i} delay={60}>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">{para}</p>
            </Reveal>
          ))}
          <Reveal delay={100} className="mt-10 border-t pt-6">
            <ShareButtons title={article.title} path={`/news/${article.slug}`} />
          </Reveal>
        </div>
      </Section>

      <Section className="bg-secondary/40">
        <div className="mb-8 flex items-end justify-between">
          <SectionHeading eyebrow="Related" title="More from the foundation" className="mb-0" />
          <Link href="/news" className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-primary">
            All news
            <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} className="size-4" />
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((n) => (
            <NewsCard key={n.slug} article={n} />
          ))}
        </div>
      </Section>

      <CtaSection />
    </>
  )
}
