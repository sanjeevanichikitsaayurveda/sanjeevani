'use client';

import { BsTelephoneFill } from 'react-icons/bs';
import { FaWhatsapp as WhatsappIcon } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function FloatingButtons() {
  return (
    <>
      {/* WhatsApp Button - Right Bottom Corner */}
      <motion.a
        href="https://wa.me/916389362607"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full p-4 shadow-lg z-40 hover:bg-green-400 transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <WhatsappIcon className="text-xl" />
      </motion.a>

      {/* Call Button - Left Bottom Corner */}
      <motion.a
        href="tel:6389362607"
        className="fixed bottom-6 left-6 bg-green-700 text-white rounded-full p-4 shadow-lg z-40 hover:bg-green-600 transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.7,
          type: 'spring',
          stiffness: 300,
          damping: 10
        }}
      >
        <BsTelephoneFill className="text-xl animate-pulse" />
      </motion.a>
    </>
  );
}
