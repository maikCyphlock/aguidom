import type { MetadataRoute } from "next";
import { athletes } from "@/consts/athletes";
import { allDocs } from "contentlayer/generated";

const siteUrl = "https://aguidom.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/fama`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/race`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteUrl}/events/nitroguidom`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
  ];

  const athleteRoutes: MetadataRoute.Sitemap = athletes.map((a) => ({
    url: `${siteUrl}/fama/${a.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogRoutes: MetadataRoute.Sitemap = allDocs.map((doc) => ({
    url: `${siteUrl}/blog/${doc.slugAsParams}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...athleteRoutes, ...blogRoutes];
}
