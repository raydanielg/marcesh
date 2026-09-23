"use client"

import * as React from "react"
import { cn } from "@workspace/ui/lib/utils"

type RevealVariant = "fade" | "up" | "down" | "left" | "right" | "scale"

const variantClass: Record<RevealVariant, string> = {
  fade: "reveal-fade",
  up: "reveal-up",
  down: "reveal-down",
  left: "reveal-left",
  right: "reveal-right",
  scale: "reveal-scale",
}

export function Reveal({
  children,
  variant = "up",
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: React.ReactNode
  variant?: RevealVariant
  delay?: number
  className?: string
  as?: "div" | "section" | "article" | "li" | "span" | "figure"
}) {
  const ref = React.useRef<HTMLElement | null>(null)

  React.useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("reveal-visible")
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible")
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      className={cn("reveal", variantClass[variant], className)}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  )
}
