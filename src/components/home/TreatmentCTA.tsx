'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { SITE_CONSTANTS } from '@/utils/constants';

export default function TreatmentCTA() {
  return (
    <section className="py-16 bg-green-600 text-white relative overflow-hidden">
      {/* Background pattern/overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-green-600 opacity-90"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <span className="inline-block bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
              GET INVOLVED
            </span>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              Modern & Advanced Ayurveda treatments for You & Your family from Sanjeevani Chikitsa
            </h2>
            
            <p className="text-lg mb-8 text-green-50">
              Our Ayurvedic Treatment Service is committed to supporting your journey towards optimal health and well-being. 
              We invite you to explore the transformative power of Ayurveda and embark on a path of holistic healing with us.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href="/contact" className="bg-white text-green-700 hover:bg-green-100 font-medium py-3 px-6 rounded-md transition duration-300 text-center">
                MAKE AN APPOINTMENT
              </Link>
              <Link href="/products" className="bg-green-700 text-white hover:bg-green-800 font-medium py-3 px-6 rounded-md border border-green-500 transition duration-300 text-center">
                EXPLORE PRODUCTS
              </Link>
            </div>
          </motion.div>
          
          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 bg-white rounded-lg p-6 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <h3 className="text-3xl font-bold text-green-600">120K+</h3>
              <p className="text-gray-600 text-sm uppercase">HAPPY PATIENTS</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-green-600">200+</h3>
              <p className="text-gray-600 text-sm uppercase">SPECIALIST DOCTORS</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-green-600">30+</h3>
              <p className="text-gray-600 text-sm uppercase">MEDICAL SERVICES</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-green-600">150K+</h3>
              <p className="text-gray-600 text-sm uppercase">PROBLEMS SOLVED</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
