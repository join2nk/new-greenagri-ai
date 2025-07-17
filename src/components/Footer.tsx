import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent mb-4">
                Green Agri Corp Pvt Ltd
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Exporting premium Indian rice to the world with state-of-the-art facilities ensuring highest quality grains. 
                Trusted by leading brands for our unwavering commitment to excellence.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-2xl border border-gray-700/50">
                <h4 className="text-green-400 font-semibold mb-2">Founded</h4>
                <p className="text-gray-300">2016</p>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-2xl border border-gray-700/50">
                <h4 className="text-green-400 font-semibold mb-2">Experience</h4>
                <p className="text-gray-300">40+ Years</p>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-2xl border border-gray-700/50">
                <h4 className="text-green-400 font-semibold mb-2">Head Office</h4>
                <p className="text-gray-300">Delhi, India</p>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-2xl border border-gray-700/50">
                <h4 className="text-green-400 font-semibold mb-2">Factory</h4>
                <p className="text-gray-300">Raipur (8 acres)</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50">
            <h4 className="text-xl font-bold mb-6 text-green-400 flex items-center">
              <span className="w-2 h-8 bg-gradient-to-b from-green-400 to-green-600 rounded-full mr-3"></span>
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="#about" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#products" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  Our Products
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  Services
                </Link>
              </li>
              <li>
                <Link href="#sustainability" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50">
            <h4 className="text-xl font-bold mb-6 text-green-400 flex items-center">
              <span className="w-2 h-8 bg-gradient-to-b from-green-400 to-green-600 rounded-full mr-3"></span>
              Contact Info
            </h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center group-hover:bg-green-600/30 transition-colors">
                  <span className="text-green-400">📧</span>
                </div>
                <span className="text-gray-300">info@greenagricorp.com</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center group-hover:bg-green-600/30 transition-colors">
                  <span className="text-green-400">📞</span>
                </div>
                <span className="text-gray-300">+91-XXX-XXX-XXXX</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center group-hover:bg-green-600/30 transition-colors">
                  <span className="text-green-400">📍</span>
                </div>
                <span className="text-gray-300">Delhi, India</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center group-hover:bg-green-600/30 transition-colors">
                  <span className="text-green-400">🏭</span>
                </div>
                <span className="text-gray-300">Raipur, Chhattisgarh</span>
              </div>
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div className="mt-16 pt-12 border-t border-gray-700/50">
          <h4 className="text-2xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              Our Product Range
            </span>
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50">
              <h5 className="font-bold text-white mb-4 flex items-center">
                <span className="text-2xl mr-3">🌾</span>
                Non-Basmati Rice
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-300">
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                  <span>IR-64 (Parboiled, min 6mm)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                  <span>IR-36 (Parboiled, min 5.5mm)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                  <span>Sarna (White/Parboiled)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                  <span>Mahamaya (Parboiled)</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50">
              <h5 className="font-bold text-white mb-4 flex items-center">
                <span className="text-2xl mr-3">✨</span>
                Basmati Rice
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-300">
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                  <span>Pusa Basmati</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                  <span>Shree Ram Rice</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                  <span>BPT, HMT varieties</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                  <span>Lakshmi Bhog Brand</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-700/50">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div className="text-center lg:text-left">
              <p className="text-gray-400">
                © 2025 Green Agri Corp Pvt Ltd. All rights reserved.
              </p>
            </div>
            <div className="text-center lg:text-right">
              <p className="text-gray-400 text-sm mb-2">Trusted by leading exporters:</p>
              <div className="flex flex-wrap justify-center lg:justify-end gap-4 text-green-400 text-sm font-medium">
                <span>Olem</span>
                <span>•</span>
                <span>Shah Namji Nagsi Exports</span>
                <span>•</span>
                <span>Longulf Exports</span>
                <span>•</span>
                <span>Shri Ram Foods</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
