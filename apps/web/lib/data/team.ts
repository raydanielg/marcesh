import { images, type SiteImage } from "./images"

export type TeamMember = {
  name: string
  role: string
  bio: string
  image: SiteImage
  socials: { label: string; href: string }[]
}

/**
 * Placeholder team members — replace with real leadership details.
 */
export const team: TeamMember[] = [
  {
    name: "Team Member One",
    role: "Founder & Executive Director",
    bio: "Leads the foundation's vision, partnerships and overall strategy across education, health and community programs.",
    image: images.about,
    socials: [
      { label: "LinkedIn", href: "https://linkedin.com" },
      { label: "Email", href: "mailto:marceshfoundation@gmail.com" },
    ],
  },
  {
    name: "Team Member Two",
    role: "Programs Coordinator",
    bio: "Coordinates day-to-day delivery of education, health and community initiatives across the Pwani region.",
    image: images.community,
    socials: [{ label: "Email", href: "mailto:marceshfoundation@gmail.com" }],
  },
  {
    name: "Team Member Three",
    role: "Volunteer & Outreach Lead",
    bio: "Mobilises and supports the volunteer network that powers the foundation's community work.",
    image: images.aboutSecondary,
    socials: [{ label: "Email", href: "mailto:marceshfoundation@gmail.com" }],
  },
  {
    name: "Team Member Four",
    role: "Finance & Administration",
    bio: "Oversees stewardship of resources, administration and organisational accountability.",
    image: images.support,
    socials: [{ label: "Email", href: "mailto:marceshfoundation@gmail.com" }],
  },
]
