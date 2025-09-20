'use client';
import { motion } from 'framer-motion';
import {FaClock, FaFlask } from 'react-icons/fa';
import { MdEmergency } from 'react-icons/md';
import { SITE_CONSTANTS } from '@/utils/constants';

export default function HeroSection() {
  const { CONTACT_PHONE} = SITE_CONSTANTS;

  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center" 
          style={{ backgroundImage: "url('/images/sanjeevni-3.webp')" }}
        >
          <div className="absolute inset-0 bg-green-800 opacity-50"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 pt-48 pb-16 md:pt-52 md:pb-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Content */}
          <div className="w-full md:w-7/12 text-white">
            <div className="inline-block bg-green-100 text-green-800 px-4 py-1 rounded-md text-sm font-medium mb-4">
              BEST TREATMENT
            </div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              FROM<br />SANJEEVANI<br />CHIKITSA<br />AYURVEDA
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <a 
                href="/contact"
                className="inline-block bg-green-100 text-green-800 font-medium py-3 px-8 rounded-md hover:bg-white hover:text-green-700 transition-colors"
              >
                CONTACT US
              </a>
            </motion.div>
          </div>
          
          {/* Right Content - Info Card */}
          <motion.div 
            className="w-full md:w-5/12 bg-white rounded-lg shadow-xl p-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Appointments */}
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <div className="text-green-600 mr-3">
                  <FaClock size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-800">APPOINTMENTS</h3>
              </div>
              <div className="pl-10 text-gray-600">
                <p>MON-FRI 9:00-18:00</p>
                <p>SAT-SUN 10:00-14:00</p>
              </div>
            </div>
            
            {/* Test Results */}
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <div className="text-green-600 mr-3">
                  <FaFlask size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-800">TEST RESULT</h3>
              </div>
              <div className="pl-10 text-gray-600">
                <p>You can check your test</p>
                <p>results online.</p>
              </div>
            </div>
            
            {/* Emergency Case */}
            <div>
              <div className="flex items-center mb-2">
                <div className="text-green-600 mr-3">
                  <MdEmergency size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-800">EMERGENCY CASE</h3>
              </div>
              <div className="pl-10">
                <p className="text-green-600 font-bold text-xl">+91 {CONTACT_PHONE}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
