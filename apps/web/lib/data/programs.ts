import { images, type SiteImage } from "./images"

export type Program = {
  slug: string
  title: string
  icon: "education" | "health" | "community" | "support"
  tagline: string
  description: string
  longDescription: string[]
  objectives: string[]
  activities: string[]
  impact: string
  image: SiteImage
  stats: { value: number; suffix: string; label: string }[]
}

export const programs: Program[] = [
  {
    slug: "education",
    title: "Education",
    icon: "education",
    tagline: "Opening doors through learning",
    description:
      "We expand access to quality education through school support, learning materials and community education initiatives.",
    longDescription: [
      "Education is one of the core pillars of Marcesh Foundation. We believe every child and young person in Kibaha and beyond deserves the chance to learn, grow and build a meaningful future.",
      "Our education program works directly with schools, families and communities to remove the barriers that keep children out of the classroom, from lack of materials to limited family support.",
    ],
    objectives: [
      "Increase access to quality education for children and youth.",
      "Provide learning materials and school support where they are needed most.",
      "Strengthen community involvement in education.",
      "Support vulnerable students to stay in school.",
    ],
    activities: [
      "Distribution of books, stationery and school supplies.",
      "School support visits and learning assessments.",
      "Community education days and mentorship sessions.",
      "Recognition initiatives such as Restore a Child certificate events.",
    ],
    impact:
      "Through our education initiatives, students across the Pwani region receive the materials, encouragement and community backing they need to keep learning.",
    image: images.education,
    stats: [
      { value: 12, suffix: "", label: "Education Programs" },
      { value: 640, suffix: "+", label: "Students Reached" },
      { value: 8, suffix: "", label: "Partner Schools" },
    ],
  },
  {
    slug: "health",
    title: "Health",
    icon: "health",
    tagline: "Healthier communities, brighter futures",
    description:
      "We promote community health through awareness campaigns, outreach and support that improves access to essential services.",
    longDescription: [
      "Good health is the foundation of a thriving community. Marcesh Foundation works to raise health awareness and connect people in Kibaha with the services and knowledge they need.",
      "Rather than replacing public health systems, our initiatives focus on awareness, prevention and community support, meeting people where they are.",
    ],
    objectives: [
      "Raise awareness of key health issues in local communities.",
      "Support access to essential health services.",
      "Promote preventive health practices.",
      "Stand beside vulnerable people facing health challenges.",
    ],
    activities: [
      "Community health awareness days.",
      "Health education sessions in schools and neighbourhoods.",
      "Support visits for vulnerable families.",
      "Partnerships with local health workers and clinics.",
    ],
    impact:
      "Our health initiatives help families make informed decisions and connect with care earlier, building a healthier, more resilient community.",
    image: images.health,
    stats: [
      { value: 9, suffix: "", label: "Health Initiatives" },
      { value: 380, suffix: "+", label: "People Reached" },
      { value: 6, suffix: "", label: "Awareness Campaigns" },
    ],
  },
  {
    slug: "community-development",
    title: "Community Development",
    icon: "community",
    tagline: "Stronger communities, built together",
    description:
      "We support local initiatives that empower communities, strengthen livelihoods and promote sustainable development.",
    longDescription: [
      "Communities hold the answers to their own challenges. Our role is to help unlock that potential through initiatives that build skills, confidence and local ownership.",
      "From community clean-up and outreach days to skills-sharing and local partnerships, we invest in the people and places that make Kibaha stronger.",
    ],
    objectives: [
      "Empower communities to lead their own development.",
      "Support local initiatives with real, lasting value.",
      "Promote sustainable practices and self-reliance.",
      "Strengthen solidarity and shared responsibility.",
    ],
    activities: [
      "Community outreach and engagement days.",
      "Skills-sharing and empowerment workshops.",
      "Support for local development initiatives.",
      "Volunteer mobilisation across the Pwani region.",
    ],
    impact:
      "Each initiative leaves communities more connected, more capable and more confident in shaping their own future.",
    image: images.community,
    stats: [
      { value: 18, suffix: "", label: "Community Initiatives" },
      { value: 25, suffix: "+", label: "Active Volunteers" },
      { value: 10, suffix: "", label: "Local Partnerships" },
    ],
  },
  {
    slug: "support-for-the-needy",
    title: "Support for the Needy",
    icon: "support",
    tagline: "Dignity, opportunity and solidarity",
    description:
      "We stand beside vulnerable and needy people with essential support that protects dignity and creates opportunity.",
    longDescription: [
      "Behind every statistic is a person with a story. Marcesh Foundation provides practical, dignified support to vulnerable individuals and families in our community.",
      "We believe support should restore confidence, not create dependence. Our approach pairs essential assistance with pathways to opportunity.",
    ],
    objectives: [
      "Provide essential support to vulnerable people and families.",
      "Protect the dignity of every person we serve.",
      "Create pathways from support to self-reliance.",
      "Build a culture of community solidarity.",
    ],
    activities: [
      "Essential needs support for vulnerable households.",
      "Visits and follow-up care for individuals in need.",
      "Referrals to education, health and community programs.",
      "Seasonal community support drives.",
    ],
    impact:
      "Our support initiatives help people through difficult moments while opening doors to longer-term stability and opportunity.",
    image: images.support,
    stats: [
      { value: 230, suffix: "+", label: "Families Supported" },
      { value: 14, suffix: "", label: "Support Drives" },
      { value: 5, suffix: "", label: "Wards Reached" },
    ],
  },
]

export function getProgram(slug: string) {
  return programs.find((p) => p.slug === slug)
}
