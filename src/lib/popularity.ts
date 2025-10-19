import { ArticleMeta } from './content'

// Calculate popularity score for sorting
export function calculatePopularity(article: ArticleMeta): number {
  const views = parseInt(article.views?.replace(/,/g, '') || '0')
  const rating = parseFloat(article.rating?.toString() || '0')
  const daysSincePublished = (Date.now() - new Date(article.date).getTime()) / (1000 * 60 * 60 * 24)
  
  // Popularity score = views weight + rating weight - time decay
  return views * 0.7 + rating * 1000 * 0.3 - daysSincePublished * 10
}

// Get popular articles from all categories
export async function getPopularArticles(limit: number = 5): Promise<ArticleMeta[]> {
  const { getAllArticles } = await import('./content')
  
  try {
    const [reviews, tutorials, guides, news] = await Promise.all([
      getAllArticles('reviews'),
      getAllArticles('tutorials'),
      getAllArticles('guides'),
      getAllArticles('news')
    ])
    
    const combined = [...reviews, ...tutorials, ...guides, ...news]
    
    return combined
      .map(article => ({
        ...article,
        popularity: calculatePopularity(article)
      }))
      .sort((a, b) => b.popularity - a.popularity)
      .slice(0, limit)
  } catch (error) {
    console.error('Error loading popular articles:', error)
    return []
  }
}
