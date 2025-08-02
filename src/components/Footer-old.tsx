import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=1920&h=1080&fit=crop')` 
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/95 via-green-800/90 to-teal-900/95" />
      
      {/* Additional decorative overlays */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/8 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-green-400/5 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
             <div className=' mb-4'>
             <img src="/images/logo.png" alt="" />
             </div>
               
            
              <p className="text-emerald-50 text-lg leading-relaxed mb-6 backdrop-blur-sm bg-black/10 p-4 rounded-lg">
                Exporting premium Indian rice to the world with state-of-the-art facilities ensuring highest quality grains. 
                Trusted by leading brands for our unwavering commitment to excellence and sustainable agriculture.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-emerald-800/70 to-green-700/50 backdrop-blur-md p-4 rounded-2xl border border-emerald-600/40 hover:border-amber-400/60 transition-all duration-300 shadow-lg">
                <h4 className="text-amber-300 font-semibold mb-2">Founded</h4>
                <p className="text-emerald-100">2016</p>
              </div>
              <div className="bg-gradient-to-br from-emerald-800/70 to-green-700/50 backdrop-blur-md p-4 rounded-2xl border border-emerald-600/40 hover:border-amber-400/60 transition-all duration-300 shadow-lg">
                <h4 className="text-amber-300 font-semibold mb-2">Experience</h4>
                <p className="text-emerald-100">40+ Years</p>
              </div>
              <div className="bg-gradient-to-br from-emerald-800/70 to-green-700/50 backdrop-blur-md p-4 rounded-2xl border border-emerald-600/40 hover:border-amber-400/60 transition-all duration-300 shadow-lg">
                <h4 className="text-amber-300 font-semibold mb-2">Head Office</h4>
                <p className="text-emerald-100">Delhi, India</p>
              </div>
              <div className="bg-gradient-to-br from-emerald-800/70 to-green-700/50 backdrop-blur-md p-4 rounded-2xl border border-emerald-600/40 hover:border-amber-400/60 transition-all duration-300 shadow-lg">
                <h4 className="text-amber-300 font-semibold mb-2">Factory</h4>
                <p className="text-emerald-100">Raipur ,Chhattisgarh</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-gradient-to-br from-green-800/50 to-emerald-800/40 backdrop-blur-md p-6 rounded-2xl border border-emerald-600/50 hover:border-amber-400/70 transition-all duration-300 shadow-xl">
            <h4 className="text-xl font-bold mb-6 text-amber-300 flex items-center">
              <span className="w-2 h-8 bg-gradient-to-b from-amber-400 to-amber-600 rounded-full mr-3 shadow-lg"></span>
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="#about" className="text-emerald-100 hover:text-amber-300 transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 group-hover:scale-125 group-hover:bg-amber-400 transition-all duration-300"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#products" className="text-emerald-100 hover:text-amber-300 transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 group-hover:scale-125 group-hover:bg-amber-400 transition-all duration-300"></span>
                  Our Products
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-emerald-100 hover:text-amber-300 transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 group-hover:scale-125 group-hover:bg-amber-400 transition-all duration-300"></span>
                  Services
                </Link>
              </li>
              <li>
                <Link href="#sustainability" className="text-emerald-100 hover:text-amber-300 transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 group-hover:scale-125 group-hover:bg-amber-400 transition-all duration-300"></span>
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-emerald-100 hover:text-amber-300 transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 group-hover:scale-125 group-hover:bg-amber-400 transition-all duration-300"></span>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-br from-green-800/50 to-emerald-800/40 backdrop-blur-md p-6 rounded-2xl border border-emerald-600/50 hover:border-amber-400/70 transition-all duration-300 shadow-xl">
            <h4 className="text-xl font-bold mb-6 text-amber-300 flex items-center">
              <span className="w-2 h-8 bg-gradient-to-b from-amber-400 to-amber-600 rounded-full mr-3 shadow-lg"></span>
              Contact Info
            </h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-500/40 to-yellow-500/30 rounded-lg flex items-center justify-center group-hover:from-amber-400/50 group-hover:to-yellow-400/40 transition-all duration-300 border border-amber-500/40 backdrop-blur-sm">
                  <span className="text-amber-300 text-lg">📧</span>
                </div>
                <span className="text-emerald-100 group-hover:text-amber-200 transition-colors duration-300">info@greenagricorp.com</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-500/40 to-yellow-500/30 rounded-lg flex items-center justify-center group-hover:from-amber-400/50 group-hover:to-yellow-400/40 transition-all duration-300 border border-amber-500/40 backdrop-blur-sm">
                  <span className="text-amber-300 text-lg">📞</span>
                </div>
                <span className="text-emerald-100 group-hover:text-amber-200 transition-colors duration-300">+91-XXX-XXX-XXXX</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-500/40 to-yellow-500/30 rounded-lg flex items-center justify-center group-hover:from-amber-400/50 group-hover:to-yellow-400/40 transition-all duration-300 border border-amber-500/40 backdrop-blur-sm">
                  <span className="text-amber-300 text-lg">📍</span>
                </div>
                <span className="text-emerald-100 group-hover:text-amber-200 transition-colors duration-300">Delhi, India</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-500/40 to-yellow-500/30 rounded-lg flex items-center justify-center group-hover:from-amber-400/50 group-hover:to-yellow-400/40 transition-all duration-300 border border-amber-500/40 backdrop-blur-sm">
                  <span className="text-amber-300 text-lg">🏭</span>
                </div>
                <span className="text-emerald-100 group-hover:text-amber-200 transition-colors duration-300">Raipur, Chhattisgarh</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 rounded-lg px-6">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div className="text-center lg:text-left">
              <p className="text-emerald-100 font-medium">
                © 2025 Green Agri Corp Pvt Ltd. All rights reserved.
              </p>
              <p className="text-emerald-200 text-sm mt-1">
                Committed to sustainable agriculture and global food security.
              </p>
            </div>
            <div className="text-center lg:text-right">
              <p className="text-emerald-100 text-sm mb-2">Trusted by leading exporters:</p>
              <div className="flex flex-wrap justify-center lg:justify-end gap-4 text-amber-300 text-sm font-medium">
                <span className="hover:text-amber-200 transition-colors duration-300 cursor-pointer">Olem</span>
                <span className="text-emerald-300">•</span>
                <span className="hover:text-amber-200 transition-colors duration-300 cursor-pointer">Shah Namji Nagsi Exports</span>
                <span className="text-emerald-300">•</span>
                <span className="hover:text-amber-200 transition-colors duration-300 cursor-pointer">Longulf Exports</span>
                <span className="text-emerald-300">•</span>
                <span className="hover:text-amber-200 transition-colors duration-300 cursor-pointer">Shri Ram Foods</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
