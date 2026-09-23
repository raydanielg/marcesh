import { images, type SiteImage } from "./images"

export type EventItem = {
  slug: string
  title: string
  date: string
  time: string
  location: string
  description: string
  program: string[]
  organizer: string
  image: SiteImage
  past: boolean
}

export const events: EventItem[] = [
  {
    slug: "community-volunteer-day-2026",
    title: "Community Volunteer Day",
    date: "2026-10-17",
    time: "8:00 AM – 1:00 PM",
    location: "Kibaha Town Centre, Pwani",
    description:
      "Join volunteers from across the region for a morning of community service — outreach visits, neighbourhood activities and a shared lunch.",
    program: [
      "8:00 AM — Volunteer check-in and briefing",
      "8:30 AM — Outreach teams depart to assigned areas",
      "11:30 AM — Regroup and community activities",
      "12:30 PM — Shared lunch and closing reflections",
    ],
    organizer: "Marcesh Foundation Volunteer Team",
    image: images.community,
    past: false,
  },
  {
    slug: "education-fundraising-dinner",
    title: "Education Support Fundraising Dinner",
    date: "2026-11-21",
    time: "6:00 PM – 9:30 PM",
    location: "Kibaha, Pwani",
    description:
      "An evening bringing together supporters, partners and community leaders to raise funds for the foundation's education programs.",
    program: [
      "6:00 PM — Reception and welcome",
      "6:45 PM — Program presentation: education impact",
      "7:30 PM — Dinner and guest remarks",
      "9:00 PM — Pledges and closing",
    ],
    organizer: "Marcesh Foundation",
    image: images.placeholders.event,
    past: false,
  },
  {
    slug: "youth-mentorship-launch",
    title: "Youth Mentorship Program Launch",
    date: "2027-01-15",
    time: "10:00 AM – 2:00 PM",
    location: "Kibaha, Pwani",
    description:
      "The official launch of our youth mentorship program — meet the mentors, learn about the program and register interest.",
    program: [
      "10:00 AM — Opening remarks",
      "10:30 AM — Program overview and mentor introductions",
      "11:30 AM — Q&A and registration",
      "1:00 PM — Networking and refreshments",
    ],
    organizer: "Marcesh Foundation Education Team",
    image: images.team[1],
    past: false,
  },
  {
    slug: "restore-a-child-2026-ceremony",
    title: "Restore a Child 2026 Certificate Ceremony",
    date: "2026-09-15",
    time: "9:00 AM – 2:00 PM",
    location: "Kibaha, Pwani",
    description:
      "A celebration of student resilience — certificates, learning materials and community pledges under the Restore a Child 2026 campaign.",
    program: [
      "9:00 AM — Arrival and registration",
      "9:30 AM — Opening and welcome",
      "10:00 AM — Certificate awards",
      "12:00 PM — Community pledge wall",
      "1:00 PM — Refreshments",
    ],
    organizer: "Marcesh Foundation",
    image: images.education,
    past: true,
  },
  {
    slug: "health-awareness-day-2026",
    title: "Community Health Awareness Day",
    date: "2026-06-10",
    time: "8:30 AM – 12:30 PM",
    location: "Kibaha Town, Pwani",
    description:
      "A neighbourhood awareness day with health education sessions, household visits and service referrals.",
    program: [
      "8:30 AM — Volunteer briefing",
      "9:00 AM — Community sessions begin",
      "11:00 AM — Household visits",
      "12:30 PM — Debrief",
    ],
    organizer: "Marcesh Foundation Health Team",
    image: images.health,
    past: true,
  },
]

export function getEvent(slug: string) {
  return events.find((e) => e.slug === slug)
}
