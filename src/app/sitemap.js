import { siteUrl, staticRoutes } from '../lib/sitemap-config';
import fs from 'fs';
import path from 'path';
import { getAllBlogSlugs } from '../lib/getBlogPosts';

// Function to get all blog posts slugs
async function getBlogPosts() {
  try {
    // Get all blog slugs using your existing function
    const slugs = getAllBlogSlugs();
    
    return slugs.map(slug => ({
      url: `/blog/${slug}`,
      changefreq: 'monthly',
      priority: 0.7,
    }));
  } catch (error) {
    console.error('Error getting blog posts:', error);
    return [];
  }
}

export default async function sitemap() {
  const blogPosts = await getBlogPosts();
  
  // Current date for lastModified
  const date = new Date();
  
  // Create entries for static routes
  const staticEntries = staticRoutes.map(route => ({
    url: `${siteUrl}${route.url}`,
    lastModified: date,
    changeFrequency: route.changefreq,
    priority: route.priority,
  }));
  
  // Create entries for dynamic blog posts
  const blogEntries = blogPosts.map(post => ({
    url: `${siteUrl}${post.url}`,
    lastModified: date,
    changeFrequency: post.changefreq,
    priority: post.priority,
  }));
  
  // Combine all entries
  return [...staticEntries, ...blogEntries];
}
