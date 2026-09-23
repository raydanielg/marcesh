import { images, type SiteImage } from "./images"

export type Story = {
  slug: string
  title: string
  excerpt: string
  location: string
  category: string
  date: string
  image: SiteImage
  intro: string
  body: string[]
  quote?: { text: string; author: string }
  impact: string
  relatedProject?: string
}

export const stories: Story[] = [
  {
    slug: "amani-back-to-school",
    title: "Amani's Second Chance at School",
    excerpt:
      "After nearly dropping out, Amani found the support she needed through Restore a Child, and now dreams of becoming a teacher.",
    location: "Kibaha, Pwani",
    category: "Education",
    date: "2026-09-15",
    image: images.support,
    intro:
      "When Amani's family struggled to afford school supplies, staying in class became a daily uncertainty. A community initiative changed that.",
    body: [
      "Amani is fifteen and loves mathematics. But last year, the cost of uniforms, books and exam fees nearly pushed her out of school entirely.",
      "Through the Restore a Child initiative, she received the materials she needed, and just as importantly, a community that told her she belonged in the classroom.",
      "Today she mentors younger students herself, passing forward the same encouragement that carried her through.",
    ],
    quote: {
      text: "They didn't just give me books. They gave me a reason to keep going.",
      author: "Amani, student",
    },
    impact:
      "Amani is now ranked among the top students in her class and volunteers at community education days.",
    relatedProject: "restore-a-child-2026",
  },
  {
    slug: "mama-neema-empowerment",
    title: "How Mama Neema Built Her Own Business",
    excerpt:
      "A women's empowerment workshop gave Neema the skills and confidence to turn her cooking into a livelihood.",
    location: "Kibaha Town",
    category: "Community",
    date: "2026-06-30",
    image: images.aboutSecondary,
    intro:
      "Neema always knew how to cook. What she needed was a path and a community that believed in her.",
    body: [
      "For years Neema sold snacks informally, earning just enough to get by. Through Marcesh Foundation's women empowerment workshops, she learned basic business skills: pricing, saving and planning ahead.",
      "With guidance from her peer group, she formalised her small food business and now supplies two local shops.",
    ],
    quote: {
      text: "The workshop showed me that what I already knew had value. I just needed to organise it.",
      author: "Mama Neema, workshop participant",
    },
    impact:
      "Neema's business now supports her household of five, and she mentors two other women starting their own ventures.",
    relatedProject: "women-empowerment-workshops",
  },
  {
    slug: "juma-health-champion",
    title: "Juma, the Neighbourhood Health Champion",
    excerpt:
      "What started as a volunteer visit turned Juma into a trusted health voice in his neighbourhood.",
    location: "Mlandizi, Pwani",
    category: "Health",
    date: "2026-05-22",
    image: images.community,
    intro:
      "Juma joined a health outreach day as a volunteer. Today his neighbours come to him first with questions.",
    body: [
      "During the Community Health Outreach project, Juma helped translate health information into plain language his neighbours could use.",
      "He kept showing up, every visit day, every awareness session, until 'ask Juma' became common advice on his street.",
    ],
    quote: {
      text: "People trust people they know. I just make sure the right information reaches them.",
      author: "Juma, volunteer",
    },
    impact:
      "Juma has connected more than forty households with local health services through referrals and follow-ups.",
    relatedProject: "community-health-outreach",
  },
  {
    slug: "classroom-that-community-built",
    title: "The Classroom a Community Built Together",
    excerpt:
      "When a school's storage room became a study space, it was neighbours, not budgets, that made it happen.",
    location: "Tumbi, Kibaha",
    category: "Community",
    date: "2025-11-20",
    image: images.about,
    intro:
      "A dusty storage room, a few weekends of volunteer work, and a community that refused to wait for permission to help.",
    body: [
      "A partner school needed quiet study space for students preparing for exams. There was no budget for construction, but there was a community.",
      "Volunteers cleared, repaired and repainted a storage room over three weekends. Local shops donated paint and materials.",
    ],
    quote: {
      text: "Nobody waited for a big donation. Everyone brought what they had, and it was enough.",
      author: "School committee member",
    },
    impact:
      "The room now hosts evening study sessions for over sixty exam-year students.",
    relatedProject: "school-supplies-drive",
  },
]

export function getStory(slug: string) {
  return stories.find((s) => s.slug === slug)
}
