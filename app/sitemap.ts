import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://valleytravelcorner.com'
  
  // Base routes that are the same for both languages
  const routes = [
    '',
    '/packages',
    '/about',
    '/services',
    '/contact',
  ]

  // Generate entries for both English and Arabic versions
  const entries = routes.flatMap(route => [
    {
      url: `${baseUrl}/en${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1 : 0.8,
    },
    {
      url: `${baseUrl}/ar${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1 : 0.8,
    }
  ])

  return entries
} 