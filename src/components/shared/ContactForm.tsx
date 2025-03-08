'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaCheckCircle, FaUser, FaComment, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import { SITE_CONSTANTS } from '@/utils/constants';

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  showOffers?: boolean;
}

export default function ContactForm({ 
  title = "Get In Touch With Us", 
  subtitle = "Have questions about our Ayurvedic products or services? Fill out the form below and our experts will get back to you soon.",
  showOffers = true 
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
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
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const { CONTACT_EMAIL, CONTACT_PHONE } = SITE_CONSTANTS;

  return (
    <div className="rounded-2xl shadow-2xl overflow-hidden">
      <div className="p-8 md:p-10" 
        style={{ 
          backgroundColor: '#FFFFFF',
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%238B4513' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1.5'/%3E%3Ccircle cx='13' cy='13' r='1.5'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '20px 20px'
        }}>
        <motion.h3 
          className="text-2xl md:text-3xl font-bold mb-3"
          style={{ color: '#555555' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
            {title}
        </motion.h3>
          
        <motion.p 
          className="mb-8 text-lg"
          style={{ color: '#777777' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
            {subtitle}
        </motion.p>
          
        {submitStatus === 'success' ? (
            <motion.div 
              className="border rounded-md p-6 text-center"
              style={{ 
                backgroundColor: '#F5DEB350', 
                borderColor: '#8B4513',
                boxShadow: 'inset 0 0 20px #F5DEB380'
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <FaCheckCircle className="text-4xl mx-auto mb-4" style={{ color: '#8B4513' }} />
              <h4 className="text-xl font-bold mb-2" style={{ color: '#5C4033' }}>Message Sent Successfully!</h4>
              <p style={{ color: '#3A2718' }}>
                Thank you for contacting Sanjeevani Chikitsa Ayurveda. Our team will get back to you shortly.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block font-medium mb-2" style={{ color: '#666666' }}>
                    Your Name*
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <FaUser style={{ color: '#CD853F' }} />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 px-4 py-3 border rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-opacity-30 placeholder-gray-500"
                      style={{
                        borderColor: '#e5e5e5',
                        boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.03)',
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        color: '#666666'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#8B4513';
                        e.target.style.boxShadow = '0 0 0 3px #8B451330';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#e5e5e5';
                        e.target.style.boxShadow = 'inset 0 2px 4px rgba(0, 0, 0, 0.03)';
                      }}
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block font-medium mb-2" style={{ color: '#666666' }}>
                    Phone Number*
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <FaPhone style={{ color: '#CD853F' }} />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 px-4 py-3 border rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-opacity-30 placeholder-gray-500"
                      style={{
                        borderColor: '#e5e5e5',
                        boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.03)',
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        color: '#666666'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#8B4513';
                        e.target.style.boxShadow = '0 0 0 3px #8B451330';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#e5e5e5';
                        e.target.style.boxShadow = 'inset 0 2px 4px rgba(0, 0, 0, 0.03)';
                      }}
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block font-medium mb-2" style={{ color: '#666666' }}>
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <FaEnvelope style={{ color: '#CD853F' }} />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 px-4 py-3 border rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-opacity-30 placeholder-gray-500"
                    style={{
                      borderColor: '#e5e5e5',
                      boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.03)',
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      color: '#666666'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#8B4513';
                      e.target.style.boxShadow = '0 0 0 3px #8B451330';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#e5e5e5';
                      e.target.style.boxShadow = 'inset 0 2px 4px rgba(0, 0, 0, 0.03)';
                    }}
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block font-medium mb-2" style={{ color: '#666666' }}>
                  Your Message*
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3 pointer-events-none">
                    <FaComment style={{ color: '#CD853F' }} />
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 px-4 py-3 border rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-opacity-30 min-h-[120px] placeholder-gray-500"
                    style={{
                      borderColor: '#e5e5e5',
                      boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.03)',
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      color: '#666666'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#8B4513';
                      e.target.style.boxShadow = '0 0 0 3px #8B451330';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#e5e5e5';
                      e.target.style.boxShadow = 'inset 0 2px 4px rgba(0, 0, 0, 0.03)';
                    }}
                    placeholder="How can we help you?"
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
                className="w-full text-white font-bold py-3 px-6 rounded-lg transition-all disabled:opacity-70 shadow-md"
                style={{ 
                  backgroundColor: '#7DD076', /* Light green color for button */
                  boxShadow: '0 4px 10px rgba(125, 208, 118, 0.3)' 
                }}
                whileHover={{ 
                  backgroundColor: '#6BBF65',
                  boxShadow: '0 6px 15px rgba(125, 208, 118, 0.4)',
                  transform: 'translateY(-2px)'
                }}
                whileTap={{ 
                  scale: 0.98,
                  boxShadow: '0 2px 5px rgba(125, 208, 118, 0.3)',
                  transform: 'translateY(0)'
                }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          )}
      </div>
    </div>
  );
}
