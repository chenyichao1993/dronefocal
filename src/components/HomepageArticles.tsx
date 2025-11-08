'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArticleMeta } from '@/lib/content'
import { getCategoryInfo } from '@/lib/categoryColors'

interface HomepageArticlesProps {
  articles: ArticleMeta[]
}

export default function HomepageArticles({ articles }: HomepageArticlesProps) {
  const [displayCount, setDisplayCount] = useState(6)
  
  const displayedArticles = articles.slice(0, displayCount)
  const hasMore = displayCount < articles.length
  
  const handleLoadMore = () => {
    setDisplayCount(prev => prev + 6)
  }

  // Get article URL based on category
  const getArticleUrl = (article: ArticleMeta & { displayCategory?: string }) => {
    const category = article.category
    const slug = article.slug
    
    switch (category) {
      case 'reviews':
        return `/drone-reviews/${slug}`
      case 'news':
        return `/news/${slug}`
      case 'tutorials':
        return `/tutorials/${slug}`
      case 'guides':
        return `/guides/${slug}`
      // news 文章的 category 可能是 "Technology", "Product Launch" 等，都应该使用 /news/ 路径
      default:
        if (['Product Launch', 'Technology', 'Regulations', 'Industry News', 'Events', 'General'].includes(category)) {
          return `/news/${slug}`
        }
        return `/${category}/${slug}`
    }
  }

  return (
    <>
      {/* Articles Grid - Card Style */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {displayedArticles.map((article) => {
          // 使用 displayCategory 显示标签（如果有），否则使用 category
          const displayCategory = (article as any).displayCategory || article.category
          const categoryInfo = getCategoryInfo(displayCategory)
          return (
            <article key={article.slug} className="article-card card group hover:shadow-lg transition-shadow duration-300">
              <Link href={getArticleUrl(article)} className="block">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image 
                    src={article.image} 
                    alt={article.title} 
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${categoryInfo.color}`}>
                      {categoryInfo.name}
                    </span>
                  </div>
                </div>

              <div className="p-6">
                <h2 className="article-title-hover text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {article.title}
                </h2>
                <p className="article-excerpt-hover text-gray-600 dark:text-gray-400 mb-4">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center space-x-4">
                    <span>{article.author || 'DroneFocal Team'}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-primary-600 dark:text-primary-400 font-medium">
                      Read More →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </article>
          )
        })}
      </div>

      {/* Load More Button */}
      {hasMore && (
        <div className="text-center mt-8">
          <button
            onClick={handleLoadMore}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
          >
            Load More Articles ({articles.length - displayCount} remaining)
          </button>
        </div>
      )}

      {/* All Articles Loaded Message */}
      {!hasMore && articles.length > 6 && (
        <div className="text-center mt-8">
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            All articles loaded. You've viewed all {articles.length} articles.
          </p>
        </div>
      )}
    </>
  )
}
