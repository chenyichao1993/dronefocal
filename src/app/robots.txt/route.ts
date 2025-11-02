import { NextResponse } from 'next/server'

export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /private/

# Sitemaps
Sitemap: https://dronefocal.com/sitemap.xml

# Allow important directories
Allow: /drone-reviews/
Allow: /buying-guides/
Allow: /guides/
Allow: /tutorials/
Allow: /news/
Allow: /compare/
Allow: /search/`

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}


