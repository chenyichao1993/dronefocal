'use client'

import { useState, useMemo, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, Search } from 'lucide-react'
import { NewsArticle } from '@/lib/news'

interface NewsContentProps {
  articles: NewsArticle[]
}

export default function NewsContent({ articles }: NewsContentProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [displayedCount, setDisplayedCount] = useState(6)
  const [isMounted, setIsMounted] = useState(false)

  const filteredArticles = useMemo(() => {
    if (!searchQuery.trim()) return articles
    const query = searchQuery.toLowerCase()
    return articles.filter(
      article =>
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query) ||
        article.tags.some(tag => tag.toLowerCase().includes(query))
    )
  }, [articles, searchQuery])

  const hasArticles = filteredArticles.length > 0
  const latestArticle = hasArticles ? filteredArticles[0] : null
  const remainingArticles = hasArticles ? filteredArticles.slice(1, displayedCount) : []
  const hasMore = displayedCount < filteredArticles.length

  const handleLoadMore = () => {
    setDisplayedCount(prev => prev + 6)
  }

  // Reset displayed count when search changes
  useEffect(() => {
    setDisplayedCount(6)
  }, [searchQuery])

  // Avoid React hydration mismatches
  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Drone News
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Latest drone industry news and updates
        </p>
      </div>

      {/* No results */}
      {!hasArticles && (
        <div className="text-center py-12">
          <div className="text-gray-400 dark:text-gray-600 mb-4">
            <Search className="mx-auto h-12 w-12" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            No articles found
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
            Try different search terms
          </p>
        </div>
      )}

      {/* Hero — Latest Article */}
      {latestArticle && (
        <section>
          <Link
            href={`/news/${latestArticle.slug}`}
            className="block group"
            target="_blank"
            rel="noopener noreferrer"
          >
            <article className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative">
                <Image
                  src={latestArticle.image}
                  alt={latestArticle.title}
                  width={1200}
                  height={500}
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>
              <div className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {latestArticle.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-base mb-4 leading-relaxed">
                  {latestArticle.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <span className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(latestArticle.date).toLocaleDateString()}
                  </span>
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {latestArticle.readTime}
                  </span>
                  <span>By {latestArticle.author}</span>
                </div>
              </div>
            </article>
          </Link>
        </section>
      )}

      {/* The Latest — Remaining Articles */}
      {remainingArticles.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            The Latest
          </h2>
          <div className="space-y-4">
            {remainingArticles.map(article => (
              <Link
                key={article.slug}
                href={`/news/${article.slug}`}
                className="block group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <article className="flex gap-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-sm transition-shadow p-4">
                  <div className="flex-shrink-0">
                    <Image
                      src={article.image}
                      alt={article.title}
                      width={160}
                      height={120}
                      className="w-40 h-28 object-cover rounded-md"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-2 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                      <span className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {new Date(article.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {article.readTime}
                      </span>
                      <span>By {article.author}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Load More */}
      {hasMore && (
        <div className="text-center pt-4">
          <button
            onClick={handleLoadMore}
            className="px-8 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  )
}
