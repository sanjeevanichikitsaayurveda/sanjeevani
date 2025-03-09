import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'src/data/blogs/posts');

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;
  
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    
    // Check if the file exists
    if (!fs.existsSync(fullPath)) {
      return NextResponse.json({ error: 'Blog post not found' }, { status: 404 });
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return NextResponse.json({
      slug,
      content,
      id: data.id || slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      coverImage: data.coverImage,
      author: data.author,
      tags: data.tags || [],
    });
  } catch (error) {
    console.error(`Error getting blog post with slug ${slug}:`, error);
    return NextResponse.json({ error: 'Failed to fetch blog post' }, { status: 500 });
  }
}
