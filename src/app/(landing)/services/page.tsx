import React from 'react'

export default function page() {
  return (
    <section id="services" className="py-50 bg-gradient-to-b from-gray-50 to-white relative">
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
  )
}
