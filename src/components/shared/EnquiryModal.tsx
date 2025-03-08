'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaUser, FaPhone, FaComment, FaCheckCircle } from 'react-icons/fa';
import { SITE_CONSTANTS } from '@/utils/constants';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
}

export default function EnquiryModal({ isOpen, onClose, productName }: EnquiryModalProps) {
  const { CONTACT_PHONE } = SITE_CONSTANTS;
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          mobile: formData.mobile,
          message: formData.message,
          productName
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', mobile: '', message: '' });
        setTimeout(() => {
          onClose();
          setSubmitStatus('idle');
        }, 3000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="rounded-lg shadow-xl w-full max-w-md z-10 relative overflow-hidden"
            style={{
              backgroundColor: '#FFFFFF',
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2366BB6A' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1.5'/%3E%3Ccircle cx='13' cy='13' r='1.5'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '20px 20px',
              border: '2px solid #66BB6A',
              position: 'relative'
            }}
          >
            {/* Animated border effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div 
                className="absolute top-0 left-0 w-[200%] h-[200%]"
                style={{
                  background: 'linear-gradient(90deg, transparent, #66BB6A80, transparent)',
                  animation: 'flowingBorder 3s linear infinite',
                  backgroundSize: '200% 200%'
                }}
              />
            </div>
            <style jsx global>{`
              @keyframes flowingBorder {
                0% { transform: translate(-50%, -50%) rotate(0deg); }
                100% { transform: translate(-50%, -50%) rotate(360deg); }
              }
            `}</style>
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold" style={{ color: '#2E7D32' }}>Enquire About {productName}</h3>
                <button 
                  onClick={onClose}
                  className="transition-colors hover:opacity-80"
                  style={{ color: '#8BC34A' }}
                >
                  <FaTimes />
                </button>
              </div>
              
              {submitStatus === 'success' ? (
                <motion.div 
                  className="border rounded-md p-6 text-center"
                  style={{ 
                    backgroundColor: '#E8F5E950', 
                    borderColor: '#4CAF50',
                    boxShadow: 'inset 0 0 20px #E8F5E980'
                  }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaCheckCircle className="text-4xl mx-auto mb-4" style={{ color: '#4CAF50' }} />
                  <h4 className="text-xl font-bold mb-2" style={{ color: '#2E7D32' }}>Thank you for your enquiry!</h4>
                  <p style={{ color: '#1B5E20' }}>We will contact you shortly about {productName}.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block font-medium mb-2" style={{ color: '#2E7D32' }}>Your Name*</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <FaUser style={{ color: '#8BC34A' }} />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 px-4 py-3 border rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-opacity-30"
                        style={{
                          borderColor: '#e5e5e5',
                          boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.03)',
                          backgroundColor: 'rgba(255, 255, 255, 0.9)',
                          color: '#666666'
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = '#4CAF50';
                          e.target.style.boxShadow = '0 0 0 3px #4CAF5030';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = '#e5e5e5';
                          e.target.style.boxShadow = 'inset 0 2px 4px rgba(0, 0, 0, 0.03)';
                        }}
                        placeholder="Enter your full name"
                        className="w-full pl-10 px-4 py-3 border rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-opacity-30 placeholder-gray-500"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="mobile" className="block font-medium mb-2" style={{ color: '#2E7D32' }}>Mobile Number*</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <FaPhone style={{ color: '#8BC34A' }} />
                      </div>
                      <input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 px-4 py-3 border rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-opacity-30"
                        style={{
                          borderColor: '#e5e5e5',
                          boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.03)',
                          backgroundColor: 'rgba(255, 255, 255, 0.9)',
                          color: '#666666'
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = '#4CAF50';
                          e.target.style.boxShadow = '0 0 0 3px #4CAF5030';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = '#e5e5e5';
                          e.target.style.boxShadow = 'inset 0 2px 4px rgba(0, 0, 0, 0.03)';
                        }}
                        placeholder="Enter your mobile number"
                        className="w-full pl-10 px-4 py-3 border rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-opacity-30 placeholder-gray-500"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="message" className="block font-medium mb-2" style={{ color: '#2E7D32' }}>Message (Optional)</label>
                    <div className="relative">
                      <div className="absolute top-3 left-3 pointer-events-none">
                        <FaComment style={{ color: '#8BC34A' }} />
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full pl-10 px-4 py-3 border rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-opacity-30 min-h-[100px]"
                        style={{
                          borderColor: '#e5e5e5',
                          boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.03)',
                          backgroundColor: 'rgba(255, 255, 255, 0.9)',
                          color: '#666666'
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = '#4CAF50';
                          e.target.style.boxShadow = '0 0 0 3px #4CAF5030';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = '#e5e5e5';
                          e.target.style.boxShadow = 'inset 0 2px 4px rgba(0, 0, 0, 0.03)';
                        }}
                        placeholder="Any specific questions about this product?"
                        className="w-full pl-10 px-4 py-3 border rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-opacity-30 placeholder-gray-500"
                      />
                    </div>
                  </div>
                  
                  {submitStatus === 'error' && (
                    <div className="p-4 rounded-md mb-4" style={{ backgroundColor: 'rgba(220, 38, 38, 0.1)', color: '#991B1B' }}>
                      <p>Something went wrong. Please try again or call us directly.</p>
                    </div>
                  )}
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full text-white font-bold py-3 px-6 rounded-md transition-all disabled:opacity-70"
                    style={{ 
                      backgroundColor: '#4CAF50',
                      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                    }}
                    whileHover={{ 
                      backgroundColor: '#66BB6A',
                      boxShadow: '0 6px 8px rgba(0, 0, 0, 0.15)'
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? 'Sending...' : 'Submit Enquiry'}
                  </motion.button>
                </form>
              )}
              
              <p className="mt-4 text-center text-sm" style={{ color: '#1B5E20' }}>
                You can also call us directly at{' '}
                <a 
                  href={`tel:${CONTACT_PHONE}`} 
                  style={{ color: '#4CAF50', fontWeight: 500 }}
                  className="hover:underline"
                >
                  {CONTACT_PHONE}
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
