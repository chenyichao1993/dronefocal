import Link from 'next/link'
import Image from 'next/image'
import { Play, Clock, Users, BookOpen } from 'lucide-react'

const tutorials = [
  {
    id: 1,
    title: 'Complete Beginner\'s Guide to Flying Drones',
    slug: 'complete-beginners-guide-flying-drones',
    excerpt: 'Learn the fundamentals of drone flying, from pre-flight checks to your first successful flight.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'Beginner',
    duration: '25 min',
    difficulty: 'Easy',
    students: 1250,
    lessons: 8,
    type: 'Video Course'
  },
  {
    id: 2,
    title: 'Drone Safety and Regulations Guide',
    slug: 'drone-safety-regulations-guide',
    excerpt: 'Essential safety tips and regulations every drone pilot must know before taking flight.',
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'Safety',
    duration: '15 min',
    difficulty: 'Easy',
    students: 890,
    lessons: 5,
    type: 'Article'
  },
  {
    id: 3,
    title: 'Advanced Aerial Photography Techniques',
    slug: 'advanced-aerial-photography-techniques',
    excerpt: 'Master professional aerial photography with advanced composition and camera settings.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'Photography',
    duration: '35 min',
    difficulty: 'Advanced',
    students: 650,
    lessons: 12,
    type: 'Video Course'
  },
  {
    id: 4,
    title: 'FPV Racing: From Beginner to Pro',
    slug: 'fpv-racing-beginner-to-pro',
    excerpt: 'Complete guide to FPV racing, from choosing your first racing drone to advanced techniques.',
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'Racing',
    duration: '45 min',
    difficulty: 'Advanced',
    students: 420,
    lessons: 15,
    type: 'Video Course'
  },
  {
    id: 5,
    title: 'Drone Maintenance and Care',
    slug: 'drone-maintenance-care',
    excerpt: 'Keep your drone in perfect condition with proper maintenance and care techniques.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'Maintenance',
    duration: '20 min',
    difficulty: 'Intermediate',
    students: 780,
    lessons: 6,
    type: 'Article'
  },
  {
    id: 6,
    title: 'Weather Conditions and Flying',
    slug: 'weather-conditions-flying',
    excerpt: 'Learn how different weather conditions affect drone flight and safety considerations.',
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'Safety',
    duration: '18 min',
    difficulty: 'Intermediate',
    students: 560,
    lessons: 7,
    type: 'Video Course'
  }
]

export default function TutorialsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {tutorials.map((tutorial) => (
        <article key={tutorial.id} className="card group hover:shadow-lg transition-shadow duration-300">
          <div className="relative overflow-hidden rounded-t-lg">
            <Image
              src={tutorial.image}
              alt={tutorial.title}
              width={400}
              height={250}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                {tutorial.category}
              </span>
            </div>
            <div className="absolute top-4 right-4">
              <span className="bg-white dark:bg-dark-800 text-gray-900 dark:text-white px-2 py-1 rounded text-sm font-semibold">
                {tutorial.difficulty}
              </span>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {tutorial.type === 'Video Course' ? (
                  <div className="bg-white rounded-full p-3">
                    <Play className="h-6 w-6 text-primary-600" />
                  </div>
                ) : (
                  <div className="bg-white rounded-full p-3">
                    <BookOpen className="h-6 w-6 text-primary-600" />
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                {tutorial.type}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {tutorial.duration}
              </span>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
              {tutorial.title}
            </h3>

            <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
              {tutorial.excerpt}
            </p>

            {/* Tutorial Stats */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <Users className="h-4 w-4 mr-2" />
                <span>{tutorial.students.toLocaleString()} students</span>
              </div>
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <BookOpen className="h-4 w-4 mr-2" />
                <span>{tutorial.lessons} lessons</span>
              </div>
            </div>

            <Link
              href={`/tutorials/${tutorial.slug}`}
              className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
            >
              Start Learning
              <Play className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </article>
      ))}
    </div>
  )
}


