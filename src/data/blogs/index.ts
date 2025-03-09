// Export the BlogPost type
import type { BlogPost } from './types';
export type { BlogPost };

// Import dummy data for client-side rendering
import { dummyPosts } from './dummyData';

/**
 * Get all blog posts
 * This is just a stub that will be replaced in the server components where needed
 */
export function getBlogPosts() {
  // Return dummy data to prevent client-side errors
  // The actual implementation will be used in server components
  return dummyPosts;
}

/**
 * Get a blog post by slug
 * This is just a stub that will be replaced in the server components where needed
 */
export function getBlogPostBySlug(slug: string) {
  // Return the first dummy post that matches the slug or null
  return dummyPosts.find((post: BlogPost) => post.slug === slug) || null;
}

/**
 * Get all blog slugs
 * This is just a stub that will be replaced in the server components where needed
 */
export function getAllBlogSlugs() {
  // Return slugs from dummy data
  return dummyPosts.map((post: BlogPost) => post.slug);
}
