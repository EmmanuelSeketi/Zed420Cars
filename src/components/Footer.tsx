import { Facebook, Twitter, Instagram, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* About */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                L
              </div>
              <h3 className="text-white font-bold">Logo</h3>
            </div>
            <p className="text-sm leading-relaxed">Your trusted destination for quality vehicles in Zambia.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">How It Works</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Categories</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">SUVs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sedans</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Trucks</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Luxury</a></li>
            </ul>
          </div>

          {/* Stay Updated */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Stay Updated</h4>
            <p className="text-sm mb-3">Subscribe for latest deals</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2.5 bg-gray-800 text-white placeholder-gray-500 rounded-l-lg text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-3 py-2.5 rounded-r-lg transition-colors">
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-gray-800">
          <div className="flex gap-3">
            <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-blue-600 text-gray-400 hover:text-white rounded-lg flex items-center justify-center transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-blue-400 text-gray-400 hover:text-white rounded-lg flex items-center justify-center transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-pink-600 text-gray-400 hover:text-white rounded-lg flex items-center justify-center transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
          </div>
          <p className="text-sm text-gray-500">© 2025 Logo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
