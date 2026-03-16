import type { MetadataRoute } from "next";

const BASE_URL = "https://rudyortega.dev"; // TODO: update when domain is live

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
