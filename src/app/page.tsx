'use client';

import HeroSlider from '@/components/home/HeroSlider';
import ProductShowcase from '@/components/home/ProductShowcase';
import Testimonials from '@/components/home/Testimonials';
import ContactForm from '@/components/shared/ContactForm';
import { motion } from 'framer-motion';
import { SITE_CONSTANTS } from '@/utils/constants';

export default function Home() {
  const { BUSINESS_NAME } = SITE_CONSTANTS;
  return (
    <div>
      {/* Hero Section with Slider */}
      <HeroSlider />
      
      {/* Product Showcase Section */}
      <ProductShowcase />
      
      {/* Testimonials Section */}
      <Testimonials />
      
      {/* Google Rating Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-800">
              Our Google Rating
            </h2>
            <div className="flex justify-center mb-4">
              <div className="flex items-center">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star, index) => (
                    <svg key={index} className={`w-6 h-6 ${index < 4.5 ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-lg font-medium text-gray-700">Based on 454 reviews</span>
              </div>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Review 1 */}
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center text-white font-bold mr-3">M</div>
                <div>
                  <p className="font-medium">Mohd. Sahab A.</p>
                  <p className="text-sm text-gray-500">6 May 2024</p>
                </div>
                <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5 ml-auto" />
              </div>
              <div className="flex mb-3">
                {[1, 2, 3, 4, 5].map((star, index) => (
                  <svg key={index} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-gray-700">good experience thanks</p>
            </motion.div>
            
            {/* Review 2 */}
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3">A</div>
                <div>
                  <p className="font-medium">Anil Ladhel</p>
                  <p className="text-sm text-gray-500">4 May 2024</p>
                </div>
                <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5 ml-auto" />
              </div>
              <div className="flex mb-3">
                {[1, 2, 3, 4, 5].map((star, index) => (
                  <svg key={index} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-gray-700">Supar medicine bahet hi khush hu me very good 👍</p>
            </motion.div>
            
            {/* Review 3 */}
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  <span className="text-xs">PJ</span>
                </div>
                <div>
                  <p className="font-medium">pankaj jaguri</p>
                  <p className="text-sm text-gray-500">4 May 2024</p>
                </div>
                <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5 ml-auto" />
              </div>
              <div className="flex mb-3">
                {[1, 2, 3, 4].map((star, index) => (
                  <svg key={index} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
                <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
              <p className="text-gray-700">Service अच्छी है पर medicine ka asar ke liye apko bhut lambe time tk Lena hoga.6 month me only 20%asar hua hai</p>
            </motion.div>
          </div>
          
          <motion.div 
            className="text-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <a 
              href="https://www.google.com/search?q=Sanjeevani+Chikitsa+Ayurveda+reviews" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-green-700 text-white font-medium py-3 px-8 rounded-md hover:bg-green-600 transition-colors"
            >
              Read More Reviews
            </a>
          </motion.div>
        </div>
      </section>
      
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#4CAF50' }}>
              Contact Us Today
            </h2>
            <p className="max-w-2xl mx-auto" style={{ color: '#1B5E20' }}>
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
