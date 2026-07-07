export interface Video {
  id: string; // YouTube Video ID
  title: string;
  description: string;
  category: 'vlog' | 'food' | 'lifestyle' | 'real-estate';
  thumbnailUrl: string;
  publishedAt: string;
  duration: string;
  viewCount: string;
}

export interface FAQ {
  question: string;
  answer: string;
  category: 'general' | 'collaboration' | 'dubai';
}

export interface Navigation {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: 'youtube' | 'instagram' | 'email' | 'linkedin';
  href: string;
  label: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  priceRange?: string;
  iconName: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}
