import { Retreat, Post, Product, Registration, Order, CommunitySubmission } from '../types';

// Initial Mock Data
export const MOCK_RETREATS: Retreat[] = [
  {
    id: '1',
    slug: 'youth-retreat-2024',
    title: 'Northeast Summer Retreat 2024',
    subtitle: 'Connecting Hearts, Empowering Leadership',
    description: 'Join us for a transformative 4-day retreat in the heart of the Poconos.',
    longDescription: 'Experience deep spiritual connection, community building, and personal growth. Our annual summer retreat brings together youth from across the Northeast for a weekend of kirtan, wisdom, and fun.',
    startDate: '2024-07-15',
    endDate: '2024-07-19',
    location: {
      name: 'Gita Nagari Eco Farm',
      address: '534 Gita Nagari Rd',
      city: 'Port Royal',
      state: 'PA',
      zip: '17082'
    },
    mainImage: 'https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?q=80&w=2070',
    gallery: [],
    status: 'upcoming',
    category: 'Regional',
    featured: true,
    tickets: [
      { id: 't1', name: 'Early Bird', price: 150, description: 'Limited time offer', capacity: 50, sold: 10, earlyBirdUntil: '2024-05-01' },
      { id: 't2', name: 'General Admission', price: 200, description: 'Standard retreat pass', capacity: 100, sold: 5 }
    ],
    faq: [],
    agenda: [],
    speakers: [],
    accommodations: 'Shared cabins and camping options available.',
    whatToBring: ['Sleeping bag', 'Flashlight', 'Journal'],
    policies: 'Cancellation allowed up to 14 days before start date.'
  },
  {
    id: '2',
    slug: 'winter-sangam-2024',
    title: 'Winter Sangam 2024',
    subtitle: 'Reflect, Recharge, Reconnect',
    description: 'A cozy winter gathering focused on meditation and deep study.',
    longDescription: 'Winter is a time for inward reflection. Join the TSI community for a weekend of introspection and sanga.',
    startDate: '2024-12-10',
    endDate: '2024-12-13',
    location: {
      name: 'Bhakti Center',
      address: '25 1st Ave',
      city: 'New York',
      state: 'NY',
      zip: '10003'
    },
    mainImage: 'https://images.unsplash.com/photo-1517048676732-d65bc937f951?q=80&w=2070',
    gallery: [],
    status: 'upcoming',
    category: 'National',
    featured: false,
    tickets: [
      { id: 't3', name: 'Full Pass', price: 120, description: 'Access to all sessions', capacity: 80, sold: 0 }
    ],
    faq: [],
    agenda: [],
    speakers: [],
    accommodations: 'Local hotel recommendations provided.',
    whatToBring: ['Yoga mat', 'Comfortable clothes'],
    policies: 'Non-refundable after November 1st.'
  }
];

export const MOCK_POSTS: Post[] = [
  {
    id: 'p1',
    slug: 'impact-report-2023',
    title: 'TSI 2023 Impact Report: A Year of Growth',
    excerpt: 'Looking back at how our community grew and the lives we touched in 2023.',
    content: 'Full impact report content here...',
    date: '2024-01-15',
    author: 'TSI Team',
    coverImage: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2098',
    category: 'News',
    tags: ['Impact', 'Community'],
    isPinned: true
  },
  {
    id: 'p2',
    slug: 'new-retreat-leadership',
    title: 'Welcoming Our New Retreat Facilitators',
    excerpt: 'Meet the team behind our upcoming summer retreats.',
    content: 'Full post content here...',
    date: '2024-02-20',
    author: 'Community Lead',
    coverImage: 'https://images.unsplash.com/photo-1522071823991-b9671e90542a?q=80&w=2070',
    category: 'Community',
    tags: ['Team', 'Retreats'],
    isPinned: false
  }
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'm1',
    slug: 'classic-tsi-hoodie',
    name: 'Classic TSI Logo Hoodie',
    description: 'Premium heavy-weight hoodie with the TSI logo.',
    price: 45,
    images: ['https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1974'],
    category: 'Apparel',
    variants: [
      { id: 'v1', name: 'Small', price: 45, stock: 20 },
      { id: 'v2', name: 'Medium', price: 45, stock: 15 },
      { id: 'v3', name: 'Large', price: 45, stock: 10 }
    ],
    featured: true,
    status: 'active'
  }
];

// Data Access Service (Abstraction Layer)
export const DataService = {
  // Retreats
  async getRetreats() {
    return MOCK_RETREATS;
  },
  async getFeaturedRetreats() {
    return MOCK_RETREATS.filter(r => r.featured);
  },
  async getRetreatBySlug(slug: string) {
    return MOCK_RETREATS.find(r => r.slug === slug);
  },

  // Bulletin
  async getPosts() {
    return MOCK_POSTS;
  },
  async getPinnedPosts() {
    return MOCK_POSTS.filter(p => p.isPinned);
  },
  async getPostBySlug(slug: string) {
    return MOCK_POSTS.find(p => p.slug === slug);
  },

  // Products
  async getProducts() {
    return MOCK_PRODUCTS;
  },
  async getFeaturedProducts() {
    return MOCK_PRODUCTS.filter(p => p.featured);
  },
  async getProductBySlug(slug: string) {
    return MOCK_PRODUCTS.find(p => p.slug === slug);
  },

  // Admin Actions (Simulated)
  async getRegistrations() {
    return [] as Registration[];
  },
  async getOrders() {
    return [] as Order[];
  },
  async getSubmissions() {
    return [] as CommunitySubmission[];
  }
};
