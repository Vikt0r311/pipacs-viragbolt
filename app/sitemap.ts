import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE_URL = "https://www.example.hu";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-04-02");

  return [
    {
      url: BASE_URL,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/szolgaltatasok`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/galeria`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/rolunk`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/kapcsolat`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/adatvedelmi-tajekoztato`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/impresszum`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
