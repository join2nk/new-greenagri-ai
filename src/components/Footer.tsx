import Link from 'next/link';
import { FooterLogo, Logo } from './Logo';


      export default function Footer() {
  return (
      <main className="bg-white border-t border-gray-200">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Company Info */}
<div className="col-span-2">

            <FooterLogo />
</div>

            {/* Certifications */}
            <div className="mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">Certifications & Compliance</h4>
              <div className="flex flex-wrap gap-4">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-center min-w-[120px]">
                  <div className="text-2xl mb-1">🏆</div>
                  <div className="text-sm font-semibold text-gray-900">ISO 9001:2015</div>
                  <div className="text-xs text-gray-600">Quality Management</div>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-center min-w-[120px]">
                  <div className="text-2xl mb-1">🛡️</div>
                  <div className="text-sm font-semibold text-gray-900">HACCP</div>
                  <div className="text-xs text-gray-600">Food Safety</div>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-center min-w-[120px]">
                  <div className="text-2xl mb-1">✅</div>
                  <div className="text-sm font-semibold text-gray-900">FSSAI</div>
                  <div className="text-xs text-gray-600">Licensed</div>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-center min-w-[120px]">
                  <div className="text-2xl mb-1">📋</div>
                  <div className="text-sm font-semibold text-gray-900">Export License</div>
                  <div className="text-xs text-gray-600">Government Auth.</div>
                </div>
              </div>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">2016</div>
                <div className="text-sm text-gray-600">Established</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">40+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">50+</div>
                <div className="text-sm text-gray-600">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">10K+</div>
                <div className="text-sm text-gray-600">MT Capacity</div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg text-gray-900 mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link href="#about" className="text-gray-600 hover:text-green-600 transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#products" className="text-gray-600 hover:text-green-600 transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Our Products
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-600 hover:text-green-600 transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Export Services
                </Link>
              </li>
              <li>
                <Link href="#quality" className="text-gray-600 hover:text-green-600 transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Quality Control
                </Link>
              </li>
              <li>
                <Link href="#sustainability" className="text-gray-600 hover:text-green-600 transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-600 hover:text-green-600 transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-bold text-lg text-gray-900 mb-6">Contact Information</h4>
            <div className="space-y-6">
              {/* Head Office */}
              <div>
                <div className="flex items-start space-x-3 mb-2">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mt-1">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Head Office</div>
                    <div className="text-gray-600 text-sm">Delhi, India</div>
                    <div className="text-gray-500 text-xs">Business Operations & Export Documentation</div>
                  </div>
                </div>
              </div>

              {/* Manufacturing Unit */}
              <div>
                <div className="flex items-start space-x-3 mb-2">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mt-1">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 11.172V5L8 4z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Manufacturing Unit</div>
                    <div className="text-gray-600 text-sm">Raipur, Chhattisgarh</div>
                    <div className="text-gray-500 text-xs">8-acre Processing Facility</div>
                  </div>
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.828 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Export Inquiry</div>
                    <div className="text-sm text-gray-600">export@greenagricorp.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Business Development</div>
                    <div className="text-sm text-gray-600">+91-XXX-XXXX-XXX</div>
                  </div>
                </div>
              </div>

              {/* Export Registration */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="text-center">
                  <div className="font-semibold text-green-800 mb-1">Export Registration</div>
                  <div className="text-sm text-green-700">IEC: 1234567890</div>
                  <div className="text-sm text-green-700">RCMC Certificate Holder</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      {/* Export Markets */ }
  <div className="bg-gray-50 border-t border-gray-200">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-8">
        <h4 className="text-xl font-bold text-gray-900 mb-4">Global Export Markets</h4>
        <p className="text-gray-600">Serving premium rice to importers across continents</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <div className="text-3xl font-bold text-green-600 mb-2">35%</div>
          <div className="font-semibold text-gray-900 mb-2">Middle East</div>
          <div className="text-sm text-gray-600">UAE, Saudi Arabia, Kuwait, Qatar</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-green-600 mb-2">30%</div>
          <div className="font-semibold text-gray-900 mb-2">Africa</div>
          <div className="text-sm text-gray-600">Nigeria, Ghana, Kenya, South Africa</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-green-600 mb-2">25%</div>
          <div className="font-semibold text-gray-900 mb-2">Asia Pacific</div>
          <div className="text-sm text-gray-600">Malaysia, Singapore, Philippines</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-green-600 mb-2">10%</div>
          <div className="font-semibold text-gray-900 mb-2">Others</div>
          <div className="text-sm text-gray-600">Europe, Americas, Oceania</div>
        </div>
      </div>
    </div>
  </div>

  {/* Bottom Bar */ }
  <div className="bg-gray-900 text-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
        <div className="text-center lg:text-left">
          <p className="text-gray-400">
            © 2025 Green Agri Corp Private Limited. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-1">
            Committed to sustainable agriculture and global food security.
          </p>
        </div>

        <div className="text-center lg:text-right">
          <p className="text-gray-400 text-sm mb-2">Trusted export partners:</p>
          <div className="flex flex-wrap justify-center lg:justify-end gap-4 text-green-400 text-sm font-medium">
            <span>Leading Global Importers</span>
            <span>•</span>
            <span>Food Manufacturers</span>
            <span>•</span>
            <span>Distribution Networks</span>
          </div>
        </div>
      </div>
    </div>
  </div>
    </main >
  );
}
