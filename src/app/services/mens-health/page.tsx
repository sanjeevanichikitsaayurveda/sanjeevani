import React from 'react';
import { GiHealthNormal } from 'react-icons/gi';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Men's Health Treatment | Sanjeevani Chikitsa Ayurveda",
  description: "Comprehensive Ayurvedic treatments for men's health issues including sexual dysfunction, low energy, and hormonal imbalances using proven natural approaches.",
};

export default function MensHealthPage() {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8 mb-12 text-white text-center">
            <div className="mx-auto w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <GiHealthNormal size={40} className="text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Men's Health Solutions</h1>
            <p className="text-lg text-white/90">
              Holistic Ayurvedic treatments for vitality, sexual health, and overall wellbeing
            </p>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none text-gray-800">
            <h2>Holistic Approach to Men's Health</h2>
            <p>
              At Sanjeevani Chikitsa Ayurveda, we understand that men face unique health challenges 
              that can affect quality of life, confidence, and relationships. Our comprehensive 
              Ayurvedic approach addresses sexual dysfunction, low energy, and hormonal imbalances 
              by treating the root causes rather than just the symptoms.
            </p>

            <h3>Ayurvedic Understanding of Male Vitality</h3>
            <p>
              In Ayurveda, male reproductive health and vitality are linked to the concept of 
              "Shukra Dhatu" (reproductive tissue) and overall dosha balance. Our treatments focus 
              on rejuvenating these vital aspects through specialized herbs, diet, and lifestyle practices 
              that have been proven effective over thousands of years.
            </p>

            <h3>Our Specialized Treatment Areas</h3>
            <ul>
              <li>
                <strong>Sexual Dysfunction:</strong> Comprehensive treatment for erectile dysfunction, 
                premature ejaculation, and low libido through powerful Ayurvedic herbs and therapies.
              </li>
              <li>
                <strong>Energy and Stamina:</strong> Natural enhancement of physical and mental endurance, 
                reducing fatigue and improving overall performance.
              </li>
              <li>
                <strong>Stress Management:</strong> Addressing chronic stress and anxiety that often 
                contribute to male health issues through specialized herbs and relaxation techniques.
              </li>
              <li>
                <strong>Hormonal Balance:</strong> Supporting healthy testosterone levels and other 
                hormonal functions for optimal health and wellbeing.
              </li>
              <li>
                <strong>Prostate Health:</strong> Preventive and supportive treatments for maintaining 
                prostate health and addressing common issues.
              </li>
            </ul>

            <h3>Our Treatment Approach</h3>
            <ul>
              <li>
                <strong>Personalized Herbal Formulations:</strong> Custom preparations using potent herbs 
                like Ashwagandha, Safed Musli, Gokshura, and Shilajit that have been traditionally used 
                to enhance male vitality.
              </li>
              <li>
                <strong>Dietary Guidance:</strong> Specific food recommendations that support reproductive 
                health, enhance energy, and balance hormones.
              </li>
              <li>
                <strong>Specialized Therapies:</strong> Therapeutic treatments including Abhyanga (oil massage), 
                Shirodhara, and other procedures designed to rejuvenate and restore balance.
              </li>
              <li>
                <strong>Yoga and Pranayama:</strong> Targeted postures and breathing exercises that improve 
                circulation, reduce stress, and enhance vitality.
              </li>
            </ul>

            <h3>Benefits of Our Men's Health Treatments</h3>
            <ul>
              <li>Improved sexual function and satisfaction</li>
              <li>Enhanced energy levels and physical stamina</li>
              <li>Reduced stress and anxiety</li>
              <li>Better sleep quality</li>
              <li>Balanced hormones and improved mood</li>
              <li>Overall improvement in confidence and quality of life</li>
            </ul>

            <div className="bg-green-50 p-6 rounded-lg border border-green-200 my-8">
              <h3 className="text-green-800 mb-3">Confidential and Compassionate Care</h3>
              <p className="mb-4">
                We provide a discrete, supportive environment for addressing men's health concerns. 
                Our practitioners understand the sensitive nature of these issues and ensure complete 
                confidentiality and respect.
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
