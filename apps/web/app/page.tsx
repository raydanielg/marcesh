import Link from "next/link"
import { buttonVariants } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowRight01Icon,
  ArrowUpRight01Icon,
  SchoolIcon,
  StethoscopeIcon,
  UserGroupIcon,
  HandHelpingIcon,
  QuoteUpIcon,
  Location01Icon,
} from "@hugeicons/core-free-icons"
import { SiteImage } from "@/components/site-image"
import { Reveal } from "@/components/reveal"
import { CountUp } from "@/components/count-up"
import { SectionHeading } from "@/components/section-heading"
import { Section, Container, DotsField, SoftBlob } from "@/components/decorative"
import { CtaSection } from "@/components/cta-section"
import { ProjectCard, StoryCard, NewsCard } from "@/components/cards"
import { site } from "@/lib/data/site"
import { images } from "@/lib/data/images"
import { stats } from "@/lib/data/stats"
import { programs } from "@/lib/data/programs"
import { projects } from "@/lib/data/projects"
import { stories } from "@/lib/data/stories"
import { news } from "@/lib/data/news"
import { events } from "@/lib/data/events"
import { formatDateShort } from "@/lib/format"

const programIcons = {
  education: SchoolIcon,
  health: StethoscopeIcon,
  community: UserGroupIcon,
  support: HandHelpingIcon,
} as const

export default function HomePage() {
  const featured = projects.find((p) => p.featured) ?? projects[0]!
  const featuredStory = stories[0]!
  const upcoming = events.filter((e) => !e.past).slice(0, 2)

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative flex min-h-[88vh] items-end overflow-hidden md:min-h-[85vh]">
        <div className="absolute inset-0">
          <SiteImage
            image={images.hero}
            ratio="aspect-auto"
            className="absolute inset-0"
            rounded="rounded-none"
            imgClassName="animate-hero-drift"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-deep/95 via-deep/55 to-deep/25" />
        <Container className="relative pb-16 md:pb-24">
          <div className="max-w-3xl">
            <Reveal variant="fade" delay={150}>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-[0.16em] text-white uppercase backdrop-blur-sm">
                <span className="size-1.5 rounded-full bg-brand" />
                {site.tagline}
              </span>
            </Reveal>
            <Reveal delay={300}>
              <h1 className="font-display mt-6 text-4xl leading-[1.08] font-semibold text-balance text-white sm:text-5xl lg:text-6xl">
                Creating a Healthier, More Educated and Prosperous Society.
              </h1>
            </Reveal>
            <Reveal delay={440}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
                {site.description}
              </p>
            </Reveal>
            <Reveal delay={560} className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/donate"
                className={cn(buttonVariants({ size: "lg" }), "h-12 bg-brand px-6 text-brand-foreground hover:bg-brand/90")}
              >
                Support Our Mission
              </Link>
              <Link
                href="/projects"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-12 border-white/25 bg-transparent px-6 text-white hover:bg-white/10 hover:text-white"
                )}
              >
                Explore Our Work
                <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} className="size-4" />
              </Link>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── Impact statistics ────────────────────────────────── */}
      <section className="border-b bg-warm">
        <Container className="grid grid-cols-2 divide-x divide-border/60 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90} className="px-4 py-8 text-center md:py-12">
              <div className="font-display text-3xl font-bold text-primary md:text-5xl">
                <CountUp value={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-1.5 text-xs font-medium tracking-wide text-muted-foreground uppercase md:text-sm">
                {s.label}
              </p>
            </Reveal>
          ))}
        </Container>
      </section>

      {/* ── About preview ────────────────────────────────────── */}
      <Section className="relative overflow-hidden">
        <DotsField className="top-10 right-0 hidden h-48 w-64 lg:block" />
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal variant="left" className="relative">
            <SiteImage image={images.about} ratio="aspect-[4/3]" rounded="rounded-3xl" />
            <SiteImage
              image={images.aboutSecondary}
              ratio="aspect-[3/4]"
              className="absolute -right-4 -bottom-8 hidden w-40 ring-8 ring-background sm:block md:w-52"
              rounded="rounded-2xl"
            />
          </Reveal>
          <div>
            <Reveal>
              <span className="text-xs font-semibold tracking-[0.18em] text-brand uppercase">Who We Are</span>
              <h2 className="font-display mt-3 text-3xl leading-tight font-semibold text-balance md:text-4xl">
                An instrument of change, rooted in community.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                Based in {site.location}, {site.name} works alongside communities to expand
                access to education, improve health outcomes and support those most in need —
                building a society where everyone has a fair chance to thrive.
              </p>
            </Reveal>
            <Reveal delay={220} className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border bg-card p-4">
                <h3 className="text-sm font-semibold text-primary">Our Vision</h3>
                <p className="mt-1.5 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{site.vision}</p>
              </div>
              <div className="rounded-xl border bg-card p-4">
                <h3 className="text-sm font-semibold text-primary">Our Mission</h3>
                <p className="mt-1.5 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{site.mission}</p>
              </div>
            </Reveal>
            <Reveal delay={320} className="mt-8">
              <Link href="/about" className={cn(buttonVariants({ variant: "outline", size: "lg" }))}>
                Learn More About Us
                <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} className="size-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ── Focus areas ──────────────────────────────────────── */}
      <Section className="relative bg-secondary/50">
        <SectionHeading
          eyebrow="What We Do"
          title="Four areas. One purpose."
          description="Every initiative at Marcesh Foundation flows through four connected focus areas — each one strengthening the others."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((p, i) => (
            <Reveal key={p.slug} delay={i * 100}>
              <Link
                href={`/programs/${p.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_44px_-18px_rgb(0_0_0/0.2)]"
              >
                <div className="relative overflow-hidden">
                  <SiteImage image={p.image} ratio="aspect-[16/10]" rounded="rounded-none" imgClassName="transition-transform duration-500 group-hover:scale-105" />
                  <span className="absolute bottom-3 left-3 flex size-10 items-center justify-center rounded-xl bg-background/90 text-primary shadow-sm backdrop-blur-sm">
                    <HugeiconsIcon icon={programIcons[p.icon]} strokeWidth={1.8} className="size-5" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                  <p className="mt-1.5 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                  <span className="mt-auto flex items-center gap-1 pt-4 text-sm font-medium text-primary">
                    Learn more
                    <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── Featured projects ────────────────────────────────── */}
      <Section>
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6 md:mb-14">
          <SectionHeading
            eyebrow="Our Work"
            title="Projects making a difference"
            className="mb-0"
          />
          <Reveal delay={150}>
            <Link href="/projects" className={cn(buttonVariants({ variant: "ghost" }), "text-primary")}>
              View all projects
              <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} className="size-4" />
            </Link>
          </Reveal>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          <Reveal variant="left" className="lg:col-span-1">
            <Link
              href={`/projects/${featured.slug}`}
              className="group relative flex h-full min-h-[320px] flex-col justify-end overflow-hidden rounded-3xl"
            >
              <div className="absolute inset-0">
                <SiteImage image={featured.image} ratio="aspect-auto" className="absolute inset-0" rounded="rounded-none" imgClassName="transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-deep/90 via-deep/40 to-transparent" />
              <div className="relative p-6">
                <span className="rounded-full bg-brand px-3 py-1 text-xs font-semibold text-brand-foreground">
                  Featured Project
                </span>
                <h3 className="font-display mt-3 text-2xl font-semibold text-balance text-white">
                  {featured.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-white/75">{featured.summary}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-white">
                  View Project
                  <HugeiconsIcon icon={ArrowUpRight01Icon} strokeWidth={2} className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-2">
            {projects
              .filter((p) => p.slug !== featured.slug)
              .slice(0, 4)
              .map((p, i) => (
                <Reveal key={p.slug} delay={i * 100}>
                  <ProjectCard project={p} />
                </Reveal>
              ))}
          </div>
        </div>
      </Section>

      {/* ── Impact story feature ─────────────────────────────── */}
      <Section className="relative overflow-hidden bg-deep py-20 text-deep-foreground md:py-28">
        <DotsField className="top-8 left-8 h-40 w-56 text-white/8" />
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <span className="text-xs font-semibold tracking-[0.18em] text-brand uppercase">Story of Change</span>
              <h2 className="font-display mt-4 text-3xl leading-tight font-semibold text-balance text-white md:text-4xl">
                {featuredStory.title}
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-5 text-base leading-relaxed text-deep-foreground/75 md:text-lg">
                {featuredStory.intro}
              </p>
            </Reveal>
            {featuredStory.quote && (
              <Reveal delay={240}>
                <blockquote className="mt-7 border-l-2 border-brand pl-5">
                  <p className="font-display text-lg leading-relaxed text-white/90 italic md:text-xl">
                    “{featuredStory.quote.text}”
                  </p>
                  <cite className="mt-2 block text-sm font-medium text-deep-foreground/60 not-italic">
                    — {featuredStory.quote.author}
                  </cite>
                </blockquote>
              </Reveal>
            )}
            <Reveal delay={340} className="mt-8 flex flex-wrap gap-3">
              <Link href={`/stories/${featuredStory.slug}`} className={cn(buttonVariants({ size: "lg" }), "bg-brand text-brand-foreground hover:bg-brand/90")}>
                Read the Full Story
              </Link>
              <Link href="/stories" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white")}>
                More Stories
              </Link>
            </Reveal>
          </div>
          <Reveal variant="right" className="relative">
            <SiteImage image={featuredStory.image} ratio="aspect-[4/3]" rounded="rounded-3xl" />
            <span className="absolute -top-4 -left-4 flex size-14 items-center justify-center rounded-2xl bg-brand text-brand-foreground shadow-lg">
              <HugeiconsIcon icon={QuoteUpIcon} strokeWidth={1.6} className="size-6" />
            </span>
          </Reveal>
        </div>
      </Section>

      {/* ── Programs editorial list ──────────────────────────── */}
      <Section>
        <SectionHeading
          eyebrow="Programs"
          title="Where our work lives"
          description="Long-term programs carry our mission forward — explore each area and the projects within it."
        />
        <div className="flex flex-col divide-y overflow-hidden rounded-2xl border">
          {programs.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80} variant="fade">
              <Link
                href={`/programs/${p.slug}`}
                className="group grid items-center gap-4 p-5 transition-colors hover:bg-secondary/50 md:grid-cols-[auto_1fr_auto] md:gap-8 md:p-7"
              >
                <div className="flex items-center gap-5">
                  <span className="font-display w-10 text-3xl font-bold text-muted-foreground/50 transition-colors group-hover:text-brand">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex size-11 items-center justify-center rounded-xl bg-secondary text-primary">
                    <HugeiconsIcon icon={programIcons[p.icon]} strokeWidth={1.8} className="size-5" />
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.tagline}</p>
                </div>
                <span className="flex items-center gap-1.5 text-sm font-medium text-primary">
                  Explore
                  <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── Community message ────────────────────────────────── */}
      <Section className="relative overflow-hidden bg-warm">
        <SoftBlob className="-top-20 right-1/4 size-80" />
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="inline-flex size-12 items-center justify-center rounded-full bg-brand text-brand-foreground">
              <HugeiconsIcon icon={QuoteUpIcon} strokeWidth={1.6} className="size-5" />
            </span>
          </Reveal>
          <Reveal delay={140}>
            <p className="font-display mt-6 text-2xl leading-relaxed font-medium text-balance md:text-3xl">
              “{site.vision}”
            </p>
          </Reveal>
          <Reveal delay={260}>
            <p className="mt-6 text-sm font-semibold tracking-[0.18em] text-muted-foreground uppercase">
              Our Vision — {site.name}
            </p>
          </Reveal>
        </div>
      </Section>

      {/* ── Get involved ─────────────────────────────────────── */}
      <Section>
        <SectionHeading
          eyebrow="Get Involved"
          title="Choose how you'll make a difference"
          description="Whether you give, volunteer or partner — your contribution becomes someone's opportunity."
        />
        <div className="grid gap-6 md:grid-cols-3">
          <Reveal>
            <Link href="/donate" className="group flex h-full flex-col justify-between rounded-2xl bg-primary p-6 text-primary-foreground transition-all hover:-translate-y-1 hover:shadow-[0_18px_44px_-18px_rgb(30_90_60/0.5)]">
              <div>
                <h3 className="font-display text-xl font-semibold">Donate</h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/80">
                  Fuel education, health and community initiatives with a contribution of any size.
                </p>
              </div>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold">
                Give today
                <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </Reveal>
          <Reveal delay={120}>
            <Link href="/volunteer" className="group flex h-full flex-col justify-between rounded-2xl bg-brand p-6 text-brand-foreground transition-all hover:-translate-y-1 hover:shadow-[0_18px_44px_-18px_rgb(200_120_30/0.5)]">
              <div>
                <h3 className="font-display text-xl font-semibold">Volunteer</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-foreground/80">
                  Offer your time and skills — join the volunteers powering our community work.
                </p>
              </div>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold">
                Join us
                <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </Reveal>
          <Reveal delay={240}>
            <Link href="/partner" className="group flex h-full flex-col justify-between rounded-2xl border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-[0_18px_44px_-18px_rgb(0_0_0/0.2)]">
              <div>
                <h3 className="font-display text-xl font-semibold">Partner With Us</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Organisations and institutions — let's build something lasting together.
                </p>
              </div>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                Start a conversation
                <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </Reveal>
        </div>
      </Section>

      {/* ── News & events ────────────────────────────────────── */}
      <Section className="bg-secondary/40">
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-10">
          <div className="lg:col-span-2">
            <div className="mb-8 flex items-end justify-between">
              <SectionHeading eyebrow="Latest" title="News & updates" className="mb-0" />
              <Link href="/news" className={cn(buttonVariants({ variant: "ghost" }), "hidden shrink-0 text-primary sm:inline-flex")}>
                All news
                <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} className="size-4" />
              </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {news.slice(0, 2).map((a, i) => (
                <Reveal key={a.slug} delay={i * 120}>
                  <NewsCard article={a} />
                </Reveal>
              ))}
            </div>
          </div>
          <div>
            <div className="mb-8 flex items-end justify-between">
              <SectionHeading eyebrow="Join Us" title="Upcoming events" className="mb-0" />
              <Link href="/events" className={cn(buttonVariants({ variant: "ghost" }), "hidden shrink-0 text-primary sm:inline-flex")}>
                All events
              </Link>
            </div>
            <ul className="flex flex-col gap-4">
              {upcoming.map((e, i) => {
                const d = new Date(e.date)
                return (
                  <Reveal key={e.slug} delay={i * 120}>
                    <Link
                      href={`/events/${e.slug}`}
                      className="group flex items-center gap-4 rounded-2xl border bg-card p-4 transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-14px_rgb(0_0_0/0.15)]"
                    >
                      <div className="flex w-14 shrink-0 flex-col items-center rounded-xl bg-secondary py-2.5">
                        <span className="font-display text-2xl leading-none font-bold text-secondary-foreground">{d.getDate()}</span>
                        <span className="mt-1 text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">
                          {d.toLocaleDateString("en-GB", { month: "short" })}
                        </span>
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-display truncate font-semibold">{e.title}</h3>
                        <p className="mt-0.5 flex items-center gap-1.5 text-xs text-muted-foreground">
                          <HugeiconsIcon icon={Location01Icon} strokeWidth={2} className="size-3.5" />
                          {e.location} · {formatDateShort(e.date)}
                        </p>
                      </div>
                      <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} className="ml-auto size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </Reveal>
                )
              })}
            </ul>
          </div>
        </div>
      </Section>

      {/* ── Stories teaser ───────────────────────────────────── */}
      <Section>
        <div className="mb-10 flex items-end justify-between md:mb-14">
          <SectionHeading eyebrow="Stories of Change" title="Real people. Real progress." className="mb-0" />
          <Reveal delay={150}>
            <Link href="/stories" className={cn(buttonVariants({ variant: "ghost" }), "shrink-0 text-primary")}>
              All stories
              <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} className="size-4" />
            </Link>
          </Reveal>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stories.slice(0, 4).map((s, i) => (
            <Reveal key={s.slug} delay={i * 90}>
              <StoryCard story={s} />
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaSection />
    </>
  )
}
