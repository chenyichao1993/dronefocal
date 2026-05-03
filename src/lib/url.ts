// Unified URL generator for articles — no Node.js dependencies, safe for client components
export function getArticleUrl(article: { routeDir: string; slug: string }): string {
  switch (article.routeDir) {
    case 'reviews': return `/drone-reviews/${article.slug}`
    case 'news': return `/news/${article.slug}`
    case 'guides': return `/guides/${article.slug}`
    case 'tutorials': return `/tutorials/${article.slug}`
    default: return `/${article.routeDir}/${article.slug}`
  }
}
