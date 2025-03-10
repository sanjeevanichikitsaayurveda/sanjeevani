// Sitemap configuration
const siteUrl = 'https://sanjeevanichikitsaayurveda.com';

// Define static routes
const staticRoutes = [
  {
    url: '/',
    changefreq: 'weekly',
    priority: 1.0,
  },
  {
    url: '/about',
    changefreq: 'monthly',
    priority: 0.8,
  },
  {
    url: '/contact',
    changefreq: 'monthly',
    priority: 0.8,
  },
  {
    url: '/products',
    changefreq: 'weekly',
    priority: 0.9,
  },
  {
    url: '/services',
    changefreq: 'weekly',
    priority: 0.9,
  },
  {
    url: '/services/weight-loss',
    changefreq: 'weekly',
    priority: 0.8,
  },
  {
    url: '/services/diabetes',
    changefreq: 'weekly',
    priority: 0.8,
  },
  {
    url: '/services/mens-health',
    changefreq: 'weekly',
    priority: 0.8,
  },
  {
    url: '/services/piles',
    changefreq: 'weekly',
    priority: 0.8,
  },
  {
    url: '/blog',
    changefreq: 'daily',
    priority: 0.9,
  },
];

module.exports = {
  siteUrl,
  staticRoutes,
};
