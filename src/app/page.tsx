import { getAllArticles } from '@/lib/content'
import { getPopularArticles } from '@/lib/popularity'
import Sidebar from '@/components/Sidebar'
import HomepageArticles from '@/components/HomepageArticles'
import FeaturedCarousel from '@/components/FeaturedCarousel'

export default async function HomePage() {
  // Get all articles from all categories
  const allReviews = await getAllArticles('reviews')
  const allTutorials = await getAllArticles('tutorials')
  const allGuides = await getAllArticles('guides')
  const allNews = await getAllArticles('news')
  
  // Carousel logic: Fixed 2-3 Reviews + latest from other categories
  // Get latest 3 reviews (sorted by date)
  const latestReviews = [...allReviews]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3)
  
  // Get latest 1 from each other category
  const latestGuide = [...allGuides]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0]
  
  const latestNews = [...allNews]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0]
  
  const latestTutorial = [...allTutorials]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0]
  
  // Build carousel array: 2-3 Reviews + 1 each from Guides/News/Tutorials
  const carouselArticles = [
    ...latestReviews,
    ...(latestGuide ? [latestGuide] : []),
    ...(latestNews ? [latestNews] : []),
    ...(latestTutorial ? [latestTutorial] : [])
  ].slice(0, 5) // Max 5 articles in carousel
  
  // Combine all articles with weights for homepage listing
  const allArticles = [
    ...allReviews.map(article => ({ ...article, weight: 4 })),
    ...allGuides.map(article => ({ ...article, weight: 3 })),
    ...allNews.map(article => ({ ...article, weight: 2 })),
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
    routeDir: article.routeDir,
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
            {/* Featured Carousel */}
            <FeaturedCarousel articles={carouselArticles} />
            
            {/* Articles List */}
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
