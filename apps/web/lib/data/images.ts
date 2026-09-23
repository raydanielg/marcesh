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
    "/assets/images/team-banner.jpeg",
    "Marcesh Foundation team members at the Restore a Child 2026 event in Kibaha"
  ),
  heroAlt: img(
    "/assets/images/certificate-award.jpeg",
    "Marcesh Foundation volunteers holding a certificate of appreciation at Restore a Child 2026"
  ),

  about: img(
    "/assets/images/team-trio.jpeg",
    "Three Marcesh Foundation team members in front of the Restore a Child 2026 banner"
  ),
  aboutSecondary: img(
    "/assets/images/facilitator-smile.jpeg",
    "A smiling Marcesh Foundation facilitator holding a notebook during a community session"
  ),

  education: img(
    "/assets/images/book-distribution.jpeg",
    "Students and volunteers holding learning materials distributed by Marcesh Foundation"
  ),
  health: img(
    "/assets/images/facilitator-ball.jpeg",
    "A Marcesh Foundation facilitator leading a community health awareness session"
  ),
  community: img(
    "/assets/images/students-gathering.jpeg",
    "Schoolchildren gathered for a Marcesh Foundation community event in Kibaha"
  ),
  support: img(
    "/assets/images/donation-supplies.jpeg",
    "Marcesh Foundation volunteers with donated supplies for families in need"
  ),

  team: [
    img("/assets/images/team-banner.jpeg", "Marcesh Foundation team at Restore a Child 2026"),
    img("/assets/images/team-trio.jpeg", "Marcesh Foundation team members"),
    img("/assets/images/volunteer-duo.jpeg", "Marcesh Foundation volunteers at Restore a Child 2026"),
    img("/assets/images/facilitator-smile.jpeg", "A Marcesh Foundation facilitator"),
  ],

  cta: img(
    "/assets/images/students-seated.jpeg",
    "Students seated together at a Marcesh Foundation community gathering"
  ),

  extra: [
    img("/assets/images/students-outdoor.jpeg", "Students gathered outdoors during a Marcesh Foundation event"),
    img("/assets/images/students-gathering-alt.jpeg", "Schoolchildren listening during a Marcesh Foundation session"),
    img("/assets/images/volunteer-duo.jpeg", "Two Marcesh Foundation volunteers celebrating"),
    img("/assets/images/community-portrait.jpeg", "A Marcesh Foundation volunteer at a community event"),
    img("/assets/images/certificates.jpeg", "Certificates presented at Restore a Child 2026"),
  ] as SiteImage[],

  placeholders: {
    project: img(
      "/assets/images/donation-supplies.jpeg",
      "Donated supplies gathered for a Marcesh Foundation project"
    ),
    story: img(
      "/assets/images/facilitator-smile.jpeg",
      "A community member at a Marcesh Foundation outreach event"
    ),
    news: img(
      "/assets/images/team-trio.jpeg",
      "Marcesh Foundation team at the Restore a Child 2026 banner"
    ),
    event: img(
      "/assets/images/students-gathering.jpeg",
      "Students gathered at a Marcesh Foundation community event"
    ),
    person: img(
      "/assets/images/facilitator-ball.jpeg",
      "A Marcesh Foundation facilitator"
    ),
    gallery: img(
      "/assets/images/students-outdoor.jpeg",
      "Students at a Marcesh Foundation event"
    ),
  },
} as const
