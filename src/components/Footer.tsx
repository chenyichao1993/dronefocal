'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2025)

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <a href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                <Image 
                  src="/images/optimized/webp/dronefocal-logo.webp" 
                  alt="DroneFocal Logo" 
                  width={32}
                  height={32}
                  className="object-contain"
                />
                <span className="text-xl font-bold text-gray-900">DroneFocal</span>
              </a>
            </div>
            <p className="text-gray-600 mb-4 max-w-md text-sm">
              Your trusted source for comprehensive drone reviews, buying guides, and industry insights. We help you find the perfect drone for your needs.
            </p>
          </div>

          {/* Reviews Column */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Reviews
            </h3>
            <ul className="space-y-3">
              <li><a href="/drone-reviews/dji" className="footer-link">DJI Drones</a></li>
              <li><a href="/drone-reviews/autel" className="footer-link">Autel Drones</a></li>
              <li><a href="/drone-reviews/parrot" className="footer-link">Parrot Drones</a></li>
              <li><a href="/drone-reviews/skydio" className="footer-link">Skydio Drones</a></li>
            </ul>
          </div>

          {/* Buying Guides Column */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Buying Guides
            </h3>
            <ul className="space-y-3">
              <li><a href="/buying-guides/beginner" className="footer-link">Beginner Guide</a></li>
              <li><a href="/buying-guides/professional" className="footer-link">Professional Guide</a></li>
              <li><a href="/buying-guides/budget" className="footer-link">Budget Guide</a></li>
              <li><a href="/buying-guides/racing" className="footer-link">Racing Guide</a></li>
            </ul>
          </div>

          {/* Legal & Info Column */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Legal & Info
            </h3>
            <ul className="space-y-3">
              <li><a href="/privacy-policy" className="footer-link">Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="footer-link">Terms of Service</a></li>
              <li><a href="/cookie-policy" className="footer-link">Cookie Policy</a></li>
              <li><a href="/disclaimer" className="footer-link">Disclaimer</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center">
              <p className="text-gray-500 text-sm">
                © {currentYear} DroneFocal. All rights reserved.
              </p>
            </div>
            <div className="flex items-center mt-2 md:mt-0">
              <svg className="w-4 h-4 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <p className="text-gray-500 text-sm">motionjoy93@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}