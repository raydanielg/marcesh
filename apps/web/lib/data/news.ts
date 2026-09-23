import { images, type SiteImage } from "./images"

export type NewsArticle = {
  slug: string
  title: string
  category: string
  date: string
  author: string
  excerpt: string
  image: SiteImage
  body: string[]
  featured?: boolean
}

export const news: NewsArticle[] = [
  {
    slug: "restore-a-child-2026-ceremony",
    title: "Restore a Child 2026 Celebrates Student Resilience in Kibaha",
    category: "Events",
    date: "2026-09-15",
    author: "Marcesh Foundation",
    featured: true,
    excerpt:
      "Students, families and volunteers gathered to honour resilience in education at this year's Restore a Child certificate ceremony.",
    image: images.education,
    body: [
      "Marcesh Foundation hosted the Restore a Child 2026 certificate ceremony in Kibaha, bringing together students, parents, teachers and community members to celebrate resilience in education.",
      "The event recognised students who have overcome significant challenges to stay in school, awarding certificates and learning materials to support their continued journey.",
      "Community members left handwritten pledges of support on the event's signature wall — a visible promise that no child in the community walks alone.",
      "The foundation thanks all volunteers, partner schools and supporters who made the day possible, and invites the public to follow the campaign's progress through the year.",
    ],
  },
  {
    slug: "health-outreach-launches",
    title: "Community Health Outreach Begins in Kibaha Neighbourhoods",
    category: "Programs",
    date: "2026-06-10",
    author: "Marcesh Foundation",
    excerpt:
      "Volunteers have begun visiting neighbourhoods across Kibaha with practical health information and service referrals.",
    image: images.health,
    body: [
      "Marcesh Foundation's Community Health Outreach project is now underway, with trained volunteers visiting households across Kibaha.",
      "The outreach focuses on preventive health awareness, connecting families with local services and answering everyday health questions in plain language.",
      "Further outreach days are planned through the year. Residents interested in supporting the effort can reach the foundation through the Get Involved page.",
    ],
  },
  {
    slug: "volunteer-training-day",
    title: "New Volunteers Complete Orientation and Training Day",
    category: "Community",
    date: "2026-04-05",
    author: "Marcesh Foundation",
    excerpt:
      "Twenty-five new volunteers joined the foundation's orientation day, preparing to support education, health and community initiatives.",
    image: images.about,
    body: [
      "Twenty-five new volunteers completed Marcesh Foundation's orientation and training day, covering safeguarding, community engagement and program basics.",
      "The cohort will support upcoming initiatives across education, health and community development.",
      "Volunteer recruitment remains open — anyone in the Pwani region interested in joining can apply through the Volunteer page.",
    ],
  },
  {
    slug: "school-supplies-distribution",
    title: "School Supplies Reach Students Ahead of New Term",
    category: "Education",
    date: "2025-11-20",
    author: "Marcesh Foundation",
    excerpt:
      "Over 300 students received books, stationery and uniforms through the annual school supplies drive.",
    image: images.placeholders.news,
    body: [
      "Marcesh Foundation completed its annual school supplies distribution, reaching more than 300 students across Tumbi and Kibaha.",
      "The drive, supported by community donations and volunteer teams, provided books, stationery and uniform support ahead of the new term.",
      "The foundation thanks every household that contributed — proof that community generosity remains the engine of its work.",
    ],
  },
  {
    slug: "partnership-announcement",
    title: "Marcesh Foundation Welcomes New Community Partnerships",
    category: "Partnerships",
    date: "2025-09-02",
    author: "Marcesh Foundation",
    excerpt:
      "Local organisations and schools have joined the foundation's partner network to strengthen education and health initiatives.",
    image: images.placeholders.news,
    body: [
      "Marcesh Foundation is pleased to announce new partnerships with local schools and community organisations across the Pwani region.",
      "The partnerships will support joint initiatives in education support, health awareness and community development.",
      "Organisations interested in partnering with the foundation can learn more on the Partner page.",
    ],
  },
]

export const newsCategories = ["All", "Events", "Programs", "Education", "Community", "Partnerships"] as const

export function getArticle(slug: string) {
  return news.find((n) => n.slug === slug)
}
