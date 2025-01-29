import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
     const baseUrl = "https://www.generalmouldingsug.com/";
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}