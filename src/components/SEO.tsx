import Head from 'next/head'

interface SEOProps {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: string
  keywords?: string[]
  author?: string
  publishedTime?: string
  modifiedTime?: string
  section?: string
  tags?: string[]
}

export default function SEO({
  title = 'DroneFocal - Expert Drone Reviews & Buying Guides',
  description = 'Get expert drone reviews, buying guides, and tutorials. Find the perfect drone for your needs with our comprehensive comparisons and recommendations.',
  image = 'https://dronefocal.com/og-image.jpg',
  url = 'https://dronefocal.com',
  type = 'website',
  keywords = ['drone reviews', 'best drone', 'drone buying guide', 'DJI drone', 'drone comparison'],
  author = 'DroneFocal Team',
  publishedTime,
  modifiedTime,
  section,
  tags = []
}: SEOProps) {
  const fullTitle = title.includes('DroneFocal') ? title : `${title} | DroneFocal`
  const fullKeywords = [...keywords, ...tags].join(', ')

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={fullKeywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="DroneFocal" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@dronefocal" />
      <meta name="twitter:site" content="@dronefocal" />

      {/* Article specific meta tags */}
      {type === 'article' && (
        <>
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {author && <meta property="article:author" content={author} />}
          {section && <meta property="article:section" content={section} />}
          {tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': type === 'article' ? 'Article' : 'WebSite',
            name: fullTitle,
            description: description,
            url: url,
            image: image,
            author: {
              '@type': 'Organization',
              name: author
            },
            publisher: {
              '@type': 'Organization',
              name: 'DroneFocal',
              logo: {
                '@type': 'ImageObject',
                url: 'https://dronefocal.com/logo.png'
              }
            },
            ...(type === 'article' && {
              datePublished: publishedTime,
              dateModified: modifiedTime || publishedTime,
              mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': url
              }
            })
          })
        }}
      />
    </Head>
  )
}


