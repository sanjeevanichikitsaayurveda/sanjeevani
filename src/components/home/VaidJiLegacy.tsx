'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function VaidJiLegacy() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Vaid Ji Image */}
          <div className="mb-8">
            <div className="relative rounded-full overflow-hidden shadow-xl w-48 h-48 mx-auto">
              <Image
                src="/images/vaid-ji-image.png"
                alt="Vaid Ji - Ayurvedic Expert"
                width={192}
                height={192}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
          
          {/* Legacy Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 leading-relaxed">
              A legacy of healing built on 70 years of trust.
            </h2>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
