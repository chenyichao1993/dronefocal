import { Metadata } from 'next'
import NewsGrid from '@/components/NewsGrid'

export const metadata: Metadata = {
  title: 'Drone News & Industry Updates',
  description: 'Stay updated with the latest drone news, industry trends, product launches, and regulatory updates.',
  keywords: ['drone news', 'drone industry', 'drone regulations', 'drone technology', 'drone updates'],
}

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900">
      <div className="container-custom py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Drone News & Updates
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Stay informed with the latest drone industry news, product launches, 
            regulatory updates, and technological advancements.
          </p>
        </div>

        <NewsGrid />
      </div>
    </div>
  )
}


