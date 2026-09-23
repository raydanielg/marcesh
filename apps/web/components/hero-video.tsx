"use client"

import * as React from "react"
import Image from "next/image"
import { cn } from "@workspace/ui/lib/utils"

function useMotionAllowed() {
  return React.useSyncExternalStore(
    (onChange) => {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
      mq.addEventListener("change", onChange)
      return () => mq.removeEventListener("change", onChange)
    },
    () => !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false
  )
}

/**
 * Hero background video — autoplays muted, loops, no sound or controls.
 * Falls back to the poster image when the video can't play, and stays
 * as a static image for users who prefer reduced motion.
 */
export function HeroVideo({
  src,
  poster,
  className,
}: {
  src: string
  poster: string
  className?: string
}) {
  const enabled = useMotionAllowed()
  const [ready, setReady] = React.useState(false)

  if (!enabled) {
    return (
      <Image
        src={poster}
        alt=""
        fill
        priority
        sizes="100vw"
        className={cn("object-cover", className)}
      />
    )
  }

  return (
    <video
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      ref={(el) => {
        if (el) el.playbackRate = 0.7
      }}
      disablePictureInPicture
      aria-hidden="true"
      tabIndex={-1}
      onCanPlay={() => setReady(true)}
      className={cn(
        "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
        ready ? "opacity-100" : "opacity-0",
        className
      )}
    />
  )
}
