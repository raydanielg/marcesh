import type { MetadataRoute } from "next"
import { site } from "@/lib/data/site"
import { programs } from "@/lib/data/programs"
import { projects } from "@/lib/data/projects"
import { stories } from "@/lib/data/stories"
import { news } from "@/lib/data/news"
import { events } from "@/lib/data/events"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/programs",
    "/projects",
    "/impact",
    "/stories",
    "/news",
    "/events",
    "/gallery",
    "/team",
    "/get-involved",
    "/donate",
    "/volunteer",
    "/partner",
    "/contact",
    "/privacy",
    "/terms",
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
  }))

  const dynamicRoutes = [
    ...programs.map((p) => `/programs/${p.slug}`),
    ...projects.map((p) => `/projects/${p.slug}`),
    ...stories.map((s) => `/stories/${s.slug}`),
    ...news.map((n) => `/news/${n.slug}`),
    ...events.map((e) => `/events/${e.slug}`),
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
  }))

  return [...staticRoutes, ...dynamicRoutes]
}
