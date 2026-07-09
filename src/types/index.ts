export interface Video {
  id: string; // Video ID or Shortcode
  title: string;
  description: string;
  category: string;
  platform: 'youtube' | 'instagram' | 'facebook';
  thumbnailUrl: string;
  publishedAt?: string;
  publishedDate?: string;
  duration?: string | null;
  viewCount?: string | number;
  videoUrl?: string;
  embedUrl?: string;
  featured?: boolean;
  tags?: string[];
  aspectRatio?: string;
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
