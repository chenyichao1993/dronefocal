'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArticleMeta } from '@/lib/content'
import { getCategoryInfo } from '@/lib/categoryColors'

interface FeaturedCarouselProps {
  articles: (ArticleMeta & { displayCategory?: string })[]
}

export default function FeaturedCarousel({ articles }: FeaturedCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // 自动播放逻辑
  useEffect(() => {
    if (articles.length === 0 || isPaused) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length)
    }, 5000) // 每5秒切换一次

    return () => clearInterval(interval)
  }, [articles.length, isPaused])

  if (articles.length === 0) {
    return null // 没有轮播文章时不显示组件
  }

  const currentArticle = articles[currentIndex]
  const displayCategory = currentArticle.displayCategory || currentArticle.category
  const categoryInfo = getCategoryInfo(displayCategory)

  // 生成文章URL（与 HomepageArticles 中的逻辑一致）
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

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + articles.length) % articles.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length)
  }

  return (
    <section 
      className="relative w-full h-96 md:h-[500px] rounded-lg overflow-hidden shadow-lg mb-8 group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Link href={getArticleUrl(currentArticle)} className="block h-full">
        <div className="relative w-full h-full">
          <Image
            src={currentArticle.image}
            alt={currentArticle.title}
            fill
            style={{ objectFit: 'cover' }}
            className="transition-transform duration-700 ease-in-out group-hover:scale-105"
            priority={currentIndex === 0} // 第一张图片优先加载
          />
          
          {/* 渐变遮罩 */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          
          {/* 内容区域 */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10 text-white">
            {/* 分类标签 */}
            <div className="mb-3">
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm ${
                displayCategory === 'reviews' ? 'bg-blue-100 text-blue-800' :
                displayCategory === 'guides' ? 'bg-orange-100 text-orange-800' :
                displayCategory === 'news' ? 'bg-green-100 text-green-800' :
                displayCategory === 'tutorials' ? 'bg-purple-100 text-purple-800' :
                'bg-gray-100 text-gray-800'
              }`}>
                {categoryInfo.name}
              </span>
            </div>
            
            {/* 标题 */}
            <h2 className="text-2xl md:text-4xl font-bold mb-3 line-clamp-2 group-hover:text-blue-300 transition-colors">
              {currentArticle.title}
            </h2>
            
            {/* 摘要 */}
            <p className="text-sm md:text-base text-gray-200 line-clamp-2 mb-4 max-w-3xl">
              {currentArticle.excerpt}
            </p>
            
            {/* 阅读更多提示 */}
            <div className="flex items-center text-sm md:text-base font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              <span>Read More</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </Link>

      {/* 左右切换按钮 */}
      {articles.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              goToPrevious()
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full z-10 transition-all opacity-0 group-hover:opacity-100"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              goToNext()
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full z-10 transition-all opacity-0 group-hover:opacity-100"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* 导航点 */}
      {articles.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
          {articles.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                goToSlide(index)
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-white w-8' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  )
}

