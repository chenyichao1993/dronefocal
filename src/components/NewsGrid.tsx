import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, ArrowRight, TrendingUp } from 'lucide-react'

const newsArticles = [
  {
    id: 1,
    title: 'DJI Announces Revolutionary New Mini 4 Pro with Enhanced AI Features',
    slug: 'dji-announces-mini-4-pro-ai-features',
    excerpt: 'DJI reveals their latest Mini 4 Pro with advanced AI-powered obstacle avoidance and intelligent flight modes.',
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'Product Launch',
    date: '2024-01-20',
    readTime: '5 min read',
    trending: true,
    author: 'DroneFocal Team'
  },
  {
    id: 2,
    title: 'New FAA Regulations for Commercial Drone Operations in 2024',
    slug: 'faa-regulations-commercial-drone-2024',
    excerpt: 'Updated guidelines for commercial drone pilots including new certification requirements and flight restrictions.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'Regulations',
    date: '2024-01-18',
    readTime: '7 min read',
    trending: false,
    author: 'Legal Team'
  },
  {
    id: 3,
    title: 'Autel Robotics Launches EVO Max 4T with Thermal Imaging',
    slug: 'autel-evo-max-4t-thermal-imaging',
    excerpt: 'Autel introduces their new EVO Max 4T drone featuring advanced thermal imaging capabilities for professional use.',
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'Product Launch',
    date: '2024-01-16',
    readTime: '6 min read',
    trending: true,
    author: 'Product Team'
  },
  {
    id: 4,
    title: 'Drone Delivery Services Expand to 50 New Cities',
    slug: 'drone-delivery-services-expand-50-cities',
    excerpt: 'Major drone delivery companies announce expansion to 50 new cities across the United States.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'Industry News',
    date: '2024-01-14',
    readTime: '4 min read',
    trending: false,
    author: 'Industry Reporter'
  },
  {
    id: 5,
    title: 'New Battery Technology Promises 2x Longer Flight Times',
    slug: 'new-battery-technology-2x-flight-times',
    excerpt: 'Breakthrough in drone battery technology could double flight times while reducing charging periods.',
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'Technology',
    date: '2024-01-12',
    readTime: '8 min read',
    trending: true,
    author: 'Tech Editor'
  },
  {
    id: 6,
    title: 'Drone Racing Championship 2024: Registration Now Open',
    slug: 'drone-racing-championship-2024-registration',
    excerpt: 'The world\'s largest drone racing championship opens registration for pilots worldwide.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'Events',
    date: '2024-01-10',
    readTime: '3 min read',
    trending: false,
    author: 'Events Team'
  }
]

export default function NewsGrid() {
  return (
    <div>
      {/* Featured Article */}
      <div className="mb-12">
        <div className="card overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="relative">
              <Image
                src={newsArticles[0].image}
                alt={newsArticles[0].title}
                width={600}
                height={400}
                className="w-full h-64 lg:h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  Featured
                </span>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center mb-4">
                <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {newsArticles[0].category}
                </span>
                <span className="ml-3 text-sm text-gray-500 dark:text-gray-400">
                  {newsArticles[0].author}
                </span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {newsArticles[0].title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {newsArticles[0].excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <Calendar className="h-4 w-4 mr-1" />
                  {new Date(newsArticles[0].date).toLocaleDateString()}
                  <Clock className="h-4 w-4 ml-4 mr-1" />
                  {newsArticles[0].readTime}
                </div>
                <Link
                  href={`/news/${newsArticles[0].slug}`}
                  className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                >
                  Read Full Article
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsArticles.slice(1).map((article) => (
          <article key={article.id} className="card group hover:shadow-lg transition-shadow duration-300">
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
                  {article.category}
                </span>
              </div>
              {article.trending && (
                <div className="absolute top-4 right-4">
                  <span className="bg-red-600 text-white px-2 py-1 rounded text-sm font-semibold flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    Trending
                  </span>
                </div>
              )}
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
                {article.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                {article.excerpt}
              </p>

              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {new Date(article.date).toLocaleDateString()}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {article.readTime}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  By {article.author}
                </span>
                <Link
                  href={`/news/${article.slug}`}
                  className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                >
                  Read More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Load More Button */}
      <div className="text-center mt-12">
        <button className="btn-primary px-8 py-3">
          Load More Articles
        </button>
      </div>
    </div>
  )
}


