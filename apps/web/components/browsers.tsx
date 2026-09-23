"use client"

import * as React from "react"
import { cn } from "@workspace/ui/lib/utils"
import { Input } from "@workspace/ui/components/input"
import { HugeiconsIcon } from "@hugeicons/react"
import { SearchIcon, Cancel01Icon } from "@hugeicons/core-free-icons"
import { ProjectCard, NewsCard, EventCard, StoryCard } from "./cards"
import { EmptyState } from "./empty-state"
import type { Project } from "@/lib/data/projects"
import type { NewsArticle } from "@/lib/data/news"
import type { EventItem } from "@/lib/data/events"
import type { Story } from "@/lib/data/stories"

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "bg-background text-muted-foreground hover:border-foreground/25 hover:text-foreground"
      )}
    >
      {children}
    </button>
  )
}

function SearchBox({
  value,
  onChange,
  placeholder,
}: {
  value: string
  onChange: (v: string) => void
  placeholder: string
}) {
  return (
    <div className="relative w-full sm:max-w-xs">
      <HugeiconsIcon
        icon={SearchIcon}
        strokeWidth={2}
        className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
      />
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="h-10 pl-9"
        aria-label={placeholder}
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          aria-label="Clear search"
          className="absolute top-1/2 right-2 flex size-6 items-center justify-center rounded-md text-muted-foreground hover:bg-muted"
        >
          <HugeiconsIcon icon={Cancel01Icon} strokeWidth={2} className="size-3.5" />
        </button>
      )}
    </div>
  )
}

const PAGE_SIZE = 6

export function ProjectsBrowser({ projects }: { projects: Project[] }) {
  const [category, setCategory] = React.useState<string>("All")
  const [status, setStatus] = React.useState<string>("All")
  const [query, setQuery] = React.useState("")
  const [visible, setVisible] = React.useState(PAGE_SIZE)

  const categories = ["All", ...new Set(projects.map((p) => p.category))]
  const statuses = ["All", ...new Set(projects.map((p) => p.status))]

  const filtered = projects.filter(
    (p) =>
      (category === "All" || p.category === category) &&
      (status === "All" || p.status === status) &&
      (query === "" ||
        `${p.title} ${p.summary} ${p.location}`.toLowerCase().includes(query.toLowerCase()))
  )

  const reset = () => {
    setCategory("All")
    setStatus("All")
    setQuery("")
    setVisible(PAGE_SIZE)
  }

  React.useEffect(() => setVisible(PAGE_SIZE), [category, status, query])

  return (
    <div>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <Chip key={c} active={category === c} onClick={() => setCategory(c)}>
              {c}
            </Chip>
          ))}
        </div>
        <SearchBox value={query} onChange={setQuery} placeholder="Search projects…" />
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">Status:</span>
        {statuses.map((s) => (
          <Chip key={s} active={status === s} onClick={() => setStatus(s)}>
            {s}
          </Chip>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="mt-10">
          <EmptyState title="No projects found" onReset={reset} />
        </div>
      ) : (
        <>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.slice(0, visible).map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
          {visible < filtered.length && (
            <div className="mt-10 text-center">
              <button
                type="button"
                onClick={() => setVisible((v) => v + PAGE_SIZE)}
                className="inline-flex h-10 items-center rounded-lg border px-6 text-sm font-medium transition-colors hover:bg-muted"
              >
                Load More Projects
              </button>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export function NewsBrowser({ articles }: { articles: NewsArticle[] }) {
  const [category, setCategory] = React.useState("All")
  const [query, setQuery] = React.useState("")
  const [visible, setVisible] = React.useState(PAGE_SIZE)

  const categories = ["All", ...new Set(articles.map((a) => a.category))]
  const filtered = articles.filter(
    (a) =>
      (category === "All" || a.category === category) &&
      (query === "" || `${a.title} ${a.excerpt}`.toLowerCase().includes(query.toLowerCase()))
  )

  React.useEffect(() => setVisible(PAGE_SIZE), [category, query])

  const reset = () => {
    setCategory("All")
    setQuery("")
  }

  return (
    <div>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <Chip key={c} active={category === c} onClick={() => setCategory(c)}>
              {c}
            </Chip>
          ))}
        </div>
        <SearchBox value={query} onChange={setQuery} placeholder="Search news…" />
      </div>

      {filtered.length === 0 ? (
        <div className="mt-10">
          <EmptyState title="No news found" onReset={reset} />
        </div>
      ) : (
        <>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.slice(0, visible).map((a) => (
              <NewsCard key={a.slug} article={a} />
            ))}
          </div>
          {visible < filtered.length && (
            <div className="mt-10 text-center">
              <button
                type="button"
                onClick={() => setVisible((v) => v + PAGE_SIZE)}
                className="inline-flex h-10 items-center rounded-lg border px-6 text-sm font-medium transition-colors hover:bg-muted"
              >
                Load More Articles
              </button>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export function EventsBrowser({ events }: { events: EventItem[] }) {
  const [tab, setTab] = React.useState<"upcoming" | "past">("upcoming")

  const upcoming = events.filter((e) => !e.past)
  const past = events.filter((e) => e.past)
  const list = tab === "upcoming" ? upcoming : past

  return (
    <div>
      <div className="inline-flex rounded-full border bg-muted/60 p-1">
        {(["upcoming", "past"] as const).map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            aria-pressed={tab === t}
            className={cn(
              "rounded-full px-5 py-1.5 text-sm font-medium capitalize transition-colors",
              tab === t ? "bg-background shadow-sm" : "text-muted-foreground hover:text-foreground"
            )}
          >
            {t === "upcoming" ? "Upcoming Events" : "Past Events"}
          </button>
        ))}
      </div>

      {list.length === 0 ? (
        <div className="mt-10">
          <EmptyState title="No events found" onReset={undefined} />
        </div>
      ) : (
        <div className="mt-8 grid gap-6">
          {list.map((e) => (
            <EventCard key={e.slug} event={e} />
          ))}
        </div>
      )}
    </div>
  )
}

export function StoriesBrowser({ stories }: { stories: Story[] }) {
  const [query, setQuery] = React.useState("")
  const filtered = stories.filter(
    (s) =>
      query === "" ||
      `${s.title} ${s.excerpt} ${s.location} ${s.category}`.toLowerCase().includes(query.toLowerCase())
  )
  return (
    <div>
      <div className="flex justify-end">
        <SearchBox value={query} onChange={setQuery} placeholder="Search stories…" />
      </div>
      {filtered.length === 0 ? (
        <div className="mt-10">
          <EmptyState title="No stories found" onReset={() => setQuery("")} resetLabel="Clear search" />
        </div>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((s) => (
            <StoryCard key={s.slug} story={s} />
          ))}
        </div>
      )}
    </div>
  )
}
