import { Metadata } from 'next'
import NewsContent from '@/components/NewsContent'
import Sidebar from '@/components/Sidebar'
import { getPopularArticles } from '@/lib/popularity'
import { getAllNewsArticles } from '@/lib/news'

export const metadata: Metadata = {
  title: 'Drone News & Industry Updates',
  description: 'Stay updated with the latest drone news, industry trends, product launches, and regulatory updates.',
  keywords: ['drone news', 'drone industry', 'drone regulations', 'drone technology', 'drone updates'],
}

export default async function NewsPage() {
  const newsArticles = await getAllNewsArticles()
  
  // Get popular articles for sidebar
  const popularArticles = await getPopularArticles(5)
  
  // Convert to PopularArticle format for Sidebar component
  const sidebarArticles = popularArticles.map(article => ({
    title: article.title,
    slug: article.slug,
    routeDir: article.routeDir,
    category: article.category,
    views: article.views || '0',
    image: article.image,
    rating: article.rating,
    date: article.date
  }))
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <NewsContent articles={newsArticles} />
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar popularArticles={sidebarArticles} />
          </div>
        </div>
      </div>
    </div>
  )
}


