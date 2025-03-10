import React from 'react';
import { FaWeightScale } from 'react-icons/fa6';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Weight Loss Treatment | Sanjeevani Chikitsa Ayurveda',
  description: 'Natural Ayurvedic approach to weight loss without crash diets or extreme regimens. Learn about our holistic weight management solutions.',
};

export default function WeightLossPage() {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8 mb-12 text-white text-center">
            <div className="mx-auto w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <FaWeightScale size={40} className="text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Natural Weight Loss Solutions</h1>
            <p className="text-lg text-white/90">
              A balanced approach to sustainable weight management through Ayurveda
            </p>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none text-gray-800">
            <h2>The Ayurvedic Approach to Weight Loss</h2>
            <p>
              Before you try your next crash diet or launch a new extreme regimen to lose weight, 
              consider our natural approach to weight management. At Sanjeevani Chikitsa Ayurveda, 
              we believe in addressing the root causes of weight gain through holistic practices that 
              promote overall health.
            </p>

            <h3>Understanding Your Body Type (Dosha)</h3>
            <p>
              In Ayurveda, weight management begins with understanding your unique body constitution 
              or dosha (Vata, Pitta, or Kapha). Each body type has different metabolic tendencies, and 
              our treatments are personalized based on your specific dosha to ensure optimal results.
            </p>

            <h3>Our Weight Management Solutions</h3>
            <ul>
              <li>
                <strong>Personalized Diet Plans:</strong> Custom nutrition guidance based on your dosha 
                that helps regulate metabolism and reduce cravings.
              </li>
              <li>
                <strong>Herbal Formulations:</strong> Traditional Ayurvedic herbs that support healthy 
                digestion, metabolism, and fat burning without harmful side effects.
              </li>
              <li>
                <strong>Panchakarma Therapies:</strong> Detoxification procedures that eliminate toxins 
                (ama) which contribute to weight gain and metabolic slowdown.
              </li>
              <li>
                <strong>Lifestyle Counseling:</strong> Guidance on daily routines, exercise, sleep patterns, 
                and stress management techniques that support weight loss.
              </li>
            </ul>

            <h3>Benefits of Our Approach</h3>
            <ul>
              <li>Sustainable weight loss without rebound effect</li>
              <li>Improved digestion and metabolism</li>
              <li>Enhanced energy levels and vitality</li>
              <li>Reduced inflammation throughout the body</li>
              <li>Better sleep quality and stress management</li>
              <li>Long-term health benefits beyond weight management</li>
            </ul>

            <h3>Success Stories</h3>
            <p>
              Many of our patients have experienced significant improvements not just in their weight, 
              but in their overall health and quality of life. Our holistic approach addresses multiple 
              aspects of health simultaneously, resulting in comprehensive wellness.
            </p>

            <div className="bg-green-50 p-6 rounded-lg border border-green-200 my-8">
              <h3 className="text-green-800 mb-3">Ready to Start Your Journey?</h3>
              <p className="mb-4">
                Our experienced Ayurvedic practitioners are here to guide you through a personalized 
                weight management plan designed specifically for your body type and needs.
              </p>
              <a 
                href="/contact" 
                className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
              >
                Schedule a Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
