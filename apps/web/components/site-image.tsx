"use client"

import * as React from "react"
import Image from "next/image"
import { cn } from "@workspace/ui/lib/utils"
import { HugeiconsIcon } from "@hugeicons/react"
import { Image01Icon } from "@hugeicons/core-free-icons"
import type { SiteImage } from "@/lib/data/images"

/**
 * Renders a real image when `src` resolves, otherwise a designed
 * placeholder block so every image slot stays intentional while
 * final photography is pending.
 */
export function SiteImage({
  image,
  ratio = "aspect-[4/3]",
  className,
  imgClassName,
  overlay = false,
  priority = false,
  rounded = "rounded-2xl",
  children,
}: {
  image: SiteImage
  ratio?: string
  className?: string
  imgClassName?: string
  overlay?: boolean
  priority?: boolean
  rounded?: string
  children?: React.ReactNode
}) {
  const [failed, setFailed] = React.useState(false)
  const showPlaceholder = !image.src || failed

  return (
    <figure
      className={cn(
        "image-frame relative w-full overflow-hidden",
        ratio,
        rounded,
        className
      )}
    >
      {showPlaceholder ? (
        <div
          aria-label={image.alt}
          role="img"
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-secondary via-warm to-brand-soft"
        >
          <div className="dots-pattern absolute inset-0 text-foreground/6" />
          <span className="relative flex size-12 items-center justify-center rounded-full bg-background/70 text-muted-foreground">
            <HugeiconsIcon icon={Image01Icon} strokeWidth={1.5} className="size-6" />
          </span>
          <span className="relative max-w-[70%] text-center text-xs font-medium tracking-wide text-muted-foreground uppercase">
            {image.alt}
          </span>
        </div>
      ) : (
        <Image
          src={image.src!}
          alt={image.alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 40vw"
          className={cn("object-cover", imgClassName)}
          onError={() => setFailed(true)}
        />
      )}
      {overlay && (
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
        />
      )}
      {children}
      {image.caption && (
        <figcaption className="sr-only">{image.caption}</figcaption>
      )}
    </figure>
  )
}
