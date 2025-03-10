import { siteUrl } from '../lib/sitemap-config';

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
