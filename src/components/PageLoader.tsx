export default function PageLoader() {
  return (
    <div className="min-h-screen bg-gray-50 animate-pulse relative">
      {/* Centered Spinning Loader */}
      <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
        <div className="bg-white rounded-2xl shadow-2xl p-6 flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
          <p className="text-gray-600 font-medium">Loading...</p>
        </div>
      </div>
      {/* Navbar Skeleton */}
      <div className="bg-white shadow-md border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gray-200 rounded-xl"></div>
              <div className="h-6 w-24 bg-gray-200 rounded"></div>
            </div>
            <div className="hidden md:flex gap-8">
              <div className="h-4 w-16 bg-gray-200 rounded"></div>
              <div className="h-4 w-16 bg-gray-200 rounded"></div>
              <div className="h-4 w-16 bg-gray-200 rounded"></div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
              <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Skeleton */}
      <div className="bg-gradient-to-r from-blue-100 to-blue-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center max-w-4xl mx-auto space-y-4">
            <div className="h-10 md:h-14 bg-gray-200 rounded-lg w-3/4 mx-auto"></div>
            <div className="h-6 bg-gray-200 rounded w-2/3 mx-auto"></div>
          </div>
        </div>
        
        {/* Filter Bar Skeleton */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <div className="bg-white/80 backdrop-blur rounded-2xl p-4 md:p-6 max-w-4xl mx-auto shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-12 bg-gray-200 rounded-lg"></div>
              ))}
              <div className="col-span-2 md:col-span-1 h-12 bg-blue-200 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Skeleton */}
      <div className="py-8 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-6">
            {/* Sidebar Skeleton (Desktop) */}
            <div className="hidden lg:block w-64 flex-shrink-0">
              <div className="bg-white rounded-lg border border-gray-200 p-5 space-y-6">
                <div className="flex justify-between items-center">
                  <div className="h-6 w-20 bg-gray-200 rounded"></div>
                  <div className="h-4 w-12 bg-gray-200 rounded"></div>
                </div>
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="space-y-3">
                    <div className="h-5 w-24 bg-gray-200 rounded"></div>
                    <div className="space-y-2">
                      <div className="h-8 bg-gray-100 rounded"></div>
                      <div className="h-8 bg-gray-100 rounded"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cards Grid Skeleton */}
            <div className="flex-1">
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <div className="h-8 w-48 bg-gray-200 rounded"></div>
                <div className="flex gap-3">
                  <div className="h-10 w-40 bg-gray-200 rounded-lg"></div>
                  <div className="h-10 w-20 bg-gray-200 rounded-lg"></div>
                </div>
              </div>

              {/* Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="bg-white rounded-xl overflow-hidden shadow-md">
                    <div className="aspect-[4/3] bg-gray-200"></div>
                    <div className="p-4 space-y-3">
                      <div className="h-5 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-7 bg-gray-200 rounded w-1/2"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                      <div className="flex gap-2">
                        <div className="h-6 w-16 bg-gray-100 rounded-full"></div>
                        <div className="h-6 w-20 bg-gray-100 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
