'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface Brand {
  name: string
  value: string
  count: number
}

interface FilterOption {
  name: string
  value: string
  count: number
}

interface FilterSidebarProps {
  brands: Brand[]
  priceRanges: FilterOption[]
  ratings: FilterOption[]
  currentFilters: {
    brand?: string
    price?: string
    rating?: string
  }
}

export default function FilterSidebar({ brands, priceRanges, ratings, currentFilters }: FilterSidebarProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  
  const [expandedSections, setExpandedSections] = useState({
    brand: true,
    price: true,
    rating: true
  })

  const selectedFilters = {
    brand: currentFilters.brand?.toLowerCase() || 'all',
    price: currentFilters.price || 'all',
    rating: currentFilters.rating || 'all'
  }

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const handleFilterChange = (filterType: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    
    if (value === 'all') {
      params.delete(filterType)
    } else {
      params.set(filterType, value)
    }
    
    router.push(`/drone-reviews?${params.toString()}`)
  }

  const FilterSection = ({ 
    title, 
    section, 
    options, 
    selectedValue, 
    onValueChange 
  }: {
    title: string
    section: string
    options: Array<{ name: string; value: string; count: number }>
    selectedValue: string
    onValueChange: (value: string) => void
  }) => (
    <div className="mb-6">
      <button
        onClick={() => toggleSection(section)}
        className="flex items-center justify-between w-full text-left font-semibold text-gray-900 dark:text-white mb-3"
      >
        {title}
        {expandedSections[section as keyof typeof expandedSections] ? (
          <ChevronUp className="h-4 w-4" />
        ) : (
          <ChevronDown className="h-4 w-4" />
        )}
      </button>
      
      {expandedSections[section as keyof typeof expandedSections] && (
        <div className="space-y-2">
          {options.map((option) => (
            <label
              key={option.value}
              className="flex items-center justify-between cursor-pointer hover:bg-gray-50 dark:hover:bg-dark-700 p-2 rounded"
            >
              <div className="flex items-center">
                <input
                  type="radio"
                  name={section}
                  value={option.value}
                  checked={selectedValue === option.value}
                  onChange={(e) => onValueChange(e.target.value)}
                  className="mr-3 text-primary-600 focus:ring-primary-500"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  {option.name}
                </span>
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {option.count}
              </span>
            </label>
          ))}
        </div>
      )}
    </div>
  )

  return (
    <div className="bg-white dark:bg-dark-800 rounded-lg shadow-sm border border-gray-200 dark:border-dark-700 p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
        Filter Reviews
      </h3>

      <FilterSection
        title="Brand"
        section="brand"
        options={brands}
        selectedValue={selectedFilters.brand}
        onValueChange={(value) => handleFilterChange('brand', value)}
      />

      <FilterSection
        title="Price Range"
        section="price"
        options={priceRanges}
        selectedValue={selectedFilters.price}
        onValueChange={(value) => handleFilterChange('price', value)}
      />

      <FilterSection
        title="Rating"
        section="rating"
        options={ratings}
        selectedValue={selectedFilters.rating}
        onValueChange={(value) => handleFilterChange('rating', value)}
      />

      {/* Clear Filters */}
      <button
        onClick={() => router.push('/drone-reviews')}
        className="w-full text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
      >
        Clear All Filters
      </button>
    </div>
  )
}


