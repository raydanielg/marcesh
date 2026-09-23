export type NavItem = { label: string; href: string }

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Projects", href: "/projects" },
  { label: "Impact", href: "/impact" },
  { label: "Stories", href: "/stories" },
  { label: "News", href: "/news" },
  { label: "Events", href: "/events" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Contact", href: "/contact" },
]

export const footerNav = {
  quickLinks: [
    { label: "About", href: "/about" },
    { label: "Programs", href: "/programs" },
    { label: "Projects", href: "/projects" },
    { label: "Impact", href: "/impact" },
    { label: "Stories", href: "/stories" },
    { label: "News", href: "/news" },
    { label: "Events", href: "/events" },
    { label: "Gallery", href: "/gallery" },
    { label: "Our Team", href: "/team" },
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
