'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Trust indicator data
const trustIndicators = [
  {
    id: 1,
    image: '/images/trust-indicator-1.webp',
    alt: 'Guarantee'
  },
  {
    id: 2,
    image: '/images/trust-indicator-2.webp',
    alt: 'No Side Effects'
  },
  {
    id: 3,
    image: '/images/trust-indicator-3.webp',
    alt: 'Natural Ingredients'
  },
  {
    id: 4,
    image: '/images/trust-indicator-4.webp',
    alt: 'ISO Certified'
  },
  {
    id: 5,
    image: '/images/trust-indicator-5.webp',
    alt: 'No Preservatives'
  }
];

export default function TrustIndicators() {
  return (
    <section className="py-10 bg-white border-t border-b border-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-green-700 uppercase">
            Certified Manufacturing Facilities. Ethically Conscious. Allergen-Free Products.
          </h2>
          <p className="text-xl md:text-2xl font-medium text-gray-700 mt-2">
            SAFE & TRUSTED. QUALITY IS OUR 1ST PRIORITY
          </p>
        </motion.div>
        
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 pt-4 pb-2 border-t border-pink-200">
            {trustIndicators.map((indicator, index) => (
              <motion.div
                key={indicator.id}
                className="w-24 md:w-28 lg:w-32"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Image
                  src={indicator.image}
                  alt={indicator.alt}
                  width={120}
                  height={120}
                  className="w-full h-auto"
                  onError={(e) => {
                    // Fallback if image doesn't exist
                    const target = e.target as HTMLImageElement;
                    target.src = "https://via.placeholder.com/120?text=Trust+Badge";
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
