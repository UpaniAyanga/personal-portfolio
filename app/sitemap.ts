import type { MetadataRoute } from "next"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://upani.dev",
      lastModified: "2026-11-02",
      changeFrequency: "monthly",
      priority: 1,
    },
  ]
}