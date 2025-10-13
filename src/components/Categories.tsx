import Link from 'next/link'
import Image from 'next/image'
import { Camera, Zap, Users, Shield, DollarSign, Gamepad2 } from 'lucide-react'

const categories = [
  {
    name: 'Photography',
    description: 'Best drones for aerial photography and cinematography',
    icon: Camera,
    href: '/drone-reviews/photography',
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    count: '25+ Reviews'
  },
  {
    name: 'Racing',
    description: 'High-speed FPV racing drones for competitive flying',
    icon: Zap,
    href: '/drone-reviews/racing',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    count: '15+ Reviews'
  },
  {
    name: 'Beginner',
    description: 'Easy-to-fly drones perfect for newcomers',
    icon: Users,
    href: '/drone-reviews/beginner',
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    count: '30+ Reviews'
  },
  {
    name: 'Professional',
    description: 'Enterprise-grade drones for commercial use',
    icon: Shield,
    href: '/drone-reviews/professional',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    count: '20+ Reviews'
  },
  {
    name: 'Budget',
    description: 'Affordable drones under $500',
    icon: DollarSign,
    href: '/drone-reviews/budget',
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    count: '35+ Reviews'
  },
  {
    name: 'Toy',
    description: 'Fun and educational drones for kids',
    icon: Gamepad2,
    href: '/drone-reviews/toy',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    count: '18+ Reviews'
  }
]

export default function Categories() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-dark-900">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Browse by Category
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Find the perfect drone for your specific needs and use case
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group block"
            >
              <div className="card hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={category.image}
                    alt={category.name}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                      {category.count}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      Explore →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}


