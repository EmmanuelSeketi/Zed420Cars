import { useState, useEffect, useRef } from 'react'

interface PopularMakesSectionProps {
  onMakeClick?: (make: string) => void
}

// Add custom styles for hiding scrollbar
const scrollbarHideStyles = `
  .scrollbar-hide {
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;  /* Safari and Chrome */
  }
`

export default function PopularMakesSection({ onMakeClick }: PopularMakesSectionProps) {
  const [showAll, setShowAll] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const scrollTimeoutRef = useRef<number>()
  
  const popularMakes = [
    { name: 'Toyota', image: '/images/Toyota.png', count: 45 },
    { name: 'Honda', image: '/images/Honda.png', count: 32 },
    { name: 'Mercedes-Benz', image: '/images/Benz.png', count: 28 },
    { name: 'Nissan', image: '/images/Nissan.png', count: 24 },
    { name: 'Ford', image: '/images/Ford.png', count: 21 },
    { name: 'Audi', image: '/images/Audi.png', count: 19 },
    { name: 'Mitsubishi', image: '/images/Mitsu.png', count: 17 },
    { name: 'BMW', image: '/images/BMW.png', count: 15 },
    { name: 'Mazda', image: '/images/Mazda.png', count: 13 },
    { name: 'Volts', image: '/images/Volts.png', count: 11 },
    { name: 'Hyundai', image: '/images/Hyundai.png', count: 9 },
    { name: 'Volvo', image: '/images/Volvo.png', count: 7 },
    { name: 'Isuzu', image: '/images/Isuzu.png', count: 5 }
  ]

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024
  const hasMore = isMobile && popularMakes.length > 8
  const visibleMakes = !hasMore || showAll ? popularMakes : popularMakes.slice(0, 8)

  // Inject scrollbar hide styles
  useEffect(() => {
    const styleElement = document.createElement('style')
    styleElement.textContent = scrollbarHideStyles
    document.head.appendChild(styleElement)

    return () => {
      document.head.removeChild(styleElement)
    }
  }, [])

  // Auto-scroll effect with user interaction
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (!scrollContainer) return

    let scrollPosition = 0
    let scrollDirection = 1 // 1 for right, -1 for left
    let animationId: number
    
    const scroll = () => {
      if (!scrollContainer || isPaused) {
        animationId = requestAnimationFrame(scroll)
        return
      }
      
      scrollPosition += scrollDirection * 0.5 // Slower, smoother scroll
      
      // Check if we've reached the end
      const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth
      if (scrollPosition >= maxScroll) {
        scrollDirection = -1 // Reverse direction to left
      } else if (scrollPosition <= 0) {
        scrollDirection = 1 // Reverse direction to right
      }
      
      scrollContainer.scrollLeft = scrollPosition
      animationId = requestAnimationFrame(scroll)
    }

    // Start scrolling
    animationId = requestAnimationFrame(scroll)

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [isPaused])

  // Handle user interaction
  const handleInteractionStart = () => {
    setIsPaused(true)
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current)
    }
  }

  const handleInteractionEnd = () => {
    // Resume scrolling after 3 seconds of no interaction
    scrollTimeoutRef.current = window.setTimeout(() => {
      setIsPaused(false)
    }, 3000)
  }

  return (
    <div className="mb-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 relative inline-block">
          Popular Makes
          <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
        </h2>
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div 
          ref={scrollContainerRef}
          className="flex items-center gap-3 overflow-x-auto scrollbar-hide"
          onMouseEnter={handleInteractionStart}
          onMouseLeave={handleInteractionEnd}
          onTouchStart={handleInteractionStart}
          onTouchEnd={handleInteractionEnd}
          onWheel={handleInteractionStart}
        >
          {/* Makes - All in one line */}
          {visibleMakes.map((make) => (
            <div
              key={make.name}
              onClick={() => onMakeClick?.(make.name)}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 hover:border-blue-300 cursor-pointer group relative flex-shrink-0"
            >
              <div className="w-24 h-24 sm:w-24 sm:h-24 relative bg-white p-4 flex items-center justify-center">
                <img
                  src={make.image}
                  alt={make.name}
                  className="w-full h-full object-contain filter grayscale-0 group-hover:grayscale transition-all duration-200"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = '/images/placeholder.png'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              </div>
            </div>
          ))}
          
          {/* More Button - Right side, Mobile only */}
          {hasMore && (
            <div className="lg:hidden">
              <div
                onClick={() => setShowAll(!showAll)}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 hover:border-blue-300 cursor-pointer group relative flex-shrink-0"
              >
                <div className="w-24 h-24 relative bg-white p-4 flex items-center justify-center">
                  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-600">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"> 
                      <g id="more"> 
                        <g id="more_2"> 
                          <path id="Combined Shape" fillRule="evenodd" clipRule="evenodd" d="M12 28C14.2089 28 16 26.2097 16 24C16 21.7903 14.2089 20 12 20C9.79113 20 8 21.7903 8 24C8 26.2097 9.79113 28 12 28ZM24 28C26.2089 28 28 26.2097 28 24C28 21.7903 26.2089 20 24 20C21.7911 20 20 21.7903 20 24C20 26.2097 21.7911 28 24 28ZM24 22C25.1045 22 26 22.8951 26 24C26 25.1049 25.1045 26 24 26C22.8955 26 22 25.1049 22 24C22 22.8951 22.8955 22 24 22ZM14 24C14 22.8951 13.1045 22 12 22C10.8955 22 10 22.8951 10 24C10 25.1049 10.8955 26 12 26C13.1045 26 14 25.1049 14 24ZM38 24C38 22.8951 37.1045 22 36 22C34.8955 22 34 22.8951 34 24C34 25.1049 34.8955 26 36 26C37.1045 26 38 25.1049 38 24ZM36 28C38.2089 28 40 26.2097 40 24C40 21.7903 38.2089 20 36 20C33.7911 20 32 21.7903 32 24C32 26.2097 33.7911 28 36 28Z" fill="currentColor"></path> 
                        </g> 
                      </g> 
                    </g>
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
