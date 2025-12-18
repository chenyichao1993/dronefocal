import Link from 'next/link'
import Image from 'next/image'
import { ArticleMeta } from '@/lib/content'

interface RelatedArticlesProps {
  articles: (ArticleMeta | any)[] // 支持 ArticleMeta 和 NewsArticle 类型
  currentArticle: ArticleMeta | any
  articleType?: 'news' | 'guides' | 'reviews' | 'tutorials' // 明确指定文章类型，用于生成正确的URL
}

export default function RelatedArticles({ articles, currentArticle, articleType }: RelatedArticlesProps) {
  // 获取相关文章的逻辑 - 服务器端计算
  const getRelatedArticles = () => {
    if (!articles || articles.length === 0) return []
    
    return articles
      .filter(article => article.slug !== currentArticle.slug)
      .sort((a, b) => {
        // 1. 同品牌优先
        if (a.brand === currentArticle.brand && b.brand !== currentArticle.brand) return -1
        if (b.brand === currentArticle.brand && a.brand !== currentArticle.brand) return 1
        
        // 2. 同价位优先
        const priceA = parseFloat(a.price?.replace(/[^0-9.]/g, '') || '0')
        const priceB = parseFloat(b.price?.replace(/[^0-9.]/g, '') || '0')
        const currentPrice = parseFloat(currentArticle.price?.replace(/[^0-9.]/g, '') || '0')
        
        const diffA = Math.abs(priceA - currentPrice)
        const diffB = Math.abs(priceB - currentPrice)
        if (diffA !== diffB) return diffA - diffB
        
        // 3. 同标签优先
        const commonTagsA = a.tags?.filter((tag: string) => currentArticle.tags?.includes(tag)).length || 0
        const commonTagsB = b.tags?.filter((tag: string) => currentArticle.tags?.includes(tag)).length || 0
        if (commonTagsA !== commonTagsB) return commonTagsB - commonTagsA
        
        // 4. 按日期排序
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      })
      .slice(0, 3) // 显示3篇推荐文章
  }

  const relatedArticles = getRelatedArticles()

  if (relatedArticles.length === 0) return null

  // 判断是否为 guide 文章或 news 相关文章（都使用简洁样式）
  const isGuideArticle = currentArticle.category === 'guides'
  const isNewsArticle = currentArticle.category === 'news' || 
                       currentArticle.category === 'Product Launch' ||
                       currentArticle.category === 'Technology' ||
                       currentArticle.category === 'Regulations' ||
                       currentArticle.category === 'Industry News' ||
                       currentArticle.category === 'Events'
  const isTutorialArticle = currentArticle.category === 'tutorials'
  const useSimpleStyle = isGuideArticle || isNewsArticle || isTutorialArticle

  return (
    <div className="related-articles-section">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Related Articles</h3>
      <div className="related-articles grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {relatedArticles.map(article => {
          // 根据文章类型生成不同的链接
          const getArticleUrl = (article: any) => {
            const slug = article.slug
            
            // 如果明确指定了 articleType，直接使用它（这是最可靠的方式）
            // 所有来自 news 目录的文章，无论 category 是什么，都应该使用 /news/ 路径
            if (articleType === 'news') {
              return `/news/${slug}`
            }
            if (articleType === 'guides') {
              return `/guides/${slug}`
            }
            if (articleType === 'reviews') {
              return `/drone-reviews/${slug}`
            }
            if (articleType === 'tutorials') {
              return `/tutorials/${slug}`
            }
            
            // 如果没有指定 articleType，根据 category 判断（兼容旧逻辑）
            const category = article.category
            switch (category) {
              case 'reviews':
                return `/drone-reviews/${slug}`
              case 'guides':
                return `/guides/${slug}`
              case 'tutorials':
                return `/tutorials/${slug}`
              case 'news':
                return `/news/${slug}`
              // 对于 news 目录下的文章，即使 category 是 "Technology" 等，也应该走 news 路由
              default:
                // 如果当前文章是 news 类型，且 related articles 也在同一个列表，则使用 news 路由
                const isNewsContext = currentArticle.category === 'news' || 
                                  ['Product Launch', 'Technology', 'Regulations', 'Industry News', 'Events'].includes(currentArticle.category)
                if (isNewsContext && ['Product Launch', 'Technology', 'Regulations', 'Industry News', 'Events', 'General'].includes(category)) {
                  return `/news/${slug}`
                }
                return `/${category}/${slug}`
            }
          }

          return (
            <Link key={article.slug} href={getArticleUrl(article)}>
              <div className="related-article-card group">
                <div className="flex items-start space-x-3 p-3 md:p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 hover:shadow-md transition-all duration-300">
                  <div className="flex-shrink-0">
                    <Image
                      src={article.image}
                      alt={article.title}
                      width={80}
                      height={60}
                      className="related-article-thumbnail w-15 h-12 md:w-20 md:h-15 object-cover rounded-md"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="related-article-title text-xs md:text-sm font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2 mb-1">
                      {article.title}
                    </h4>
                    {/* 只有非 guide 和 news 文章才显示详细信息 */}
                    {!useSimpleStyle && (
                      <div className="related-article-meta text-xs text-gray-500 dark:text-gray-400">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <span className="font-medium">{article.brand}</span>
                            <span className="mx-1">•</span>
                            <span className="text-blue-600 dark:text-blue-400 font-medium">{article.price}</span>
                          </div>
                          <div className="flex items-center">
                            <svg className="w-3 h-3 md:w-4 md:h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span className="ml-1 font-semibold text-gray-700 dark:text-gray-300">{article.rating}</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
