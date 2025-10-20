'use client'

import { useState, useMemo, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, ArrowRight, Search } from 'lucide-react'
import { NewsArticle } from '@/lib/news'

interface NewsContentProps {
  articles: NewsArticle[]
}

const categories = ['All', 'Product Launch', 'Regulations', 'Industry News', 'Technology', 'Events']

export default function NewsContent({ articles }: NewsContentProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [displayedCount, setDisplayedCount] = useState(6)

  const filteredArticles = useMemo(() => {
    let filtered = articles

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(article => article.category === selectedCategory)
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query) ||
        article.tags.some(tag => tag.toLowerCase().includes(query))
      )
    }

    return filtered
  }, [articles, selectedCategory, searchQuery])

  const displayedArticles = useMemo(() => {
    return filteredArticles.slice(0, displayedCount)
  }, [filteredArticles, displayedCount])

  const hasMoreArticles = displayedCount < filteredArticles.length

  const handleLoadMore = () => {
    setDisplayedCount(prev => prev + 6)
  }

  // Reset displayed count when filters change
  useEffect(() => {
    setDisplayedCount(6)
  }, [searchQuery, selectedCategory])

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Drone News
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Latest drone industry news and updates
        </p>
        
        {/* Search and Categories */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search news..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  category === selectedCategory
                    ? 'bg-primary-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Summary */}
      <div className="mb-4 text-sm text-gray-600 dark:text-gray-400">
        Showing {displayedArticles.length} of {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''}
        {selectedCategory !== 'All' && ` in ${selectedCategory}`}
        {searchQuery && ` matching "${searchQuery}"`}
      </div>

      {/* News Grid */}
      {filteredArticles.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-gray-400 dark:text-gray-600 mb-4">
            <Search className="mx-auto h-12 w-12" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No Articles Found</h3>
          <p className="text-gray-500 dark:text-gray-400">
            {searchQuery || selectedCategory !== 'All' 
              ? 'Try adjusting your search terms or filters to find what you\'re looking for.'
              : 'Check back later for the latest drone news and updates.'
            }
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedArticles.map((article) => (
            <Link 
              key={article.slug} 
              href={`/news/${article.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <article className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                <div className="relative">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-primary-600 text-white px-2 py-1 rounded text-xs font-medium">
                      {article.category}
                    </span>
                  </div>
                  {article.trending && (
                    <div className="absolute top-3 right-3">
                      <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-medium">
                        Trending
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    {article.title}
                  </h2>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-3">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {new Date(article.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {article.readTime}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      By {article.author}
                    </span>
                    <span className="inline-flex items-center text-xs text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium">
                      Read more
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      )}

      {/* Load More */}
      {hasMoreArticles && (
        <div className="text-center mt-12">
          <button 
            onClick={handleLoadMore}
            className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            Load More Articles
          </button>
        </div>
      )}
    </div>
  )
}
