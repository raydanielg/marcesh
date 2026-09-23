"use client"

import * as React from "react"
import Image from "next/image"
import { cn } from "@workspace/ui/lib/utils"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Cancel01Icon,
  ArrowLeft01Icon,
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons"
import { SiteImage } from "./site-image"
import type { GalleryItem } from "@/lib/data/gallery"

const ratios = ["aspect-[4/3]", "aspect-[3/4]", "aspect-square", "aspect-[4/3]", "aspect-[3/4]", "aspect-[16/11]"]

export function GalleryBrowser({
  items,
  categories,
}: {
  items: GalleryItem[]
  categories: string[]
}) {
  const [category, setCategory] = React.useState("All")
  const [openIndex, setOpenIndex] = React.useState<number | null>(null)

  const filtered = items.filter((i) => category === "All" || i.category === category)

  const close = () => setOpenIndex(null)
  const prev = () => setOpenIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length))
  const next = () => setOpenIndex((i) => (i === null ? null : (i + 1) % filtered.length))

  React.useEffect(() => {
    if (openIndex === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
    }
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKey)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openIndex, filtered.length])

  const current = openIndex !== null ? filtered[openIndex] : null

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => {
              setCategory(c)
              setOpenIndex(null)
            }}
            aria-pressed={category === c}
            className={cn(
              "rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
              category === c
                ? "border-primary bg-primary text-primary-foreground"
                : "bg-background text-muted-foreground hover:border-foreground/25 hover:text-foreground"
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3">
        {filtered.map((item, i) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setOpenIndex(i)}
            className="group mb-5 block w-full break-inside-avoid overflow-hidden rounded-2xl text-left transition-all hover:shadow-[0_16px_40px_-16px_rgb(0_0_0/0.2)] focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
            aria-label={`Open image: ${item.image.alt}`}
          >
            <SiteImage
              image={item.image}
              ratio={ratios[i % ratios.length]}
              rounded="rounded-2xl"
              imgClassName="transition-transform duration-500 group-hover:scale-105"
            >
              {item.image.caption && (
                <span className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-black/70 to-transparent p-4 pt-10 text-sm text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {item.image.caption}
                </span>
              )}
            </SiteImage>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.image.alt}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-deep/90 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute top-4 right-4 flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <HugeiconsIcon icon={Cancel01Icon} strokeWidth={2} className="size-5" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              prev()
            }}
            aria-label="Previous image"
            className="absolute left-3 flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-6"
          >
            <HugeiconsIcon icon={ArrowLeft01Icon} strokeWidth={2} className="size-5" />
          </button>
          <figure
            className="max-h-[85vh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            {current.image.src ? (
              <div className="relative mx-auto aspect-[16/10] w-full max-w-4xl overflow-hidden rounded-xl">
                <Image src={current.image.src} alt={current.image.alt} fill className="object-contain" />
              </div>
            ) : (
              <SiteImage image={current.image} ratio="aspect-[16/10]" />
            )}
            <figcaption className="mt-3 text-center text-sm text-white/80">
              {current.image.caption ?? current.image.alt}
              <span className="ml-2 text-white/50">
                {(openIndex ?? 0) + 1} / {filtered.length}
              </span>
            </figcaption>
          </figure>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              next()
            }}
            aria-label="Next image"
            className="absolute right-3 flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6"
          >
            <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} className="size-5" />
          </button>
        </div>
      )}
    </div>
  )
}
