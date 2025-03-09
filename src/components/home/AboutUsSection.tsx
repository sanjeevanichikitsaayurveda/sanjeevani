'use client';
import { motion } from 'framer-motion';
import { FaCheck, FaMedal } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

// Benefits list
const benefits = [
  { id: 1, text: 'Comfortable care' },
  { id: 2, text: 'Trusted specialist doctors' },
  { id: 3, text: 'Friendly staff' },
  { id: 4, text: 'Researched Products' },
  { id: 5, text: '100% Ayurvedic' },
  { id: 6, text: 'Approved By Government' },
];

export default function AboutUsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-block bg-green-100 text-green-800 px-4 py-1 rounded-md text-sm font-medium mb-4">
              WHO WE ARE
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
              We are focused on delivering the highest quality ayurvedic care.
            </h2>
            
            <p className="text-gray-700 mb-8 text-lg">
              Our team of experienced Ayurvedic practitioners brings deep 
              knowledge and expertise in the science of Ayurveda, a 5,000-
              year-old healing system originating from India. We combine 
              traditional practices with modern advancements to provide 
              comprehensive and personalized care for our clients.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit) => (
                <div key={benefit.id} className="flex items-center">
                  <div className="text-green-600 mr-2">
                    <FaCheck />
                  </div>
                  <span className="text-gray-700">{benefit.text}</span>
                </div>
              ))}
            </div>
            
            <Link
              href="/about"
              className="inline-block bg-green-600 text-white font-medium py-3 px-8 rounded-md hover:bg-green-700 transition-colors"
            >
              MORE ABOUT US
            </Link>
          </motion.div>
          
          {/* Right Content - Image and Experience Badge */}
          <motion.div 
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/sanjeevni-1.webp"
                alt="Ayurvedic herbs and mortar"
                width={600}
                height={500}
                className="w-full h-auto object-cover"
                onError={(e) => {
                  // Fallback if image doesn't exist
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1384&q=80";
                }}
              />
              
              {/* Experience Badge */}
              <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-lg shadow-lg max-w-[280px]">
                <div className="flex items-start mb-2">
                  <div className="text-green-600 mr-3 mt-1">
                    <FaMedal size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">25+ Years Experience</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  We prioritize the use of natural, organic, and sustainably sourced ingredients in our therapies, ensuring the highest quality of care.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
