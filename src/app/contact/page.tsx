'use client';

import { motion } from 'framer-motion';
import ContactForm from '@/components/shared/ContactForm';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-green-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Contact Us
          </motion.h1>
          <motion.p 
            className="text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Have questions about our Ayurvedic products? Our experts are here to help you.
          </motion.p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-green-800 mb-8">Get In Touch</h2>
              <ContactForm 
                title="Send Us a Message"
                subtitle="Fill out the form below and our team will get back to you as soon as possible."
                showOffers={false}
              />
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col justify-between"
            >
              <div>
                <h2 className="text-3xl font-bold text-green-800 mb-8">Contact Information</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="bg-green-100 p-3 rounded-lg mr-4">
                      <FaPhone className="text-xl text-green-700" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-green-800 mb-2">Phone</h3>
                      <p className="text-gray-600 mb-1">Customer Support:</p>
                      <a href="tel:6389362607" className="text-green-700 font-medium hover:underline">
                        +91 6389362607
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-green-100 p-3 rounded-lg mr-4">
                      <FaEnvelope className="text-xl text-green-700" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-green-800 mb-2">Email</h3>
                      <p className="text-gray-600 mb-1">For inquiries:</p>
                      <a href="mailto:mkbagaria13@gmail.com" className="text-green-700 font-medium hover:underline">
                        mkbagaria13@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-green-100 p-3 rounded-lg mr-4">
                      <FaClock className="text-xl text-green-700" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-green-800 mb-2">Business Hours</h3>
                      <p className="text-gray-600">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 p-6 bg-green-50 rounded-lg">
                <h3 className="text-xl font-bold text-green-800 mb-4">We're Here To Help</h3>
                <p className="text-gray-600 mb-4">
                  Our Ayurvedic consultants are available to answer any questions you might have about our 
                  products and how they can help with your specific health concerns.
                </p>
                <p className="text-gray-600">
                  Don't hesitate to reach out to us through any of the contact methods listed above.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-green-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our products and services
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "How do I know which product is right for me?",
                answer: "Our products are designed to address specific health concerns. You can browse our product descriptions to find the one that matches your needs, or contact our Ayurvedic consultants for personalized recommendations."
              },
              {
                question: "Are your products 100% natural?",
                answer: "Yes, all our products are made from 100% natural herbs and ingredients, following authentic Ayurvedic formulations. We do not use any synthetic additives or chemicals."
              },
              {
                question: "How long does shipping take?",
                answer: "We typically process orders within 1-2 business days. Standard shipping takes 3-5 business days to deliver across India. We also offer express shipping options at checkout."
              },
              {
                question: "Do your products have any side effects?",
                answer: "Our products are formulated using natural ingredients that are generally well-tolerated. However, individual reactions may vary. We recommend consulting with your healthcare provider before starting any new supplement regimen."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm mb-4 last:mb-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-green-800 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
