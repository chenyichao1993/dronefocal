import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getAllArticles } from '@/lib/content'
import { Clock, Users, DollarSign, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Drone Buying Guides | DroneFocal',
  description: 'Comprehensive drone buying guides for beginners, professionals, and enthusiasts. Find the perfect drone for your needs and budget.',
  keywords: 'drone buying guide, beginner drone, professional drone, drone reviews, aerial photography',
}

interface SearchParams {
  category?: string
}

interface Props {
  searchParams: SearchParams
}

export default async function BuyingGuidesPage({ searchParams }: Props) {
  // Get all guides
  const guides = await getAllArticles('guides')
  
  // Filter guides based on search params
  const filteredGuides = guides.filter(guide => {
    if (searchParams.category && guide.tags && !guide.tags.includes(searchParams.category)) {
      return false
    }
    return true
  })

  const categories = [
    { id: 'beginner', name: 'Beginner', count: guides.filter(g => g.tags?.includes('beginner')).length },
    { id: 'professional', name: 'Professional', count: guides.filter(g => g.tags?.includes('professional')).length },
    { id: 'budget', name: 'Budget', count: guides.filter(g => g.tags?.includes('budget')).length },
    { id: 'racing', name: 'Racing', count: guides.filter(g => g.tags?.includes('racing')).length },
  ]



  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Drone Buying Guides
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Comprehensive guides to help you find the perfect drone for your needs, whether you're a beginner or professional photographer.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Filters</h3>
              
              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Category</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <Link
                      key={category.id}
                      href={`/buying-guides?category=${category.id}`}
                      className={`flex items-center justify-between px-3 py-2 rounded-md text-sm transition-colors ${
                        searchParams.category === category.id
                          ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                    >
                      <div className="flex items-center">
                        <div className={`w-4 h-4 rounded-full mr-3 border-2 flex items-center justify-center ${
                          searchParams.category === category.id
                            ? 'border-blue-600 dark:border-blue-400'
                            : 'border-gray-300 dark:border-gray-600'
                        }`}>
                          {searchParams.category === category.id && (
                            <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400"></div>
                          )}
                        </div>
                        <span>{category.name}</span>
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {category.count}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {searchParams.category && (
                <Link
                  href="/buying-guides"
                  className="w-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-2 px-4 rounded-md text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-center block"
                >
                  Clear All Filters
                </Link>
              )}
            </div>
          </div>

          {/* Guides Grid */}
          <div className="lg:col-span-3">

            {/* Guides Grid */}
            {filteredGuides.length === 0 ? (
              <div className="text-center py-16">
                <div className="max-w-md mx-auto">
                  <div className="mb-6">
                    <svg className="mx-auto h-24 w-24 text-gray-400 dark:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                    No Guides Found
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Try adjusting your filters or check back later for new guides.
                  </p>
                  <Link href="/buying-guides" className="btn-primary px-6 py-3">
                    View All Guides
                  </Link>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredGuides.map((guide) => (
                  <article key={guide.slug} className="group bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-600 transition-all duration-300">
                    <Link href={`/guides/${guide.slug}`} className="block">
                      <div className="relative h-56 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800">
                        <Image
                          src={guide.image}
                          alt={guide.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {guide.difficulty && (
                          <div className="absolute top-4 right-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
                              guide.difficulty === 'beginner' ? 'bg-green-500/90 text-white' :
                              guide.difficulty === 'intermediate' ? 'bg-yellow-500/90 text-white' :
                              'bg-red-500/90 text-white'
                            }`}>
                              {guide.difficulty === 'beginner' ? '⭐ Beginner' :
                               guide.difficulty === 'intermediate' ? '⭐⭐ Intermediate' :
                               '⭐⭐⭐ Professional'}
                            </span>
                          </div>
                        )}
                      </div>
                      
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {guide.title}
                        </h3>
                        
                        <p className="text-gray-600 dark:text-gray-400 mb-5 line-clamp-3 leading-relaxed">
                          {guide.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1.5" />
                            <span className="font-medium">{guide.readTime}</span>
                          </div>
                          <div className="flex items-center">
                            <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span className="font-medium">{new Date(guide.date).toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '/')}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}