import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Star, Users, Award } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-dark-900 via-dark-800 to-primary-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>
      
      <div className="container-custom relative py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Find Your Perfect
                <span className="text-gradient block">Drone</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-lg">
                Expert reviews, buying guides, and tutorials to help you choose the best drone 
                for photography, videography, or recreational flying.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="h-6 w-6 text-yellow-400 fill-current" />
                </div>
                <div className="text-2xl font-bold">4.9/5</div>
                <div className="text-sm text-gray-400">Expert Rating</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-6 w-6 text-primary-400" />
                </div>
                <div className="text-2xl font-bold">50K+</div>
                <div className="text-sm text-gray-400">Happy Users</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="h-6 w-6 text-green-400" />
                </div>
                <div className="text-2xl font-bold">200+</div>
                <div className="text-sm text-gray-400">Reviews</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/drone-reviews"
                className="btn-primary inline-flex items-center justify-center px-8 py-3 text-lg font-semibold"
              >
                Browse Reviews
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/buying-guides"
                className="btn-secondary inline-flex items-center justify-center px-8 py-3 text-lg font-semibold"
              >
                Buying Guide
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <Image
                src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Professional drone in flight"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
                priority
              />
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-yellow-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  )
}


