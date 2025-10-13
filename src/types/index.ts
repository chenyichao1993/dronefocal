export interface Product {
  id: string
  name: string
  slug: string
  brand: string
  model: string
  description?: string
  price?: number
  image?: string
  category: string
  specs?: Record<string, any>
  rating: number
  reviewCount: number
  createdAt: Date
  updatedAt: Date
}

export interface Review {
  id: string
  title: string
  slug: string
  excerpt?: string
  content: string
  rating: number
  pros: string[]
  cons: string[]
  verdict?: string
  image?: string
  author: string
  publishedAt: Date
  updatedAt: Date
  productId: string
  product?: Product
}

export interface Article {
  id: string
  title: string
  slug: string
  excerpt?: string
  content: string
  category: string
  tags: string[]
  image?: string
  author: string
  publishedAt: Date
  updatedAt: Date
}

export interface AffiliateLink {
  id: string
  platform: string
  url: string
  productId: string
  clicks: number
  createdAt: Date
  updatedAt: Date
}

export interface User {
  id: string
  email: string
  name?: string
  avatar?: string
  createdAt: Date
  updatedAt: Date
}

export interface Comment {
  id: string
  content: string
  rating?: number
  createdAt: Date
  updatedAt: Date
  userId: string
  user?: User
  reviewId?: string
  articleId?: string
}


