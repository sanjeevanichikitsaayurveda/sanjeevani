import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'src/data/blogs/posts');

type Params = {
  params: {
    slug: string;
  }
};

export async function GET(
  req: Request,
  { params }: Params
) {
  try {
    const slug = params.slug;
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
    console.error(`Error getting blog post:`, error);
    return NextResponse.json({ error: 'Failed to fetch blog post' }, { status: 500 });
  }
}
