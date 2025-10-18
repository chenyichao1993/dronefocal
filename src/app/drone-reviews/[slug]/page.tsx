import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Star, Calendar, Clock, ArrowLeft, ExternalLink } from 'lucide-react'
import { getArticleBySlug, getAllArticles } from '@/lib/content'
import Sidebar from '@/components/Sidebar'

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
    title: `${article.title} | DroneFocal - Expert Drone Reviews`,
    description: article.excerpt,
    keywords: [
      'drone review',
      'DJI drone',
      'professional drone',
      'aerial photography',
      'drone comparison',
      article.brand?.toLowerCase(),
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
      section: 'Drone Reviews',
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
      canonical: `https://dronefocal.com/drone-reviews/${params.slug}`,
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

export default async function ReviewPage({ params }: Props) {
  const article = await getArticleBySlug('reviews', params.slug)

  if (!article) {
    notFound()
  }

  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "Product",
      "name": article.title,
      "brand": {
        "@type": "Brand",
        "name": article.brand || "DJI"
      },
      "image": article.image,
      "offers": article.price ? {
        "@type": "Offer",
        "price": article.price.replace(/[^0-9.]/g, ''),
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      } : undefined
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": article.rating,
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": article.author || "DroneFocal Team"
    },
    "datePublished": article.date,
    "headline": article.title,
    "description": article.excerpt,
    "publisher": {
      "@type": "Organization",
      "name": "DroneFocal",
      "logo": {
        "@type": "ImageObject",
        "url": "https://dronefocal.com/logo.png"
      }
    }
  }

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-gray-50 dark:bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
        {/* Breadcrumb Navigation */}
        <nav className="breadcrumb-mobile flex items-center space-x-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/drone-reviews" className="hover:text-blue-600 transition-colors">Drone Reviews</Link>
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
            
            {/* Rating and Price */}
            <div className="flex items-center space-x-4">
              {/* Star Rating */}
              <div className="flex items-center">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(article.rating || 0)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm font-semibold text-gray-900 dark:text-white">
                  {article.rating}
                </span>
              </div>
              
              {/* Price */}
              {article.price && (
                <div className="text-xl font-bold text-primary-600 dark:text-primary-400">
                  {article.price}
                </div>
              )}
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
            
            <div className="metadata-row">
              <div className="metadata-right">
                {/* Star Rating */}
                <div className="rating-mobile">
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(article.rating || 0)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="rating-text">
                    {article.rating}
                  </span>
                </div>
                
                {/* Price */}
                {article.price && (
                  <div className="price-mobile">
                    {article.price}
                  </div>
                )}
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

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </div>
      </div>
    </>
  )
}
