'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaSearch } from 'react-icons/fa';
import EnquiryModal from '@/components/shared/EnquiryModal';
import { PRODUCTS_DATA, PRODUCT_CATEGORIES, SITE_CONSTANTS } from '@/utils/constants';

export default function ProductsPage() {
  const { COLORS } = SITE_CONSTANTS;
  
  return (
    <div className="pt-8 pb-16">
      {/* Hero Section */}
      <section className="relative text-white py-20" style={{ backgroundColor: COLORS.PRIMARY }}>
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Ayurvedic Products
          </motion.h1>
          <motion.p 
            className="text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Premium natural formulations for men's sexual health and vitality
          </motion.p>
        </div>
      </section>

      {/* Products Showcase */}
      <div className="py-16" style={{
        backgroundColor: '#FFFFFF',
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23${COLORS.PRIMARY.slice(1)}' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1.5'/%3E%3Ccircle cx='13' cy='13' r='1.5'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '20px 20px'
      }}>
        <div className="container mx-auto px-4">
          <ProductsShowcase products={PRODUCTS_DATA} />
        </div>
      </div>
    </div>
  );
}

// Client component for product interactions
interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
  category: string;
}

function ProductsShowcase({ products }: { products: Product[] }) {
  
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = PRODUCT_CATEGORIES;

  const openEnquiryModal = (productName: string) => {
    setSelectedProduct(productName);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* Filters and Search */}
      <div className="mb-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeCategory === category.id 
                    ? `bg-[${COLORS.PRIMARY}] text-white` 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Search */}
          <div className="relative w-full md:w-auto">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full md:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2"
              style={{ 
                "--tw-ring-color": COLORS.PRIMARY 
              } as React.CSSProperties}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product: Product, index: number) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-64 bg-gray-200">
                {/* Placeholder for product image */}
                <div className="absolute inset-0 flex items-center justify-center bg-gray-300">
                  <span className="text-gray-500">Product Image</span>
                </div>
              </div>
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold text-green-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <p className="text-2xl font-bold text-green-700 mb-4">{product.price}</p>
                <button
                  onClick={() => openEnquiryModal(product.name)}
                  className="w-full bg-green-700 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
                >
                  Enquire Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">No products match your search criteria.</p>
          <button
            onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
            className="mt-4 px-6 py-2 bg-green-700 text-white rounded-md hover:bg-green-600 transition-colors"
          >
            View All Products
          </button>
        </div>
      )}

      {/* Enquiry Modal */}
      <EnquiryModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        productName={selectedProduct || ''}
      />
    </div>
  );
}
