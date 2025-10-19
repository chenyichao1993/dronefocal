import { Metadata } from 'next'
import ReviewsGrid from '@/components/ReviewsGrid'
import FilterSidebar from '@/components/FilterSidebar'
import { getAllArticles } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Drone Reviews - Expert Analysis & Ratings',
  description: 'Comprehensive drone reviews with expert analysis, ratings, and buying recommendations. Find the best drone for your needs.',
  keywords: ['drone reviews', 'drone ratings', 'drone analysis', 'best drone', 'drone comparison'],
}

interface SearchParams {
  brand?: string
  price?: string
  rating?: string
}

export default async function DroneReviewsPage({ 
  searchParams 
}: { 
  searchParams: SearchParams 
}) {
  // Get all articles for dynamic filtering
  const articles = await getAllArticles('reviews')
  
  // Calculate brand counts
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

  // Calculate price range counts
  const priceRanges = [
    { name: 'Under $200', value: '0-200', count: 0 },
    { name: '$200 - $500', value: '200-500', count: 0 },
    { name: '$500 - $1000', value: '500-1000', count: 0 },
    { name: '$1000 - $2000', value: '1000-2000', count: 0 },
    { name: 'Over $2000', value: '2000+', count: 0 }
  ]

  articles.forEach(article => {
    if (article.price) {
      const price = parseFloat(article.price.replace(/[^0-9.]/g, ''))
      if (price < 200) priceRanges[0].count++
      else if (price < 500) priceRanges[1].count++
      else if (price < 1000) priceRanges[2].count++
      else if (price < 2000) priceRanges[3].count++
      else priceRanges[4].count++
    }
  })

  // Calculate rating counts
  const ratings = [
    { name: '4.5+ Stars', value: '4.5', count: 0 },
    { name: '4.0+ Stars', value: '4.0', count: 0 },
    { name: '3.5+ Stars', value: '3.5', count: 0 },
    { name: '3.0+ Stars', value: '3.0', count: 0 }
  ]

  articles.forEach(article => {
    const rating = parseFloat(article.rating?.toString() || '0')
    if (rating >= 4.5) ratings[0].count++
    if (rating >= 4.0) ratings[1].count++
    if (rating >= 3.5) ratings[2].count++
    if (rating >= 3.0) ratings[3].count++
  })

  // Apply filters
  let filteredArticles = articles

  // Brand filter
  if (searchParams.brand && searchParams.brand !== 'all') {
    filteredArticles = filteredArticles.filter(article => 
      article.brand?.toLowerCase() === searchParams.brand?.toLowerCase()
    )
  }

  // Price filter
  if (searchParams.price && searchParams.price !== 'all') {
    filteredArticles = filteredArticles.filter(article => {
      if (!article.price) return false
      const price = parseFloat(article.price.replace(/[^0-9.]/g, ''))
      
      switch (searchParams.price) {
        case '0-200': return price < 200
        case '200-500': return price >= 200 && price < 500
        case '500-1000': return price >= 500 && price < 1000
        case '1000-2000': return price >= 1000 && price < 2000
        case '2000+': return price >= 2000
        default: return true
      }
    })
  }

  // Rating filter
  if (searchParams.rating && searchParams.rating !== 'all') {
    const minRating = parseFloat(searchParams.rating)
    filteredArticles = filteredArticles.filter(article => {
      const rating = parseFloat(article.rating?.toString() || '0')
      return rating >= minRating
    })
  }

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
          {/* Filter Sidebar */}
          <div className="lg:col-span-1">
            <FilterSidebar 
              brands={brands} 
              priceRanges={priceRanges}
              ratings={ratings}
              currentFilters={searchParams}
            />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <ReviewsGrid 
              reviews={filteredArticles} 
              hasActiveFilters={!!(searchParams.brand || searchParams.price || searchParams.rating)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}


