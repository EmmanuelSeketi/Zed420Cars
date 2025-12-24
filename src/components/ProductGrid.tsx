import { useState } from 'react'
import { Grid3x3, List, Gauge, Zap, MapPin, Car } from 'lucide-react'
import LazyImage from './LazyImage'

interface Car {
  id: number
  make: string
  name: string
  image: string
  price: number
  rating: number
  reviews: number
  discount: number
  category: string
  badge: string | null
  mileage?: string
  engine?: string
  location?: string
  style?: string
}

interface ProductGridProps {
  cars: Car[]
  onAddToCart: (car: Car) => void
}

function ProductGrid({ cars, onAddToCart }: ProductGridProps) {
  const [selectedMake, setSelectedMake] = useState<string>('All')
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const makes = Array.from(new Set(cars.map(c => c.make))).sort()
  const categories = Array.from(new Set(cars.map(c => c.category))).sort()

  const filteredCars = cars.filter(car => {
    if (selectedMake !== 'All' && car.make !== selectedMake) return false
    if (selectedCategory !== 'All' && car.category !== selectedCategory) return false
    return true
  })

  // favorites removed

  return (
    <div className="flex-1 bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category filter moved to Sidebar component */}

        {/* Filters: Make + Category */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4 overflow-visible">
          <div className="flex flex-wrap items-center gap-3">
            <div className="group relative">
              <button className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded shadow-sm">
                <span className="text-sm font-medium">Make</span>
                <span className="text-sm text-gray-600">{selectedMake}</span>
              </button>

              <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transform transition-all z-50">
                <ul className="p-2">
                  <li>
                    <button
                      onClick={() => setSelectedMake('All')}
                      className="w-full text-left px-2 py-1 text-sm hover:bg-gray-100 rounded"
                    >
                      All
                    </button>
                  </li>
                  {makes.map(m => (
                    <li key={m}>
                      <button
                        onClick={() => setSelectedMake(m)}
                        className="w-full text-left px-2 py-1 text-sm hover:bg-gray-100 rounded"
                      >
                        {m}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="group relative">
              <button className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded shadow-sm">
                <span className="text-sm font-medium">Category</span>
                <span className="text-sm text-gray-600">{selectedCategory}</span>
              </button>

              <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transform transition-all z-50">
                <ul className="p-2">
                  <li>
                    <button
                      onClick={() => setSelectedCategory('All')}
                      className="w-full text-left px-2 py-1 text-sm hover:bg-gray-100 rounded"
                    >
                      All
                    </button>
                  </li>
                  {categories.map(c => (
                    <li key={c}>
                      <button
                        onClick={() => setSelectedCategory(c)}
                        className="w-full text-left px-2 py-1 text-sm hover:bg-gray-100 rounded"
                      >
                        {c}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-2 border border-gray-300 rounded p-1 bg-white">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded transition ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:text-gray-900'}`}
              title="Grid View"
            >
              <Grid3x3 className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded transition ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:text-gray-900'}`}
              title="List View"
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Products Grid or List */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {filteredCars.map(car => (
              <div key={car.id} className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1 hover:scale-[1.01] shadow-sm flex flex-col w-full">
                {/* Image Container (Lazy + skeleton) */}
                <LazyImage src={car.image || '/images/placeholder.png'} alt={car.name} aspectClass="aspect-[5/4]" objectFit="cover" wrapperClass="w-full max-w-full bg-gray-200" />

                <div className="p-4 flex flex-col gap-2">
                  <h3 className="text-base font-semibold text-gray-900">{car.name}</h3>

                  <div className="text-xl font-bold text-gray-900">
                    ${Math.round(car.price * (1 - car.discount / 100)).toLocaleString()}
                  </div>

                  {/* Car Details Grid */}
                  <div className="grid grid-cols-2 gap-2 text-xs text-gray-600 border-t border-gray-200 pt-2">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-1">
                        <Gauge className="w-3 h-3" />
                        <span className="font-semibold text-gray-700">MILEAGE</span>
                      </div>
                      <span>{car.mileage || 'N/A'}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-1">
                        <Zap className="w-3 h-3" />
                        <span className="font-semibold text-gray-700">ENGINE</span>
                      </div>
                      <span>{car.engine || 'N/A'}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        <span className="font-semibold text-gray-700">LOCATION</span>
                      </div>
                      <span>{car.location || 'N/A'}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-1">
                        <Car className="w-3 h-3" />
                        <span className="font-semibold text-gray-700">STYLE</span>
                      </div>
                      <span>{car.style || 'N/A'}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredCars.map(car => (
              <div key={car.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-lg transition flex flex-col sm:flex-row items-stretch w-full">
                {/* Image */}
                <img
                  src={car.image || '/images/placeholder.png'}
                  alt={car.name}
                  className="block w-full h-80 sm:w-64 sm:h-full flex-shrink-0 bg-gray-200 object-cover object-center max-w-full"
                />

                {/* Content */}
                <div className="flex-1 px-4 py-4 sm:p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{car.name}</h3>

                    <div className="text-xl font-bold text-gray-900 mb-2">
                      ${Math.round(car.price * (1 - car.discount / 100)).toLocaleString()}
                    </div>

                    {/* Car Details Grid */}
                    <div className="grid grid-cols-4 gap-3 text-xs text-gray-600 border-t border-gray-200 pt-3 mb-4">
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-1">
                          <Gauge className="w-4 h-4" />
                          <span className="font-semibold text-gray-700">MILEAGE</span>
                        </div>
                        <span>{car.mileage || 'N/A'}</span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-1">
                          <Zap className="w-4 h-4" />
                          <span className="font-semibold text-gray-700">ENGINE</span>
                        </div>
                        <span>{car.engine || 'N/A'}</span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span className="font-semibold text-gray-700">LOCATION</span>
                        </div>
                        <span>{car.location || 'N/A'}</span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-1">
                          <Car className="w-4 h-4" />
                          <span className="font-semibold text-gray-700">STYLE</span>
                        </div>
                        <span>{car.style || 'N/A'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductGrid
