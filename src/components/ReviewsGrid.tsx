'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Star, ExternalLink, Calendar, Clock } from 'lucide-react'

const reviews = [
  {
    id: 1,
    title: 'DJI Mavic 3 Pro Review: The Ultimate Professional Drone',
    slug: 'dji-mavic-3-pro-review',
    excerpt: 'Comprehensive review of DJI\'s flagship drone with Hasselblad camera and advanced flight features.',
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 4.8,
    price: '$2,199',
    category: 'Professional',
    brand: 'DJI',
    date: '2024-01-15',
    readTime: '12 min read',
    pros: ['Excellent camera quality', 'Long flight time', 'Advanced features'],
    cons: ['Expensive', 'Large size', 'Complex controls']
  },
  {
    id: 2,
    title: 'DJI Mini 4 Pro: Best Drone for Beginners in 2024',
    slug: 'dji-mini-4-pro-review',
    excerpt: 'Perfect entry-level drone with 4K video, intelligent flight modes, and compact design.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 4.6,
    price: '$759',
    category: 'Beginner',
    brand: 'DJI',
    date: '2024-01-12',
    readTime: '8 min read',
    pros: ['Easy to fly', 'Compact size', 'Good value'],
    cons: ['Limited range', 'Basic camera', 'Short battery life']
  },
  {
    id: 3,
    title: 'Autel EVO Lite+ Review: DJI Alternative Worth Considering',
    slug: 'autel-evo-lite-plus-review',
    excerpt: 'In-depth analysis of Autel\'s flagship consumer drone with impressive camera capabilities.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 4.4,
    price: '$1,199',
    category: 'Consumer',
    brand: 'Autel',
    date: '2024-01-10',
    readTime: '10 min read',
    pros: ['Good camera', 'Stable flight', 'Reasonable price'],
    cons: ['Limited ecosystem', 'Basic app', 'Heavy']
  },
  {
    id: 4,
    title: 'DJI Air 3 Review: The Sweet Spot for Content Creators',
    slug: 'dji-air-3-review',
    excerpt: 'Perfect balance of features and price for content creators and enthusiasts.',
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 4.7,
    price: '$1,099',
    category: 'Consumer',
    brand: 'DJI',
    date: '2024-01-08',
    readTime: '9 min read',
    pros: ['Great camera', 'Good range', 'User-friendly'],
    cons: ['No obstacle avoidance', 'Limited accessories', 'Pricey']
  },
  {
    id: 5,
    title: 'Parrot Anafi Review: Compact Drone with 4K HDR',
    slug: 'parrot-anafi-review',
    excerpt: 'French-made drone with unique features and impressive camera capabilities.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 4.2,
    price: '$699',
    category: 'Consumer',
    brand: 'Parrot',
    date: '2024-01-05',
    readTime: '7 min read',
    pros: ['Compact design', '4K HDR', 'Unique features'],
    cons: ['Limited support', 'Basic app', 'Short range']
  },
  {
    id: 6,
    title: 'Skydio 2+ Review: AI-Powered Autonomous Flying',
    slug: 'skydio-2-plus-review',
    excerpt: 'Revolutionary drone with advanced AI and autonomous flight capabilities.',
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 4.5,
    price: '$1,099',
    category: 'Consumer',
    brand: 'Skydio',
    date: '2024-01-03',
    readTime: '11 min read',
    pros: ['AI features', 'Autonomous flight', 'Great tracking'],
    cons: ['Expensive', 'Limited availability', 'Complex setup']
  }
]

export default function ReviewsGrid() {
  const [sortBy, setSortBy] = useState('newest')

  return (
    <div>
      {/* Sort Options */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            Sort by:
          </span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-gray-300 dark:border-dark-600 rounded-lg px-3 py-2 bg-white dark:bg-dark-800 text-gray-900 dark:text-white"
          >
            <option value="newest">Newest First</option>
            <option value="rating">Highest Rated</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-400">
          {reviews.length} reviews found
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map((review) => (
          <article key={review.id} className="card group hover:shadow-lg transition-shadow duration-300">
            <div className="relative overflow-hidden rounded-t-lg">
              <Image
                src={review.image}
                alt={review.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {review.category}
                </span>
              </div>
              <div className="absolute top-4 right-4">
                <span className="bg-white dark:bg-dark-800 text-gray-900 dark:text-white px-2 py-1 rounded text-sm font-semibold">
                  {review.price}
                </span>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(review.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                    {review.rating}
                  </span>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {review.brand}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
                {review.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                {review.excerpt}
              </p>

              {/* Pros and Cons */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="text-sm font-medium text-green-600 dark:text-green-400 mb-2">
                    Pros
                  </h4>
                  <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                    {review.pros.slice(0, 2).map((pro, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-1 h-1 bg-green-500 rounded-full mr-2"></span>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-red-600 dark:text-red-400 mb-2">
                    Cons
                  </h4>
                  <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                    {review.cons.slice(0, 2).map((con, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-1 h-1 bg-red-500 rounded-full mr-2"></span>
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {new Date(review.date).toLocaleDateString()}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {review.readTime}
                </div>
              </div>

              <Link
                href={`/drone-reviews/${review.slug}`}
                className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
              >
                Read Full Review
                <ExternalLink className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Load More Button */}
      <div className="text-center mt-8">
        <button className="btn-primary px-8 py-3">
          Load More Reviews
        </button>
      </div>
    </div>
  )
}


