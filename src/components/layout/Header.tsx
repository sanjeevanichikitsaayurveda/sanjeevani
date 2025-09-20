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
      <div className="container mx-auto px-4 py-0 flex items-center justify-between relative">
        <Link href="/" className="flex items-center justify-center flex-1">
          <div className="relative h-52 w-auto">
            <Image 
              src="/images/logo.png" 
              alt="Sanjeevani Chikitsa Ayurveda Logo" 
              width={480} 
              height={240} 
              className="object-contain max-h-full" 
              priority
            />
          </div>
        </Link>

        {/* Navigation Toggle - Now for all devices */}
        <button 
          className={`flex items-center space-x-2 text-3xl ${isHomePage ? 'text-white' : 'text-black'} absolute right-4`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
          <span className="text-sm font-medium uppercase tracking-wide">MENU</span>
        </button>
      </div>

      {/* Navigation Menu - Now for all devices */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className=""
          style={{
            background: "rgba(0, 0, 0, 0.8)",
            backdropFilter: "blur(10px)"
          }}
        >
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col space-y-6 items-center">
              {navItems.map((item) => (
                <Link 
                  key={item.path}
                  href={item.path}
                  className="text-white hover:text-green-200 transition-colors text-xl font-medium block py-3 text-center"
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
