export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Premium Car Collection</h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-8">
            Discover luxury, performance, and innovation in every vehicle
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <input
              type="text"
              placeholder="Search by model..."
              className="px-6 py-3 rounded-lg text-gray-900 w-full md:w-80 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-8 py-3 rounded-lg transition">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
