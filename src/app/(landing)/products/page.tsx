import React from 'react'

export default function page() {
  return (
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
  )
}
