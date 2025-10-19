'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Sidebar() {
  const [email, setEmail] = useState('')
  const [showEmailWarning, setShowEmailWarning] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Real articles data
  const popularArticles = [
    {
      title: "DJI Mavic 3 Review: Professional Drone with Hasselblad Camera",
      slug: "dji-mavic-3-review",
      category: "reviews",
      views: "15,200"
    },
    {
      title: "DJI Mavic Air 2 Review: Professional 4K Drone with 48MP Camera",
      slug: "dji-mavic-air-2-review", 
      category: "reviews",
      views: "12,800"
    }
  ]

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
            {popularArticles.map((article, index) => (
              <div key={article.slug} className={`${index < popularArticles.length - 1 ? 'border-b border-gray-200 pb-4' : ''}`}>
                <Link 
                  href={`/${article.category === 'reviews' ? 'drone-reviews' : article.category}/${article.slug}`}
                  className="block hover:text-blue-600 transition-colors"
                >
                  <h4 className="text-sm font-medium text-gray-900 mb-1 hover:text-blue-600 transition-colors">
                    {article.title}
                  </h4>
                </Link>
                <p className="text-xs text-gray-500 flex items-center">
                  <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                  {article.views} views
                </p>
              </div>
            ))}
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




