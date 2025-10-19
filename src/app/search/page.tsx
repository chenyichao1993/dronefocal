import { Metadata } from 'next'
import { getAllArticles } from '@/lib/content'
import SearchContent from './SearchContent'

export const metadata: Metadata = {
  title: 'Search | DroneFocal - Find Drone Reviews and Guides',
  description: 'Search for drone reviews, buying guides, tutorials, and news on DroneFocal.',
  robots: {
    index: true,
    follow: true,
  },
}

interface SearchPageProps {
  searchParams: {
    q?: string
    category?: string
    sort?: string
  }
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  // Load all articles on the server side
  const [reviews, guides, tutorials, news] = await Promise.all([
    getAllArticles('reviews'),
    getAllArticles('guides'),
    getAllArticles('tutorials'),
    getAllArticles('news'),
  ])
  
  const allArticles = [...reviews, ...guides, ...tutorials, ...news]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Search</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Find drone reviews, buying guides, tutorials, and news
          </p>
        </div>
        
        <SearchContent searchParams={searchParams} articles={allArticles} />
      </div>
    </div>
  )
}
