'use client';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { FaPhone } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SITE_CONSTANTS } from '@/utils/constants';

// Hero slider data
const slideData = [
  {
    id: 1,
    image: '/images/slide-1.webp',
    title: 'Natural Ayurvedic Solutions',
    description: 'Boost your vitality with our premium Ayurvedic formulations'
  },
  {
    id: 2,
    image: '/images/slide-2.webp',
    title: 'Traditional Healing Wisdom',
    description: 'Ancient remedies for modern men wellness'
  },
  {
    id: 3,
    image: '/images/slide-3.webp',
    title: 'Revitalize Your Energy',
    description: 'Experience the power of authentic Ayurveda'
  }
];

export default function HeroSlider() {
  const { CONTACT_PHONE } = SITE_CONSTANTS;
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false
        }
      }
    ]
  };

  if (!isClient) return null;

  return (
    <div className="relative w-full h-screen max-h-[700px] overflow-hidden">
      <Slider {...settings} className="h-full">
        {slideData.map((slide) => (
          <div key={slide.id} className="relative h-screen max-h-[700px]">
            <div 
              className="absolute inset-0 bg-cover bg-center z-0" 
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
              >
                {slide.title}
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl mb-8 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}
              >
                {slide.description}
              </motion.p>
              
              <motion.a 
                href={`tel:+91${CONTACT_PHONE}`}
                className="flex items-center justify-center text-white font-bold py-3 px-8 rounded-full transition-all duration-300"
                style={{ 
                  backgroundColor: '#4CAF50',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.3)'
                }}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: '#8BC34A',
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <FaPhone className="mr-2" />
                Call Now: {CONTACT_PHONE}
              </motion.a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
