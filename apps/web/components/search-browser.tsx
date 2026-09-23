"use client"

import * as React from "react"
import Link from "next/link"
import { Input } from "@workspace/ui/components/input"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  SearchIcon,
  Cancel01Icon,
  ArrowUpRight01Icon,
  Location01Icon,
  Calendar03Icon,
} from "@hugeicons/core-free-icons"
import { SiteImage } from "./site-image"
import { EmptyState } from "./empty-state"
import type { SiteImage as SiteImageType } from "@/lib/data/images"

export type SearchEntry = {
  type: "Project" | "News" | "Story" | "Event"
  title: string
  excerpt: string
  href: string
  meta: string
  image: SiteImageType
}

export function SearchBrowser({ entries }: { entries: SearchEntry[] }) {
  const [query, setQuery] = React.useState("")

  const results =
    query.trim().length < 2
      ? []
      : entries.filter((e) =>
          `${e.title} ${e.excerpt} ${e.type} ${e.meta}`.toLowerCase().includes(query.toLowerCase())
        )

  return (
    <div className="mx-auto max-w-3xl">
      <div className="relative">
        <HugeiconsIcon
          icon={SearchIcon}
          strokeWidth={2}
          className="absolute top-1/2 left-4 size-5 -translate-y-1/2 text-muted-foreground"
        />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search projects, news, stories and events…"
          aria-label="Search the site"
          autoFocus
          className="h-14 rounded-2xl pl-12 text-base shadow-[0_8px_30px_-12px_rgb(0_0_0/0.15)]"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery("")}
            aria-label="Clear search"
            className="absolute top-1/2 right-3 flex size-8 items-center justify-center rounded-md text-muted-foreground hover:bg-muted"
          >
            <HugeiconsIcon icon={Cancel01Icon} strokeWidth={2} className="size-4" />
          </button>
        )}
      </div>

      <div className="mt-8">
        {query.trim().length < 2 ? (
          <p className="py-10 text-center text-sm text-muted-foreground">
            Type at least 2 characters to search across projects, news, stories and events.
          </p>
        ) : results.length === 0 ? (
          <EmptyState
            title="No results found"
            description={`Nothing matches "${query}". Try different keywords.`}
            onReset={() => setQuery("")}
            resetLabel="Clear search"
          />
        ) : (
          <>
            <p className="mb-4 text-sm text-muted-foreground">
              {results.length} result{results.length === 1 ? "" : "s"} for “{query}”
            </p>
            <ul className="flex flex-col gap-3">
              {results.map((r, i) => (
                <li key={i}>
                  <Link
                    href={r.href}
                    className="group flex items-center gap-4 rounded-2xl border p-3 transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-14px_rgb(0_0_0/0.18)]"
                  >
                    <SiteImage image={r.image} ratio="aspect-square" className="w-16 shrink-0" rounded="rounded-xl" />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 text-xs">
                        <span className="font-semibold text-brand">{r.type}</span>
                        <span className="flex items-center gap-1 text-muted-foreground">
                          {r.type === "Event" || r.type === "News" ? (
                            <HugeiconsIcon icon={Calendar03Icon} strokeWidth={2} className="size-3" />
                          ) : (
                            <HugeiconsIcon icon={Location01Icon} strokeWidth={2} className="size-3" />
                          )}
                          {r.type === "Event" || r.type === "News" ? r.meta : r.meta}
                        </span>
                      </div>
                      <h3 className="font-display mt-1 truncate font-semibold">{r.title}</h3>
                      <p className="mt-0.5 line-clamp-1 text-sm text-muted-foreground">{r.excerpt}</p>
                    </div>
                    <HugeiconsIcon
                      icon={ArrowUpRight01Icon}
                      strokeWidth={2}
                      className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  )
}
