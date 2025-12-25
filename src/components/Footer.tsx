import { Facebook, Twitter, Instagram, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-400 py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center text-white font-bold shadow-md">
                C
              </div>
              <h3 className="text-white font-bold text-lg">CarHub</h3>
            </div>
            
            <p className="text-sm text-gray-400 leading-relaxed">Your one-stop destination for premium cars at unbeatable prices. Excellence in every journey.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 font-medium">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 font-medium">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 font-medium">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 font-medium">Shipping Info</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Categories</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 font-medium">Electric</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 font-medium">Luxury</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 font-medium">Sports</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 font-medium">SUVs</a></li>
            </ul>
          </div>

          {/* Stay Updated */}
          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Stay Updated</h4>
            <p className="text-sm text-gray-400 mb-4 font-medium">Subscribe for latest deals and updates</p>
            <div className="flex shadow-lg">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 text-white placeholder-gray-500 rounded-l-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              />
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-4 py-3 rounded-r-lg transition-all duration-200">
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-8 pb-8 border-b border-gray-800">
          <a href="#" className="text-gray-400 hover:text-white hover:bg-blue-600 hover:bg-opacity-20 p-2 rounded-lg transition-all duration-200"><Facebook className="w-5 h-5" /></a>
          <a href="#" className="text-gray-400 hover:text-white hover:bg-blue-600 hover:bg-opacity-20 p-2 rounded-lg transition-all duration-200"><Twitter className="w-5 h-5" /></a>
          <a href="#" className="text-gray-400 hover:text-white hover:bg-blue-600 hover:bg-opacity-20 p-2 rounded-lg transition-all duration-200"><Instagram className="w-5 h-5" /></a>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500 font-medium">
          <p>© 2025 CarHub. All rights reserved. Crafted with precision.</p>
        </div>
      </div>
    </footer>
  )
}
