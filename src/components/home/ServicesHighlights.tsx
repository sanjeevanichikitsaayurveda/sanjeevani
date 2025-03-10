'use client';
import { motion } from 'framer-motion';
import { FaWeightScale, FaArrowRight } from 'react-icons/fa6';
import { GiMedicines, GiHealthNormal } from 'react-icons/gi';
import { MdOutlineHealthAndSafety } from 'react-icons/md';
import Link from 'next/link';

// Service data
const services = [
  {
    id: 'weight-loss',
    title: 'WEIGHT LOSS',
    description: 'Before you try your next crash diet or launch a new regime to lose weight, stop and think about our natural approach.',
    icon: <FaWeightScale size={36} className="text-white" />,
    color: 'from-green-600 to-green-700',
    link: '/services/weight-loss'
  },
  {
    id: 'piles',
    title: 'PILES',
    description: 'Hemorrhoids, also known as piles, are swollen and distended veins in the lower rectum and anus that can be treated naturally.',
    icon: <GiMedicines size={36} className="text-white" />,
    color: 'from-green-600 to-green-700',
    link: '/services/piles'
  },
  {
    id: 'mens-health',
    title: 'MENS HEALTH',
    description: 'Sexual dysfunction is normally treated by correcting or addressing the underlying problem with our proven Ayurvedic treatments.',
    icon: <GiHealthNormal size={36} className="text-white" />,
    color: 'from-green-600 to-green-700',
    link: '/services/mens-health'
  },
  {
    id: 'diabetes',
    title: 'DIABETES',
    description: 'Our Diabetes treatment is a blend of powerful ayurvedic herbs like giloy, fenugreek, turmeric, etc. for natural blood sugar control.',
    icon: <MdOutlineHealthAndSafety size={36} className="text-white" />,
    color: 'from-green-600 to-green-700',
    link: '/services/diabetes'
  }
];

export default function ServicesHighlights() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="relative overflow-hidden rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`bg-gradient-to-br ${service.color} p-6 h-full flex flex-col`}>
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                
                <p className="text-white/90 mb-6 flex-grow">
                  {service.description}
                </p>
                
                <Link 
                  href={service.link}
                  className="inline-flex items-center text-white hover:text-green-100 transition-colors group"
                >
                  <span className="font-medium mr-2">LEARN MORE</span>
                  <FaArrowRight className="transform transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/10 rounded-full"></div>
              <div className="absolute top-10 -right-10 w-16 h-16 bg-white/5 rounded-full"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
