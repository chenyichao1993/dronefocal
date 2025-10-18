import { Metadata } from 'next'
import ReviewsGrid from '@/components/ReviewsGrid'
import FilterSidebar from '@/components/FilterSidebar'
import { getAllArticles } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Drone Reviews - Expert Analysis & Ratings',
  description: 'Comprehensive drone reviews with expert analysis, ratings, and buying recommendations. Find the best drone for your needs.',
  keywords: ['drone reviews', 'drone ratings', 'drone analysis', 'best drone', 'drone comparison'],
}

export default async function DroneReviewsPage() {
  // Get brands dynamically from articles
  const articles = await getAllArticles('reviews')
  const brandCounts: { [key: string]: number } = {}
  
  articles.forEach(article => {
    if (article.brand) {
      const brandKey = article.brand.toLowerCase()
      brandCounts[brandKey] = (brandCounts[brandKey] || 0) + 1
    }
  })

  const brands = [
    { name: 'All Brands', value: 'all', count: articles.length },
    ...Object.entries(brandCounts).map(([brand, count]) => ({
      name: brand.toUpperCase(),
      value: brand,
      count
    }))
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Drone Reviews
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Expert reviews and ratings for the latest drones on the market
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <FilterSidebar brands={brands} />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <ReviewsGrid />
          </div>
        </div>
      </div>
    </div>
  )
}


