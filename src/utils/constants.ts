// Site constants - all static data is stored here for easy updates
export const SITE_CONSTANTS = {
  // Business Information
  BUSINESS_NAME: "Sanjeevani Chikitsa Ayurveda",
  BUSINESS_DESCRIPTION: "Providing authentic Ayurvedic products for men's sexual wellness. Our products are based on ancient Ayurvedic formulations to promote natural health and vitality.",
  CONTACT_EMAIL: "sanjeevanichikitsaayurveda@gmail.com",
  CONTACT_PHONE: "6389362607",
  WHATSAPP_NUMBER: "6389362607",
  
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
    FACEBOOK: "https://facebook.com/sanjeevanichikitsaayurveda",
    INSTAGRAM: "https://instagram.com/sanjeevanichikitsaayurveda",
    YOUTUBE: "https://youtube.com/c/sanjeevanichikitsaayurveda",
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

// Testimonials data with customer images
export const TESTIMONIALS_DATA = [
  {
    id: 1,
    name: "Rajesh Kumar",
    location: "Delhi",
    text: "मैंने पिछले 6 महीने से आपके उत्पाद का उपयोग कर रहा हूं और मुझे अद्भुत परिणाम मिले हैं। मेरी ऊर्जा और स्टैमिना में काफी सुधार हुआ है।",
    rating: 5,
    image: "/images/review-1.webp"
  },
  {
    id: 2,
    name: "Mahesh Singh",
    location: "Jaipur",
    text: "The Ashwagandha Power formula has completely transformed my energy levels. After just one month, I noticed a significant difference in my overall wellbeing and vitality.",
    rating: 5,
    image: "/images/review-2.webp"
  },
  {
    id: 3,
    name: "Suresh Patel",
    location: "Mumbai",
    text: "मैं 45 साल का हूं और मेरे जीवन में एक नया उत्साह आया है संजीवनी के उत्पादों के कारण। मेरी पत्नी भी इन परिवर्तनों से बहुत खुश है।",
    rating: 4,
    image: "/images/review-3.webp"
  },
  {
    id: 4,
    name: "Vijay Sharma",
    location: "Bangalore",
    text: "I've tried many supplements before, but nothing compares to the quality and effectiveness of Sanjeevani's products. I appreciate the natural approach to male wellness.",
    rating: 5,
    image: "/images/review-4.webp"
  }
];

// Dummy product data
export const PRODUCTS_DATA = [
  {
    id: 1,
    name: 'Power Plus Capsule',
    description: '100% pure Ayurvedic formula to increase sexual endurance and boost testosterone levels. Crafted with potent natural herbs for optimal performance without side effects.',
    image: '/images/products/powerplus-capsule.webp',
    price: '₹3,000',
    category: 'performance'
  },
  {
    id: 2,
    name: 'Power Plus Oil',
    description: 'Pure Ayurvedic oil designed to extend sexual stamina and naturally enhance testosterone levels. Made from premium herbal extracts for safe, side-effect-free use.',
    image: '/images/products/power-plus-oil.webp',
    price: '₹1,500',
    category: 'performance'
  },
  {
    id: 3,
    name: 'Power Plus Capsule + Oil Combo',
    description: 'Comprehensive Ayurvedic combo pack combining Power Plus Capsule and Oil for maximum stamina and testosterone boost. 100% herbal, side-effect-free solution for enhanced vitality.',
    image: '/images/products/power-plus-combo.webp',
    price: '₹4000',
    category: 'performance'
  },
 
];
