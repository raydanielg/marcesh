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
      className="group fixed right-4 bottom-4 z-40 flex items-center gap-2 rounded-full bg-[#25D366] py-2.5 pr-4 pl-3 text-sm font-semibold text-white shadow-[0_4px_14px_rgb(0_0_0/0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1eb85a] hover:shadow-[0_8px_20px_rgb(0_0_0/0.2)] active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] sm:right-6 sm:bottom-6 sm:gap-2.5 sm:py-3 sm:pr-5 sm:pl-3.5"
    >
      <HugeiconsIcon icon={WhatsappIcon} strokeWidth={1.8} className="size-5 sm:size-6" />
      <span>Chat with us</span>
    </a>
  )
}
