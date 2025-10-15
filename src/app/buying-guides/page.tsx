import { Metadata } from 'next'
import BuyingGuidesGrid from '@/components/BuyingGuidesGrid'

export const metadata: Metadata = {
  title: 'Drone Buying Guides - Find Your Perfect Drone',
  description: 'Comprehensive buying guides to help you choose the perfect drone for your needs, budget, and experience level.',
  keywords: ['drone buying guide', 'how to choose drone', 'best drone for beginners', 'drone comparison'],
}

export default function BuyingGuidesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Drone Buying Guides
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Not sure which drone to buy? Our expert guides will help you find the perfect drone 
            for your needs, budget, and experience level.
          </p>
        </div>

        <BuyingGuidesGrid />
      </div>
    </div>
  )
}


