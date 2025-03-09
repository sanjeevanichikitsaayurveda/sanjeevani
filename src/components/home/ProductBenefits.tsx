'use client';
import { motion } from 'framer-motion';
import { FaFlask, FaShieldAlt, FaUserMd, FaSearchPlus, FaCheckCircle, FaStore } from 'react-icons/fa';

// Benefits data
const benefits = [
  {
    id: 1,
    icon: <FaFlask className="text-4xl text-green-600" />,
    title: "RIGHT COMBINATION OF INGREDIENTS",
    description: "All ingredients are carefully sourced and the formulation is scientifically backed to get optimum results."
  },
  {
    id: 2,
    icon: <FaShieldAlt className="text-4xl text-green-600" />,
    title: "NO SIDE-EFFECTS",
    description: "No side effects have been observed in any of our customers. We monitor usage and dosage in all our customers."
  },
  {
    id: 3,
    icon: <FaUserMd className="text-4xl text-green-600" />,
    title: "CUSTOMER VALUE",
    description: "Get personalized advice regarding any disease free of cost from our ayurvedic experts."
  },
  {
    id: 4,
    icon: <FaSearchPlus className="text-4xl text-green-600" />,
    title: "RESEARCHED PRODUCTS",
    description: "Our ayurvedic medicines consist of most powerful healing ingredients that can cure diseases naturally and promotes wellness and fitness."
  },
  {
    id: 5,
    icon: <FaCheckCircle className="text-4xl text-green-600" />,
    title: "APPROVED BY GOVERNMENT",
    description: "Our genuine ayurvedic products are certified by Ministry of AYUSH, FSSAI, GMP and ISO."
  },
  {
    id: 6,
    icon: <FaStore className="text-4xl text-green-600" />,
    title: "100% AYURVEDIC",
    description: "Our herbal and ayurvedic products are made from natural ingredients which are pure, safe and clean."
  }
];

export default function ProductBenefits() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-700">
            Why Choose Our Products
          </h2>
          <p className="max-w-2xl mx-auto text-green-800">
            At Sanjeevani Chikitsa Ayurveda, we are committed to providing the highest quality Ayurvedic products
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                  {benefit.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-3 text-green-700">{benefit.title}</h3>
              <p className="text-gray-700 text-center">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
