import { Metadata } from 'next'
import TutorialsGrid from '@/components/TutorialsGrid'

export const metadata: Metadata = {
  title: 'Drone Tutorials - Learn to Fly Like a Pro',
  description: 'Comprehensive drone tutorials covering everything from basic flight to advanced techniques and safety guidelines.',
  keywords: ['drone tutorials', 'how to fly drone', 'drone safety', 'drone techniques', 'drone training'],
}

export default function TutorialsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Drone Tutorials
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Master the art of drone flying with our comprehensive tutorials. 
            From beginner basics to advanced techniques, we've got you covered.
          </p>
        </div>

        <TutorialsGrid />
      </div>
    </div>
  )
}


