import { MapPin, Heart, Eye, ChevronRight, Calendar, Gauge } from 'lucide-react'
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
  transmission?: string
  year?: number
  fuelType?: string
  views?: number
  activeViewers?: number
  dealType?: string
}

interface FeaturedSectionProps {
  cars: Car[]
  onCarClick: (car: Car) => void
  wishlist: Set<number>
  onToggleWishlist: (carId: number) => void
  viewMode: 'grid' | 'list'
}

export default function FeaturedSection({ cars, onCarClick, wishlist, onToggleWishlist, viewMode }: FeaturedSectionProps) {
  const featuredCars = cars.slice(0, 4)

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-3">
        <div>
          <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
          
            Featured Vehicles
            <span className="text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full text-sm">{featuredCars.length}</span>
          </h2>
          
        </div>
        <a href="#listings" className="flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium transition-colors">
          View All
          <ChevronRight className="w-5 h-5" />
        </a>
      </div>

      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-4">
          {featuredCars.map(car => (
            <div 
              key={car.id} 
              onClick={() => onCarClick(car)}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col w-full border border-gray-100 hover:border-blue-300 relative group cursor-pointer"
            >
              <button
                onClick={(e) => { e.stopPropagation(); onToggleWishlist(car.id); }}
                className="absolute top-3 right-3 z-10 bg-white rounded-full p-2.5 shadow-md hover:shadow-lg transition-all duration-200 group-hover:scale-110"
              >
                <Heart
                  className={`w-5 h-5 transition-colors ${wishlist.has(car.id) ? 'fill-red-500 text-red-500' : 'text-gray-400 hover:text-red-500'}`}
                />
              </button>
              
              <div className="absolute top-3 left-3 z-10 bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                Featured
              </div>
              
              {car.dealType && (
                <div className={`absolute top-3 left-24 z-10 text-xs font-bold px-3 py-1.5 rounded-full shadow-md ${
                  car.dealType === 'Cash' ? 'bg-green-500 text-white' :
                  car.dealType === 'Swap' ? 'bg-orange-500 text-white' :
                  car.dealType === 'Topup' ? 'bg-purple-500 text-white' :
                  'bg-gray-500 text-white'
                }`}>
                  {car.dealType}
                </div>
              )}
              
              <div className="relative">
                <LazyImage src={car.image || '/images/placeholder.png'} alt={car.name} aspectClass="aspect-[16/10]" objectFit="cover" wrapperClass="w-full max-w-full bg-gray-200" />
                <div className="absolute bottom-2 left-2 flex gap-1.5">
                  {car.year && (
                    <span className="bg-black/70 text-white text-xs font-medium px-2 py-1 rounded flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {car.year}
                    </span>
                  )}
                  {car.mileage && (
                    <span className="bg-black/70 text-white text-xs font-medium px-2 py-1 rounded flex items-center gap-1">
                      <Gauge className="w-3 h-3" />
                      {car.mileage} mi
                    </span>
                  )}
                </div>
              </div>

              <div className="p-3 sm:p-4 flex flex-col gap-3 flex-1">
                <h3 className="text-base font-bold text-gray-900 leading-tight">{car.name}</h3>

                <div className="text-2xl font-extrabold text-blue-600 leading-tight">
                  ${Math.round(car.price * (1 - car.discount / 100)).toLocaleString()}
                  {car.discount > 0 && (
                    <span className="text-sm font-normal text-gray-400 line-through ml-2">
                      ${car.price.toLocaleString()}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-700 mt-auto">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span className="font-medium">{car.location || 'N/A'}</span>
                  </div>
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
        <div className="space-y-3 sm:space-y-4">
          {featuredCars.map(car => (
            <div 
              key={car.id} 
              onClick={() => onCarClick(car)}
              className="bg-white rounded-lg shadow-md hover:shadow-2xl overflow-hidden transition-all duration-300 flex flex-col sm:flex-row items-stretch w-full border border-gray-100 hover:border-blue-300 relative group cursor-pointer"
            >
              <button
                onClick={(e) => { e.stopPropagation(); onToggleWishlist(car.id); }}
                className="absolute top-3 right-3 z-10 bg-white rounded-full p-2.5 shadow-md hover:shadow-lg transition-all duration-200 group-hover:scale-110"
              >
                <Heart
                  className={`w-5 h-5 transition-colors ${wishlist.has(car.id) ? 'fill-red-500 text-red-500' : 'text-gray-400 hover:text-red-500'}`}
                />
              </button>
              
              <div className="absolute top-3 left-3 z-10 bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                Featured
              </div>
              
              {car.dealType && (
                <div className={`absolute top-3 left-24 z-10 text-xs font-bold px-3 py-1.5 rounded-full shadow-md ${
                  car.dealType === 'Cash' ? 'bg-green-500 text-white' :
                  car.dealType === 'Swap' ? 'bg-orange-500 text-white' :
                  car.dealType === 'Topup' ? 'bg-purple-500 text-white' :
                  'bg-gray-500 text-white'
                }`}>
                  {car.dealType}
                </div>
              )}
              
              <div className="relative w-full sm:w-72 flex-shrink-0">
                <LazyImage src={car.image || '/images/placeholder.png'} alt={car.name} aspectClass="aspect-[16/10]" objectFit="cover" wrapperClass="w-full h-full bg-gray-200" />
                <div className="absolute bottom-2 left-2 flex gap-1.5">
                  {car.year && (
                    <span className="bg-black/70 text-white text-xs font-medium px-2 py-1 rounded flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {car.year}
                    </span>
                  )}
                  {car.mileage && (
                    <span className="bg-black/70 text-white text-xs font-medium px-2 py-1 rounded flex items-center gap-1">
                      <Gauge className="w-3 h-3" />
                      {car.mileage} mi
                    </span>
                  )}
                </div>
              </div>

              <div className="flex-1 px-3 py-4 sm:px-4 sm:py-5 sm:p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{car.name}</h3>

                  <div className="text-2xl font-extrabold text-blue-600 mb-4">
                    ${Math.round(car.price * (1 - car.discount / 100)).toLocaleString()}
                    {car.discount > 0 && (
                      <span className="text-sm font-normal text-gray-400 line-through ml-2">
                        ${car.price.toLocaleString()}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-700">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <span className="font-medium">{car.location || 'N/A'}</span>
                    </div>
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
  )
}
