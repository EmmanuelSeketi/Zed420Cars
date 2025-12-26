import { useState } from 'react'
import { MapPin } from 'lucide-react'

interface HeroProps {
  selectedModel: string
  onModelChange: (model: string) => void
  selectedCity: string
  onCityChange: (city: string) => void
  selectedMake: string
  onMakeChange: (make: string) => void
  selectedTransmission: string
  onTransmissionChange: (transmission: string) => void
  makes: string[]
  transmissions: string[]
  models: string[]
  cities: string[]
}

export default function Hero({ 
  selectedModel, 
  onModelChange,
  selectedCity,
  onCityChange,
  selectedMake,
  onMakeChange,
  selectedTransmission,
  onTransmissionChange,
  makes,
  transmissions,
  models,
  cities
}: HeroProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [hoverDropdown, setHoverDropdown] = useState<string | null>(null)

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name)
  }

  const closeDropdown = () => {
    setOpenDropdown(null)
  }

  const handleMouseEnter = (name: string) => {
    if (window.innerWidth >= 768) {
      setHoverDropdown(name)
    }
  }

  const handleMouseLeave = () => {
    setHoverDropdown(null)
  }

  const isDropdownOpen = (name: string) => {
    return openDropdown === name || hoverDropdown === name
  }
  return (
    <div 
      className="relative text-white"
      style={{
        backgroundImage: 'linear-gradient(to right, rgba(37, 99, 235, 0.10), rgba(29, 78, 216, 0.00)), url(/images/hero-image3.png)',
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
          <p className="text-lg md:text-xl text-blue-100 font-light leading-relaxed max-w-2xl mx-auto">
            ''
          </p>
          {/* Space for hero image will go here */}
        </div>
      </div>
      
      {/* Filter Bar - at the bottom of hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-6 mt-4 md:mt-0">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 md:p-6 max-w-4xl mx-auto border-2 border-white/30 shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
              {/* City */}
              <div className="relative" onMouseEnter={() => handleMouseEnter('city')} onMouseLeave={handleMouseLeave}>
                <button
                  onClick={() => toggleDropdown('city')}
                  className={`w-full pl-10 pr-10 py-2 md:py-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-md bg-white border border-gray-200 flex items-center justify-between transition-all duration-200 hover:border-blue-400 hover:shadow-lg ${selectedCity === 'All' ? 'text-gray-400' : 'text-gray-900'}`}
                >
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <span className="truncate">{selectedCity === 'All' ? 'City' : selectedCity}</span>
                  <svg className={`absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 transition-transform ${isDropdownOpen('city') ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z"></path>
                  </svg>
                </button>
                {isDropdownOpen('city') && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-xl border border-gray-100 z-[100] max-h-60 overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="p-1">
                      <button
                        onClick={() => { onCityChange('All'); closeDropdown(); }}
                        className={`w-full text-left px-3 py-2 rounded-md text-sm transition-all duration-150 flex items-center justify-between ${selectedCity === 'All' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-50'}`}
                      >
                        <span className="font-medium">City</span>
                        {selectedCity === 'All' && <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>}
                      </button>
                      {cities.map(city => (
                        <button
                          key={city}
                          onClick={() => { onCityChange(city); closeDropdown(); }}
                          className={`w-full text-left px-3 py-2 rounded-md text-sm transition-all duration-150 flex items-center justify-between ${selectedCity === city ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-50'}`}
                        >
                          <span className="font-medium">{city}</span>
                          {selectedCity === city && <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              {/* Make */}
              <div className="relative" onMouseEnter={() => handleMouseEnter('make')} onMouseLeave={handleMouseLeave}>
                <button
                  onClick={() => toggleDropdown('make')}
                  className={`w-full pl-10 pr-10 py-2 md:py-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-md bg-white border border-gray-200 flex items-center justify-between transition-all duration-200 hover:border-blue-400 hover:shadow-lg ${selectedMake === 'All' ? 'text-gray-400' : 'text-gray-900'}`}
                >
                  <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21.7992 14.001C20.9633 18.1168 17.5995 21.3145 13.399 21.9028L13.3992 19.878C16.4926 19.3321 18.9729 17.0086 19.7473 14.0004L21.7992 14.001ZM4.25157 14.0004C5.01757 16.9759 7.45244 19.2814 10.4989 19.8595V21.8882C6.3456 21.2632 3.02888 18.0838 2.19968 14.001L4.25157 14.0004ZM17.9994 11V13H16.9994C14.8572 13 13.1084 14.684 13.0043 16.8004L12.9994 17V18H10.9994V17C10.9994 14.8578 9.31547 13.1089 7.19908 13.0049L6.99944 13H5.99944V11H17.9994ZM11.9994 2C17.1848 2 21.4483 5.94662 21.9501 10.9999L19.9376 11C19.4455 7.05371 16.0791 4 11.9994 4C7.91981 4 4.55341 7.05371 4.06133 11L2.04883 10.9999C2.5506 5.94662 6.81413 2 11.9994 2Z"></path>
                  </svg>
                  <span className="truncate">{selectedMake === 'All' ? 'Make' : selectedMake}</span>
                  <svg className={`absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 transition-transform ${isDropdownOpen('make') ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z"></path>
                  </svg>
                </button>
                {isDropdownOpen('make') && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-xl border border-gray-100 z-[100] max-h-60 overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="p-1">
                      <button
                        onClick={() => { onMakeChange('All'); closeDropdown(); }}
                        className={`w-full text-left px-3 py-2 rounded-md text-sm transition-all duration-150 flex items-center justify-between ${selectedMake === 'All' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-50'}`}
                      >
                        <span className="font-medium">Make</span>
                        {selectedMake === 'All' && <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>}
                      </button>
                      {makes.map(make => (
                        <button
                          key={make}
                          onClick={() => { onMakeChange(make); closeDropdown(); }}
                          className={`w-full text-left px-3 py-2 rounded-md text-sm transition-all duration-150 flex items-center justify-between ${selectedMake === make ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-50'}`}
                        >
                          <span className="font-medium">{make}</span>
                          {selectedMake === make && <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              {/* Transmission */}
              <div className="relative" onMouseEnter={() => handleMouseEnter('transmission')} onMouseLeave={handleMouseLeave}>
                <button
                  onClick={() => toggleDropdown('transmission')}
                  className={`w-full pl-10 pr-10 py-2 md:py-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-md bg-white border border-gray-200 flex items-center justify-between transition-all duration-200 hover:border-blue-400 hover:shadow-lg ${selectedTransmission === 'All' ? 'text-gray-400' : 'text-gray-900'}`}
                >
                  <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 9v6" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
                    <path d="M12 9v6" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
                    <path d="M8 12h5c0.9319 0 1.3978 0 1.7654 -0.1522 0.49 -0.203 0.8794 -0.5924 1.0824 -1.0824C16 10.3978 16 9.93188 16 9" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
                    <path d="M22 12c0 5.5228 -4.4772 10 -10 10 -5.52285 0 -10 -4.4772 -10 -10C2 6.47715 6.47715 2 12 2c5.5228 0 10 4.47715 10 10Z" stroke="currentColor" strokeWidth="1.5"></path>
                  </svg>
                  <span className="truncate">{selectedTransmission === 'All' ? 'Transmissio' : selectedTransmission}</span>
                  <svg className={`absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 transition-transform ${isDropdownOpen('transmission') ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z"></path>
                  </svg>
                </button>
                {isDropdownOpen('transmission') && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-xl border border-gray-100 z-[100] max-h-60 overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="p-1">
                      <button
                        onClick={() => { onTransmissionChange('All'); closeDropdown(); }}
                        className={`w-full text-left px-3 py-2 rounded-md text-sm transition-all duration-150 flex items-center justify-between ${selectedTransmission === 'All' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-50'}`}
                      >
                        <span className="font-medium">Transmission</span>
                        {selectedTransmission === 'All' && <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>}
                      </button>
                      {transmissions.map(transmission => (
                        <button
                          key={transmission}
                          onClick={() => { onTransmissionChange(transmission); closeDropdown(); }}
                          className={`w-full text-left px-3 py-2 rounded-md text-sm transition-all duration-150 flex items-center justify-between ${selectedTransmission === transmission ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-50'}`}
                        >
                          <span className="font-medium">{transmission}</span>
                          {selectedTransmission === transmission && <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              {/* Model */}
              <div className="relative" onMouseEnter={() => handleMouseEnter('model')} onMouseLeave={handleMouseLeave}>
                <button
                  onClick={() => toggleDropdown('model')}
                  className={`w-full pl-10 pr-10 py-2 md:py-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-md bg-white border border-gray-200 flex items-center justify-between transition-all duration-200 hover:border-blue-400 hover:shadow-lg ${selectedModel === 'All' ? 'text-gray-400' : 'text-gray-900'}`}
                >
                  <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor">
                    <path d="M23 10a1 1 0 0 0-1 1v.46A2.54 2.54 0 0 0 24.54 14h1.92A2.54 2.54 0 0 0 29 11.46V4.54A2.54 2.54 0 0 0 26.46 2h-1.92A2.54 2.54 0 0 0 22 4.54V6h-3.18A3 3 0 0 0 16 4a1 1 0 0 0 0 2 1 1 0 1 1-1 1 1 1 0 0 0-1-1h-4V4.54A2.54 2.54 0 0 0 7.46 2H5.54A2.54 2.54 0 0 0 3 4.54v6.92A2.54 2.54 0 0 0 5.54 14h1.92A2.54 2.54 0 0 0 10 11.46V8h3.18A3 3 0 0 0 15 9.82v4.27a2.66 2.66 0 0 0-2 2.57v2.68a2.66 2.66 0 0 0 2 2.57V24H9a1 1 0 0 0-1 1v2.46a.54.54 0 0 1-.54.54H5.54a.54.54 0 0 1-.54-.54v-6.92a.54.54 0 0 1 .54-.54h1.92a.54.54 0 0 1 .54.54V21a1 1 0 0 0 2 0v-.46A2.54 2.54 0 0 0 7.46 18H5.54A2.54 2.54 0 0 0 3 20.54v6.92A2.54 2.54 0 0 0 5.54 30h1.92A2.54 2.54 0 0 0 10 27.46V26h12v1.46A2.54 2.54 0 0 0 24.54 30h1.92A2.54 2.54 0 0 0 29 27.46v-6.92A2.54 2.54 0 0 0 26.46 18h-1.92A2.54 2.54 0 0 0 22 20.54V24h-5v-2.09a2.66 2.66 0 0 0 2-2.57v-2.68a2.66 2.66 0 0 0-2-2.57V9.82A3 3 0 0 0 18.82 8H23a1 1 0 0 0 1-1V4.54a.54.54 0 0 1 .54-.54h1.92a.54.54 0 0 1 .54.54v6.92a.54.54 0 0 1-.54.54h-1.92a.54.54 0 0 1-.54-.54V11a1 1 0 0 0-1-1zM8 11.46a.54.54 0 0 1-.54.54H5.54a.54.54 0 0 1-.54-.54V4.54A.54.54 0 0 1 5.54 4h1.92a.54.54 0 0 1 .54.54zm16 9.08a.54.54 0 0 1 .54-.54h1.92a.54.54 0 0 1 .54.54v6.92a.54.54 0 0 1-.54.54h-1.92a.54.54 0 0 1-.54-.54zm-7-1.2a.65.65 0 0 1-.66.66h-.68a.65.65 0 0 1-.66-.66v-2.68a.65.65 0 0 1 .66-.66h.68a.65.65 0 0 1 .66.66z"/>
                  </svg>
                  <span className="truncate">{selectedModel === 'All' ? 'Model' : selectedModel}</span>
                  <svg className={`absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 transition-transform ${isDropdownOpen('model') ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z"></path>
                  </svg>
                </button>
                {isDropdownOpen('model') && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-xl border border-gray-100 z-[100] max-h-60 overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="p-1">
                      <button
                        onClick={() => { onModelChange('All'); closeDropdown(); }}
                        className={`w-full text-left px-3 py-2 rounded-md text-sm transition-all duration-150 flex items-center justify-between ${selectedModel === 'All' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-50'}`}
                      >
                        <span className="font-medium">Model</span>
                        {selectedModel === 'All' && <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>}
                      </button>
                      {models.map(model => (
                        <button
                          key={model}
                          onClick={() => { onModelChange(model); closeDropdown(); }}
                          className={`w-full text-left px-3 py-2 rounded-md text-sm transition-all duration-150 flex items-center justify-between ${selectedModel === model ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-50'}`}
                        >
                          <span className="font-medium">{model}</span>
                          {selectedModel === model && <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}
