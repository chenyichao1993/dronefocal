import Link from 'next/link'
import Image from 'next/image'
import { Play, Clock, Users, BookOpen } from 'lucide-react'

const tutorials = [
  {
    id: 1,
    title: 'Drone Safety and Regulations Guide',
    slug: 'drone-safety-and-regulations-guide',
    excerpt: 'Essential safety tips and regulations every drone pilot must know before taking flight.',
    image: '/images/optimized/webp/drone-safety-and-regulations-hero.webp',
    category: 'Safety',
    duration: '15 min',
    difficulty: 'Easy',
    students: 890,
    lessons: 5,
    type: 'Article'
  },
  {
    id: 2,
    title: 'Drone Pre-Flight Checklist: Step-by-Step',
    slug: 'drone-pre-flight-checklist',
    excerpt: 'Follow this simple, repeatable checklist before every flight to reduce risk and protect your drone.',
    image: '/images/optimized/webp/drone-pre-flight-checklist-hero.webp',
    category: 'Safety',
    duration: '10 min',
    difficulty: 'Easy',
    students: 640,
    lessons: 5,
    type: 'Article'
  }
]

export default function TutorialsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {tutorials.map((tutorial) => (
        <Link
          key={tutorial.id}
          href={`/tutorials/${tutorial.slug}`}
          className="card group hover:shadow-lg transition-shadow duration-300 block"
        >
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
          </div>

          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
              {tutorial.title}
            </h3>

            <p className="text-gray-600 dark:text-gray-400 line-clamp-3">
              {tutorial.excerpt}
            </p>

            <div className="mt-4 text-primary-600 dark:text-primary-400 font-medium">
              Read Tutorial
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}


