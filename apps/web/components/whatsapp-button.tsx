import { HugeiconsIcon } from "@hugeicons/react"
import { WhatsappIcon } from "@hugeicons/core-free-icons"

const WHATSAPP_URL =
  "https://wa.me/255628312926?text=Hello%20Marcesh%20Foundation!%20I%27d%20like%20to%20learn%20more%20about%20your%20work."

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Marcesh Foundation on WhatsApp"
      className="group fixed right-5 bottom-5 z-40 flex items-center gap-2.5 rounded-full bg-[#25D366] py-3 pr-5 pl-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_-8px_rgb(37_211_102/0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_-8px_rgb(37_211_102/0.6)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] sm:right-6 sm:bottom-6"
    >
      <span className="relative flex size-7 items-center justify-center">
        <span
          aria-hidden
          className="animate-pulse-ring absolute inset-0 rounded-full bg-white/40"
        />
        <HugeiconsIcon icon={WhatsappIcon} strokeWidth={1.8} className="relative size-6" />
      </span>
      Chat with us
    </a>
  )
}
