import { useState, useEffect } from 'react'
import { Grid3x3, List, MapPin, Heart, Eye } from 'lucide-react'
import LazyImage from './LazyImage'
import SkeletonCard from './SkeletonCard'

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
  views?: number
  activeViewers?: number
}

interface ProductGridProps {
  cars: Car[]
  onAddToCart: (car: Car) => void
  selectedModel?: string
  selectedCity?: string
  selectedMake?: string
  selectedTransmission?: string
  selectedBodyType?: string
  selectedMileage?: string
  selectedYear?: string
  selectedPrice?: string
  selectedFuelType?: string
  searchQuery?: string
}

function ProductGrid({ 
  cars, 
  selectedModel = 'All',
  selectedCity = 'All',
  selectedMake = 'All',
  selectedTransmission = 'All',
  selectedBodyType = 'All',
  selectedMileage = 'All',
  selectedYear = 'All',
  selectedPrice = 'All',
  selectedFuelType = 'All',
  searchQuery = ''
}: ProductGridProps) {
  const [sortBy, setSortBy] = useState('featured')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [wishlist, setWishlist] = useState<Set<number>>(new Set())
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Simulate initial loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  // Helper function to parse mileage string to number
  const parseMileage = (mileage: string) => {
    return parseInt(mileage.replace(/,/g, ''), 10)
  }

  // Helper function to check mileage range
  const matchesMileageRange = (carMileage: string | undefined, range: string) => {
    if (range === 'All' || !carMileage) return true
    const miles = parseMileage(carMileage)
    if (range === '0-10,000') return miles <= 10000
    if (range === '10,000-25,000') return miles > 10000 && miles <= 25000
    if (range === '25,000-50,000') return miles > 25000 && miles <= 50000
    if (range === '50,000+') return miles > 50000
    return true
  }

  // Helper function to check price range
  const matchesPriceRange = (carPrice: number, range: string) => {
    if (range === 'All') return true
    if (range === 'Under $30,000') return carPrice < 30000
    if (range === '$30,000-$60,000') return carPrice >= 30000 && carPrice <= 60000
    if (range === '$60,000-$100,000') return carPrice > 60000 && carPrice <= 100000
    if (range === 'Over $100,000') return carPrice > 100000
    return true
  }

  // Filter logic using props
  let filteredCars = cars.filter(car => {
    const matchesCity = selectedCity === 'All' || car.location === selectedCity
    const matchesMake = selectedMake === 'All' || car.make === selectedMake
    const matchesTransmission = selectedTransmission === 'All' || (car as any).transmission === selectedTransmission
    const matchesModel = selectedModel === 'All' || car.name === selectedModel
    const matchesBodyType = selectedBodyType === 'All' || (car as any).style === selectedBodyType
    const matchesMileage = matchesMileageRange(car.mileage, selectedMileage)
    const matchesYear = selectedYear === 'All' || String((car as any).year) === selectedYear
    const matchesPrice = matchesPriceRange(car.price, selectedPrice)
    const matchesFuelType = selectedFuelType === 'All' || (car as any).fuelType === selectedFuelType
    
    // Search query filter - matches name or make
    const matchesSearch = searchQuery === '' || 
      car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.make.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (car.location && car.location.toLowerCase().includes(searchQuery.toLowerCase()))
    
    return matchesCity && matchesMake && matchesTransmission && matchesModel && matchesBodyType && matchesMileage && matchesYear && matchesPrice && matchesFuelType && matchesSearch
  })

  // Sort logic
  if (sortBy === 'price-low') {
    filteredCars = [...filteredCars].sort((a, b) => a.price - b.price)
  } else if (sortBy === 'price-high') {
    filteredCars = [...filteredCars].sort((a, b) => b.price - a.price)
  } else if (sortBy === 'newest') {
    filteredCars = [...filteredCars].reverse()
  }

  const toggleWishlist = (carId: number) => {
    const newWishlist = new Set(wishlist)
    if (newWishlist.has(carId)) {
      newWishlist.delete(carId)
    } else {
      newWishlist.add(carId)
    }
    setWishlist(newWishlist)
  }

  return (
    <div className="flex-1 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Results header with sort and view toggle */}
        <div className="mb-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                Available Vehicles
                <span className="text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full text-sm">{filteredCars.length}</span>
              </h2>
              {/* Active filter chips */}
              <div className="flex flex-wrap gap-2 mt-2">
                {selectedCity !== 'All' && (
                  <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded-full">
                    {selectedCity}
                  </span>
                )}
                {selectedMake !== 'All' && (
                  <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded-full">
                    {selectedMake}
                  </span>
                )}
                {selectedModel !== 'All' && (
                  <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded-full">
                    {selectedModel}
                  </span>
                )}
                {selectedBodyType !== 'All' && (
                  <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded-full">
                    {selectedBodyType}
                  </span>
                )}
                {selectedTransmission !== 'All' && (
                  <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded-full">
                    {selectedTransmission}
                  </span>
                )}
                {selectedYear !== 'All' && (
                  <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded-full">
                    {selectedYear}
                  </span>
                )}
                {selectedMileage !== 'All' && (
                  <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded-full">
                    {selectedMileage}
                  </span>
                )}
                {selectedPrice !== 'All' && (
                  <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded-full">
                    {selectedPrice}
                  </span>
                )}
                {selectedFuelType !== 'All' && (
                  <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded-full">
                    {selectedFuelType}
                  </span>
                )}
              </div>
            </div>
            
            <div className="flex items-center gap-3 w-full sm:w-auto">
              {/* Sort */}
              <div className="flex-1 sm:flex-none relative">
                <button
                  onClick={() => setSortDropdownOpen(!sortDropdownOpen)}
                  className="w-full bg-white text-gray-700 rounded-lg px-3 py-2 text-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer flex items-center justify-between gap-2 min-w-[150px] hover:border-gray-300 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
                    </svg>
                    <span className="font-medium text-gray-700">
                      {sortBy === 'featured' && 'Sort By: Featured'}
                      {sortBy === 'price-low' && 'Sort By: Low to High'}
                      {sortBy === 'price-high' && 'Sort By: High to Low'}
                      {sortBy === 'newest' && 'Sort By: Newest'}
                    </span>
                  </div>
                  <svg className={`w-5 h-5 text-gray-400 transition-transform ${sortDropdownOpen ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z"></path>
                  </svg>
                </button>
                {sortDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-xl border border-gray-100 z-[100] overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="p-1">
                      {[
                        { value: 'featured', label: 'Featured' },
                        { value: 'price-low', label: 'Price: Low to High' },
                        { value: 'price-high', label: 'Price: High to Low' },
                        { value: 'newest', label: 'Newest First' }
                      ].map(option => (
                        <button
                          key={option.value}
                          onClick={() => { setSortBy(option.value); setSortDropdownOpen(false); }}
                          className={`w-full text-left px-3 py-2 rounded-md text-sm transition-all duration-150 flex items-center justify-between ${sortBy === option.value ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-50'}`}
                        >
                          <span className="font-medium">{option.label}</span>
                          {sortBy === option.value && <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* View toggle */}
              <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-3 py-2 flex items-center gap-1.5 text-sm font-medium transition-all duration-200 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                  title="Grid View"
                >
                  <Grid3x3 className="w-4 h-4" />
                  <span className="hidden sm:inline">Grid</span>
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-3 py-2 flex items-center gap-1.5 text-sm font-medium transition-all duration-200 border-l border-gray-200 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                  title="List View"
                >
                  <List className="w-4 h-4" />
                  <span className="hidden sm:inline">List</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid or List */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {[...Array(6)].map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : filteredCars.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🚗</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No cars found</h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">Try adjusting your filters or search terms to find the perfect car.</p>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg inline-block"
            >
              Adjust Filters
            </a>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {filteredCars.map(car => (
              <div key={car.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col w-full border border-gray-100 hover:border-blue-300 relative group">
                {/* Wishlist button */}
                <button
                  onClick={() => toggleWishlist(car.id)}
                  className="absolute top-3 right-3 z-10 bg-white rounded-full p-2.5 shadow-md hover:shadow-lg transition-all duration-200 group-hover:scale-110"
                >
                  <Heart
                    className={`w-5 h-5 transition-colors ${wishlist.has(car.id) ? 'fill-red-500 text-red-500' : 'text-gray-400 hover:text-red-500'}`}
                  />
                </button>
                
                {/* Product badge */}
                {car.badge && (
                  <div className="absolute top-3 left-3 z-10 bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                    {car.badge}
                  </div>
                )}
                
                {/* Image Container (Lazy + skeleton) */}
                <div className="relative">
                  <LazyImage src={car.image || '/images/placeholder.png'} alt={car.name} aspectClass="aspect-[16/10]" objectFit="cover" wrapperClass="w-full max-w-full bg-gray-200" />
                  {/* Year & Mileage badges */}
                  <div className="absolute bottom-2 left-2 flex gap-1.5">
                    {(car as any).year && (
                      <span className="bg-black/70 text-white text-xs font-medium px-2 py-1 rounded">
                        {(car as any).year}
                      </span>
                    )}
                    {car.mileage && (
                      <span className="bg-black/70 text-white text-xs font-medium px-2 py-1 rounded">
                        {car.mileage} mi
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-4 flex flex-col gap-3 flex-1">
                  <h3 className="text-base font-bold text-gray-900 leading-tight">{car.name}</h3>

                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={`text-sm ${i < Math.floor(car.rating) ? '⭐' : '☆'}`}></span>
                      ))}
                    </div>
                  </div>

                  <div className="text-2xl font-extrabold text-blue-600 leading-tight">
                    ${Math.round(car.price * (1 - car.discount / 100)).toLocaleString()}
                    {car.discount > 0 && (
                      <span className="text-sm font-normal text-gray-400 line-through ml-2">
                        ${car.price.toLocaleString()}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-700 border-t border-gray-200 pt-3 mt-auto">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <span className="font-medium">{car.location || 'N/A'}</span>
                    </div>
                    {/* View Analytics */}
                    <div className={`flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium ${
                      (car.activeViewers || 0) > 0 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      <Eye className="w-3.5 h-3.5" />
                      {(car.activeViewers || 0) > 0 ? (
                        <span>{car.activeViewers} viewing</span>
                      ) : (
                        <span>{(car.views || 0).toLocaleString()}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredCars.map(car => (
              <div key={car.id} className="bg-white rounded-xl shadow-md hover:shadow-2xl overflow-hidden transition-all duration-300 flex flex-col sm:flex-row items-stretch w-full border border-gray-100 hover:border-blue-300 relative group">
                {/* Wishlist button */}
                <button
                  onClick={() => toggleWishlist(car.id)}
                  className="absolute top-3 right-3 z-10 bg-white rounded-full p-2.5 shadow-md hover:shadow-lg transition-all duration-200 group-hover:scale-110"
                >
                  <Heart
                    className={`w-5 h-5 transition-colors ${wishlist.has(car.id) ? 'fill-red-500 text-red-500' : 'text-gray-400 hover:text-red-500'}`}
                  />
                </button>
                
                {/* Badge */}
                {car.badge && (
                  <div className="absolute top-3 left-3 z-10 bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                    {car.badge}
                  </div>
                )}
                
                {/* Image */}
                <div className="relative w-full sm:w-72 flex-shrink-0">
                  <img
                    src={car.image || '/images/placeholder.png'}
                    alt={car.name}
                    className="block w-full h-56 sm:h-full bg-gray-200 object-cover object-center"
                  />
                  {/* Year & Mileage badges */}
                  <div className="absolute bottom-2 left-2 flex gap-1.5">
                    {(car as any).year && (
                      <span className="bg-black/70 text-white text-xs font-medium px-2 py-1 rounded">
                        {(car as any).year}
                      </span>
                    )}
                    {car.mileage && (
                      <span className="bg-black/70 text-white text-xs font-medium px-2 py-1 rounded">
                        {car.mileage} mi
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 px-4 py-5 sm:p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{car.name}</h3>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={`text-sm ${i < Math.floor(car.rating) ? '⭐' : '☆'}`}></span>
                        ))}
                      </div>
                    </div>

                    <div className="text-2xl font-extrabold text-blue-600 mb-4">
                      ${Math.round(car.price * (1 - car.discount / 100)).toLocaleString()}
                      {car.discount > 0 && (
                        <span className="text-sm font-normal text-gray-400 line-through ml-2">
                          ${car.price.toLocaleString()}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-700 border-t border-gray-200 pt-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        <span className="font-medium">{car.location || 'N/A'}</span>
                      </div>
                      {/* View Analytics */}
                      <div className={`flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium ${
                        (car.activeViewers || 0) > 0 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        <Eye className="w-3.5 h-3.5" />
                        {(car.activeViewers || 0) > 0 ? (
                          <span>{car.activeViewers} viewing</span>
                        ) : (
                          <span>{(car.views || 0).toLocaleString()}</span>
                        )}
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
