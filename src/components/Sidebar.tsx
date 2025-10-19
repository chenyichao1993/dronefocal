'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface PopularArticle {
  title: string
  slug: string
  category: string
  views: string
  image: string
  rating?: number
  date: string
}

interface SidebarProps {
  popularArticles?: PopularArticle[]
}

export default function Sidebar({ popularArticles = [] }: SidebarProps) {
  const [email, setEmail] = useState('')
  const [showEmailWarning, setShowEmailWarning] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Get article URL based on category
  const getArticleUrl = (article: PopularArticle) => {
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
      default:
        return `/${category}/${slug}`
    }
  }

  // Get category display name and color
  const getCategoryInfo = (category: string) => {
    switch (category) {
      case 'reviews':
        return { name: 'Reviews', color: 'bg-blue-100 text-blue-800' }
      case 'news':
        return { name: 'News', color: 'bg-green-100 text-green-800' }
      case 'tutorials':
        return { name: 'Tutorials', color: 'bg-purple-100 text-purple-800' }
      case 'guides':
        return { name: 'Guides', color: 'bg-orange-100 text-orange-800' }
      default:
        return { name: category, color: 'bg-gray-100 text-gray-800' }
    }
  }

  const handleSubscribe = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    
    if (!email || !emailRegex.test(email)) {
      setShowEmailWarning(true)
      return
    }
    
    setShowEmailWarning(false)
    setShowSuccessModal(true)
    setEmail('')
  }

  const closeModal = () => {
    setShowSuccessModal(false)
  }

  return (
    <>
      <div className="space-y-6">
        {/* Popular This Week */}
        <div className="sidebar-section">
          <div className="flex items-center mb-4">
            <svg className="w-5 h-5 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
            </svg>
            <h3 className="text-lg font-semibold text-gray-900">Popular This Week</h3>
          </div>
          <div className="space-y-4">
            {popularArticles.length > 0 ? (
              popularArticles.map((article, index) => {
                const categoryInfo = getCategoryInfo(article.category)
                return (
                  <div key={article.slug} className={`${index < popularArticles.length - 1 ? 'border-b border-gray-200 pb-4' : ''}`}>
                    <div className="flex items-start space-x-3">
                      {/* Article Thumbnail */}
                      <div className="flex-shrink-0">
                        <Link 
                          href={getArticleUrl(article)}
                          className="block"
                        >
                          <Image
                            src={article.image}
                            alt={article.title}
                            width={40}
                            height={40}
                            className="sidebar-article-thumbnail w-10 h-10 rounded-lg object-cover"
                          />
                        </Link>
                      </div>
                      
                      {/* Article Content */}
                      <div className="flex-1 min-w-0">
                        <Link 
                          href={getArticleUrl(article)}
                          className="block hover:text-blue-600 transition-colors"
                        >
                          <h4 className="text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors line-clamp-2 mb-1">
                            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${categoryInfo.color} mr-2`}>
                              {categoryInfo.name}
                            </span>
                            {article.title}
                          </h4>
                        </Link>
                        <p className="text-xs text-gray-500 flex items-center">
                          <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                          </svg>
                          {article.views || '0'} views
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })
            ) : (
              // No articles state
              <div className="text-center py-4">
                <p className="text-sm text-gray-500">No articles available</p>
              </div>
            )}
          </div>
        </div>

        {/* Stay Updated */}
        <div className="sidebar-section">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Stay Updated</h3>
          <p className="text-sm text-gray-600 mb-4">
            Get the latest drone news and reviews delivered to your inbox.
          </p>
          <div className="space-y-3">
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email" 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button 
              onClick={handleSubscribe}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              Subscribe
            </button>
            {isClient && showEmailWarning && (
              <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg p-2">
                Please enter a valid email address to subscribe.
              </div>
            )}
          </div>
          <p className="text-xs text-gray-500 mt-2">
            No spam, unsubscribe at any time.
          </p>
        </div>
      </div>

      {/* Success Modal */}
      {isClient && showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 p-6">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-green-100 rounded-full">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 text-center mb-2">Successfully Subscribed!</h3>
            <p className="text-gray-600 text-center mb-6">
              Thank you for subscribing! We'll keep you updated with the latest drone news and reviews.
            </p>
            <button 
              onClick={closeModal}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </>
  )
}




