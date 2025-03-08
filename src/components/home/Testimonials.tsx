'use client';
import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { TESTIMONIALS_DATA, SITE_CONSTANTS } from '@/utils/constants';

// Use testimonials data from constants
const testimonials = TESTIMONIALS_DATA;

export default function Testimonials() {
  const { BUSINESS_NAME } = SITE_CONSTANTS;
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
    autoplaySpeed: 6000,
    pauseOnHover: true,
    adaptiveHeight: true,
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
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#4CAF50' }}>
            Trusted by Men Across India
          </h2>
          <p className="max-w-2xl mx-auto" style={{ color: '#1B5E20' }}>
            Hear what our satisfied customers have to say about their experience with our Ayurvedic products.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="px-4">
                <div className="bg-white rounded-lg shadow-md p-8 md:p-10">
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-300 flex items-center justify-center">
                      {/* Placeholder for customer image */}
                      <span className="text-gray-500">Photo</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-500 text-xl mx-0.5" />
                    ))}
                  </div>
                  
                  <div className="mb-6 text-center">
                    <FaQuoteLeft className="text-4xl mx-auto mb-4" style={{ color: '#E8F5E9' }} />
                    <p className="text-gray-700 text-lg italic leading-relaxed">
                      {testimonial.text}
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <h4 className="text-xl font-bold" style={{ color: '#4CAF50' }}>{testimonial.name}</h4>
                    <p style={{ color: '#1B5E20' }}>{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
