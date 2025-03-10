'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Products', path: '/products' },
  { name: 'Blog', path: '/blog' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact Us', path: '/contact' }
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-green-800 text-white fixed w-full top-0 left-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="flex items-center">
            <div className="relative h-8 w-auto mr-3">
              <Image 
                src="/images/logo.webp" 
                alt="Sanjeevani Chikitsa Ayurveda Logo" 
                width={60} 
                height={30} 
                className="object-contain" 
                priority
              />
            </div>
            <span className="text-xl md:text-2xl font-semibold font-serif">Sanjeevani Chikitsa</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              href={item.path}
              className="hover:text-green-300 transition-colors font-medium"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-green-800 shadow-lg"
        >
          <div className="container mx-auto px-4 py-3">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link 
                  key={item.path}
                  href={item.path}
                  className="hover:text-green-300 transition-colors text-lg font-medium block py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
