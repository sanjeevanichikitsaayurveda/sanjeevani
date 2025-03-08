'use client';

import { FaPhone, FaWhatsapp as WhatsappIcon } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function FloatingButtons() {
  return (
    <>
      {/* Call Button - Right Bottom Corner */}
      <motion.a
        href="tel:9352684773"
        className="fixed bottom-6 right-6 bg-green-700 text-white rounded-full p-4 shadow-lg z-40 hover:bg-green-600 transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <FaPhone className="text-xl" />
      </motion.a>

      {/* WhatsApp Button - Left Bottom Corner */}
      <motion.a
        href="https://wa.me/919352684773"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 bg-green-500 text-white rounded-full p-4 shadow-lg z-40 hover:bg-green-400 transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <WhatsappIcon className="text-xl" />
      </motion.a>
    </>
  );
}
