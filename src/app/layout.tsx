import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'DroneFocal - Expert Drone Reviews & Buying Guides',
    template: '%s | DroneFocal'
  },
  description: 'Get expert drone reviews, buying guides, and tutorials. Find the perfect drone for your needs with our comprehensive comparisons and recommendations.',
  keywords: ['drone reviews', 'best drone', 'drone buying guide', 'DJI drone', 'drone comparison', 'drone tutorials'],
  authors: [{ name: 'DroneFocal Team' }],
  creator: 'DroneFocal',
  publisher: 'DroneFocal',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://dronefocal.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dronefocal.com',
    title: 'DroneFocal - Expert Drone Reviews & Buying Guides',
    description: 'Get expert drone reviews, buying guides, and tutorials. Find the perfect drone for your needs.',
    siteName: 'DroneFocal',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DroneFocal - Expert Drone Reviews & Buying Guides',
    description: 'Get expert drone reviews, buying guides, and tutorials. Find the perfect drone for your needs.',
    creator: '@dronefocal',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <div className="min-h-screen bg-gray-50 dark:bg-dark-900">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
