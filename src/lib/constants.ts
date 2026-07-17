import {
  BurgerItem,
  FeatureCard,
  FooterColumn,
  GalleryImage,
  NavLink,
  SocialLink,
  SpecialOffer,
  Testimonial,
} from './types';

// ─── NAVIGATION ──────────────────────────────────────────────

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'Offers', href: '#offers' },
  { label: 'Delivery', href: '#delivery' },
];

// ─── HERO ────────────────────────────────────────────────────

// All 80 frames of the burger explosion sequence (000–079)
export const HERO_IMAGES: string[] = Array.from(
  { length: 80 },
  (_, i) => `/hero/${String(i).padStart(3, '0')}.jpg`
);

// Milliseconds per frame — ~12.5 fps for smooth slow-motion
export const HERO_FRAME_MS = 80;

// ─── POPULAR BURGERS ─────────────────────────────────────────

export const POPULAR_BURGERS: BurgerItem[] = [
  {
    id: 'classic-cheese',
    name: 'Classic Cheese',
    description:
      'Angus beef patty with aged cheddar, crisp lettuce, vine-ripened tomatoes, and our signature sauce on a toasted brioche bun.',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=600&fit=crop',
    rating: 4.8,
    calories: '680 kcal',
    tags: ['Bestseller', 'Classic'],
  },
  {
    id: 'bbq-bacon',
    name: 'BBQ Bacon',
    description:
      'Double-smoked bacon, caramelized onions, smoked gouda, and hickory BBQ sauce layered over a flame-grilled patty.',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=600&h=600&fit=crop',
    rating: 4.9,
    calories: '820 kcal',
    tags: ['Popular', 'Smoky'],
  },
  {
    id: 'spicy-jalapeno',
    name: 'Spicy Jalapeño',
    description:
      'Fire-roasted jalapeños, pepper jack cheese, chipotle mayo, and crispy onion strings on a toasted pretzel bun.',
    price: 13.99,
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600&h=600&fit=crop',
    rating: 4.7,
    calories: '740 kcal',
    tags: ['Spicy', 'New'],
  },
  {
    id: 'truffle-mushroom',
    name: 'Truffle Mushroom',
    description:
      'Sautéed wild mushrooms, truffle aioli, Swiss cheese, and arugula atop a prime beef patty on an artisan roll.',
    price: 16.99,
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=600&h=600&fit=crop',
    rating: 4.9,
    calories: '720 kcal',
    tags: ['Premium', 'Gourmet'],
  },
];

// ─── SPECIAL OFFERS ──────────────────────────────────────────

export const SPECIAL_OFFERS: SpecialOffer[] = [
  {
    id: 'offer-1',
    title: 'Double Deluxe Combo',
    description:
      'Two signature burgers, large fries, and two drinks. Perfect for sharing the bold flavor experience.',
    discount: '30% OFF',
    badge: 'Limited Time',
    ctaText: 'Claim Offer',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=600&h=600&fit=crop',
    expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'offer-2',
    title: 'Free Delivery Weekend',
    description:
      'No delivery fee on all orders this weekend. Minimum order $15. Available in all locations.',
    discount: 'FREE',
    badge: 'Weekend Special',
    ctaText: 'Order Now',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=600&h=600&fit=crop',
    expiresAt: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'offer-3',
    title: 'New: Truffle Mushroom',
    description:
      'Be the first to try our newest creation. Premium ingredients meet gourmet preparation.',
    discount: 'NEW',
    badge: 'Just Dropped',
    ctaText: 'Try Now',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&h=600&fit=crop',
    expiresAt: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(),
  },
];

// ─── WHY CHOOSE US ───────────────────────────────────────────

export const FEATURES: FeatureCard[] = [
  {
    id: 'premium-ingredients',
    icon: 'ChefHat',
    title: 'Premium Ingredients',
    description:
      'We source only the finest ingredients — 100% Angus beef, artisan buns, and farm-fresh produce delivered daily.',
  },
  {
    id: 'master-chefs',
    icon: 'Flame',
    title: 'Master Chefs',
    description:
      'Our chefs bring decades of culinary expertise, crafting each burger with precision, passion, and perfection.',
  },
  {
    id: 'fast-delivery',
    icon: 'Truck',
    title: 'Lightning Delivery',
    description:
      'Hot and fresh at your doorstep in 30 minutes or less. Real-time tracking included with every order.',
  },
  {
    id: 'secret-recipes',
    icon: 'Star',
    title: 'Secret Recipes',
    description:
      'Our signature sauces and seasonings are crafted from closely guarded recipes passed down for generations.',
  },
];

// ─── TESTIMONIALS ────────────────────────────────────────────

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Marcus Johnson',
    role: 'Food Critic',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    quote:
      'The explosion of flavors in every bite is unmatched. This is not fast food — this is culinary artistry at speed.',
    rating: 5,
  },
  {
    id: 't2',
    name: 'Sarah Chen',
    role: 'Regular Customer',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    quote:
      "I've been coming here for two years and the quality never drops. The BBQ Bacon burger is absolutely life-changing.",
    rating: 5,
  },
  {
    id: 't3',
    name: 'David Park',
    role: 'Food Blogger',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    quote:
      'The Truffle Mushroom burger belongs in a Michelin-starred restaurant. Bold, luxurious, and unforgettable.',
    rating: 5,
  },
  {
    id: 't4',
    name: 'Emily Rodriguez',
    role: 'Local Guide',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    quote:
      'From the packaging to the last bite, everything feels premium. My go-to spot for impressing out-of-town guests.',
    rating: 5,
  },
  {
    id: 't5',
    name: 'James Wilson',
    role: 'Chef & Entrepreneur',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    quote:
      'As a chef, I appreciate the attention to detail. The ingredient quality rivals fine dining at a fraction of the price.',
    rating: 5,
  },
];

// ─── GALLERY ─────────────────────────────────────────────────

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'g1',
    src: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=800&h=800&fit=crop',
    alt: 'Premium burger close-up',
    span: 'tall',
  },
  {
    id: 'g2',
    src: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=800&h=600&fit=crop',
    alt: 'Cheese pull shot',
    span: 'wide',
  },
  {
    id: 'g3',
    src: 'https://images.unsplash.com/photo-1586816001966-79b736744398?w=600&h=600&fit=crop',
    alt: 'Burger and fries',
    span: 'normal',
  },
  {
    id: 'g4',
    src: 'https://images.unsplash.com/photo-1596662951482-f91bcdcb2e99?w=600&h=800&fit=crop',
    alt: 'Restaurant interior',
    span: 'tall',
  },
  {
    id: 'g5',
    src: 'https://images.unsplash.com/photo-1610440042657-612c34d95e9f?w=800&h=600&fit=crop',
    alt: 'Burger preparation',
    span: 'wide',
  },
  {
    id: 'g6',
    src: 'https://images.unsplash.com/photo-1551782450-a2132b4d21dc?w=600&h=600&fit=crop',
    alt: 'Chicken sandwich',
    span: 'normal',
  },
  {
    id: 'g7',
    src: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=600&h=600&fit=crop',
    alt: 'Milkshake',
    span: 'normal',
  },
  {
    id: 'g8',
    src: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&h=800&fit=crop',
    alt: 'Chef plating',
    span: 'tall',
  },
];

// ─── FOOTER ──────────────────────────────────────────────────

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: 'Quick Links',
    links: [
      { label: 'Our Menu', href: '#menu' },
      { label: 'Special Offers', href: '#offers' },
      { label: 'Catering', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Press Kit', href: '#' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'FAQ', href: '#' },
      { label: 'Contact Us', href: '#contact' },
      { label: 'Delivery Info', href: '#delivery' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
    ],
  },
];

// TODO: Replace '#' with real social media URLs for your brand
export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'Instagram', href: 'https://instagram.com/', icon: 'Instagram' },
  { label: 'Twitter', href: 'https://twitter.com/', icon: 'Twitter' },
  { label: 'YouTube', href: 'https://youtube.com/', icon: 'Youtube' },
  { label: 'TikTok', href: 'https://tiktok.com/', icon: 'Music2' },
];

// ─── DELIVERY ────────────────────────────────────────────────

export const DELIVERY_STATS = [
  { value: '50+', label: 'Locations' },
  { value: '10K+', label: 'Orders Delivered' },
  { value: '4.9', label: 'Average Rating' },
  { value: '30min', label: 'Avg Delivery' },
];

// ─── ANIMATION ───────────────────────────────────────────────

export const TRANSITION_DEFAULTS = {
  duration: 0.6,
  ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
};
