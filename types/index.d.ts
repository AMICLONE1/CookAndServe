// Order types
export interface Order {
  id: number
  customer: string
  dish: string
  amount: number
  status: 'pending' | 'accepted' | 'completed' | 'rejected'
  time: string
  quantity?: number
  specialInstructions?: string
}

// Menu item types
export interface MenuItem {
  id: number
  name: string
  description: string
  price: number
  cuisineType: string
  preparationTime: number
  availableQuantity: number
  isAvailable: boolean
  imageUrl?: string
  allergens?: string[]
  dietaryInfo?: string[]
}

// User profile types
export interface UserProfile {
  id: string
  name: string
  email: string
  phone: string
  address: string
  kitchenCertification: boolean
  foodSafetyTraining: boolean
  rating: number
  totalOrders: number
  totalEarnings: number
  bio?: string
  profileImage?: string
}

// Earnings types
export interface Earnings {
  today: number
  thisWeek: number
  thisMonth: number
  total: number
  pendingPayout: number
}

// Community post types
export interface CommunityPost {
  id: number
  author: string
  title: string
  content: string
  timestamp: string
  likes: number
  comments: number
  tags: string[]
} 