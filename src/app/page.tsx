'use client';

import HeroSlider from '@/components/home/HeroSlider';
import ProductShowcase from '@/components/home/ProductShowcase';
import Testimonials from '@/components/home/Testimonials';
import ContactForm from '@/components/shared/ContactForm';
import { motion } from 'framer-motion';
import { SITE_CONSTANTS } from '@/utils/constants';

export default function Home() {
  const { COLORS, BUSINESS_NAME } = SITE_CONSTANTS;
  return (
    <div>
      {/* Hero Section with Slider */}
      <HeroSlider />
      
      {/* Product Showcase Section */}
      <ProductShowcase />
      
      {/* Testimonials Section */}
      <Testimonials />
      
      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: COLORS.PRIMARY }}>
              Contact Us Today
            </h2>
            <p className="max-w-2xl mx-auto" style={{ color: COLORS.TEXT_DARK }}>
              Our Ayurvedic experts are ready to address your concerns and guide you toward better health and vitality.
            </p>
          </motion.div>
          
          <ContactForm 
            title={`Unlock Your Natural Potential with ${BUSINESS_NAME}`}
            subtitle="Get in touch with our Ayurvedic experts for personalized advice on men's sexual wellness products."
            showOffers={true}
          />
        </div>
      </section>
    </div>
  );
}
