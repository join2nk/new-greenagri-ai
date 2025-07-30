import React from 'react'

export default function page() {
  return (
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
  )
}
