// Site constants - all static data is stored here for easy updates
export const SITE_CONSTANTS = {
  // Business Information
  BUSINESS_NAME: "Sanjeevani Chikitsa Ayurveda",
  BUSINESS_DESCRIPTION: "Providing authentic Ayurvedic products for men's sexual wellness. Our products are based on ancient Ayurvedic formulations to promote natural health and vitality.",
  CONTACT_EMAIL: "mkbagaria13@gmail.com",
  CONTACT_PHONE: "9352684773",
  WHATSAPP_NUMBER: "919352684773",
  
  // Address
  BUSINESS_ADDRESS: "123 Ayurveda Street, Jaipur, Rajasthan, India",
  BUSINESS_PIN: "302001",
  
  // Business Hours
  BUSINESS_HOURS: {
    WEEKDAYS: "10:00 AM - 7:00 PM",
    WEEKENDS: "11:00 AM - 5:00 PM",
  },
  
  // Social Media
  SOCIAL_MEDIA: {
    FACEBOOK: "https://facebook.com/sanjeevaniayurveda",
    INSTAGRAM: "https://instagram.com/sanjeevanichikitsaayurveda",
    YOUTUBE: "https://youtube.com/c/sanjeevaniayurveda",
  },
  
  // Email Configuration
  EMAIL: {
    ENQUIRY_EMAIL: "sanjeevanichikitsaayurveda@gmail.com",
  },
  

};

// Product categories for the filter
export const PRODUCT_CATEGORIES = [
  { id: 'all', name: 'All Products' },
  { id: 'performance', name: 'Performance' },
  { id: 'vitality', name: 'Vitality' },
  { id: 'reproductive', name: 'Reproductive Health' }
];

// Dummy testimonials data
export const TESTIMONIALS_DATA = [
  {
    id: 1,
    name: "Rajesh Kumar",
    location: "Delhi",
    text: "मैंने पिछले 6 महीने से आपके उत्पाद का उपयोग कर रहा हूं और मुझे अद्भुत परिणाम मिले हैं। मेरी ऊर्जा और स्टैमिना में काफी सुधार हुआ है।",
    rating: 5
  },
  {
    id: 2,
    name: "Mahesh Singh",
    location: "Jaipur",
    text: "The Ashwagandha Power formula has completely transformed my energy levels. After just one month, I noticed a significant difference in my overall wellbeing and vitality.",
    rating: 5
  },
  {
    id: 3,
    name: "Suresh Patel",
    location: "Mumbai",
    text: "मैं 45 साल का हूं और मेरे जीवन में एक नया उत्साह आया है संजीवनी के उत्पादों के कारण। मेरी पत्नी भी इन परिवर्तनों से बहुत खुश है।",
    rating: 4
  },
  {
    id: 4,
    name: "Vijay Sharma",
    location: "Bangalore",
    text: "I've tried many supplements before, but nothing compares to the quality and effectiveness of Sanjeevani's products. I appreciate the natural approach to male wellness.",
    rating: 5
  },
  {
    id: 5,
    name: "Praveen Gupta",
    location: "Chandigarh",
    text: "शिलाजीत गोल्ड ने मेरे स्वास्थ्य में अद्भुत सुधार किया है। मुझे अब थकान नहीं होती और मैं पूरे दिन ऊर्जावान रहता हूं।",
    rating: 5
  }
];

// Dummy product data
export const PRODUCTS_DATA = [
  {
    id: 1,
    name: 'Ashwagandha Power',
    description: 'Boost stamina and energy naturally with our premium Ashwagandha formula. This powerful adaptogen helps reduce stress and anxiety while improving strength and vitality.',
    image: '/products/product1.jpg',
    price: '₹899',
    category: 'vitality'
  },
  {
    id: 2,
    name: 'Shilajit Gold',
    description: 'Pure Himalayan Shilajit for enhanced virility and vitality. Rich in fulvic acid and minerals, it helps improve testosterone levels, stamina, and overall male performance.',
    image: '/products/product2.jpg',
    price: '₹1,299',
    category: 'performance'
  },
  {
    id: 3,
    name: 'Safed Musli Plus',
    description: 'Traditional remedy for male potency and reproductive health. This ancient herb is known for its aphrodisiac properties and ability to improve sperm count and quality.',
    image: '/products/product3.jpg',
    price: '₹999',
    category: 'reproductive'
  },
  {
    id: 4,
    name: 'Kaunch Beej Formula',
    description: 'Ancient ayurvedic herb for sexual strength and performance. Kaunch Beej (Mucuna Pruriens) is known to support healthy testosterone levels and enhance libido naturally.',
    image: '/products/product4.jpg',
    price: '₹849',
    category: 'performance'
  },
  {
    id: 5,
    name: 'Tribulus Power',
    description: 'Natural testosterone booster for improved performance and libido. Tribulus terrestris has been used for centuries to enhance male sexual function and athletic performance.',
    image: '/products/product5.jpg',
    price: '₹799',
    category: 'performance'
  },
  {
    id: 6,
    name: 'Vigor Blend',
    description: 'Proprietary blend of herbs for complete male rejuvenation. This comprehensive formula combines multiple potent herbs to address all aspects of male sexual health.',
    image: '/products/product6.jpg',
    price: '₹1,499',
    category: 'vitality'
  },
  {
    id: 7,
    name: 'Gokshura Extract',
    description: 'Powerful herb for reproductive health and urinary wellness. Gokshura helps improve sexual function while also supporting prostate and kidney health.',
    image: '/products/product7.jpg',
    price: '₹749',
    category: 'reproductive'
  },
  {
    id: 8,
    name: 'Shatavari Men\'s Formula',
    description: 'Balanced hormonal support and increased vitality. Though traditionally used for women\'s health, our special men\'s formula supports endocrine function and energy levels.',
    image: '/products/product8.jpg',
    price: '₹899',
    category: 'vitality'
  },
  {
    id: 9,
    name: 'Male Support Pack',
    description: 'Complete 30-day program for comprehensive male health. This pack includes a combination of our top products designed to work synergistically for optimal results.',
    image: '/products/product9.jpg',
    price: '₹2,999',
    category: 'performance'
  }
];
