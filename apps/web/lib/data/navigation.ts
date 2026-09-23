export type NavItem = { label: string; href: string; description?: string }

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Projects", href: "/projects" },
  { label: "Impact", href: "/impact" },
]

export const discoverNav: NavItem[] = [
  { label: "Stories", href: "/stories", description: "Stories of change from our communities" },
  { label: "Gallery", href: "/gallery", description: "Moments from our work in the field" },
  { label: "Get Involved", href: "/get-involved", description: "Donate, volunteer or partner with us" },
  { label: "Contact", href: "/contact", description: "Reach out. We'd love to hear from you" },
]

export const footerNav = {
  quickLinks: [
    { label: "About", href: "/about" },
    { label: "Programs", href: "/programs" },
    { label: "Projects", href: "/projects" },
    { label: "Impact", href: "/impact" },
    { label: "Stories", href: "/stories" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ],
  getInvolved: [
    { label: "Donate", href: "/donate" },
    { label: "Volunteer", href: "/volunteer" },
    { label: "Partner With Us", href: "/partner" },
    { label: "Get Involved", href: "/get-involved" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
  ],
}
