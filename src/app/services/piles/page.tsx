import React from 'react';
import { GiMedicines } from 'react-icons/gi';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Piles (Hemorrhoids) Treatment | Sanjeevani Chikitsa Ayurveda',
  description: 'Natural Ayurvedic treatment for piles (hemorrhoids) without surgery. Learn about our effective herbal remedies and holistic approach.',
};

export default function PilesPage() {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8 mb-12 text-white text-center">
            <div className="mx-auto w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <GiMedicines size={40} className="text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Piles (Hemorrhoids) Treatment</h1>
            <p className="text-lg text-white/90">
              Effective natural solutions for hemorrhoids through traditional Ayurveda
            </p>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none text-gray-800">
            <h2>Understanding Piles (Hemorrhoids)</h2>
            <p>
              Hemorrhoids, commonly known as piles, are swollen and distended veins in the lower 
              rectum and anus. This condition can cause discomfort, pain, bleeding, and affect 
              your quality of life. At Sanjeevani Chikitsa Ayurveda, we offer comprehensive 
              natural treatments for both internal and external hemorrhoids.
            </p>

            <h3>Ayurvedic Perspective on Piles</h3>
            <p>
              In Ayurveda, piles (Arshas) are primarily associated with imbalances in Vata and 
              Pitta doshas, often triggered by poor dietary habits, sedentary lifestyle, chronic 
              constipation, and excessive straining during bowel movements. Our approach focuses 
              on restoring balance to these doshas and addressing the root causes.
            </p>

            <h3>Our Comprehensive Treatment Approach</h3>
            <ul>
              <li>
                <strong>Customized Herbal Formulations:</strong> Specialized preparations using 
                herbs like Haritaki, Triphala, Ashoka, and Nagkesar that help reduce inflammation, 
                strengthen vein walls, and promote healing.
              </li>
              <li>
                <strong>Dietary Modifications:</strong> Personalized nutrition plans that emphasize 
                fiber-rich foods, adequate hydration, and specific ingredients that soften stool 
                and reduce strain during bowel movements.
              </li>
              <li>
                <strong>Specialized Therapies:</strong> Localized treatments including medicated 
                oils, herbal pastes, and specialized Basti (enema) procedures that provide direct 
                relief and promote healing.
              </li>
              <li>
                <strong>Lifestyle Recommendations:</strong> Guidance on proper sitting postures, 
                exercise routines, and daily habits that can prevent recurrence and promote 
                long-term recovery.
              </li>
            </ul>

            <h3>Benefits of Ayurvedic Piles Treatment</h3>
            <ul>
              <li>Natural pain and inflammation relief without side effects</li>
              <li>Reduction in bleeding and discharge</li>
              <li>Shrinking of swollen hemorrhoidal tissues</li>
              <li>Improved bowel movements and digestion</li>
              <li>Prevention of recurrence through addressing root causes</li>
              <li>Avoidance of surgical interventions in many cases</li>
            </ul>

            <h3>When to Seek Treatment</h3>
            <p>
              If you're experiencing symptoms such as rectal bleeding, pain or discomfort during 
              bowel movements, itching or irritation in the anal region, or lumps near the anus, 
              our Ayurvedic treatments can offer significant relief. Even in advanced cases where 
              surgery might be suggested, our treatments can provide substantial improvement.
            </p>

            <div className="bg-green-50 p-6 rounded-lg border border-green-200 my-8">
              <h3 className="text-green-800 mb-3">Take the First Step Toward Relief</h3>
              <p className="mb-4">
                Our experienced practitioners provide discreet, compassionate care for this sensitive 
                condition. Through our holistic approach, you can find lasting relief without relying 
                on invasive procedures.
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
