import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { dummyPosts } from '@/data/blogs/dummyData';

export default function LatestBlogs() {
  // Get the 3 most recent blog posts
  const latestPosts = dummyPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);
    
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest from Our Blog
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our collection of articles on Ayurvedic wisdom, health tips, and holistic wellness practices.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {latestPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 group">
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image 
                    src={post.coverImage} 
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transform group-hover:scale-105 transition duration-500"
                  />
                </div>
              </Link>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long', 
                    day: 'numeric'
                  })}</time>
                </div>
                
                <Link href={`/blog/${post.slug}`} className="block">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-green-700 transition duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                </Link>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
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
        
        <div className="text-center mt-10">
          <Link 
            href="/blog"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition duration-300"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}
