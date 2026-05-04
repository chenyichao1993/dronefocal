import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getAllArticles } from '@/lib/content'
import { Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Drone Tutorials - Learn to Fly Like a Pro',
  description: 'Comprehensive drone tutorials covering everything from basic flight to advanced techniques and safety guidelines.',
  keywords: ['drone tutorials', 'how to fly drone', 'drone safety', 'drone techniques', 'drone training'],
}

export default async function TutorialsPage() {
  const tutorials = await getAllArticles('tutorials')

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Drone Tutorials
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Master the art of drone flying with our comprehensive tutorials. 
              From beginner basics to advanced techniques, we've got you covered.
            </p>
          </div>
        </div>
      </div>

      {/* Tutorials Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {tutorials.length === 0 ? (
          <div className="text-center py-16">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              No Tutorials Yet
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Check back soon for new tutorials.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tutorials.map((tutorial) => (
              <article
                key={tutorial.slug}
                className="group bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-600 transition-all duration-300"
              >
                <Link
                  href={`/tutorials/${tutorial.slug}`}
                  className="block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="relative h-56 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800">
                    <Image
                      src={tutorial.image}
                      alt={tutorial.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {tutorial.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 mb-5 line-clamp-3 leading-relaxed">
                      {tutorial.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1.5" />
                        <span className="font-medium">{tutorial.readTime}</span>
                      </div>
                      <div className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-1.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <span className="font-medium">
                          {new Date(tutorial.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: '2-digit',
                            day: '2-digit',
                          })}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
