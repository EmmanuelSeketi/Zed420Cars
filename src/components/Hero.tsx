import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const scrollToListings = () => {
    const listingsSection = document.getElementById('listings')
    if (listingsSection) {
      listingsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div 
      className="relative text-white"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(37, 99, 235, 0.10), rgba(29, 78, 216, 0.00)), url(${import.meta.env.BASE_URL}images/hero-car1.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Subtle background pattern overlay */}
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      {/* Hero content area - room for image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-8 md:pt-20">
        <div className="text-center max-w-4xl mx-auto min-h-[120px] md:min-h-[220px] flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight tracking-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Find Your Perfect Ride in Zambia
          </h2>
          
          
          {/* Browse Button */}
          <button
            onClick={scrollToListings}
            className="group inline-flex items-center justify-center gap-2 bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-blue-50 mx-auto"
          >
            <span>Browse Vehicles</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </button>
        </div>
      </div>
      
      {/* Bottom spacing */}
      <div className="pb-8 md:pb-12"></div>
    </div>
  )
}
