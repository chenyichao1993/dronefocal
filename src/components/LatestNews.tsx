import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

const latestNews = [
  {
    id: 1,
    title: 'DJI Announces New Mini 4 Pro with Enhanced Camera System',
    slug: 'dji-mini-4-pro-announcement',
    excerpt: 'DJI reveals the latest addition to their Mini series with improved image quality and extended flight time.',
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'Product News',
    date: '2024-01-20',
    readTime: '5 min read'
  },
  {
    id: 2,
    title: 'New FAA Regulations for Commercial Drone Operations in 2024',
    slug: 'faa-regulations-2024',
    excerpt: 'Updated guidelines for commercial drone pilots including new certification requirements and flight restrictions.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'Regulations',
    date: '2024-01-18',
    readTime: '7 min read'
  },
  {
    id: 3,
    title: 'Best Drone Accessories for Winter Flying',
    slug: 'winter-drone-accessories',
    excerpt: 'Essential accessories to keep your drone flying safely in cold weather conditions.',
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'Accessories',
    date: '2024-01-16',
    readTime: '6 min read'
  },
  {
    id: 4,
    title: 'Drone Photography Tips for Stunning Aerial Shots',
    slug: 'drone-photography-tips',
    excerpt: 'Professional techniques to capture breathtaking aerial photographs with your drone.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'Tutorials',
    date: '2024-01-14',
    readTime: '8 min read'
  }
]

export default function LatestNews() {
  return (
    <section className="py-16 bg-white dark:bg-dark-800">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Latest News & Updates
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Stay updated with the latest drone news, regulations, and industry insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {latestNews.map((news) => (
            <article key={news.id} className="card group hover:shadow-lg transition-shadow duration-300">
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src={news.image}
                  alt={news.title}
                  width={600}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {news.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
                  {news.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {news.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(news.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {news.readTime}
                    </div>
                  </div>
                </div>

                <Link
                  href={`/news/${news.slug}`}
                  className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                >
                  Read More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/news"
            className="btn-primary inline-flex items-center px-8 py-3 text-lg font-semibold"
          >
            View All News
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}


