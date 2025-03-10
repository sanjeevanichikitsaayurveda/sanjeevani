import React from 'react';
import { FaWeightScale, FaArrowRight } from 'react-icons/fa6';
import { GiMedicines, GiHealthNormal } from 'react-icons/gi';
import { MdOutlineHealthAndSafety } from 'react-icons/md';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | Sanjeevani Chikitsa Ayurveda',
  description: 'Discover our comprehensive range of Ayurvedic treatments for weight loss, piles, diabetes, and men\'s health issues.',
};

// Service data
const services = [
  {
    id: 'weight-loss',
    title: 'WEIGHT LOSS',
    description: 'Before you try your next crash diet or launch a new regime to lose weight, stop and think about our natural approach.',
    icon: <FaWeightScale size={44} className="text-white" />,
    color: 'from-green-600 to-green-700',
    link: '/services/weight-loss'
  },
  {
    id: 'piles',
    title: 'PILES',
    description: 'Hemorrhoids, also known as piles, are swollen and distended veins in the lower rectum and anus that can be treated naturally.',
    icon: <GiMedicines size={44} className="text-white" />,
    color: 'from-green-600 to-green-700',
    link: '/services/piles'
  },
  {
    id: 'mens-health',
    title: 'MENS HEALTH',
    description: 'Sexual dysfunction is normally treated by correcting or addressing the underlying problem with our proven Ayurvedic treatments.',
    icon: <GiHealthNormal size={44} className="text-white" />,
    color: 'from-green-600 to-green-700',
    link: '/services/mens-health'
  },
  {
    id: 'diabetes',
    title: 'DIABETES',
    description: 'Our Diabetes treatment is a blend of powerful ayurvedic herbs like giloy, fenugreek, turmeric, etc. for natural blood sugar control.',
    icon: <MdOutlineHealthAndSafety size={44} className="text-white" />,
    color: 'from-green-600 to-green-700',
    link: '/services/diabetes'
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of Ayurvedic treatments designed to address 
              your health concerns naturally and effectively.
            </p>
          </div>

          {/* Services List */}
          <div className="grid grid-cols-1 gap-10">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-xl">
                <div className="flex flex-col md:flex-row">
                  <div className={`bg-gradient-to-br ${service.color} p-8 md:w-1/3 flex items-center justify-center`}>
                    <div className="bg-white/20 w-24 h-24 rounded-full flex items-center justify-center">
                      {service.icon}
                    </div>
                  </div>
                  
                  <div className="p-8 md:w-2/3">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h2>
                    <p className="text-gray-600 mb-6 text-lg">{service.description}</p>
                    
                    <Link 
                      href={service.link}
                      className="inline-flex items-center text-green-600 hover:text-green-800 transition-colors group font-medium"
                    >
                      <span className="mr-2">LEARN MORE</span>
                      <FaArrowRight className="transform transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call To Action */}
          <div className="mt-16 bg-gradient-to-br from-green-600 to-green-700 rounded-xl p-8 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Personalized Consultation?</h2>
            <p className="text-white/90 mb-6 text-lg">
              Our experienced Ayurvedic practitioners are ready to help you find the perfect treatment for your specific needs.
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-white text-green-700 px-8 py-3 rounded-full font-medium hover:bg-green-50 transition-colors"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
