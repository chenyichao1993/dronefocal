import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Clock, Users, Target } from 'lucide-react'

const buyingGuides = [
  {
    id: 1,
    title: 'Best Drones for Beginners in 2024',
    slug: 'best-drones-for-beginners-2024',
    excerpt: 'Complete guide to choosing your first drone with safety tips and recommendations.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'Beginner',
    readTime: '15 min read',
    difficulty: 'Easy',
    targetAudience: 'New to drones',
    products: 12,
    lastUpdated: '2024-01-15'
  },
  {
    id: 2,
    title: 'Professional Drone Buying Guide',
    slug: 'professional-drone-buying-guide',
    excerpt: 'Everything you need to know about choosing a professional drone for commercial use.',
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'Professional',
    readTime: '20 min read',
    difficulty: 'Advanced',
    targetAudience: 'Commercial users',
    products: 8,
    lastUpdated: '2024-01-12'
  },
  {
    id: 3,
    title: 'Best Drones Under $500',
    slug: 'best-drones-under-500',
    excerpt: 'Top budget-friendly drones that offer great value for money.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'Budget',
    readTime: '12 min read',
    difficulty: 'Easy',
    targetAudience: 'Budget-conscious buyers',
    products: 15,
    lastUpdated: '2024-01-10'
  },
  {
    id: 4,
    title: 'Drone Photography Guide',
    slug: 'drone-photography-guide',
    excerpt: 'Choose the perfect drone for aerial photography and cinematography.',
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'Photography',
    readTime: '18 min read',
    difficulty: 'Intermediate',
    targetAudience: 'Photographers',
    products: 10,
    lastUpdated: '2024-01-08'
  },
  {
    id: 5,
    title: 'FPV Racing Drone Guide',
    slug: 'fpv-racing-drone-guide',
    excerpt: 'Complete guide to FPV racing drones for competitive flying.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'Racing',
    readTime: '16 min read',
    difficulty: 'Advanced',
    targetAudience: 'Racing enthusiasts',
    products: 6,
    lastUpdated: '2024-01-05'
  },
  {
    id: 6,
    title: 'Drone Accessories Guide',
    slug: 'drone-accessories-guide',
    excerpt: 'Essential accessories every drone owner should consider.',
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'Accessories',
    readTime: '14 min read',
    difficulty: 'Easy',
    targetAudience: 'All drone owners',
    products: 25,
    lastUpdated: '2024-01-03'
  }
]

export default function BuyingGuidesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {buyingGuides.map((guide) => (
        <article key={guide.id} className="card group hover:shadow-lg transition-shadow duration-300">
          <div className="relative overflow-hidden rounded-t-lg">
            <Image
              src={guide.image}
              alt={guide.title}
              width={400}
              height={250}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                {guide.category}
              </span>
            </div>
            <div className="absolute top-4 right-4">
              <span className="bg-white dark:bg-dark-800 text-gray-900 dark:text-white px-2 py-1 rounded text-sm font-semibold">
                {guide.difficulty}
              </span>
            </div>
          </div>

          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
              {guide.title}
            </h3>

            <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
              {guide.excerpt}
            </p>

            {/* Guide Info */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <Target className="h-4 w-4 mr-2" />
                <span>{guide.targetAudience}</span>
              </div>
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <Users className="h-4 w-4 mr-2" />
                <span>{guide.products} products reviewed</span>
              </div>
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <Clock className="h-4 w-4 mr-2" />
                <span>{guide.readTime}</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500 dark:text-gray-400">
                Updated {new Date(guide.lastUpdated).toLocaleDateString()}
              </span>
              <Link
                href={`/buying-guides/${guide.slug}`}
                className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
              >
                Read Guide
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}


