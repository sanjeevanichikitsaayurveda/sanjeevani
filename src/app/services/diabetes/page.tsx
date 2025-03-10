import React from 'react';
import { MdOutlineHealthAndSafety } from 'react-icons/md';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Diabetes Treatment | Sanjeevani Chikitsa Ayurveda',
  description: 'Natural Ayurvedic management for diabetes using powerful herbs like giloy, fenugreek, and turmeric for effective blood sugar control.',
};

export default function DiabetesPage() {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8 mb-12 text-white text-center">
            <div className="mx-auto w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <MdOutlineHealthAndSafety size={40} className="text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Diabetes Management</h1>
            <p className="text-lg text-white/90">
              Natural approaches to blood sugar control through traditional Ayurveda
            </p>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none text-gray-800">
            <h2>Ayurvedic Approach to Diabetes</h2>
            <p>
              Diabetes (Madhumeha in Ayurveda) is characterized by high blood sugar levels and 
              requires a comprehensive management approach. At Sanjeevani Chikitsa Ayurveda, 
              we offer natural, effective treatments that complement conventional medical care 
              and focus on addressing the root causes of the condition.
            </p>

            <h3>Understanding Diabetes from an Ayurvedic Perspective</h3>
            <p>
              Ayurveda views diabetes as a disorder resulting from imbalances in the Kapha and 
              Pitta doshas, along with diminished Ojas (vital energy). Our approach focuses on 
              restoring these imbalances through a combination of herbal remedies, dietary changes, 
              and lifestyle modifications tailored to your specific constitution.
            </p>

            <h3>Our Comprehensive Diabetes Management</h3>
            <ul>
              <li>
                <strong>Powerful Herbal Formulations:</strong> Our treatments include potent herbs like 
                Giloy (Tinospora cordifolia), Fenugreek (Methi), Turmeric (Haldi), Neem, Bitter Gourd 
                (Karela), and Gymnema Sylvestre (Gurmar) that have been scientifically recognized for 
                their blood sugar regulating properties.
              </li>
              <li>
                <strong>Personalized Diet Plans:</strong> Customized nutrition guidance that helps stabilize 
                blood sugar levels, improve insulin sensitivity, and manage weight – a crucial factor in 
                diabetes management.
              </li>
              <li>
                <strong>Panchakarma Therapies:</strong> Specialized detoxification procedures that help 
                remove toxins and improve cellular function for better metabolic health.
              </li>
              <li>
                <strong>Yoga and Exercise:</strong> Targeted physical practices that improve circulation, 
                reduce stress, and enhance insulin sensitivity.
              </li>
              <li>
                <strong>Stress Management:</strong> Techniques to reduce stress, which plays a significant 
                role in blood sugar fluctuations and overall diabetes management.
              </li>
            </ul>

            <h3>Benefits of Our Ayurvedic Approach</h3>
            <ul>
              <li>Natural support for healthy blood sugar levels</li>
              <li>Reduced dependency on medications in many cases (in coordination with your physician)</li>
              <li>Improved energy levels and reduced fatigue</li>
              <li>Better management of diabetes-related complications</li>
              <li>Enhanced overall well-being and quality of life</li>
              <li>Sustainable approach to long-term diabetes management</li>
            </ul>

            <h3>Who Can Benefit</h3>
            <p>
              Our treatments are suitable for individuals with both Type 2 diabetes and prediabetes. 
              For Type 1 diabetes, our approach can complement (though not replace) conventional insulin 
              therapy. We always recommend coordinating our treatments with your primary healthcare provider 
              for optimal results.
            </p>

            <div className="bg-green-50 p-6 rounded-lg border border-green-200 my-8">
              <h3 className="text-green-800 mb-3">Take Control of Your Health</h3>
              <p className="mb-4">
                Our experienced Ayurvedic practitioners will work with you to develop a personalized 
                treatment plan that addresses your specific needs and health goals. With consistent 
                application, many of our patients have seen significant improvements in their blood 
                sugar control and overall health.
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
