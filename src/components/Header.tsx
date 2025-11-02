'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  // 点击外部关闭移动端菜单
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (isMobileMenuOpen) {
        const target = event.target as HTMLElement
        const mobileMenu = document.querySelector('.mobile-menu')
        const hamburgerButton = document.querySelector('.hamburger-button')
        
        // 如果点击的不是菜单本身和汉堡按钮，则关闭菜单
        if (mobileMenu && !mobileMenu.contains(target) && hamburgerButton && !hamburgerButton.contains(target)) {
          setIsMobileMenuOpen(false)
        }
      }
    }

    // 添加点击事件监听器
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [isMobileMenuOpen])

  return (
    <header className="bg-white border-b border-gray-200 fixed top-0 left-0 right-0 z-50 w-full">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <Image 
                src="/images/optimized/webp/dronefocal-logo.webp" 
                alt="DroneFocal Logo" 
                width={40}
                height={40}
                className="object-contain"
              />
              <span className="text-2xl font-bold text-gray-900">DroneFocal</span>
            </a>
          </div>
          
          {/* Navigation Menu */}
          <div className="hidden md:flex md:items-center md:space-x-10">
            <a href="/" className="text-gray-800 hover:text-blue-600 px-3 py-2 text-base font-medium transition-colors">Home</a>
            <a href="/drone-reviews" className="text-gray-800 hover:text-blue-600 px-3 py-2 text-base font-medium transition-colors">Drone Reviews</a>
            <a href="/buying-guides" className="text-gray-800 hover:text-blue-600 px-3 py-2 text-base font-medium transition-colors">Buying Guides</a>
            {/* <a href="/tutorials" className="text-gray-800 hover:text-blue-600 px-3 py-2 text-base font-medium transition-colors">Tutorials</a> */}
            <a href="/news" className="text-gray-800 hover:text-blue-600 px-3 py-2 text-base font-medium transition-colors">News</a>
            {/* <a href="/compare" className="text-gray-800 hover:text-blue-600 px-3 py-2 text-base font-medium transition-colors">Compare</a> */}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="hamburger-button text-gray-600 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          
          {/* Right Icons */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Search Icon */}
            <a href="/search" className="text-gray-600 hover:text-blue-600 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </a>
            {/* User Icon - Hidden */}
            {/* <svg className="w-6 h-6 text-gray-600 hover:text-blue-600 cursor-pointer transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
              <circle cx="12" cy="8" r="4"></circle>
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            </svg> */}
          </div>
        </div>
      </nav>
      
      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-2 space-y-1">
            <a href="/" className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors" onClick={closeMobileMenu}>Home</a>
            <a href="/drone-reviews" className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors" onClick={closeMobileMenu}>Drone Reviews</a>
            <a href="/buying-guides" className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors" onClick={closeMobileMenu}>Buying Guides</a>
            {/* <a href="/tutorials" className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors" onClick={closeMobileMenu}>Tutorials</a> */}
            <a href="/news" className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors" onClick={closeMobileMenu}>News</a>
            {/* <a href="/compare" className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors" onClick={closeMobileMenu}>Compare</a> */}
            
            {/* Mobile Icons */}
            <div className="flex items-center space-x-4 px-3 py-2 border-t border-gray-200 mt-2 pt-3">
              {/* Search Icon */}
              <a href="/search" className="text-gray-600 hover:text-blue-600 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
              </a>
              {/* User Icon - Hidden */}
              {/* <svg className="w-6 h-6 text-gray-600 hover:text-blue-600 cursor-pointer transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <circle cx="12" cy="8" r="4"></circle>
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              </svg> */}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}