import Image from 'next/image'
import Link from 'next/link'
import { getAllArticles } from '@/lib/content'
import Sidebar from '@/components/Sidebar'

export default async function HomePage() {
  // Get all articles from all categories
  const allReviews = await getAllArticles('reviews')
  const allTutorials = await getAllArticles('tutorials')
  const allGuides = await getAllArticles('guides')
  const allNews = await getAllArticles('news')
  
  // Combine all articles and sort by date
  const allArticles = [...allReviews, ...allTutorials, ...allGuides, ...allNews]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  
  // Get featured articles (first 6)
  const featuredArticles = allArticles.slice(0, 6)

  return (
    <>
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Articles Grid */}
          <div className="lg:col-span-2">
            {/* Articles Grid - Card Style */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredArticles.map((article) => (
                <article key={article.slug} className="article-card card group hover:shadow-lg transition-shadow duration-300">
                  <Link href={`/${article.category === 'reviews' ? 'drone-reviews' : article.category}/${article.slug}`} className="block">
                    <div className="relative overflow-hidden rounded-t-lg">
                    <Image 
                      src={article.image} 
                      alt={article.title} 
                      width={400}
                        height={250}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                        <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {article.category === 'reviews' ? 'Reviews' : 
                           article.category === 'tutorials' ? 'Tutorials' :
                           article.category === 'guides' ? 'Guides' :
                           article.category === 'news' ? 'News' : 
                           article.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                      <h2 className="article-title-hover text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {article.title}
                      </h2>
                      <p className="article-excerpt-hover text-gray-600 dark:text-gray-400 mb-4">
                        {article.excerpt}
                      </p>

                      <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center space-x-4">
                          <span>{article.author || 'DroneFocal Team'}</span>
                          <span>•</span>
                      <span>{article.readTime}</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-primary-600 dark:text-primary-400 font-medium">
                            Read More →
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>

            {/* Load More Button */}
            {allArticles.length > 6 && (
              <div className="text-center mt-8">
                <Link
                  href="/drone-reviews"
                  className="btn-primary px-8 py-3"
                >
                  View All Articles
                </Link>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </main>
    </>
  )
}