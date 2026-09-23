import { images, type SiteImage } from "./images"

export type ProjectCategory = "Education" | "Health" | "Community" | "Support"
export type ProjectStatus = "Ongoing" | "Completed" | "Upcoming"

export type ProjectUpdate = { date: string; title: string; body: string }
export type TimelineStep = { label: string; date: string; done: boolean }

export type Project = {
  slug: string
  title: string
  category: ProjectCategory
  status: ProjectStatus
  location: string
  date: string
  year: number
  summary: string
  overview: string[]
  objectives: string[]
  activities: string[]
  impact: string
  image: SiteImage
  gallery: SiteImage[]
  timeline: TimelineStep[]
  updates: ProjectUpdate[]
  featured?: boolean
}

export const projects: Project[] = [
  {
    slug: "restore-a-child-2026",
    title: "Restore a Child 2026",
    category: "Education",
    status: "Ongoing",
    location: "Kibaha, Pwani",
    date: "2026-09-15",
    year: 2026,
    featured: true,
    summary:
      "A flagship education initiative recognising and supporting vulnerable students with certificates, learning materials and mentorship.",
    overview: [
      "Restore a Child 2026 is Marcesh Foundation's flagship education campaign — a community-wide effort to keep vulnerable children in school and remind them that their dreams matter.",
      "Through certificate ceremonies, learning material support and mentorship, the initiative celebrates progress while addressing the practical barriers students face every day.",
    ],
    objectives: [
      "Recognise and encourage students overcoming hardship.",
      "Provide learning materials to vulnerable students.",
      "Strengthen the bond between schools, families and community.",
      "Inspire a culture that protects every child's right to learn.",
    ],
    activities: [
      "Certificate ceremonies recognising student resilience.",
      "Distribution of books, stationery and school supplies.",
      "Mentorship sessions with volunteers and local leaders.",
      "Community pledge walls where residents commit to supporting children.",
    ],
    impact:
      "Hundreds of students have been recognised and supported through the campaign, with schools reporting renewed motivation and stronger community engagement.",
    image: images.education,
    gallery: [images.education, images.team[0], images.team[3], images.aboutSecondary],
    timeline: [
      { label: "Planning", date: "2026-03-02", done: true },
      { label: "Launch", date: "2026-05-20", done: true },
      { label: "Implementation", date: "2026-07-01", done: true },
      { label: "Community engagement", date: "2026-09-15", done: true },
      { label: "Progress review", date: "2026-12-10", done: false },
      { label: "Completion", date: "2027-02-28", done: false },
    ],
    updates: [
      {
        date: "2026-09-15",
        title: "Certificate ceremony held in Kibaha",
        body: "Students, families and volunteers gathered to celebrate resilience in education and award certificates to outstanding learners.",
      },
      {
        date: "2026-07-01",
        title: "Learning materials delivered to partner schools",
        body: "Books, stationery and classroom supplies were distributed to partner schools across the district.",
      },
    ],
  },
  {
    slug: "community-health-outreach",
    title: "Community Health Outreach",
    category: "Health",
    status: "Ongoing",
    location: "Kibaha Town, Pwani",
    date: "2026-06-10",
    year: 2026,
    summary:
      "Bringing health awareness and essential information directly to neighbourhoods through outreach days and education sessions.",
    overview: [
      "The Community Health Outreach project brings practical health knowledge to people's doorsteps — focusing on prevention, early action and connecting families with local services.",
    ],
    objectives: [
      "Raise awareness of preventable health issues.",
      "Connect families with local health services.",
      "Promote healthy practices at household level.",
    ],
    activities: [
      "Neighbourhood health awareness days.",
      "Household visits with trained volunteers.",
      "Referrals to local clinics and health workers.",
    ],
    impact:
      "Outreach days have reached hundreds of residents with practical health information and referrals.",
    image: images.health,
    gallery: [images.health, images.aboutSecondary],
    timeline: [
      { label: "Planning", date: "2026-02-10", done: true },
      { label: "Launch", date: "2026-04-05", done: true },
      { label: "Implementation", date: "2026-06-10", done: true },
      { label: "Community engagement", date: "2026-10-01", done: false },
      { label: "Progress review", date: "2027-01-15", done: false },
      { label: "Completion", date: "2027-03-30", done: false },
    ],
    updates: [
      {
        date: "2026-06-10",
        title: "First outreach day completed",
        body: "Volunteers visited three neighbourhoods, sharing health information and connecting families with local services.",
      },
    ],
  },
  {
    slug: "school-supplies-drive",
    title: "School Supplies Drive",
    category: "Education",
    status: "Completed",
    location: "Tumbi, Kibaha",
    date: "2025-11-20",
    year: 2025,
    summary:
      "A district-wide drive that equipped students with books, uniforms and stationery ahead of the school year.",
    overview: [
      "Ahead of the school year, Marcesh Foundation mobilised volunteers and partners to collect and distribute essential school supplies to students who needed them most.",
    ],
    objectives: [
      "Equip vulnerable students with essential school supplies.",
      "Reduce cost barriers that keep children out of school.",
    ],
    activities: [
      "Community collection points for donated supplies.",
      "Sorting and packaging with volunteer teams.",
      "Distribution days at partner schools.",
    ],
    impact:
      "Over 300 students started the school year with the materials they needed to learn with confidence.",
    image: images.placeholders.project,
    gallery: [images.placeholders.project],
    timeline: [
      { label: "Planning", date: "2025-08-01", done: true },
      { label: "Launch", date: "2025-09-15", done: true },
      { label: "Implementation", date: "2025-10-20", done: true },
      { label: "Community engagement", date: "2025-11-10", done: true },
      { label: "Completion", date: "2025-11-20", done: true },
    ],
    updates: [
      {
        date: "2025-11-20",
        title: "Drive concludes with final distribution day",
        body: "The final distribution day reached students across Tumbi with complete supply packages.",
      },
    ],
  },
  {
    slug: "women-empowerment-workshops",
    title: "Women Empowerment Workshops",
    category: "Community",
    status: "Ongoing",
    location: "Kibaha, Pwani",
    date: "2026-04-18",
    year: 2026,
    summary:
      "Skills-sharing sessions that help women build confidence, income and leadership within their communities.",
    overview: [
      "These workshops bring women together to learn practical skills, share experiences and support one another in building independent livelihoods.",
    ],
    objectives: [
      "Build practical skills for income generation.",
      "Strengthen women's confidence and leadership.",
      "Create lasting peer-support networks.",
    ],
    activities: [
      "Monthly skills-sharing workshops.",
      "Savings and small-business guidance sessions.",
      "Peer mentorship circles.",
    ],
    impact:
      "Participants report growing confidence and new income activities emerging from the workshop network.",
    image: images.team[2],
    gallery: [images.team[2], images.team[3]],
    timeline: [
      { label: "Planning", date: "2026-01-15", done: true },
      { label: "Launch", date: "2026-04-18", done: true },
      { label: "Implementation", date: "2026-05-01", done: true },
      { label: "Progress review", date: "2026-11-01", done: false },
    ],
    updates: [
      {
        date: "2026-04-18",
        title: "First workshop series begins",
        body: "Thirty women joined the opening session of the skills-sharing workshop series in Kibaha.",
      },
    ],
  },
  {
    slug: "clean-water-awareness",
    title: "Clean Water Awareness",
    category: "Health",
    status: "Completed",
    location: "Mlandizi, Pwani",
    date: "2025-07-12",
    year: 2025,
    summary:
      "A community campaign promoting safe water practices and household hygiene in partnership with local leaders.",
    overview: [
      "Working alongside local leaders, this campaign shared practical knowledge on safe water handling and household hygiene across Mlandizi.",
    ],
    objectives: [
      "Promote safe water practices at household level.",
      "Reduce preventable water-related illness.",
    ],
    activities: [
      "Community demonstrations on safe water handling.",
      "School sessions on hygiene.",
      "Distribution of educational materials.",
    ],
    impact:
      "The campaign reached households across Mlandizi with practical demonstrations and materials.",
    image: images.placeholders.project,
    gallery: [images.placeholders.project],
    timeline: [
      { label: "Planning", date: "2025-04-01", done: true },
      { label: "Launch", date: "2025-05-20", done: true },
      { label: "Implementation", date: "2025-06-10", done: true },
      { label: "Completion", date: "2025-07-12", done: true },
    ],
    updates: [],
  },
  {
    slug: "youth-mentorship-program",
    title: "Youth Mentorship Program",
    category: "Education",
    status: "Upcoming",
    location: "Kibaha, Pwani",
    date: "2027-01-15",
    year: 2027,
    summary:
      "A structured mentorship program pairing young people with volunteer mentors for guidance, skills and career exposure.",
    overview: [
      "Launching in 2027, the Youth Mentorship Program will pair secondary students with trained volunteer mentors for regular guidance sessions.",
    ],
    objectives: [
      "Connect youth with positive role models.",
      "Build life skills and career awareness.",
      "Support school-to-work transitions.",
    ],
    activities: [
      "Mentor recruitment and training.",
      "Monthly mentorship sessions.",
      "Career exposure visits.",
    ],
    impact: "The program aims to support 100 young people in its first year.",
    image: images.team[1],
    gallery: [images.team[1]],
    timeline: [
      { label: "Planning", date: "2026-10-01", done: false },
      { label: "Launch", date: "2027-01-15", done: false },
      { label: "Implementation", date: "2027-02-01", done: false },
      { label: "Completion", date: "2027-12-01", done: false },
    ],
    updates: [],
  },
  {
    slug: "elderly-care-visits",
    title: "Elderly Care Visits",
    category: "Support",
    status: "Ongoing",
    location: "Kibaha DC, Pwani",
    date: "2026-02-14",
    year: 2026,
    summary:
      "Regular volunteer visits that provide companionship, essential items and dignity to elderly residents.",
    overview: [
      "Volunteer teams visit elderly residents regularly — bringing essential supplies, companionship and a reminder that they are not forgotten.",
    ],
    objectives: [
      "Reduce isolation among elderly residents.",
      "Provide essential household support.",
      "Honour elders with dignity and care.",
    ],
    activities: [
      "Monthly volunteer visit days.",
      "Essential supplies delivery.",
      "Health and wellbeing check-ins.",
    ],
    impact:
      "Dozens of elderly residents receive regular visits and support through the program.",
    image: images.placeholders.project,
    gallery: [images.placeholders.project],
    timeline: [
      { label: "Planning", date: "2025-11-01", done: true },
      { label: "Launch", date: "2026-02-14", done: true },
      { label: "Implementation", date: "2026-03-01", done: true },
      { label: "Progress review", date: "2026-12-01", done: false },
    ],
    updates: [
      {
        date: "2026-02-14",
        title: "Care visits begin",
        body: "Volunteers made their first rounds to elderly residents across Kibaha DC.",
      },
    ],
  },
  {
    slug: "tree-planting-initiative",
    title: "Tree Planting Initiative",
    category: "Community",
    status: "Upcoming",
    location: "Pwani Region",
    date: "2026-12-05",
    year: 2026,
    summary:
      "A sustainability drive mobilising schools and neighbourhoods to plant and care for trees across the region.",
    overview: [
      "In partnership with schools, this initiative will plant trees while teaching environmental stewardship to the next generation.",
    ],
    objectives: [
      "Increase tree cover in public spaces.",
      "Teach environmental stewardship in schools.",
    ],
    activities: [
      "School planting days.",
      "Community tree-care training.",
      "Seedling distribution.",
    ],
    impact: "The initiative targets 2,000 trees planted and cared for in its first season.",
    image: images.placeholders.project,
    gallery: [images.placeholders.project],
    timeline: [
      { label: "Planning", date: "2026-09-01", done: true },
      { label: "Launch", date: "2026-12-05", done: false },
      { label: "Implementation", date: "2027-01-15", done: false },
      { label: "Completion", date: "2027-06-30", done: false },
    ],
    updates: [],
  },
]

export const projectCategories: ProjectCategory[] = ["Education", "Health", "Community", "Support"]
export const projectStatuses: ProjectStatus[] = ["Ongoing", "Completed", "Upcoming"]

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug)
}
