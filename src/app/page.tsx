import Hero from '@/components/Hero'
import FeaturedReviews from '@/components/FeaturedReviews'
import Categories from '@/components/Categories'
import LatestNews from '@/components/LatestNews'
import CTASection from '@/components/CTASection'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedReviews />
      <Categories />
      <LatestNews />
      <CTASection />
    </div>
  )
}


