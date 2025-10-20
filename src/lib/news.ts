import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const newsDirectory = path.join(process.cwd(), 'src/content/news')

export interface NewsArticle {
  slug: string
  title: string
  excerpt: string
  image: string
  category: string
  tags: string[]
  date: string
  readTime: string
  author: string
  featured: boolean
  trending: boolean
  content: string
}

export async function getAllNewsArticles(): Promise<NewsArticle[]> {
  try {
    if (!fs.existsSync(newsDirectory)) {
      return []
    }

    const fileNames = fs.readdirSync(newsDirectory)
    const allArticlesData = fileNames
      .filter(name => name.endsWith('.md'))
      .map((fileName) => {
        const slug = fileName.replace(/\.md$/, '')
        const fullPath = path.join(newsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data, content } = matter(fileContents)

        return {
          slug,
          title: data.title || '',
          excerpt: data.excerpt || '',
          image: data.image || '',
          category: data.category || 'General',
          tags: data.tags || [],
          date: data.date || new Date().toISOString().split('T')[0],
          readTime: data.readTime || '5 min read',
          author: data.author || 'DroneFocal Team',
          featured: data.featured || false,
          trending: data.trending || false,
          content,
        }
      })

    // Sort by date (newest first)
    return allArticlesData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  } catch (error) {
    console.error('Error reading news articles:', error)
    return []
  }
}

export async function getNewsArticleBySlug(slug: string): Promise<NewsArticle | null> {
  try {
    const fullPath = path.join(newsDirectory, `${slug}.md`)
    
    if (!fs.existsSync(fullPath)) {
      return null
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title || '',
      excerpt: data.excerpt || '',
      image: data.image || '',
      category: data.category || 'General',
      tags: data.tags || [],
      date: data.date || new Date().toISOString().split('T')[0],
      readTime: data.readTime || '5 min read',
      author: data.author || 'DroneFocal Team',
      featured: data.featured || false,
      trending: data.trending || false,
      content,
    }
  } catch (error) {
    console.error('Error reading news article:', error)
    return null
  }
}

export async function getNewsArticlesByCategory(category: string): Promise<NewsArticle[]> {
  const allArticles = await getAllNewsArticles()
  return allArticles.filter(article => 
    article.category.toLowerCase() === category.toLowerCase()
  )
}

export async function getFeaturedNewsArticles(): Promise<NewsArticle[]> {
  const allArticles = await getAllNewsArticles()
  return allArticles.filter(article => article.featured)
}

export async function getTrendingNewsArticles(): Promise<NewsArticle[]> {
  const allArticles = await getAllNewsArticles()
  return allArticles.filter(article => article.trending)
}
