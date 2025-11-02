import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import remarkHtml from 'remark-html'

export interface ArticleMeta {
  title: string
  slug: string
  excerpt: string
  image: string
  date: string
  readTime: string
  category: string
  tags: string[]
  author?: string
  // Review specific
  rating?: number
  price?: string
  brand?: string
  pros?: string[]
  cons?: string[]
  // Tutorial specific
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced'
  duration?: string
  lessons?: number
  students?: number
  type?: string
  // Guide specific
  targetAudience?: string
  products?: number
  lastUpdated?: string
  // News specific
  source?: string
  featured?: boolean
  views?: string
}

export interface Article extends ArticleMeta {
  content: string
  contentHtml: string
}

const contentDirectory = path.join(process.cwd(), 'src/content')

export async function getArticleBySlug(
  category: string,
  slug: string
): Promise<Article | null> {
  try {
    const fullPath = path.join(contentDirectory, category, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    // Process markdown content
    const processedContent = await remark()
      .use(remarkGfm)
      .use(remarkHtml, { sanitize: false })
      .process(content)

    return {
      ...data,
      content,
      contentHtml: processedContent.toString(),
    } as Article
  } catch (error) {
    console.error(`Error reading article ${slug}:`, error)
    return null
  }
}

export async function getAllArticles(category: string): Promise<ArticleMeta[]> {
  try {
    const categoryPath = path.join(contentDirectory, category)
    if (!fs.existsSync(categoryPath)) {
      return []
    }

    const fileNames = fs.readdirSync(categoryPath)
    const articles = fileNames
      .filter((name) => name.endsWith('.md'))
      .map((name) => {
        const slug = name.replace(/\.md$/, '')
        const fullPath = path.join(categoryPath, name)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data } = matter(fileContents)
        return {
          ...data,
          slug,
        } as ArticleMeta
      })

    // Sort by date (newest first)
    return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  } catch (error) {
    console.error(`Error reading articles from ${category}:`, error)
    return []
  }
}

export async function getArticlesByTag(
  category: string,
  tag: string
): Promise<ArticleMeta[]> {
  const articles = await getAllArticles(category)
  return articles.filter((article) => article.tags?.includes(tag))
}

export async function getFeaturedArticles(category: string): Promise<ArticleMeta[]> {
  const articles = await getAllArticles(category)
  return articles.filter((article) => article.featured)
}

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function calculateReadTime(content: string): string {
  const wordsPerMinute = 200
  const words = content.split(/\s+/).length
  const minutes = Math.ceil(words / wordsPerMinute)
  return `${minutes} min read`
}
