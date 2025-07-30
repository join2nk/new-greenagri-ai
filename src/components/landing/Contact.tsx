import React from 'react'

export default function Contact() {
  return (
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
  )
}
