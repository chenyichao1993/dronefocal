import { getAllArticles } from '@/lib/content'
import { getPopularArticles } from '@/lib/popularity'
import Sidebar from '@/components/Sidebar'
import HomepageArticles from '@/components/HomepageArticles'

export default async function HomePage() {
  // Get all articles from all categories
  const allReviews = await getAllArticles('reviews')
  const allTutorials = await getAllArticles('tutorials')
  const allGuides = await getAllArticles('guides')
  const allNews = await getAllArticles('news')
  
  // Process news articles: change category to "News" for homepage display
  const processedNewsArticles = allNews.map(article => ({
    ...article,
    category: 'News'
  }))
  
  // Combine all articles with weights: reviews > guides > news > tutorials
  const allArticles = [
    ...allReviews.map(article => ({ ...article, weight: 4 })),
    ...allGuides.map(article => ({ ...article, weight: 3 })),
    ...processedNewsArticles.map(article => ({ ...article, weight: 2 })),
    ...allTutorials.map(article => ({ ...article, weight: 1 }))
  ]
    .sort((a, b) => {
      // First sort by weight (higher weight first)
      if (a.weight !== b.weight) {
        return b.weight - a.weight
      }
      // Then sort by date within same weight
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })
  
  // Get all articles (no limit, all articles will be displayed)
  const featuredArticles = allArticles
  
  // Get popular articles for sidebar
  const popularArticles = await getPopularArticles(5)
  
  // Convert to PopularArticle format for Sidebar component
  const sidebarArticles = popularArticles.map(article => ({
    title: article.title,
    slug: article.slug,
    category: article.category,
    views: article.views || '0',
    image: article.image,
    rating: article.rating,
    date: article.date
  }))

  return (
    <>
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Articles Grid */}
          <div className="lg:col-span-2">
            <HomepageArticles articles={featuredArticles} />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar popularArticles={sidebarArticles} />
          </div>
        </div>
      </main>
    </>
  )
}