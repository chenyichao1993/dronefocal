import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Star, Calendar, Clock, ArrowLeft, ExternalLink } from 'lucide-react'
import { getArticleBySlug, getAllArticles } from '@/lib/content'
import { getPopularArticles } from '@/lib/popularity'
import { getAllNewsArticles } from '@/lib/news'
import Sidebar from '@/components/Sidebar'
import RelatedArticles from '@/components/RelatedArticles'

interface Props {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const articles = await getAllArticles('news')
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = await getArticleBySlug('news', params.slug)
  
  if (!article) {
    return {
      title: 'Article Not Found',
    }
  }

  return {
    title: `${article.title} | DroneFocal - Latest Drone News`,
    description: article.excerpt,
    keywords: [
      'drone news',
      'drone industry news',
      'drone technology',
      'drone regulations',
      ...(article.tags || [])
    ].filter(Boolean).join(', '),
    authors: [{ name: article.author || 'DroneFocal Team' }],
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [
        {
          url: article.image,
          width: 800,
          height: 450,
          alt: article.title,
        }
      ],
      type: 'article',
      publishedTime: article.date,
      modifiedTime: article.date,
      authors: [article.author || 'DroneFocal Team'],
      section: 'Drone News',
      tags: article.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [article.image],
      creator: '@dronefocal',
      site: '@dronefocal',
    },
    alternates: {
      canonical: `https://dronefocal.com/news/${params.slug}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export default async function NewsPage({ params }: Props) {
  const article = await getArticleBySlug('news', params.slug)

  if (!article) {
    notFound()
  }

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
  
  // Get all news articles for related articles
  const allNewsArticles = await getAllNewsArticles()

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Breadcrumb Navigation */}
            <nav className="breadcrumb-mobile flex items-center space-x-2 text-sm text-gray-500 mb-6">
              <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/news" className="hover:text-blue-600 transition-colors">News</Link>
              <span>/</span>
              <span className="text-gray-900 font-medium">{article.title}</span>
            </nav>

            {/* Article Header */}
            <header className="mb-8">
              <h1 className="article-title-mobile text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {article.title}
              </h1>

              <div className="article-excerpt">
                {article.excerpt}
              </div>

              {/* Desktop Layout */}
              <div className="hidden md:flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center space-x-6">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <time dateTime={article.date}>
                      {new Date(article.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {article.readTime}
                  </div>
                </div>
              </div>

              {/* Mobile Layout */}
              <div className="article-metadata-mobile md:hidden">
                <div className="metadata-row">
                  <div className="metadata-left">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      <time dateTime={article.date}>
                        {new Date(article.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </time>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      {article.readTime}
                    </div>
                  </div>
                </div>
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

            {/* Article Content with Enhanced Typography */}
            <article className="prose prose-xl max-w-none dark:prose-invert">
              <div 
                className="article-content"
                dangerouslySetInnerHTML={{ __html: article.contentHtml }} 
              />
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

            {/* Related Articles */}
            <RelatedArticles articles={allNewsArticles} currentArticle={article} />
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar popularArticles={sidebarArticles} />
          </div>
        </div>
      </div>
    </div>
  )
}
