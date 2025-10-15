export interface Article {
  id: string
  title: string
  description: string
  category: string
  author: string
  publishedAt: string
  readTime: string
  views: number
  image: string
  featured: boolean
}

export const articles: Article[] = [
  // Initial 2 articles (currently displayed)
  {
    id: '1',
    title: 'Autel EVO Lite+ vs DJI Air 3: Which Should You Choose?',
    description: 'Two of the most popular mid-range drones go head-to-head. We compare features, performance, and value to help you make the right choice.',
    category: 'Comparison',
    author: 'DroneFocal Team',
    publishedAt: '2024-01-12',
    readTime: '15 min read',
    views: 12800,
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    featured: false
  },
  {
    id: '2',
    title: 'Drone Photography Tips: Master Aerial Composition',
    description: 'Learn professional techniques for capturing stunning aerial photographs. From rule of thirds to leading lines, master the art of drone photography.',
    category: 'Tutorial',
    author: 'DroneFocal Team',
    publishedAt: '2024-01-11',
    readTime: '7 min read',
    views: 9500,
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    featured: false
  },
  
  // Additional articles for load more functionality
  {
    id: '3',
    title: 'DJI Mini 4 Pro: The Perfect Beginner Drone?',
    description: 'Comprehensive review of DJI Mini 4 Pro, analyzing its features, performance, and value proposition for new drone pilots.',
    category: 'Review',
    author: 'DroneFocal Team',
    publishedAt: '2024-01-10',
    readTime: '12 min read',
    views: 25600,
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    featured: false
  },
  {
    id: '4',
    title: 'Best Drones Under $500: Complete Buying Guide 2024',
    description: 'Looking for a quality drone without breaking the bank? Our comprehensive guide covers the best budget-friendly options that deliver excellent performance.',
    category: 'Guide',
    author: 'DroneFocal Team',
    publishedAt: '2024-01-09',
    readTime: '10 min read',
    views: 18900,
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    featured: false
  },
  {
    id: '5',
    title: 'New FAA Part 108 Rule Could Lock DJI Pilots Out of BVLOS',
    description: 'The Federal Aviation Administration has proposed new regulations that could significantly impact DJI drone operations beyond visual line of sight.',
    category: 'News',
    author: 'DroneFocal Team',
    publishedAt: '2024-01-08',
    readTime: '8 min read',
    views: 15200,
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    featured: false
  },
  {
    id: '6',
    title: 'Drone Laws by State: Complete 2024 Guide',
    description: 'Navigate the complex world of drone regulations with our comprehensive state-by-state guide to help you fly legally and safely.',
    category: 'Guide',
    author: 'DroneFocal Team',
    publishedAt: '2024-01-07',
    readTime: '14 min read',
    views: 22100,
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    featured: false
  },
  {
    id: '7',
    title: 'Best Drone Accessories Every Pilot Needs',
    description: 'Essential accessories that will enhance your drone flying experience, from extra batteries to professional carrying cases.',
    category: 'Guide',
    author: 'DroneFocal Team',
    publishedAt: '2024-01-06',
    readTime: '9 min read',
    views: 18300,
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    featured: false
  },
  {
    id: '8',
    title: 'DJI Air 3 vs Mini 4 Pro: Which Drone Should You Buy?',
    description: 'Detailed comparison between DJI Air 3 and Mini 4 Pro to help you choose the perfect drone for your needs and budget.',
    category: 'Comparison',
    author: 'DroneFocal Team',
    publishedAt: '2024-01-05',
    readTime: '11 min read',
    views: 19800,
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    featured: false
  },
  {
    id: '9',
    title: 'Drone Photography Tips for Stunning Aerial Shots',
    description: 'Master the art of aerial photography with these professional tips and techniques for capturing breathtaking drone shots.',
    category: 'Tutorial',
    author: 'DroneFocal Team',
    publishedAt: '2024-01-04',
    readTime: '6 min read',
    views: 16700,
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    featured: false
  },
  {
    id: '10',
    title: 'Autel EVO II Pro 6K: Professional Drone Review',
    description: 'In-depth review of the Autel EVO II Pro 6K, examining its professional features and capabilities for serious aerial photography.',
    category: 'Review',
    author: 'DroneFocal Team',
    publishedAt: '2024-01-03',
    readTime: '13 min read',
    views: 14200,
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    featured: false
  },
  {
    id: '11',
    title: 'How to Choose Your First Drone: Complete Beginner Guide',
    description: 'Everything you need to know before buying your first drone, from understanding regulations to choosing the right features.',
    category: 'Guide',
    author: 'DroneFocal Team',
    publishedAt: '2024-01-02',
    readTime: '16 min read',
    views: 28900,
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    featured: false
  },
  {
    id: '12',
    title: 'DJI Mavic 3 Pro Review: The Ultimate Professional Drone',
    description: 'After extensive testing, we can confirm the DJI Mavic 3 Pro is the most capable consumer drone ever made. With its Hasselblad camera and 43-minute flight time, it sets new standards for aerial photography.',
    category: 'Review',
    author: 'DroneFocal Team',
    publishedAt: '2024-01-01',
    readTime: '12 min read',
    views: 15420,
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    featured: true
  }
]

export const getArticles = (limit: number, offset: number = 0): Article[] => {
  return articles.slice(offset, offset + limit)
}

export const getTotalArticles = (): number => {
  return articles.length
}
