import { useState } from 'react'
import { MapPin, Calendar, Settings, Phone, MessageCircle, Gauge, Fuel, ChevronLeft, ChevronRight, Heart, Share2 } from 'lucide-react'

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

interface CarDetailsProps {
  car: Car
  allCars: Car[]
  onBack: () => void
}

export default function CarDetails({ car, allCars, onBack }: CarDetailsProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isWishlisted, setIsWishlisted] = useState(false)

  // Generate more images for gallery
  const galleryImages = [
    car.image,
    allCars[0]?.image || car.image,
    allCars[1]?.image || car.image,
    allCars[2]?.image || car.image,
    allCars[3]?.image || car.image,
    allCars[4]?.image || car.image,
    allCars[5]?.image || car.image,
    allCars[6]?.image || car.image,
  ]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  const finalPrice = Math.round(car.price * (1 - car.discount / 100))

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with breadcrumbs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <button onClick={onBack} className="hover:text-blue-600 transition-colors">
              Home
            </button>
            <span>/</span>
            <span>{car.make}</span>
            <span>/</span>
            <span className="text-gray-900 font-medium">{car.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - 2/3 width */}
          <div className="lg:col-span-2 space-y-6">
            {/* Car Title */}
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">{car.name}</h1>
              <p className="text-gray-600 mt-1 text-sm sm:text-base">{car.make} • {car.year || '2024'}</p>
            </div>

            {/* Main Image */}
            <div className="relative bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src={galleryImages[currentImageIndex]}
                alt={car.name}
                className="w-full aspect-[16/10] object-cover"
              />
              
              {/* Image Navigation */}
              <button
                onClick={prevImage}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-1.5 sm:p-2 shadow-lg transition-colors"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-1.5 sm:p-2 shadow-lg transition-colors"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Action buttons */}
              <div className="absolute top-2 sm:top-4 right-2 sm:right-4 flex gap-2">
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className="bg-white/90 hover:bg-white rounded-full p-1.5 sm:p-2.5 shadow-lg transition-colors"
                >
                  <Heart className={`w-4 h-4 sm:w-5 sm:h-5 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
                </button>
                <button className="bg-white/90 hover:bg-white rounded-full p-2.5 shadow-lg transition-colors">
                  <Share2 className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
              {galleryImages.slice(0, 5).map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative aspect-[4/3] rounded-lg overflow-hidden border-2 transition-all ${
                    currentImageIndex === index ? 'border-blue-500' : 'border-transparent'
                  }`}
                >
                  <img src={image} alt={`${car.name} ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-200">
                <img src={galleryImages[5]} alt={`${car.name} 6`} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                  <span className="text-white font-semibold">+{galleryImages.length - 6} photos</span>
                </div>
              </div>
            </div>

            {/* Vehicle Description */}
            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Vehicle Description</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  This {car.year} {car.name} is an excellent vehicle available for sale in {car.location || 'Lusaka, Zambia'}. 
                  Well-maintained and perfect for Zambian roads, this vehicle offers reliability and performance 
                  suited for both city driving and long-distance travel across Zambia.
                </p>
                <p>
                  Featuring a {car.engine || 'efficient engine'} with {car.transmission || 'automatic'} transmission, 
                  this {car.style?.toLowerCase() || 'vehicle'} provides smooth handling and excellent fuel economy. 
                  With {car.mileage || 'low mileage'} on the odometer, this car has been carefully maintained and 
                  is ready for its next owner.
                </p>
                <p>
                  Located in {car.location || 'Lusaka'}, this vehicle is available for viewing and test drives. 
                  All necessary documentation including registration papers and service history are available. 
                  Perfect for families, business professionals, or anyone looking for a reliable vehicle in Zambia.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
                  <p className="text-sm text-blue-800 font-medium">
                    💡 <strong>Zambia Ready:</strong> This vehicle is well-suited for Zambian road conditions and comes with 
                    comprehensive service history from local authorized dealers.
                  </p>
                </div>
              </div>
            </div>

            
            {/* Specs Section */}
            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Specs</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-600">Year</p>
                    <p className="font-semibold">{car.year || '2024'}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Settings className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-600">Transmission</p>
                    <p className="font-semibold">{car.transmission || 'Auto'}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Fuel className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-600">Fuel Type</p>
                    <p className="font-semibold">{car.fuelType || 'Electric'}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Gauge className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-600">Mileage</p>
                    <p className="font-semibold">{car.mileage || '15,000 mi'}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Features */}
            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Vehicle Information</h2>
              <div className="grid grid-cols-1 gap-3">
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Body Style</span>
                  <span className="font-medium">{car.style || 'SUV'}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Engine</span>
                  <span className="font-medium">{car.engine || 'Petrol Engine'}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Seats</span>
                  <span className="font-medium">5</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Doors</span>
                  <span className="font-medium">4</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Drive Type</span>
                  <span className="font-medium">4WD</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Category</span>
                  <span className="font-medium">{car.category}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Location</span>
                  <span className="font-medium">{car.location || 'Lusaka'}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Condition</span>
                  <span className="font-medium text-green-600">Excellent</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - 1/3 width */}
          <div className="space-y-6">
            {/* Contact */}
            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Contact Seller</h2>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Call</span>
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors text-sm sm:text-base">
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>WhatsApp</span>
                  </button>
                </div>
                <div className="text-center">
                  <p className="text-xl sm:text-2xl font-bold text-blue-600">K{Math.round(finalPrice * 25).toLocaleString()}</p>
                  <p className="text-sm text-gray-500 mt-1">Approximately ${finalPrice.toLocaleString()}</p>
                  {car.discount > 0 && (
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <span className="text-gray-400 line-through text-sm">K{Math.round(car.price * 25).toLocaleString()}</span>
                      <span className="bg-green-100 text-green-700 text-sm font-medium px-2 py-1 rounded">
                        {car.discount}% OFF
                      </span>
                    </div>
                  )}
                </div>
                <div className="bg-gray-50 rounded-lg p-3 text-sm">
                  <p className="text-gray-600">
                    <strong>Payment Options:</strong> Cash, Bank Transfer, Mobile Money (Airtel Money, MTN Mobile Money)
                  </p>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Location</h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-medium">{car.location || 'Lusaka, Zambia'}</p>
                    <p className="text-sm text-gray-600">
                      {car.location === 'Lusaka City Center' ? 'Kabulonga Road, Near Arcades Shopping Mall' :
                       car.location === 'Kitwe' ? 'Kamfinsa Road, Near Mukuba Mall' :
                       car.location === 'Ndola' ? 'Kansanshi Road, Near Shoprite Complex' :
                       'Great East Road, Near Manda Hill'}
                    </p>
                  </div>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <p className="text-sm text-blue-800">
                    <strong>Viewing Available:</strong> Monday - Saturday, 9:00 AM - 6:00 PM
                  </p>
                  <p className="text-sm text-blue-800 mt-1">
                    <strong>Test Drives:</strong> Available with valid driver's license
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
