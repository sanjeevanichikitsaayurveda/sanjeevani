'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { usePathname } from 'next/navigation';

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
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <header className={`w-full top-0 left-0 z-50 ${isHomePage ? 'absolute' : 'fixed bg-white shadow-md'}`} style={isHomePage ? {
      background: "transparent"
    } : {}}>
      <div className="container mx-auto px-4 pt-6 pb-3 flex items-center justify-between relative">
        <Link href="/" className="flex items-center justify-center flex-1">
          <div className="relative h-36 w-auto">
            <Image 
              src="/images/logo.png" 
              alt="Sanjeevani Chikitsa Ayurveda Logo" 
              width={320} 
              height={160} 
              className="object-contain max-h-full" 
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              href={item.path}
              className={`${isHomePage ? 'text-white hover:text-green-200' : 'text-black hover:text-green-600'} transition-colors font-medium`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation Toggle */}
        <button 
          className={`md:hidden text-2xl ${isHomePage ? 'text-white' : 'text-black'} absolute right-4`}
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
          className="md:hidden"
          style={{
            background: "rgba(0, 0, 0, 0.8)",
            backdropFilter: "blur(10px)"
          }}
        >
          <div className="container mx-auto px-4 py-3">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link 
                  key={item.path}
                  href={item.path}
                  className="text-white hover:text-green-200 transition-colors text-lg font-medium block py-2"
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
