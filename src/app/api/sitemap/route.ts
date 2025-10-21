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

  // Dynamic pages from static files
  const [reviews, guides, tutorials, news] = await Promise.all([
    getAllArticles('reviews'),
    getAllArticles('guides'),
    getAllArticles('tutorials'),
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
    <lastmod>${review.date}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`
    )
    .join('')}
  ${guides
    .map(
      (guide) => `
  <url>
    <loc>${baseUrl}/guides/${guide.slug}</loc>
    <lastmod>${guide.date}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
    )
    .join('')}
  ${tutorials
    .map(
      (tutorial) => `
  <url>
    <loc>${baseUrl}/tutorials/${tutorial.slug}</loc>
    <lastmod>${tutorial.date}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
    )
    .join('')}
  ${news
    .map(
      (article) => `
  <url>
    <loc>${baseUrl}/news/${article.slug}</loc>
    <lastmod>${article.date}</lastmod>
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


