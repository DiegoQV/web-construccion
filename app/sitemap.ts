import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: new URL("/privacidad", siteConfig.siteUrl).toString(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: siteConfig.siteUrl,
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          "es-PE": siteConfig.siteUrl,
        },
      },
    },
  ];
}
