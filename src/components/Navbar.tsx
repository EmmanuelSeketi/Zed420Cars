import { ShoppingCart, User, Menu, X, Search } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

interface NavbarProps {
  cartCount: number
  onCartClick: () => void
  searchQuery: string
  onSearchChange: (query: string) => void
  onLoginClick: () => void
}

export default function Navbar({ cartCount, onCartClick, searchQuery, onSearchChange, onLoginClick }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false)
  const [isScrollingUp, setIsScrollingUp] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const lastScrollYRef = useRef(0)
  const tickingRef = useRef(false)
  const lastDirectionUpRef = useRef(false)
  const lastIsScrolledRef = useRef(false)

  useEffect(() => {
    lastScrollYRef.current = window.scrollY || 0
    lastIsScrolledRef.current = (window.scrollY || 0) > 8

    const onScroll = () => {
      if (tickingRef.current) return
      tickingRef.current = true

      window.requestAnimationFrame(() => {
        const currentY = window.scrollY || 0
        const isUp = currentY < lastScrollYRef.current
        const scrolled = currentY > 8

        if (isUp !== lastDirectionUpRef.current) {
          lastDirectionUpRef.current = isUp
          setIsScrollingUp(isUp)
        }

        if (scrolled !== lastIsScrolledRef.current) {
          lastIsScrolledRef.current = scrolled
          setIsScrolled(scrolled)
        }

        lastScrollYRef.current = currentY
        tickingRef.current = false
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        isScrolled && isScrollingUp
          ? 'bg-white/70 backdrop-blur-md shadow-md border-white/20'
          : 'bg-white shadow-lg border-gray-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img 
              src={`${import.meta.env.BASE_URL}images/Logo.png`} 
              alt="Logo" 
              className="h-14 w-auto object-contain"
            />
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {/* Search Field - Before navlinks */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search vehicles..."
                className="pl-11 pr-4 py-2.5 w-56 lg:w-72 bg-gray-50 border-2 border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white focus:border-blue-500 transition-all duration-200 placeholder-gray-400 shadow-sm"
              />
            </div>
            
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">Contact</Link>
          </div>

          <div className="flex items-center gap-2">
            {/* Mobile Search Button */}
            <button 
              onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
              className="md:hidden p-2.5 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
            >
              <Search className="w-5 h-5" />
            </button>
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
            <button 
              onClick={onLoginClick}
              className="p-2.5 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
            >
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

        {/* Mobile Search Bar */}
        {mobileSearchOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-200 animate-in fade-in slide-in-from-top-2">
            <div className="relative flex items-center gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  placeholder="Search vehicles..."
                  className="w-full pl-11 pr-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white focus:border-blue-500 transition-all duration-200 placeholder-gray-400"
                  autoFocus
                />
              </div>
              <button
                onClick={() => setMobileSearchOpen(false)}
                className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-200 space-y-2 animate-in fade-in slide-in-from-top-2">
            <Link to="/" className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg font-medium transition-colors">Home</Link>
            <Link to="/about" className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg font-medium transition-colors">About</Link>
            <Link to="/contact" className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg font-medium transition-colors">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  )
}
