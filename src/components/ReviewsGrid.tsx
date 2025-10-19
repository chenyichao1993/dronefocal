'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Star, ExternalLink, Calendar, Clock } from 'lucide-react'
import { ArticleMeta } from '@/lib/content'

interface ReviewsGridProps {
  reviews: ArticleMeta[]
  sortBy?: string
  hasActiveFilters?: boolean
}

export default function ReviewsGrid({ reviews = [], sortBy = 'newest', hasActiveFilters = false }: ReviewsGridProps) {
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
      {reviews.length === 0 ? (
        <div className="text-center py-16">
          <div className="max-w-md mx-auto">
            <div className="mb-6">
              {hasActiveFilters ? (
                <svg className="mx-auto h-24 w-24 text-gray-400 dark:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z" />
                </svg>
              ) : (
                <svg className="mx-auto h-24 w-24 text-gray-400 dark:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.709M15 6.291A7.962 7.962 0 0012 5c-2.34 0-4.29 1.009-5.824 2.709" />
                </svg>
              )}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {hasActiveFilters ? 'No reviews match your filters' : 'No reviews available yet'}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {hasActiveFilters 
                ? 'We couldn\'t find any drone reviews matching your current filters. Try adjusting your search criteria or browse all reviews.'
                : 'We\'re working hard to bring you comprehensive drone reviews. Check back soon for the latest reviews and expert analysis.'
              }
            </p>
            <div className="space-y-3">
              {hasActiveFilters ? (
                <>
                  <button 
                    onClick={() => window.location.href = '/drone-reviews'}
                    className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    View All Reviews
                  </button>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    or try adjusting your filters
                  </p>
                </>
              ) : (
                <div className="space-y-2">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    In the meantime, check out our other sections:
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    <Link href="/buying-guides" className="text-sm text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">
                      Buying Guides
                    </Link>
                    <span className="text-gray-300">•</span>
                    <Link href="/tutorials" className="text-sm text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">
                      Tutorials
                    </Link>
                    <span className="text-gray-300">•</span>
                    <Link href="/news" className="text-sm text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">
                      News
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review) => (
            <article key={review.slug} className="article-card card group hover:shadow-lg transition-shadow duration-300">
              <Link 
                href={`/drone-reviews/${review.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={review.image}
                    alt={review.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
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

                  <h3 className="article-title-hover text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {review.title}
                  </h3>

                  <p className="article-excerpt-hover text-gray-600 dark:text-gray-400 mb-4">
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
                </div>
              </Link>

              <div className="px-6 pb-6">
                <Link
                  href={`/drone-reviews/${review.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                >
                  Read Full Review
                  <ExternalLink className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Load More Button - Only show when there are reviews */}
      {reviews.length > 0 && (
        <div className="text-center mt-8">
          <button className="btn-primary px-8 py-3">
            Load More Reviews
          </button>
        </div>
      )}
    </div>
  )
}
