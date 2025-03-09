import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getBlogPostBySlug, getAllBlogSlugs } from '@/lib/getBlogPosts';
import type { Metadata } from 'next';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: 'Blog Post Not Found',
    };
  }
  
  return {
    title: `${post.title} | Sanjeevani Ayurveda Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ],
    },
  };
}

export function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map(slug => ({ slug }));
}

function formatMarkdownToHTML(content: string): string {
  // Simple markdown parser for headers, paragraphs, and lists
  let html = content;
  
  // Convert headers
  html = html.replace(/^# (.+)$/gm, '<h1 class="text-3xl font-bold mt-8 mb-4">$1</h1>');
  html = html.replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold mt-6 mb-3">$1</h2>');
  html = html.replace(/^### (.+)$/gm, '<h3 class="text-xl font-bold mt-5 mb-2">$1</h3>');
  
  // Convert lists
  html = html.replace(/^\d+\. (.+)$/gm, '<li class="ml-6 list-decimal mb-2">$1</li>');
  html = html.replace(/^- (.+)$/gm, '<li class="ml-6 list-disc mb-2">$1</li>');
  
  // Convert paragraphs (any line that doesn't start with < and has content)
  html = html.replace(/^([^<].+)$/gm, '<p class="mb-4 leading-relaxed">$1</p>');
  
  // Wrap adjacent list items in ul/ol tags
  html = html.replace(/<li class="ml-6 list-decimal mb-2">(.+?)(?=<li class="ml-6 list-decimal mb-2">|<\/li>)/g, '<ol class="mb-4 pl-4"><li class="ml-6 list-decimal mb-2">$1');
  html = html.replace(/<li class="ml-6 list-disc mb-2">(.+?)(?=<li class="ml-6 list-disc mb-2">|<\/li>)/g, '<ul class="mb-4 pl-4"><li class="ml-6 list-disc mb-2">$1');
  
  // Close list tags
  html = html.replace(/<\/li>(?!<li)/g, '</li></ul>');
  html = html.replace(/<\/li>(?!<li)/g, '</li></ol>');
  
  // Fix any double closing tags
  html = html.replace(/<\/ul><\/ul>/g, '</ul>');
  html = html.replace(/<\/ol><\/ol>/g, '</ol>');
  
  // Bold and italic
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
  
  return html;
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug);
  
  if (!post) {
    notFound();
  }
  
  // Format the date
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  return (
    <div className="bg-white text-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
        <Link 
          href="/blog" 
          className="inline-flex items-center text-green-700 hover:text-green-800 mb-8"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 mr-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M10 19l-7-7m0 0l7-7m-7 7h18" 
            />
          </svg>
          Back to all articles
        </Link>
        
        <article>
          <header className="mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>
            
            <div className="flex items-center text-gray-600 mb-6">
              <time dateTime={post.date}>{formattedDate}</time>
              <span className="mx-2">•</span>
              <span>{post.author}</span>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="inline-block px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="relative aspect-video w-full mb-8 overflow-hidden rounded-lg">
              <Image 
                src={post.coverImage} 
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 768px, 1024px"
                className="object-cover"
                priority
              />
            </div>
          </header>
          
          <div 
            className="prose prose-gray prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: formatMarkdownToHTML(post.content) }}
          />
        </article>
        </div>
      </div>
    </div>
  );
}
