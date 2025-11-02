import { NextResponse } from 'next/server'
import { getAllArticles } from '@/lib/content'

export async function GET() {
  const baseUrl = 'https://dronefocal.com'
  
  // Static pages
  const staticPages = [
    '',
    '/drone-reviews',
    '/buying-guides',
    '/tutorials',
    '/news',
    '/compare',
    '/about',
    '/contact'
  ]

  // Dynamic pages from markdown files
  const [reviews, articles] = await Promise.all([
    getAllArticles('reviews'),
    getAllArticles('news')
  ])

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages
    .map(
      (page) => `
  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`
    )
    .join('')}
  ${reviews
    .map(
      (review) => `
  <url>
    <loc>${baseUrl}/drone-reviews/${review.slug}</loc>
    <lastmod>${new Date(review.date).toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`
    )
    .join('')}
  ${articles
    .map(
      (article) => `
  <url>
    <loc>${baseUrl}/news/${article.slug}</loc>
    <lastmod>${new Date(article.date).toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`
    )
    .join('')}
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}


