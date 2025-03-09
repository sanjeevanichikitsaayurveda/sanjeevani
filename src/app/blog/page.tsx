import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getBlogPosts } from '@/lib/getBlogPosts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Sanjeevani Ayurveda',
  description: 'Explore our collection of articles on Ayurvedic wisdom, health tips, and holistic wellness practices.',
  openGraph: {
    title: 'Blog | Sanjeevani Ayurveda',
    description: 'Explore our collection of articles on Ayurvedic wisdom, health tips, and holistic wellness practices.',
    images: [
      {
        url: '/images/og-blog.jpg',
        width: 1200,
        height: 630,
        alt: 'Sanjeevani Ayurveda Blog',
      }
    ],
  },
}

export default function BlogPage() {
  const blogPosts = getBlogPosts();
  
  return (
    <div className="bg-white text-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Our Blog</h1>
        <p className="text-lg text-gray-700 mb-12">
          Explore our collection of articles on Ayurvedic wisdom, health tips, and holistic wellness practices.
        </p>
        
        <div className="space-y-12">
          {blogPosts.map((post) => (
            <article key={post.id} className="border-b border-gray-200 pb-10 group">
              <Link href={`/blog/${post.slug}`} className="block group-hover:opacity-90 transition duration-300">
                <div className="relative aspect-video w-full mb-6 overflow-hidden rounded-lg">
                  <Image 
                    src={post.coverImage} 
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transform group-hover:scale-105 transition duration-500"
                    priority={parseInt(post.id) <= 2}
                  />
                </div>
              </Link>
              
              <div>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long', 
                    day: 'numeric'
                  })}</time>
                  <span className="mx-2">•</span>
                  <span>{post.author}</span>
                </div>
                
                <Link href={`/blog/${post.slug}`} className="block">
                  <h2 className="text-2xl font-semibold mb-3 text-gray-900 group-hover:text-green-700 transition duration-300">
                    {post.title}
                  </h2>
                </Link>
                
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="inline-block px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Link 
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center font-medium text-green-700 hover:text-green-800"
                >
                  Read more
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 ml-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M14 5l7 7m0 0l-7 7m7-7H3" 
                    />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
}
