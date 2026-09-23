/**
 * Central image registry.
 *
 * To replace a placeholder with a real photo, drop the file into
 * `public/assets/images/` and set `src` to `/assets/images/<file>`.
 * Any entry without `src` renders a designed placeholder block.
 */

export type SiteImage = {
  src?: string
  alt: string
  caption?: string
}

const img = (src: string | undefined, alt: string, caption?: string): SiteImage => ({
  src,
  alt,
  caption,
})

export const images = {
  logo: img("/assets/logo/marcesh-logo.jpeg", "Marcesh Foundation logo"),

  hero: img(
    "/assets/images/certificates.jpeg",
    "Students and Marcesh Foundation volunteers holding certificates at the Restore a Child 2026 event in Kibaha"
  ),
  heroAlt: img(
    "/assets/images/smiles.jpeg",
    "Two smiling Marcesh Foundation volunteers at a community event"
  ),

  about: img(
    "/assets/images/team-banner.jpeg",
    "Marcesh Foundation team members in front of the Restore a Child 2026 banner"
  ),
  aboutSecondary: img(
    "/assets/images/community-portrait.jpeg",
    "A Marcesh Foundation volunteer at a community outreach event"
  ),

  education: img(
    "/assets/images/certificates.jpeg",
    "Students receiving certificates through a Marcesh Foundation education initiative"
  ),
  health: img(undefined, "Community health outreach session"),
  community: img(
    "/assets/images/volunteers.jpeg",
    "Marcesh Foundation volunteers at a community development event"
  ),
  support: img(
    "/assets/images/smiles.jpeg",
    "Smiling community members supported by Marcesh Foundation"
  ),

  team: [
    img("/assets/images/team-banner.jpeg", "Marcesh Foundation team"),
    img("/assets/images/volunteers.jpeg", "Marcesh Foundation volunteers"),
    img("/assets/images/community-portrait.jpeg", "Marcesh Foundation volunteer"),
    img("/assets/images/smiles.jpeg", "Marcesh Foundation volunteers"),
  ],

  cta: img(
    "/assets/images/volunteers.jpeg",
    "Marcesh Foundation volunteers working together"
  ),

  placeholders: {
    project: img(undefined, "Project photo to be replaced"),
    story: img(undefined, "Story photo to be replaced"),
    news: img(undefined, "News photo to be replaced"),
    event: img(undefined, "Event photo to be replaced"),
    person: img(undefined, "Portrait photo to be replaced"),
    gallery: img(undefined, "Gallery photo to be replaced"),
  },
} as const
