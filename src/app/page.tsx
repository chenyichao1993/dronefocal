'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { articles, getArticles, getTotalArticles, type Article } from '@/data/articles'

export default function HomePage() {
  const [email, setEmail] = useState('')
  const [showEmailWarning, setShowEmailWarning] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  
  // Load More Articles State
  const [displayedArticles, setDisplayedArticles] = useState<Article[]>([])
  const [displayedCount, setDisplayedCount] = useState(6)
  const [isLoading, setIsLoading] = useState(false)
  const [hasMoreArticles, setHasMoreArticles] = useState(true)

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

  // Initialize displayed articles
  useEffect(() => {
    const initialArticles = getArticles(6, 0)
    setDisplayedArticles(initialArticles)
  }, [])

  // Load More Articles Function
  const loadMoreArticles = async () => {
    if (isLoading || !hasMoreArticles) return
    
    setIsLoading(true)
    
    // Simulate loading delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    const newArticles = getArticles(6, displayedCount)
    const totalArticles = getTotalArticles()
    
    if (newArticles.length > 0) {
      setDisplayedArticles(prev => [...prev, ...newArticles])
      setDisplayedCount(prev => prev + 6)
    }
    
    // Check if there are more articles
    if (displayedCount + 6 >= totalArticles) {
      setHasMoreArticles(false)
    }
    
    setIsLoading(false)
  }

  return (
    <>
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Content Area */}
          <div className="lg:col-span-2">
            {/* Featured Article */}
            <article className="article-card mb-8">
              <div className="relative">
                <Image 
                  src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="DJI Mavic 3 Pro" 
                  width={800}
                  height={256}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <div className="absolute top-4 left-4">
                  <span className="category-tag">Review</span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="flex items-center bg-white rounded-full px-3 py-1">
                    <div className="flex rating-stars">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                    <span className="ml-2 text-sm font-medium text-gray-700">4.8</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  DJI Mavic 3 Pro Review: The Ultimate Professional Drone
                </h2>
                <p className="text-gray-600 mb-4">
                  After extensive testing, we can confirm the DJI Mavic 3 Pro is the most capable consumer drone ever made. With its Hasselblad camera and 43-minute flight time, it sets new standards for aerial photography.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span className="font-medium">DroneFocal Team</span>
                  <span className="mx-2">•</span>
                  <span>2024-01-15</span>
                  <span className="mx-2">•</span>
                  <span>12 min read</span>
                  <span className="mx-2">•</span>
                  <span>15,420</span>
                </div>
              </div>
            </article>

            {/* Dynamic Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {displayedArticles.map((article, index) => (
                <article key={article.id} className="article-card">
                  <div className="relative">
                    <Image 
                      src={article.image} 
                      alt={article.title} 
                      width={400}
                      height={192}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute top-4 left-4">
                      <span 
                        className="category-tag" 
                        style={{
                          background: article.category === 'Review' ? '#3b82f6' :
                                     article.category === 'News' ? '#10b981' :
                                     article.category === 'Guide' ? '#8b5cf6' :
                                     article.category === 'Comparison' ? '#f59e0b' :
                                     article.category === 'Tutorial' ? '#ef4444' : '#6b7280'
                        }}
                      >
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {article.description}
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="font-medium">{article.author}</span>
                      <span className="mx-2">•</span>
                      <span>{article.publishedAt}</span>
                      <span className="mx-2">•</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More Button */}
            {hasMoreArticles && (
              <div className="text-center">
                <button 
                  onClick={loadMoreArticles}
                  disabled={isLoading}
                  className={`bg-white border border-gray-300 text-gray-700 px-8 py-3 rounded-lg transition-colors ${
                    isLoading 
                      ? 'opacity-50 cursor-not-allowed' 
                      : 'hover:bg-gray-50'
                  }`}
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Loading...
                    </div>
                  ) : (
                    'Load More Articles'
                  )}
                </button>
              </div>
            )}
            
            {/* No More Articles Message */}
            {!hasMoreArticles && displayedArticles.length > 6 && (
              <div className="text-center">
                <p className="text-gray-500 text-sm">
                  All articles loaded. Check back later for more content!
                </p>
              </div>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            {/* Popular This Week */}
            <div className="sidebar-section">
              <div className="flex items-center mb-4">
                <svg className="w-5 h-5 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                </svg>
                <h3 className="text-lg font-semibold text-gray-900">Popular This Week</h3>
              </div>
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-1">
                    DJI Mini 4 Pro: The Perfect Beginner Drone?
                  </h4>
                  <p className="text-xs text-gray-500 flex items-center">
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                    </svg>
                    25,600 views
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-1">
                    Drone Laws by State: Complete 2024 Guide
                  </h4>
                  <p className="text-xs text-gray-500 flex items-center">
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                    </svg>
                    18,900 views
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-1">
                    Best Drone Accessories Every Pilot Needs
                  </h4>
                  <p className="text-xs text-gray-500 flex items-center">
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                    </svg>
                    15,200 views
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-1">
                    DJI Air 3 vs Mini 4 Pro: Which Drone Should You Buy?
                  </h4>
                  <p className="text-xs text-gray-500 flex items-center">
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                    </svg>
                    12,800 views
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-1">
                    Drone Photography Tips for Stunning Aerial Shots
                  </h4>
                  <p className="text-xs text-gray-500 flex items-center">
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                    </svg>
                    9,500 views
                  </p>
                </div>
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
                {showEmailWarning && (
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
        </div>
      </main>

      {/* Success Modal */}
      {showSuccessModal && (
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