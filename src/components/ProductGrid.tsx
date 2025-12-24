import { useState } from 'react'
import { Grid3x3, List, MapPin, Car } from 'lucide-react'
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

function ProductGrid({ cars }: ProductGridProps) {
  const [location, setLocation] = useState('')
  const [selectedMake, setSelectedMake] = useState('All')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [transmission, setTransmission] = useState('All')
  const [sortBy, setSortBy] = useState('featured')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const makes = Array.from(new Set(cars.map(c => c.make))).sort()
  const categories = Array.from(new Set(cars.map(c => c.category))).sort()
  const transmissions = ['All', 'Manual', 'Automatic', 'CVT']

  const filteredCars = cars

  // favorites removed

  return (
    <div className="flex-1 bg-gray-50 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category filter moved to Sidebar component */}

{/* Filter Bar - Location / Make / Category / Transmission + View Mode + Sort */}
        <div className="mb-3 bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-3 items-end">
            {/* (Sort+View moved to right) */}
            {/* Location */}
            <div className="pb-3">
              <label className="text-xs font-medium text-gray-700 block mb-1 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-blue-600" />
                Location
              </label>
              <input
                value={location}
                onChange={e => setLocation(e.target.value)}
                placeholder="Enter location"
                className="w-full bg-white text-gray-900 placeholder-gray-400 rounded px-3 py-2 text-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            {/* Make */}
            <div className="pb-3">
              <label className="text-xs font-medium text-gray-700 block mb-1 flex items-center gap-1">
                <svg id="Navaid-Private--Streamline-Carbon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-3.5 h-3.5 text-blue-600" aria-hidden>
                  <desc>Navaid Private Streamline Icon</desc>
                  <path d="M20 15v-4a2.0023 2.0023 0 0 0-2-2h-6v14h2v-6h1.4807l2.3345 6H19.96l-2.333-6H18a2.0027 2.0027 0 0 0 2-2Zm-6-4h4v4h-4Z" fill="currentColor"></path>
                  <path d="M16 30a14 14 0 1 1 14-14 14.0158 14.0158 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12.0137 12.0137 0 0 0 16 4Z" fill="currentColor"></path>
                </svg>
                Make
              </label>
              <select
                value={selectedMake}
                onChange={e => setSelectedMake(e.target.value)}
                className="w-full bg-white text-gray-900 rounded px-3 py-2 text-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="All">All</option>
                {makes.map(make => (
                  <option key={make} value={make}>{make}</option>
                ))}
              </select>
            </div>

            {/* Category */}
            <div className="pb-3">
              <label className="text-xs font-medium text-gray-700 block mb-1 flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="w-3.5 h-3.5 text-blue-600" aria-hidden>
                  <path d="m260-520 220-360 220 360H260Z" fill="currentColor" />
                  <path d="M700-80q-75 0-127.5-52.5T520-260q0-75 52.5-127.5T700-440q75 0 127.5 52.5T880-260q0 75-52.5 127.5T700-80Zm-580-20v-320h320v320H120Zm580-60q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Zm-500-20h160v-160H200v160Zm202-420h156l-78-126-78 126Zm78 0ZM360-340Zm340 80Z" fill="currentColor" />
                </svg>
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={e => setSelectedCategory(e.target.value)}
                className="w-full bg-white text-gray-900 rounded px-3 py-2 text-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="All">All</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Transmission */}
            <div className="pb-3">
              <label className="text-xs font-medium text-gray-700 block mb-1 flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="w-3.5 h-3.5 text-blue-600" aria-hidden>
                  <path d="M160-120q-50 0-85-35t-35-85q0-39 22.5-70t57.5-43v-254q-35-12-57.5-43T40-720q0-50 35-85t85-35q50 0 85 35t35 85q0 39-22.5 70T200-607v87h240v-87q-35-12-57.5-43T360-720q0-50 35-85t85-35q50 0 85 35t35 85q0 39-22.5 70T520-607v87h200q17 0 28.5-11.5T760-560v-47q-35-12-57.5-43T680-720q0-50 35-85t85-35q50 0 85 35t35 85q0 39-22.5 70T840-607v47q0 50-35 85t-85 35H520v87q35 12 57.5 43t22.5 70q0 50-35 85t-85 35q-50 0-85-35t-35-85q0-39 22.5-70t57.5-43v-87H200v87q35 12 57.5 43t22.5 70q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T200-240q0-17-11.5-28.5T160-280q-17 0-28.5 11.5T120-240q0 17 11.5 28.5T160-200Zm0-480q17 0 28.5-11.5T200-720q0-17-11.5-28.5T160-760q-17 0-28.5 11.5T120-720q0 17 11.5 28.5T160-680Zm320 480q17 0 28.5-11.5T520-240q0-17-11.5-28.5T480-280q-17 0-28.5 11.5T440-240q0 17 11.5 28.5T480-200Zm0-480q17 0 28.5-11.5T520-720q0-17-11.5-28.5T480-760q-17 0-28.5 11.5T440-720q0 17 11.5 28.5T480-680Zm320 0q17 0 28.5-11.5T840-720q0-17-11.5-28.5T800-760q-17 0-28.5 11.5T760-720q0 17 11.5 28.5T800-680ZM160-240Zm0-480Zm320 480Zm0-480Zm320 0Z" fill="currentColor"></path>
                </svg>
                Trans
              </label>
              <select
                value={transmission}
                onChange={e => setTransmission(e.target.value)}
                className="w-full bg-white text-gray-900 rounded px-3 py-2 text-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {transmissions.map(trans => (
                  <option key={trans} value={trans}>{trans}</option>
                ))}
              </select>
            </div>

            {/* Sort (right side) */}
            <div className="pb-3">
              <label className="text-xs font-medium text-gray-700 block mb-1 flex items-center gap-1">
                <svg id="Sort-Descending--Streamline-Carbon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="w-3.5 h-3.5 text-blue-600">
                  <path d="m9 11 0.707 -0.707L11.5 12.086 11.5 2l1 0 0 10.086 1.793 -1.793L15 11l-3 3 -3 -3z" fill="currentColor" strokeWidth="0.5"></path>
                  <path d="M1 3h7v1H1Z" fill="currentColor" strokeWidth="0.5"></path>
                  <path d="M3 6h5v1H3Z" fill="currentColor" strokeWidth="0.5"></path>
                  <path d="M5 9h3v1h-3Z" fill="currentColor" strokeWidth="0.5"></path>
                </svg>
                Sort
              </label>
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className="w-full bg-white text-gray-900 rounded px-3 py-2 text-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price ↑</option>
                <option value="price-high">Price ↓</option>
                <option value="newest">Newest</option>
              </select>
            </div>

            {/* View toggle (own wrapper, aligned far right on desktop) */}
            <div className="pb-3 md:justify-self-end">
              <div className="flex items-center gap-2 border border-gray-200 rounded bg-white px-3 py-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-1 rounded transition ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:text-gray-900'}`}
                  title="Grid View"
                >
                  <Grid3x3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-1 rounded transition ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:text-gray-900'}`}
                  title="List View"
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>

            
          </div>
        </div>

        {/* Products Grid or List */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-2 lg:gap-3">
            {filteredCars.map(car => (
              <div key={car.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 hover:scale-[1.01] flex flex-col w-full">
                {/* Image Container (Lazy + skeleton) */}
                <LazyImage src={car.image || '/images/placeholder.png'} alt={car.name} aspectClass="aspect-[5/4]" objectFit="cover" wrapperClass="w-full max-w-full bg-gray-200" />

                <div className="p-3 flex flex-col gap-2">
                  <h3 className="text-base font-semibold text-gray-900">{car.name}</h3>

                  <div className="text-xl font-bold text-gray-900">
                    ${Math.round(car.price * (1 - car.discount / 100)).toLocaleString()}
                  </div>

                  <div className="flex items-center gap-1 text-sm text-gray-600 border-t border-gray-200 pt-1.5">
                    <MapPin className="w-4 h-4 text-blue-600" />
                    <span>{car.location || 'N/A'}</span>
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
                <div className="flex-1 px-2 py-2 sm:p-3 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{car.name}</h3>

                    <div className="text-xl font-bold text-gray-900 mb-2">
                      ${Math.round(car.price * (1 - car.discount / 100)).toLocaleString()}
                    </div>

                    <div className="flex items-center gap-1 text-sm text-gray-600 border-t border-gray-200 pt-3">
                      <MapPin className="w-4 h-4 text-blue-600" />
                      <span>{car.location || 'N/A'}</span>
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
