'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Search, Filter, Calendar, Clock, Eye } from 'lucide-react'
import { ArticleMeta } from '@/lib/content'
import { getCategoryInfo } from '@/lib/categoryColors'

interface SearchContentProps {
  searchParams: {
    q?: string
    category?: string
    sort?: string
  }
  articles: ArticleMeta[]
}

export default function SearchContent({ searchParams, articles }: SearchContentProps) {
  const [searchQuery, setSearchQuery] = useState(searchParams.q || '')
  const [selectedCategory, setSelectedCategory] = useState(searchParams.category || 'all')
  const [sortBy, setSortBy] = useState(searchParams.sort || 'relevance')

  // Search function
  const searchArticles = (query: string, articles: ArticleMeta[], category: string) => {
    if (!query.trim()) return []

    const filteredArticles = category === 'all' 
      ? articles 
      : articles.filter(article => article.category === category)

    return filteredArticles.filter(article => {
      const searchText = `${article.title} ${article.excerpt} ${article.tags?.join(' ')} ${article.brand || ''}`.toLowerCase()
      return searchText.includes(query.toLowerCase())
    })
  }

  // Sort function
  const sortArticles = (articles: ArticleMeta[], sortBy: string) => {
    const sorted = [...articles]
    
    switch (sortBy) {
      case 'newest':
        return sorted.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      case 'oldest':
        return sorted.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      case 'popular':
        return sorted.sort((a, b) => {
          const viewsA = parseInt(a.views?.replace(/,/g, '') || '0')
          const viewsB = parseInt(b.views?.replace(/,/g, '') || '0')
          return viewsB - viewsA
        })
      case 'relevance':
      default:
        return sorted
    }
  }

  // Get search results
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) {
      // If no search query, show articles based on selected category
      const filteredArticles = selectedCategory === 'all' 
        ? articles 
        : articles.filter(article => article.category === selectedCategory)
      return sortArticles(filteredArticles, sortBy)
    }
    
    const results = searchArticles(searchQuery, articles, selectedCategory)
    return sortArticles(results, sortBy)
  }, [searchQuery, articles, selectedCategory, sortBy])

  // Get related articles for no results
  const relatedArticles = useMemo(() => {
    if (searchResults.length > 0) return []
    
    const popularArticles = articles
      .sort((a, b) => {
        const viewsA = parseInt(a.views?.replace(/,/g, '') || '0')
        const viewsB = parseInt(b.views?.replace(/,/g, '') || '0')
        return viewsB - viewsA
      })
      .slice(0, 6)
    
    return popularArticles
  }, [searchResults.length, articles])

  // Handle search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    updateURL()
  }

  // Handle category change
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    updateURL()
  }

  // Handle sort change
  const handleSortChange = (sort: string) => {
    setSortBy(sort)
    updateURL()
  }

  // Update URL with current parameters
  const updateURL = () => {
    const url = new URL(window.location.href)
    if (searchQuery.trim()) {
      url.searchParams.set('q', searchQuery)
    } else {
      url.searchParams.delete('q')
    }
    url.searchParams.set('category', selectedCategory)
    url.searchParams.set('sort', sortBy)
    window.history.pushState({}, '', url.toString())
  }

  // Highlight search terms
  const highlightText = (text: string, query: string) => {
    if (!query.trim()) return text
    
    const regex = new RegExp(`(${query})`, 'gi')
    return text.replace(regex, '<mark class="bg-yellow-200 dark:bg-yellow-800 px-1 rounded">$1</mark>')
  }

  // Get article URL
  const getArticleUrl = (article: ArticleMeta) => {
    const category = article.category
    const slug = article.slug
    
    switch (category) {
      case 'reviews':
        return `/drone-reviews/${slug}`
      case 'guides':
        return `/guides/${slug}`
      case 'tutorials':
        return `/tutorials/${slug}`
      case 'news':
        return `/news/${slug}`
      // news 文章的 category 可能是 "Technology", "Product Launch" 等，都应该使用 /news/ 路径
      default:
        if (['Product Launch', 'Technology', 'Regulations', 'Industry News', 'Events', 'General'].includes(category)) {
          return `/news/${slug}`
        }
        return `/${category}/${slug}`
    }
  }

  // Get category info
  const getCategoryInfo = (category: string) => {
    switch (category) {
      case 'reviews':
        return { name: 'Reviews', color: 'bg-blue-100 text-blue-800' }
      case 'guides':
        return { name: 'Guides', color: 'bg-orange-100 text-orange-800' }
      case 'tutorials':
        return { name: 'Tutorials', color: 'bg-purple-100 text-purple-800' }
      case 'news':
        return { name: 'News', color: 'bg-green-100 text-green-800' }
      default:
        return { name: category, color: 'bg-gray-100 text-gray-800' }
    }
  }


  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      {/* Search Form */}
      <div className="lg:col-span-4">
        <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for drone reviews, guides, and news..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-4 py-1.5 rounded-md hover:bg-blue-700 transition-colors"
            >
              Search
            </button>
          </div>
        </form>
      </div>

      {/* Filters Sidebar */}
      <div className="lg:col-span-1">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <Filter className="w-5 h-5 mr-2" />
            Filters
          </h3>
          
          {/* Category Filter */}
          <div className="mb-6">
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Category</h4>
            <div className="space-y-2">
              {[
                { value: 'all', label: 'All', count: articles.length },
                { value: 'reviews', label: 'Reviews', count: articles.filter(a => a.category === 'reviews').length },
                { value: 'guides', label: 'Guides', count: articles.filter(a => a.category === 'guides').length },
                { value: 'tutorials', label: 'Tutorials', count: articles.filter(a => a.category === 'tutorials').length },
                { value: 'news', label: 'News', count: articles.filter(a => a.category === 'news').length },
              ].map((category) => (
                <label key={category.value} className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="category"
                    value={category.value}
                    checked={selectedCategory === category.value}
                    onChange={(e) => handleCategoryChange(e.target.value)}
                    className="mr-3"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {category.label} ({category.count})
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Sort Options */}
          <div>
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Sort by</h4>
            <select
              value={sortBy}
              onChange={(e) => handleSortChange(e.target.value)}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option value="relevance">Relevance</option>
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="popular">Most Popular</option>
            </select>
          </div>
        </div>
      </div>

      {/* Search Results */}
      <div className="lg:col-span-3">
        {!searchQuery.trim() && searchResults.length === 0 ? (
          <div className="text-center py-12">
            <Search className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              Enter search keywords
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Search for drone reviews, buying guides, tutorials, and news
            </p>
          </div>
        ) : searchResults.length === 0 ? (
          <div className="text-center py-12">
            <Search className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              No articles found
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Try different keywords or check out these popular articles
            </p>
            
            {/* Related Articles */}
            <div className="max-w-4xl mx-auto">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Popular Articles</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedArticles.map((article) => {
                  const categoryInfo = getCategoryInfo(article.category)
                  return (
                    <Link key={article.slug} href={getArticleUrl(article)} className="group" target="_blank" rel="noopener noreferrer">
                      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow">
                        <div className="relative h-48 bg-gray-100 dark:bg-gray-700">
                          <Image
                            src={article.image}
                            alt={article.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-3 left-3">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${categoryInfo.color}`}>
                              {categoryInfo.name}
                            </span>
                          </div>
                        </div>
                        <div className="p-4">
                          <h5 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2 mb-2">
                            {article.title}
                          </h5>
                          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-3">
                            {article.excerpt}
                          </p>
                          <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                            <Calendar className="w-3 h-3 mr-1" />
                            <span className="mr-4">
                              {new Date(article.date).toLocaleDateString('en-US', { 
                                year: 'numeric', 
                                month: 'short', 
                                day: 'numeric' 
                              })}
                            </span>
                            <Clock className="w-3 h-3 mr-1" />
                            <span>{article.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} found
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {searchResults.map((article) => {
                const categoryInfo = getCategoryInfo(article.category)
                return (
                  <Link key={article.slug} href={getArticleUrl(article)} className="group" target="_blank" rel="noopener noreferrer">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow">
                      <div className="relative h-48 bg-gray-100 dark:bg-gray-700">
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-3 left-3">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${categoryInfo.color}`}>
                            {categoryInfo.name}
                          </span>
                        </div>
                      </div>
                      <div className="p-4">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2 line-clamp-2">
                          <span dangerouslySetInnerHTML={{ 
                            __html: highlightText(article.title, searchQuery) 
                          }} />
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 mb-3">
                          <span dangerouslySetInnerHTML={{ 
                            __html: highlightText(article.excerpt, searchQuery) 
                          }} />
                        </p>
                        <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                          <Calendar className="w-3 h-3 mr-1" />
                          <span className="mr-3">
                            {new Date(article.date).toLocaleDateString('en-US', { 
                              year: 'numeric', 
                              month: 'short', 
                              day: 'numeric' 
                            })}
                          </span>
                          <Clock className="w-3 h-3 mr-1" />
                          <span className="mr-3">{article.readTime}</span>
                            {article.views && (
                              <>
                                <Eye className="w-3 h-3 mr-1" />
                                <span>{article.views} views</span>
                              </>
                            )}
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
