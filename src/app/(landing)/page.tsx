import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-green-600 via-green-700 to-green-900 text-white py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-green-400/5"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-full text-green-200 text-sm font-medium mb-6">
                Premium Rice Exporter Since 2016
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-green-100 to-green-200 bg-clip-text text-transparent">
                GREEN AGRI CORP
              </span>
              <br />
              <span className="text-yellow-300 text-4xl md:text-5xl font-bold">
                PVT LTD
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-green-100 leading-relaxed">
              Exporting premium Indian rice to the world with state-of-the-art facilities ensuring highest quality grains. 
              Trusted by leading brands for our unwavering commitment to excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2">
                <span>Send Inquiry</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="group border-2 border-white/80 backdrop-blur-sm hover:bg-white hover:text-green-600 font-bold py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105">
                <span>View Products</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-green-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-yellow-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-b from-gray-50 to-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
              ABOUT US
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Four Decades of 
              <span className="text-green-600"> Excellence</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="prose prose-lg">
                <p className="text-gray-600 text-lg leading-relaxed">
                  Green Agri Corp Pvt Ltd was established in 2016 with the vision of manufacturing the highest quality 
                  rice and delivering exceptional service. Our founders have been part of the food grains trade for more 
                  than 40 years, transforming from well-established traders to manufacturers.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We are a leading exporter of premium Indian non-basmati rice. Our team of dedicated professionals 
                  is committed to providing customers with the best quality products. We take pride in our attention 
                  to detail and our unwavering pursuit of excellence.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-600 transition-colors">
                      <svg className="w-6 h-6 text-green-600 group-hover:text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Founded</h4>
                  <p className="text-gray-600 font-semibold">2016</p>
                </div>
                
                <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-600 transition-colors">
                      <svg className="w-6 h-6 text-green-600 group-hover:text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Experience</h4>
                  <p className="text-gray-600 font-semibold">40+ Years</p>
                </div>
                
                <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-600 transition-colors">
                      <svg className="w-6 h-6 text-green-600 group-hover:text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Head Office</h4>
                  <p className="text-gray-600 font-semibold">Delhi, India</p>
                </div>
                
                <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-600 transition-colors">
                      <svg className="w-6 h-6 text-green-600 group-hover:text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm3 5a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Factory</h4>
                  <p className="text-gray-600 font-semibold">Raipur, 8 Acres</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-3xl shadow-2xl border border-green-100">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Us</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="bg-green-600 text-white rounded-xl p-3 flex-shrink-0 group-hover:bg-green-700 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-2">Latest Technology</h4>
                    <p className="text-gray-600">Equipped with advanced machinery and automated packaging systems</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="bg-green-600 text-white rounded-xl p-3 flex-shrink-0 group-hover:bg-green-700 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-2">Quality Assurance</h4>
                    <p className="text-gray-600">Strict quality control and analysis at every stage of production</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="bg-green-600 text-white rounded-xl p-3 flex-shrink-0 group-hover:bg-green-700 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-2">Clean Environment</h4>
                    <p className="text-gray-600">Hygienic processing and packaging in controlled environments</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="bg-green-600 text-white rounded-xl p-3 flex-shrink-0 group-hover:bg-green-700 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-2">Trusted Partners</h4>
                    <p className="text-gray-600">Strong relationships with leading exporters and global brands</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-30 -z-10"></div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
              OUR PRODUCTS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Premium Rice 
              <span className="text-green-600"> Varieties</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              We provide a wide range of premium rice varieties with options for private labelling and custom packaging solutions
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Non-Basmati Rice */}
            <div className="group">
              <div className="bg-gradient-to-br from-green-50 to-green-100/50 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-green-200/50 h-full">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-3xl font-bold text-gray-900">Non-Basmati Rice</h3>
                  <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center text-white text-2xl transform group-hover:scale-110 transition-transform">
                    🌾
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-bold text-green-700 text-lg">IR-64 Parboiled</h4>
                      <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-semibold">Premium</span>
                    </div>
                    <p className="text-gray-600">Long-grain variety, minimum 6mm length</p>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-bold text-green-700 text-lg">IR-36 Parboiled</h4>
                      <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-semibold">Quality</span>
                    </div>
                    <p className="text-gray-600">Premium quality, minimum 5.5mm length</p>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-bold text-green-700 text-lg">Sarna Rice</h4>
                      <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-semibold">Versatile</span>
                    </div>
                    <p className="text-gray-600">Available in White and Parboiled varieties</p>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-bold text-green-700 text-lg">Mahamaya Rice</h4>
                      <span className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full font-semibold">Special</span>
                    </div>
                    <p className="text-gray-600">Premium parboiled variety</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Basmati Rice */}
            <div className="group">
              <div className="bg-gradient-to-br from-yellow-50 to-orange-100/50 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-yellow-200/50 h-full">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-3xl font-bold text-gray-900">Basmati Rice</h3>
                  <div className="w-16 h-16 bg-yellow-600 rounded-2xl flex items-center justify-center text-white text-2xl transform group-hover:scale-110 transition-transform">
                    ✨
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-bold text-yellow-700 text-lg">Pusa Basmati</h4>
                      <span className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full font-semibold">Aromatic</span>
                    </div>
                    <p className="text-gray-600">Aromatic long-grain premium variety</p>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-bold text-yellow-700 text-lg">Shree Ram Rice</h4>
                      <span className="bg-orange-100 text-orange-800 text-xs px-3 py-1 rounded-full font-semibold">Traditional</span>
                    </div>
                    <p className="text-gray-600">Traditional basmati variety</p>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-bold text-yellow-700 text-lg">BPT & HMT</h4>
                      <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full font-semibold">Variety</span>
                    </div>
                    <p className="text-gray-600">Various premium rice varieties</p>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-bold text-yellow-700 text-lg">Lakshmi Bhog Brand</h4>
                      <span className="bg-red-100 text-red-800 text-xs px-3 py-1 rounded-full font-semibold">Brand</span>
                    </div>
                    <p className="text-gray-600">Our premium brand for domestic distribution</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Custom Solutions Available</h3>
            <p className="text-green-100 mb-8 text-lg max-w-2xl mx-auto">
              We also offer broken rice and custom varieties based on your specific requirements. 
              Private labelling and bulk packaging options available.
            </p>
            <button className="group bg-white text-green-600 hover:bg-gray-100 font-bold py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 mx-auto">
              <span>Request Product Catalog</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-100 rounded-full blur-3xl opacity-30 -z-10"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-30 -z-10"></div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              OUR SERVICES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive 
              <span className="text-green-600"> Solutions</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              From export to retail, we provide end-to-end rice solutions with unmatched quality and service excellence
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Export Services */}
            <div className="group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-green-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform">
                  🌍
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">Rice Export</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Export of premium non-basmati and basmati rice to international markets with quality assurance and compliance.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600">International quality standards</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600">Proper documentation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600">Timely delivery worldwide</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Private Labelling */}
            <div className="group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform">
                  🏷️
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">Private Labelling</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Custom packaging and branding solutions for domestic and international clients with flexible options.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-600">Custom packaging design</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-600">Multiple rice variants</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-600">Brand development support</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Wholesale Distribution */}
            <div className="group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform">
                  📦
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">Wholesale Distribution</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Bulk rice supply for wholesalers and mass distribution networks including major online platforms.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-600">Bulk quantity supply</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-600">Amazon & Reliance Fresh partner</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-600">Assured quality guarantee</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Factory Outlet */}
            <div className="group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-orange-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform">
                  🏪
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">Factory Outlet</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Direct sales from our Raipur factory with online store capabilities and convenient pickup options.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-600">Direct factory prices</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-600">Online ordering available</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-600">Pickup option in Raipur</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quality Control */}
            <div className="group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-teal-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-100 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform">
                  ⚗️
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors">Quality Assurance</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Comprehensive quality control and analysis using advanced technology and rigorous testing processes.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    <span className="text-gray-600">Advanced testing equipment</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    <span className="text-gray-600">Multi-stage quality checks</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    <span className="text-gray-600">Certification compliance</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Third Party Support */}
            <div className="group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-indigo-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-100 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform">
                  🤝
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">Export Support</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Support services for third-party exporters including private labelling and comprehensive quality assurance.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                    <span className="text-gray-600">Export documentation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                    <span className="text-gray-600">Quality certification</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                    <span className="text-gray-600">Logistics support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 -z-10"></div>
      </section>

      {/* Sustainability Section */}
      <section id="sustainability" className="py-16 bg-green-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Working Towards a Sustainable Future</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We are committed to environmental responsibility and sustainable practices in all our operations.
            </p>
            <div className="w-24 h-1 bg-green-600 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-green-600 text-5xl mb-4">🌱</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Environmental Compliance</h3>
              <p className="text-gray-600">
                Following all environmental laws and regulations with established ETP (Effluent Treatment Plant) systems.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-green-600 text-5xl mb-4">💧</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Water Conservation</h3>
              <p className="text-gray-600">
                Implementing responsible water usage and conservation practices throughout our processing facilities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-green-600 text-5xl mb-4">♻️</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Waste Management</h3>
              <p className="text-gray-600">
                Comprehensive waste reduction and recycling programs to minimize environmental impact.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-green-600 text-5xl mb-4">🚜</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Sustainable Farming</h3>
              <p className="text-gray-600">
                Supporting eco-friendly rice farming and cultivation methods among our partner farmers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-green-600 text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Energy Efficiency</h3>
              <p className="text-gray-600">
                Utilizing energy-efficient machinery and exploring renewable energy sources for operations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-green-600 text-5xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Carbon Footprint</h3>
              <p className="text-gray-600">
                Ongoing efforts to reduce carbon emissions and implement climate-friendly practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Trusted Clients</h2>
            <p className="text-gray-600">
              We have established strong relationships with esteemed clients worldwide
            </p>
            <div className="w-24 h-1 bg-green-600 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-gray-800">Olem</h3>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-gray-800">Shah Namji Nagsi Exports</h3>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-gray-800">Longulf Exports</h3>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-gray-800">Shri Ram Foods</h3>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Their trust in our products and services is a testament to our commitment to quality and reliability.
            </p>
            <p className="text-sm text-gray-500">
              Partnership opportunities available for Amazon, Reliance Fresh, and other major retail platforms
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-green-600/20 backdrop-blur-sm border border-green-400/30 rounded-full text-green-300 text-sm font-semibold mb-4">
              GET IN TOUCH
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Start a 
              <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent"> Partnership</span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
              We are always available to help you. Please feel free to contact us with any inquiries or requirements you may have.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white/5 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-white/10">
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <span className="w-3 h-8 bg-gradient-to-b from-green-400 to-green-600 rounded-full mr-4"></span>
                Send Your Inquiry
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-3 text-gray-300">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all placeholder-gray-400"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-3 text-gray-300">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all placeholder-gray-400"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-3 text-gray-300">Company Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all placeholder-gray-400"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-3 text-gray-300">Product Interest</label>
                  <select 
                    className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    aria-label="Select product type of interest"
                  >
                    <option value="">Select Product Type</option>
                    <option value="non-basmati">Non-Basmati Rice</option>
                    <option value="basmati">Basmati Rice</option>
                    <option value="private-label">Private Labelling</option>
                    <option value="wholesale">Wholesale Distribution</option>
                    <option value="export">Export Services</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-3 text-gray-300">Message</label>
                  <textarea 
                    rows={5}
                    className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all placeholder-gray-400 resize-none"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="group w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>Send Inquiry</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/10">
                <h3 className="text-2xl font-bold mb-8 flex items-center">
                  <span className="w-3 h-8 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full mr-4"></span>
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 group">
                    <div className="bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-2xl group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Email Address</h4>
                      <p className="text-gray-300">info@greenagricorp.com</p>
                      <p className="text-green-400 text-sm">We respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-2xl group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Phone Number</h4>
                      <p className="text-gray-300">+91-XXX-XXX-XXXX</p>
                      <p className="text-blue-400 text-sm">Available during business hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-4 rounded-2xl group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Head Office</h4>
                      <p className="text-gray-300">Delhi, India</p>
                      <p className="text-purple-400 text-sm">Business headquarters</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-4 rounded-2xl group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm3 5a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Manufacturing Facility</h4>
                      <p className="text-gray-300">Raipur, Chhattisgarh (8 Acres)</p>
                      <p className="text-orange-400 text-sm">State-of-the-art processing plant</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/10">
                <h4 className="font-bold text-xl mb-6 flex items-center">
                  <span className="text-2xl mr-3">🕒</span>
                  Business Hours
                </h4>
                <div className="space-y-3 text-gray-300">
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl">
                    <span>Monday - Friday</span>
                    <span className="text-green-400 font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl">
                    <span>Saturday</span>
                    <span className="text-yellow-400 font-semibold">9:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl">
                    <span>Sunday</span>
                    <span className="text-red-400 font-semibold">Closed</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-600 to-green-700 p-8 rounded-3xl shadow-2xl">
                <h4 className="font-bold text-xl mb-4 flex items-center">
                  <span className="text-2xl mr-3">🤝</span>
                  Ready to Partner?
                </h4>
                <p className="mb-6 text-green-100">
                  Join our network of satisfied clients and experience quality that exceeds expectations. Download our catalog to explore our complete product range.
                </p>
                <button className="group bg-white text-green-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                  <span>Download Catalog</span>
                  <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
