import React from 'react';
import Link from 'next/link';

export default function BlogNotFound() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
        <p className="text-lg text-gray-600 mb-8">
          We couldn&apos;t find the blog post you&apos;re looking for. It may have been moved or deleted.
        </p>
        <Link 
          href="/blog" 
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
        >
          Return to Blog
        </Link>
      </div>
    </div>
  );
}
