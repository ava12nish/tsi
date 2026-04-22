export type RetreatStatus = 'upcoming' | 'past' | 'sold-out' | 'waitlist';

export interface TicketType {
  id: string;
  name: string;
  price: number;
  description: string;
  capacity: number;
  sold: number;
  earlyBirdUntil?: string;
}

export interface Retreat {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  longDescription: string;
  startDate: string;
  endDate: string;
  location: {
    name: string;
    address: string;
    city: string;
    state: string;
    zip: string;
  };
  mainImage: string;
  gallery: string[];
  status: RetreatStatus;
  category: string;
  featured: boolean;
  tickets: TicketType[];
  faq: { question: string; answer: string }[];
  agenda: { time: string; activity: string }[];
  speakers: { name: string; role: string; image: string; bio: string }[];
  accommodations: string;
  whatToBring: string[];
  policies: string;
}

export interface ProductVariant {
  id: string;
  name: string;
  price: number;
  stock: number;
  sku?: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  variants: ProductVariant[];
  featured: boolean;
  status: 'active' | 'archived';
}

export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  coverImage: string;
  category: string;
  tags: string[];
  isPinned: boolean;
}

export interface Registration {
  id: string;
  retreatId: string;
  retreatTitle: string;
  attendeeEmail: string;
  attendeeName: string;
  ticketTypeId: string;
  ticketTypeName: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  paidAmount: number;
  paymentId?: string;
  createdAt: string;
}

export interface OrderItem {
  productId: string;
  productName: string;
  variantId?: string;
  variantName?: string;
  quantity: number;
  price: number;
}

export interface Order {
  id: string;
  customerEmail: string;
  customerName: string;
  items: OrderItem[];
  total: number;
  status: 'pending' | 'shipped' | 'delivered' | 'cancelled';
  shippingAddress: {
    line1: string;
    city: string;
    state: string;
    zip: string;
  };
  paymentId?: string;
  createdAt: string;
}

export interface CommunitySubmission {
  id: string;
  type: 'volunteer' | 'mentor' | 'membership' | 'retreat_interest';
  email: string;
  name: string;
  message: string;
  areasOfInterest: string[];
  status: 'new' | 'reviewed' | 'archived';
  createdAt: string;
}
