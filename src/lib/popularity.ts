import { ArticleMeta } from './content'

// Calculate popularity score for sorting
export function calculatePopularity(article: ArticleMeta): number {
  const views = parseInt(article.views?.replace(/,/g, '') || '0')
  const rating = parseFloat(article.rating?.toString() || '0')
  const daysSincePublished = (Date.now() - new Date(article.date).getTime()) / (1000 * 60 * 60 * 24)
  
  // Popularity score = views weight + rating weight - time decay
  return views * 0.7 + rating * 1000 * 0.3 - daysSincePublished * 10
}

// Get popular articles from all categories with balanced representation
// 测评3篇 + 指南1篇 + 新闻1篇 = 总共5篇
export async function getPopularArticles(limit: number = 5): Promise<ArticleMeta[]> {
  const { getAllArticles } = await import('./content')
  
  try {
    const [reviews, guides, news] = await Promise.all([
      getAllArticles('reviews'),
      getAllArticles('guides'),
      getAllArticles('news')
    ])
    
    // 计算每个文章的热度分数
    const reviewsWithPopularity = reviews
      .map(article => ({
        ...article,
        category: article.category || 'reviews', // 保留原有 category，如果没有则设为 reviews
        popularity: calculatePopularity(article)
      }))
      .sort((a, b) => b.popularity - a.popularity)
      .slice(0, 3) // 测评选3篇最热的
    
    const guidesWithPopularity = guides
      .map(article => ({
        ...article,
        category: article.category || 'guides', // 保留原有 category，如果没有则设为 guides
        popularity: calculatePopularity(article)
      }))
      .sort((a, b) => b.popularity - a.popularity)
      .slice(0, 1) // 指南选1篇最热的
    
    // 新闻：选1篇最新的（按发布时间排序，不是热度）
    const newsLatest = news
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 1)
      .map(article => ({
        ...article,
        // 保留 news 文章的原始 category（如 "Product Launch", "Technology" 等）
        // Sidebar 组件会根据这些 category 正确生成 /news/ 路径
        popularity: 0 // 新闻不参与热度排序
      }))
    
    // 合并所有文章：先显示测评，然后指南，最后新闻
    const result = [...reviewsWithPopularity, ...guidesWithPopularity, ...newsLatest]
    
    return result
  } catch (error) {
    console.error('Error loading popular articles:', error)
    return []
  }
}
