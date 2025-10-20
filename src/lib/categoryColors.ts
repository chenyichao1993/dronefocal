export interface CategoryInfo {
  name: string
  color: string
}

export function getCategoryInfo(category: string): CategoryInfo {
  switch (category) {
    case 'reviews':
      return { 
        name: 'Reviews', 
        color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' 
      }
    case 'guides':
      return { 
        name: 'Guides', 
        color: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300' 
      }
    case 'news':
      return { 
        name: 'News', 
        color: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' 
      }
    case 'tutorials':
      return { 
        name: 'Tutorials', 
        color: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300' 
      }
    default:
      return { 
        name: category, 
        color: 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300' 
      }
  }
}
