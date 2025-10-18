'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface Brand {
  name: string
  value: string
  count: number
}

interface FilterSidebarProps {
  brands: Brand[]
}

const priceRanges = [
  { name: 'Under $200', value: '0-200', count: 25 },
  { name: '$200 - $500', value: '200-500', count: 35 },
  { name: '$500 - $1000', value: '500-1000', count: 45 },
  { name: '$1000 - $2000', value: '1000-2000', count: 30 },
  { name: 'Over $2000', value: '2000+', count: 21 }
]

const ratings = [
  { name: '4.5+ Stars', value: '4.5', count: 45 },
  { name: '4.0+ Stars', value: '4.0', count: 78 },
  { name: '3.5+ Stars', value: '3.5', count: 95 },
  { name: '3.0+ Stars', value: '3.0', count: 120 }
]

export default function FilterSidebar({ brands }: FilterSidebarProps) {
  const [expandedSections, setExpandedSections] = useState({
    brand: true,
    price: true,
    rating: true
  })

  const [selectedFilters, setSelectedFilters] = useState({
    brand: 'all',
    price: 'all',
    rating: 'all'
  })

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const handleFilterChange = (filterType: string, value: string) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: value
    }))
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
        onClick={() => setSelectedFilters({
          brand: 'all',
          price: 'all',
          rating: 'all'
        })}
        className="w-full text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
      >
        Clear All Filters
      </button>
    </div>
  )
}


