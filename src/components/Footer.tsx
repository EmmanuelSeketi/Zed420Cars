import { Facebook, Twitter, Instagram, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                C
              </div>
              <h3 className="text-white font-bold text-lg">CarHub</h3>
            </div>
            
            <p className="text-sm">Your one-stop destination for premium cars at unbeatable prices.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
              <li><a href="#" className="hover:text-white transition">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition">Shipping Info</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Electric</a></li>
              <li><a href="#" className="hover:text-white transition">Luxury</a></li>
              <li><a href="#" className="hover:text-white transition">Sports</a></li>
              <li><a href="#" className="hover:text-white transition">SUVs</a></li>
            </ul>
          </div>

          {/* Stay Updated */}
          <div>
            <h4 className="text-white font-semibold mb-4">Stay Updated</h4>
            <p className="text-sm mb-4">Subscribe for latest deals and updates</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 bg-gray-800 text-white rounded-l text-sm focus:outline-none"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-r transition">
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-8 pb-8 border-b border-gray-800">
          <a href="#" className="hover:text-white transition"><Facebook className="w-5 h-5" /></a>
          <a href="#" className="hover:text-white transition"><Twitter className="w-5 h-5" /></a>
          <a href="#" className="hover:text-white transition"><Instagram className="w-5 h-5" /></a>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500">
          <p>© 2025 CarHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
