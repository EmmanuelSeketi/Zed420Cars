import { ShoppingCart, User, Menu, X } from 'lucide-react'
import { useState } from 'react'

interface NavbarProps {
  cartCount: number
  onCartClick: () => void
}

export default function Navbar({ cartCount, onCartClick }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-100/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-md hover:shadow-lg transition-shadow">
              B
            </div>
            <h1 className="text-2xl font-black text-gray-900 tracking-tight">Brand</h1>
          </div>

          <div className="hidden md:flex gap-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">About</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onCartClick}
              className="relative p-2.5 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold shadow-md">
                  {cartCount}
                </span>
              )}
            </button>
            <button className="p-2.5 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200">
              <User className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div> 
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-200 space-y-2 animate-in fade-in slide-in-from-top-2">
            <a href="#" className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg font-medium transition-colors">Home</a>
            <a href="#" className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg font-medium transition-colors">Inventory</a>
            <a href="#" className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg font-medium transition-colors">About</a>
            <a href="#" className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg font-medium transition-colors">Contact</a>
          </div>
        )}
      </div>
    </nav>
  )
}
