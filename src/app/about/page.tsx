import { Metadata } from 'next'
import Image from 'next/image'
import { Award, Users, Target, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About DroneFocal - Expert Drone Reviews & Guides',
  description: 'Learn about DroneFocal\'s mission to provide expert drone reviews, buying guides, and tutorials to help you find the perfect drone.',
  keywords: ['about dronefocal', 'drone experts', 'drone review team', 'dronefocal mission'],
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About DroneFocal
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We're passionate about drones and committed to helping you find the perfect drone 
            for your needs through expert reviews, comprehensive guides, and honest recommendations.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              At DroneFocal, we believe that everyone should have access to reliable, 
              unbiased information when choosing a drone. Our team of experts spends 
              countless hours testing and reviewing drones to provide you with the 
              most accurate and helpful information possible.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Whether you're a beginner looking for your first drone or a professional 
              seeking the latest technology, we're here to guide you through the process 
              and help you make an informed decision.
            </p>
          </div>
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="DroneFocal team"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 dark:bg-primary-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Excellence
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We strive for excellence in everything we do, from our reviews to our customer service.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 dark:bg-primary-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Community
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We believe in building a strong community of drone enthusiasts who help each other.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 dark:bg-primary-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Accuracy
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We provide accurate, up-to-date information to help you make the best decisions.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 dark:bg-gray-600 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Alex Johnson
              </h3>
              <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                Chief Editor
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                10+ years of experience in drone technology and aerial photography.
              </p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 dark:bg-gray-600 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Sarah Chen
              </h3>
              <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                Senior Reviewer
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Expert in consumer drones and beginner-friendly recommendations.
              </p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 dark:bg-gray-600 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Mike Rodriguez
              </h3>
              <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                Technical Analyst
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Specializes in professional drones and commercial applications.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white dark:bg-dark-800 rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Our Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                200+
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Drone Reviews
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                50K+
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Happy Users
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                4.9/5
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Average Rating
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                5+
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Years Experience
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Have questions or suggestions? We'd love to hear from you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="btn-primary px-8 py-3"
            >
              Contact Us
            </a>
            <a
              href="mailto:hello@dronefocal.com"
              className="btn-secondary px-8 py-3"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}


