import React from 'react'

export default function Client() {
  return (
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
  )
}
