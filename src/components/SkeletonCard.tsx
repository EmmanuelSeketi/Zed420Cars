export default function SkeletonCard() {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md animate-pulse">
      {/* Image skeleton */}
      <div className="relative aspect-[4/3] bg-gray-200">
        <div className="absolute top-3 left-3 w-16 h-6 bg-gray-300 rounded-full"></div>
        <div className="absolute top-3 right-3 w-8 h-8 bg-gray-300 rounded-full"></div>
      </div>
      
      {/* Content skeleton */}
      <div className="p-4 space-y-3">
        {/* Title */}
        <div className="h-5 bg-gray-200 rounded w-3/4"></div>
        
        {/* Price */}
        <div className="flex items-center gap-2">
          <div className="h-7 bg-gray-200 rounded w-24"></div>
          <div className="h-4 bg-gray-100 rounded w-16"></div>
        </div>
        
        {/* Location */}
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
          <div className="h-4 bg-gray-200 rounded w-20"></div>
        </div>
        
        {/* Badges */}
        <div className="flex gap-2 pt-2">
          <div className="h-6 bg-gray-100 rounded-full w-16"></div>
          <div className="h-6 bg-gray-100 rounded-full w-20"></div>
        </div>
      </div>
    </div>
  )
}
