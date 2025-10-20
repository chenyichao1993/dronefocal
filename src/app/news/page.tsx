import { Metadata } from 'next'
import NewsContent from '@/components/NewsContent'
import { getAllNewsArticles } from '@/lib/news'

export const metadata: Metadata = {
  title: 'Drone News & Industry Updates',
  description: 'Stay updated with the latest drone news, industry trends, product launches, and regulatory updates.',
  keywords: ['drone news', 'drone industry', 'drone regulations', 'drone technology', 'drone updates'],
}

export default async function NewsPage() {
  const newsArticles = await getAllNewsArticles()
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <NewsContent articles={newsArticles} />
      </div>
    </div>
  )
}


