interface PopularMakesSectionProps {
  onMakeClick?: (make: string) => void
}

export default function PopularMakesSection({ onMakeClick }: PopularMakesSectionProps) {
  const popularMakes = [
    { name: 'Toyota', image: '/images/Toyota.png', count: 45 },
    { name: 'Honda', image: '/images/Honda.png', count: 32 },
    { name: 'Mercedes-Benz', image: '/images/Benz.png', count: 28 },
    { name: 'Nissan', image: '/images/Nissan.png', count: 24 },
    { name: 'Ford', image: '/images/Ford.png', count: 21 },
    { name: 'Audi', image: '/images/Audi.png', count: 19 },
    { name: 'Mitsubishi', image: '/images/Mitsu.png', count: 17 },
    { name: 'BMW', image: '/images/BMW.png', count: 15 },
    { name: 'Mazda', image: '/images/Mazda.png', count: 13 }
  ]

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            Popular Makes
            <span className="text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full text-sm">{popularMakes.length}</span>
          </h2>
          <p className="text-gray-600 text-sm mt-1">Browse cars by your favorite manufacturers</p>
        </div>
      </div>

      <div className="grid grid-cols-4 sm:grid-cols-9 gap-1">
        {popularMakes.map((make) => (
          <div
            key={make.name}
            onClick={() => onMakeClick?.(make.name)}
            className="bg-white rounded-sm border border-gray-100 hover:border-blue-400 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group overflow-hidden relative"
          >
            <div className="aspect-square relative bg-gradient-to-br from-gray-50 to-gray-100 p-2 flex items-center justify-center">
              <img
                src={make.image}
                alt={make.name}
                className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-200"
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
      </div>
    </div>
  )
}
