import { Service } from '@/types';

export const servicesData: Service[] = [
  {
    id: 'sponsored-content',
    title: 'Sponsored Vlog Integration',
    description: 'Seamless integration of your brand, product, or service into our highly engaging weekly lifestyle and travel vlogs.',
    features: [
      '60-90 seconds dedicated integration segment',
      'Link in video description (first 3 lines)',
      'Pinned comment with brand discount/call-to-action',
      'Instagram Story promotional share',
    ],
    priceRange: '₹35,000 - ₹50,000',
    iconName: 'video',
  },
  {
    id: 'food-reviews',
    title: 'Restaurant & Food Review',
    description: 'Vibrant, authentic, and family-friendly food review vlogs highlighting your restaurant, signature menu, and ambiance in Dubai.',
    features: [
      'Dedicated 8-12 minute YouTube video',
      'Cinematic close-up food shots',
      'Honest tasting review by Mango J & family',
      'Google Maps listing link and location guide inclusion',
    ],
    priceRange: '₹25,000 - ₹35,000',
    iconName: 'utensils',
  },
  {
    id: 'real-estate',
    title: 'Real Estate & Property Tour',
    description: 'High-production home tours and residential walkthroughs showcasing premium properties, neighborhoods, and amenities in Dubai to global Tamil buyers.',
    features: [
      'Full 10-15 minute cinematic property walkthrough',
      'Focus on lifestyle, layout, and family-friendly amenities',
      'Developer/Agent contact details featured in video overlay',
      'Custom thumbnail and high-retention editing style',
    ],
    priceRange: 'Custom Quote',
    iconName: 'home',
  },
  {
    id: 'brand-ambassador',
    title: 'Brand Partnership & Campaigns',
    description: 'A long-term ambassadorship containing multi-video integrations, social media posts, and appearances that build genuine trust and authority for your brand.',
    features: [
      '3-month to 12-month exclusive category alignment',
      'Consistent product placement and recurring brand call-outs',
      'Co-branded Instagram Collab Reels',
      'Usage rights of content for brand advertising',
    ],
    priceRange: 'Custom Quote',
    iconName: 'award',
  },
];
