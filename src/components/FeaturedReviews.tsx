import Link from 'next/link'
import Image from 'next/image'
import { Star, ExternalLink, Calendar } from 'lucide-react'

const featuredReviews = [
  {
    id: 1,
    title: 'DJI Mavic 3 Pro Review: The Ultimate Professional Drone',
    slug: 'dji-mavic-3-pro-review',
    excerpt: 'Comprehensive review of DJI\'s flagship drone with Hasselblad camera and advanced flight features.',
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 4.8,
    price: '$2,199',
    category: 'Professional',
    date: '2024-01-15',
    readTime: '12 min read'
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
    date: '2024-01-12',
    readTime: '8 min read'
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
    date: '2024-01-10',
    readTime: '10 min read'
  }
]

export default function FeaturedReviews() {
  return (
    <section className="py-16 bg-white dark:bg-dark-800">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Reviews
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            In-depth reviews of the latest and most popular drones on the market
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredReviews.map((review) => (
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
                <div className="flex items-center mb-3">
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

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {review.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {review.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(review.date).toLocaleDateString()}
                  </div>
                  <span>{review.readTime}</span>
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

        <div className="text-center mt-12">
          <Link
            href="/drone-reviews"
            className="btn-primary inline-flex items-center px-8 py-3 text-lg font-semibold"
          >
            View All Reviews
            <ExternalLink className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}


