"use client"

import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  FacebookIcon,
  NewTwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
  Link01Icon,
  Tick02Icon,
} from "@hugeicons/core-free-icons"

export function ShareButtons({ title, path }: { title: string; path: string }) {
  const [copied, setCopied] = React.useState(false)
  const [url, setUrl] = React.useState(path)

  React.useEffect(() => {
    setUrl(`${window.location.origin}${path}`)
  }, [path])

  const share = (network: string) => {
    const encoded = encodeURIComponent(url)
    const text = encodeURIComponent(title)
    const urls: Record<string, string> = {
      whatsapp: `https://wa.me/?text=${text}%20${encoded}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encoded}`,
      x: `https://twitter.com/intent/tweet?text=${text}&url=${encoded}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encoded}`,
    }
    window.open(urls[network], "_blank", "noopener,noreferrer,width=600,height=540")
  }

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard unavailable */
    }
  }

  const btn =
    "flex size-9 items-center justify-center rounded-full border text-muted-foreground transition-colors hover:border-foreground/25 hover:text-foreground"

  return (
    <div className="flex items-center gap-2" aria-label="Share this page">
      <span className="mr-1 text-xs font-semibold tracking-wider text-muted-foreground uppercase">Share</span>
      <button type="button" onClick={() => share("whatsapp")} aria-label="Share on WhatsApp" className={btn}>
        <HugeiconsIcon icon={WhatsappIcon} strokeWidth={1.8} className="size-4" />
      </button>
      <button type="button" onClick={() => share("facebook")} aria-label="Share on Facebook" className={btn}>
        <HugeiconsIcon icon={FacebookIcon} strokeWidth={1.8} className="size-4" />
      </button>
      <button type="button" onClick={() => share("x")} aria-label="Share on X" className={btn}>
        <HugeiconsIcon icon={NewTwitterIcon} strokeWidth={1.8} className="size-4" />
      </button>
      <button type="button" onClick={() => share("linkedin")} aria-label="Share on LinkedIn" className={btn}>
        <HugeiconsIcon icon={LinkedinIcon} strokeWidth={1.8} className="size-4" />
      </button>
      <button type="button" onClick={copy} aria-label="Copy link" className={btn}>
        <HugeiconsIcon icon={copied ? Tick02Icon : Link01Icon} strokeWidth={1.8} className="size-4" />
      </button>
    </div>
  )
}
