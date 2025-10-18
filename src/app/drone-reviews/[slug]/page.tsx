import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Star, Calendar, Clock, ArrowLeft, ExternalLink } from 'lucide-react'
import { getArticleBySlug, getAllArticles } from '@/lib/content'

interface Props {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const articles = await getAllArticles('reviews')
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = await getArticleBySlug('reviews', params.slug)
  
  if (!article) {
    return {
      title: 'Article Not Found',
    }
  }

  return {
    title: `${article.title} | DroneFocal`,
    description: article.excerpt,
    keywords: article.tags,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [article.image],
      type: 'article',
      publishedTime: article.date,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  }
}

export default async function ReviewPage({ params }: Props) {
  const article = await getArticleBySlug('reviews', params.slug)

  if (!article) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link
            href="/drone-reviews"
            className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Reviews
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                {article.category}
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {article.brand}
              </span>
            </div>
            <div className="flex items-center">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(article.rating || 0)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-lg font-semibold text-gray-900 dark:text-white">
                {article.rating}
              </span>
            </div>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {article.title}
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
            {article.excerpt}
          </p>

          <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {new Date(article.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {article.readTime}
              </div>
            </div>
            {article.price && (
              <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                {article.price}
              </div>
            )}
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-8">
          <Image
            src={article.image}
            alt={article.title}
            width={800}
            height={450}
            className="w-full h-96 object-cover rounded-lg shadow-lg"
            priority
          />
        </div>

        {/* Pros and Cons */}
        {(article.pros || article.cons) && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {article.pros && (
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-4">
                  Pros
                </h3>
                <ul className="space-y-2">
                  {article.pros.map((pro, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-green-700 dark:text-green-300">{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {article.cons && (
              <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-4">
                  Cons
                </h3>
                <ul className="space-y-2">
                  {article.cons.map((con, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-red-700 dark:text-red-300">{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Article Content */}
        <article className="prose prose-lg max-w-none dark:prose-invert">
          <div dangerouslySetInnerHTML={{ __html: article.contentHtml }} />
        </article>

        {/* Tags */}
        {article.tags && article.tags.length > 0 && (
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Author and Share */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                By {article.author || 'DroneFocal Team'}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Share this review:
              </span>
              <div className="flex items-center space-x-2">
                <button className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <ExternalLink className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
