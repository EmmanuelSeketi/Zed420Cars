export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-200 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 py-10">
          {/* Company Info */}
          <div className="lg:col-span-2 border border-gray-800 bg-gray-900/40 p-6">
            <div className="flex items-center mb-5">
              <img 
                src="/images/Logo.png" 
                alt="Zed420Cars" 
                className="h-12 w-auto object-contain scale-150"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-md">
              Zambia's premier automotive marketplace connecting buyers and sellers of quality vehicles across the country. 
              Trust, transparency, and excellence in every transaction.
            </p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-2">
              <div className="flex items-center gap-3 text-xs font-medium border border-gray-800 bg-gray-950/40 px-3 py-2">
                <div className="w-2 h-2 bg-blue-500"></div>
                <span className="tracking-wide">Verified Listings</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-medium border border-gray-800 bg-gray-950/40 px-3 py-2">
                <div className="w-2 h-2 bg-green-500"></div>
                <span className="tracking-wide">Secure Transactions</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-medium border border-gray-800 bg-gray-950/40 px-3 py-2">
                <div className="w-2 h-2 bg-purple-500"></div>
                <span className="tracking-wide">24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="border border-gray-800 bg-gray-900/40 p-6">
            <h3 className="text-white font-semibold mb-5 text-xs tracking-[0.18em] uppercase">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Browse Cars</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Sell Your Car</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Financing Options</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Insurance Partners</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Car Inspection</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="border border-gray-800 bg-gray-900/40 p-6">
            <h3 className="text-white font-semibold mb-5 text-xs tracking-[0.18em] uppercase">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 border border-gray-700 bg-gray-950/60 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-blue-500"></div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Head Office</p>
                  <p className="text-gray-300 text-sm">Lusaka City Center, Zambia</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border border-gray-700 bg-gray-950/60 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 bg-green-500"></div>
                </div>
                <a href="tel:+260977777777" className="text-gray-300 hover:text-white transition-colors text-sm">+260 977 777 777</a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border border-gray-700 bg-gray-950/60 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 bg-purple-500"></div>
                </div>
                <a href="mailto:info@zed420cars.zm" className="text-gray-300 hover:text-white transition-colors text-sm">info@zed420cars.zm</a>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="text-white font-semibold mb-3 text-xs tracking-[0.18em] uppercase">Social</h4>
              <div className="flex gap-2">
                <a href="#" className="w-9 h-9 border border-gray-700 bg-gray-950/60 flex items-center justify-center hover:bg-blue-600 hover:border-blue-500 transition-colors">
                  <span className="text-xs text-white font-semibold">f</span>
                </a>
                <a href="#" className="w-9 h-9 border border-gray-700 bg-gray-950/60 flex items-center justify-center hover:bg-blue-400 hover:border-blue-300 transition-colors">
                  <span className="text-xs text-white font-semibold">t</span>
                </a>
                <a href="#" className="w-9 h-9 border border-gray-700 bg-gray-950/60 flex items-center justify-center hover:bg-pink-600 hover:border-pink-400 transition-colors">
                  <span className="text-xs text-white font-semibold">i</span>
                </a>
                <a href="#" className="w-9 h-9 border border-gray-700 bg-gray-950/60 flex items-center justify-center hover:bg-green-600 hover:border-green-500 transition-colors">
                  <span className="text-xs text-white font-semibold">w</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="text-xs tracking-[0.14em] uppercase text-gray-400">
              &copy; 2024 Zed420Cars. All rights reserved. Made with love in Zambia
            </div>
            <div className="flex flex-wrap gap-0 text-sm border border-gray-800 bg-gray-900/30">
              <a href="#" className="px-4 py-2 text-gray-300 hover:text-white transition-colors border-r border-gray-800">Privacy Policy</a>
              <a href="#" className="px-4 py-2 text-gray-300 hover:text-white transition-colors border-r border-gray-800">Terms of Service</a>
              <a href="#" className="px-4 py-2 text-gray-300 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>

    </footer>
  )
}