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
  
  // Carousel: Fixed 2-3 Reviews + latest from other categories
  const latestReviews = [...allReviews]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3)
  
  const latestGuide = [...allGuides]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0]
  
  const latestNews = [...allNews]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0]
  
  const latestTutorial = [...allTutorials]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0]
  
  const carouselArticles = [
    ...latestReviews,
    ...(latestGuide ? [latestGuide] : []),
    ...(latestNews ? [latestNews] : []),
    ...(latestTutorial ? [latestTutorial] : [])
  ].slice(0, 5)
  
  // Homepage articles with weights
  const allArticles = [
    ...allReviews.map(article => ({ ...article, weight: 4 })),
    ...allGuides.map(article => ({ ...article, weight: 3 })),
    ...allNews.map(article => ({ ...article, weight: 2 })),
    ...allTutorials.map(article => ({ ...article, weight: 1 }))
  ].sort((a, b) => {
    if (a.weight !== b.weight) return b.weight - a.weight
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
  
  const popularArticles = await getPopularArticles(5)
  
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
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <FeaturedCarousel articles={carouselArticles} />
            <HomepageArticles articles={allArticles} />
          </div>
          <div className="lg:col-span-1">
            <Sidebar popularArticles={sidebarArticles} />
          </div>
        </div>
      </main>
    </>
  )
}
