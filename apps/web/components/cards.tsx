import Link from "next/link"
import { cn } from "@workspace/ui/lib/utils"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowRight01Icon,
  ArrowUpRight01Icon,
  Calendar03Icon,
  Location01Icon,
} from "@hugeicons/core-free-icons"
import { SiteImage } from "./site-image"
import { formatDateShort } from "@/lib/format"
import type { Project } from "@/lib/data/projects"
import type { Story } from "@/lib/data/stories"
import type { NewsArticle } from "@/lib/data/news"
import type { EventItem } from "@/lib/data/events"
import type { TeamMember } from "@/lib/data/team"

export function StatusBadge({ status, className }: { status: string; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold",
        status === "Ongoing" && "bg-primary/10 text-primary",
        status === "Completed" && "bg-muted text-muted-foreground",
        status === "Upcoming" && "bg-brand-soft text-brand",
        className
      )}
    >
      <span
        className={cn(
          "size-1.5 rounded-full",
          status === "Ongoing" && "bg-primary",
          status === "Completed" && "bg-muted-foreground",
          status === "Upcoming" && "bg-brand"
        )}
      />
      {status}
    </span>
  )
}

const cardClass =
  "group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_-16px_rgb(0_0_0/0.18)]"

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className={cardClass}>
      <div className="relative overflow-hidden">
        <SiteImage
          image={project.image}
          ratio="aspect-[16/10]"
          rounded="rounded-none"
          imgClassName="transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <StatusBadge status={project.status} className="bg-background/90 backdrop-blur-sm" />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-3 text-xs font-medium text-muted-foreground">
          <span className="text-brand">{project.category}</span>
          <span aria-hidden>•</span>
          <span>{formatDateShort(project.date)}</span>
        </div>
        <h3 className="font-display mt-2.5 text-lg leading-snug font-semibold text-balance">
          {project.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {project.summary}
        </p>
        <div className="mt-4 flex items-center justify-between border-t pt-4">
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <HugeiconsIcon icon={Location01Icon} strokeWidth={2} className="size-3.5" />
            {project.location}
          </span>
          <span className="flex items-center gap-1 text-sm font-medium text-primary">
            View Project
            <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} className="size-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  )
}

export function StoryCard({ story }: { story: Story }) {
  return (
    <Link href={`/stories/${story.slug}`} className={cardClass}>
      <div className="relative overflow-hidden">
        <SiteImage
          image={story.image}
          ratio="aspect-[4/3]"
          rounded="rounded-none"
          imgClassName="transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-3 text-xs font-medium text-muted-foreground">
          <span className="text-brand">{story.category}</span>
          <span aria-hidden>•</span>
          <span className="flex items-center gap-1">
            <HugeiconsIcon icon={Location01Icon} strokeWidth={2} className="size-3" />
            {story.location}
          </span>
        </div>
        <h3 className="font-display mt-2.5 text-lg leading-snug font-semibold text-balance">
          {story.title}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {story.excerpt}
        </p>
        <span className="mt-auto flex items-center gap-1 pt-4 text-sm font-medium text-primary">
          Read Story
          <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} className="size-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  )
}

export function NewsCard({ article }: { article: NewsArticle }) {
  return (
    <Link href={`/news/${article.slug}`} className={cardClass}>
      <div className="relative overflow-hidden">
        <SiteImage
          image={article.image}
          ratio="aspect-[16/9]"
          rounded="rounded-none"
          imgClassName="transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-3 text-xs font-medium text-muted-foreground">
          <span className="rounded-full bg-secondary px-2.5 py-0.5 text-secondary-foreground">
            {article.category}
          </span>
          <span className="flex items-center gap-1">
            <HugeiconsIcon icon={Calendar03Icon} strokeWidth={2} className="size-3" />
            {formatDateShort(article.date)}
          </span>
        </div>
        <h3 className="font-display mt-3 text-lg leading-snug font-semibold text-balance">
          {article.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {article.excerpt}
        </p>
        <span className="mt-auto flex items-center gap-1 pt-4 text-sm font-medium text-primary">
          Read More
          <HugeiconsIcon icon={ArrowUpRight01Icon} strokeWidth={2} className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  )
}

export function EventCard({ event }: { event: EventItem }) {
  const d = new Date(event.date)
  return (
    <Link href={`/events/${event.slug}`} className={cn(cardClass, "md:flex-row")}>
      <div className="relative shrink-0 overflow-hidden md:w-56">
        <SiteImage
          image={event.image}
          ratio="aspect-[16/10] md:aspect-auto md:h-full"
          rounded="rounded-none"
          className="md:absolute md:inset-0"
          imgClassName="transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 gap-5 p-5">
        <div className="hidden w-14 shrink-0 flex-col items-center justify-center rounded-xl bg-secondary py-3 text-center sm:flex">
          <span className="font-display text-2xl leading-none font-bold text-secondary-foreground">
            {d.getDate()}
          </span>
          <span className="mt-1 text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">
            {d.toLocaleDateString("en-GB", { month: "short" })}
          </span>
        </div>
        <div className="min-w-0 flex-1">
          <span className={cn("text-xs font-semibold", event.past ? "text-muted-foreground" : "text-brand")}>
            {event.past ? "Past Event" : "Upcoming"}
          </span>
          <h3 className="font-display mt-1.5 text-lg leading-snug font-semibold text-balance">
            {event.title}
          </h3>
          <p className="mt-1.5 line-clamp-2 text-sm text-muted-foreground">{event.description}</p>
          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <HugeiconsIcon icon={Calendar03Icon} strokeWidth={2} className="size-3.5" />
              {formatDateShort(event.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <HugeiconsIcon icon={Location01Icon} strokeWidth={2} className="size-3.5" />
              {event.location}
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border bg-card">
      <div className="relative overflow-hidden">
        <SiteImage
          image={member.image}
          ratio="aspect-[4/5]"
          rounded="rounded-none"
          imgClassName="transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-semibold">{member.name}</h3>
        <p className="mt-0.5 text-sm font-medium text-brand">{member.role}</p>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
        <div className="mt-4 flex gap-3 border-t pt-4">
          {member.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="text-xs font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
