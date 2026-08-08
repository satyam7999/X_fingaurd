import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://finguard.com';

  const routes = [
    '',
    '/about',
    '/features',
    '/benefits',
    '/partners',
    '/pricing',
    '/security',
    '/resources',
    '/blog',
    '/contact',
    '/login',
    '/signup',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
