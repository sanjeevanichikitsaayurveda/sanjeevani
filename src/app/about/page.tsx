'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-green-700 text-white pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About Sanjeevani Chikitsa Ayurveda
          </motion.h1>
          <motion.p 
            className="text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Revitalizing men&apos;s health through authentic Ayurvedic principles since 2010
          </motion.p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-green-800 mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Sanjeevani Chikitsa Ayurveda was founded with a mission to address men&apos;s health concerns 
                through the time-tested wisdom of Ayurveda. Our journey began when our founder, a respected 
                Ayurvedic practitioner, identified a growing need for natural solutions to men&apos;s sexual health issues.
              </p>
              <p className="text-gray-700 mb-4">
                Drawing from ancient Ayurvedic texts and years of clinical experience, we developed our 
                signature line of products specifically formulated to enhance male vitality and wellness 
                without the side effects often associated with synthetic alternatives.
              </p>
              <p className="text-gray-700">
                Today, we pride ourselves on offering premium quality, authentic Ayurvedic remedies that combine 
                traditional knowledge with modern scientific understanding to deliver effective results.
              </p>
            </motion.div>
            
            <motion.div
              className="relative h-96 bg-gray-200 rounded-lg overflow-hidden"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Image
                src="/images/sanjeevni-1.webp"
                alt="About Sanjeevani Chikitsa Ayurveda"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-green-800 mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at Sanjeevani Chikitsa Ayurveda
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Authenticity",
                description: "We stay true to authentic Ayurvedic principles and use only genuine herbs and ingredients in our formulations."
              },
              {
                title: "Quality",
                description: "Every product undergoes rigorous quality testing to ensure purity, potency, and effectiveness."
              },
              {
                title: "Holistic Approach",
                description: "We believe in addressing the root cause of health issues, not just treating symptoms."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-green-800 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-green-800 mb-4">Our Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From ancient wisdom to modern wellness solutions
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                step: 1,
                title: "Ingredient Selection",
                description: "We source the finest herbs and ingredients from trusted suppliers, ensuring the highest quality and purity."
              },
              {
                step: 2,
                title: "Traditional Formulation",
                description: "Our products are crafted according to ancient Ayurvedic recipes, with precise proportions for maximum effectiveness."
              },
              {
                step: 3,
                title: "Modern Processing",
                description: "While respecting traditional methods, we utilize modern technology to enhance bioavailability and shelf stability."
              },
              {
                step: 4,
                title: "Quality Assurance",
                description: "Each batch undergoes rigorous testing for purity, potency, and safety before reaching your hands."
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                className="flex mb-8 last:mb-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mr-6 flex-shrink-0">
                  <div className="w-12 h-12 bg-green-700 text-white rounded-full flex items-center justify-center text-xl font-bold">
                    {process.step}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Experience the Power of Authentic Ayurveda
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Join thousands of satisfied customers who have transformed their health and vitality with our products
          </motion.p>
          <motion.a 
            href="/products" 
            className="inline-block bg-white text-green-700 font-bold py-3 px-8 rounded-md hover:bg-green-100 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Our Products
          </motion.a>
        </div>
      </section>
    </div>
  );
}
