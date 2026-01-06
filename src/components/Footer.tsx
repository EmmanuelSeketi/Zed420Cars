export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 py-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/images/zed420-logo.jpg" 
                alt="Zed420Cars" 
                className="h-12 w-auto object-contain scale-150"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Zambia's premier automotive marketplace connecting buyers and sellers of quality vehicles across the country. 
              Trust, transparency, and excellence in every transaction.
            </p>
            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Verified Listings</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Secure Transactions</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Browse Cars</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Sell Your Car</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Financing Options</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Insurance Partners</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Car Inspection</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Head Office</p>
                  <p className="text-gray-400 text-sm">Lusaka City Center, Zambia</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <a href="tel:+260977777777" className="text-gray-400 hover:text-white transition-colors text-sm">+260 977 777 777</a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <a href="mailto:info@zed420cars.zm" className="text-gray-400 hover:text-white transition-colors text-sm">info@zed420cars.zm</a>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="text-white font-medium mb-3 text-sm">Follow Us</h4>
              <div className="flex gap-3">
                <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <span className="text-xs text-white">f</span>
                </a>
                <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors">
                  <span className="text-xs text-white">t</span>
                </a>
                <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
                  <span className="text-xs text-white">i</span>
                </a>
                <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                  <span className="text-xs text-white">w</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © 2024 Zed420Cars. All rights reserved. Made with ❤️ in Zambia
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}