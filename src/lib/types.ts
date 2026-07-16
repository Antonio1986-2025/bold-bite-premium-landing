export interface NavLink {
  label: string;
  href: string;
}

export interface BurgerItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  rating: number;
  calories: string;
  tags: string[];
}

export interface SpecialOffer {
  id: string;
  title: string;
  description: string;
  discount: string;
  badge: string;
  ctaText: string;
  image: string;
  expiresAt: string;
}

export interface FeatureCard {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  quote: string;
  rating: number;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  span: 'normal' | 'tall' | 'wide';
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

export type AnimationDirection = 'up' | 'left' | 'right';

export type ButtonVariant = 'primary' | 'secondary' | 'outline';
