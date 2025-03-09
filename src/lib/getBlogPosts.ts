import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPost } from '@/data/blogs/types';

// Directory where blog post markdown files are stored
const postsDirectory = path.join(process.cwd(), 'src', 'data', 'blogs', 'posts');

/**
 * Get all blog posts by reading markdown files from the posts directory
 */
export function getBlogPosts(): BlogPost[] {
  // Get all files in the posts directory
  let filenames: string[] = [];
  try {
    filenames = fs.readdirSync(postsDirectory);
  } catch (error) {
    console.error('Error reading blog posts directory:', error);
    return [];
  }
  
  // Sort filenames in reverse order (newest first based on file modification time)
  const sortedFilenames = filenames
    .filter(filename => filename.endsWith('.md'))
    .sort((a, b) => {
      const aStats = fs.statSync(path.join(postsDirectory, a));
      const bStats = fs.statSync(path.join(postsDirectory, b));
      return bStats.mtime.getTime() - aStats.mtime.getTime();
    });

  // Map filenames to blog posts
  const posts = sortedFilenames.map((filename, index) => {
    // Extract slug from filename (remove .md extension)
    const slug = filename.replace(/\.md$/, '');
    
    // Get blog post content and metadata
    const post = getBlogPostBySlug(slug);
    
    if (!post) return null;
    
    // Add id based on position in the array (1-indexed)
    return { ...post, id: String(index + 1) };
  }).filter(Boolean) as BlogPost[];

  return posts;
}

/**
 * Get a single blog post by its slug
 */
export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  try {
    // Construct the full path to the blog post file
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    
    // Check if the file exists
    if (!fs.existsSync(fullPath)) {
      return undefined;
    }
    
    // Read the file content
    const fileContent = fs.readFileSync(fullPath, 'utf8');
    
    // Parse the front matter and content using gray-matter
    const { data, content } = matter(fileContent);
    
    // Parse tags - they could be stored as comma-separated string or as an array
    let tags: string[] = [];
    if (typeof data.tags === 'string') {
      tags = data.tags.split(',').map((tag: string) => tag.trim());
    } else if (Array.isArray(data.tags)) {
      tags = data.tags;
    }
    
    // Create and return the blog post object
    return {
      id: '', // This will be set when getting all posts
      slug,
      title: data.title || '',
      excerpt: data.excerpt || '',
      content,
      coverImage: data.coverImage || '/images/blog/default.jpg',
      date: data.date ? new Date(data.date).toISOString().split('T')[0] : '',
      author: data.author || 'Anonymous',
      tags
    };
  } catch (error) {
    console.error(`Error getting blog post with slug "${slug}":`, error);
    return undefined;
  }
}

/**
 * Get all blog post slugs
 */
export function getAllBlogSlugs(): string[] {
  try {
    const filenames = fs.readdirSync(postsDirectory);
    return filenames
      .filter(filename => filename.endsWith('.md'))
      .map(filename => filename.replace(/\.md$/, ''));
  } catch (error) {
    console.error('Error getting all blog slugs:', error);
    return [];
  }
}
