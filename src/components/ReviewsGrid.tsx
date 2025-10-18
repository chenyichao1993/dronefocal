import Link from 'next/link'
import Image from 'next/image'
import { Star, ExternalLink, Calendar, Clock } from 'lucide-react'
import { getAllArticles, ArticleMeta } from '@/lib/content'

interface ReviewsGridProps {
  sortBy?: string
}

export default async function ReviewsGrid({ sortBy = 'newest' }: ReviewsGridProps) {
  const reviews = await getAllArticles('reviews')

  return (
    <div>
      {/* Sort Options */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            Sort by:
          </span>
          <select
            defaultValue={sortBy}
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
          <article key={review.slug} className="card group hover:shadow-lg transition-shadow duration-300">
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
                        i < Math.floor(review.rating || 0)
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
              {(review.pros || review.cons) && (
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {review.pros && (
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
                  )}
                  {review.cons && (
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
                  )}
                </div>
              )}

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


