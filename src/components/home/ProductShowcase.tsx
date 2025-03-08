'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import EnquiryModal from '../shared/EnquiryModal';
import { PRODUCTS_DATA } from '@/utils/constants';

// Use a subset of products for the homepage showcase
const products = PRODUCTS_DATA.slice(0, 6).map(product => ({
  id: product.id,
  name: product.name,
  // Use a shorter description for the homepage
  description: product.description.split('.')[0] + '.',
  image: product.image,
  price: product.price
}));

export default function ProductShowcase() {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openEnquiryModal = (productName: string) => {
    setSelectedProduct(productName);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#4CAF50' }}>
            Our Top Performing Products
          </h2>
          <p className="max-w-2xl mx-auto" style={{ color: '#1B5E20' }}>
            Discover our premium range of Ayurvedic formulations specially crafted for men&apos;s sexual wellness and vitality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative h-64 bg-gray-200">
                {/* Placeholder for product image */}
                {product.image ? (
                  <Image 
                    src={product.image} 
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-300">
                    <span className="text-gray-500">Product Image</span>
                  </div>
                )}
              </div>
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold mb-2" style={{ color: '#4CAF50' }}>{product.name}</h3>
                <p className="mb-4" style={{ color: '#1B5E20' }}>{product.description}</p>
                <p className="text-2xl font-bold mb-4" style={{ color: '#8BC34A' }}>{product.price}</p>
                <button
                  onClick={() => openEnquiryModal(product.name)}
                  className="w-full text-white font-medium py-2 px-4 rounded-md transition-colors"
                  style={{ 
                    backgroundColor: '#4CAF50',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = '#8BC34A';
                    e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.15)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = '#4CAF50';
                    e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
                  }}
                >
                  Enquire Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/products" 
            className="inline-flex items-center justify-center text-white font-bold py-3 px-8 rounded-md transition-colors"
            style={{ 
              backgroundColor: '#4CAF50',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#8BC34A';
              e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.15)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#4CAF50';
              e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
            }}
          >
            View All Products
          </Link>
        </div>
      </div>

      {/* Enquiry Modal */}
      <EnquiryModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        productName={selectedProduct || ''}
      />
    </section>
  );
}
