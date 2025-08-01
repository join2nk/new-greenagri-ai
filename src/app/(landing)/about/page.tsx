import React from 'react'

export default function page() {
  return (
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
  )
}


const capabilities = [
  {
    title: "Advanced Processing Technology",
    description: "State-of-the-art rice processing equipment with automated sorting, grading, and packaging systems ensuring consistent quality and efficiency.",
    image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=600&h=400&fit=crop",
    features: ["Automated Sorting", "Color Grading", "Moisture Control", "Quality Testing"]
  },
  {
    title: "Quality Control Laboratory",
    description: "In-house laboratory equipped with modern testing equipment for comprehensive quality analysis including moisture, broken percentage, and purity testing.",
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&h=400&fit=crop",
    features: ["Moisture Analysis", "Broken % Testing", "Purity Analysis", "Pesticide Testing"]
  },
  {
    title: "Export Documentation",
    description: "Complete export documentation and compliance support including certificates of origin, phytosanitary certificates, and quality certificates.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
    features: ["COO Certificates", "Phytosanitary", "Quality Certificates", "Custom Clearance"]
  }
];


 {/* Processing Capabilities */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <Subtitle className="mb-4">Processing Capabilities</Subtitle>
          <SectionTitle className="mb-6">Advanced Manufacturing Infrastructure</SectionTitle>
          <BodyText className="max-w-3xl mx-auto text-lg text-gray-600">
            Our state-of-the-art facility combines modern technology with rigorous quality control 
            to deliver consistent, high-quality rice products for global markets.
          </BodyText>
        </div>

        <div className="space-y-12">
          {capabilities.map((capability, index) => (
            <div key={index} className={cn(
              "grid lg:grid-cols-2 gap-12 items-center",
              index % 2 === 1 && "lg:grid-flow-col-dense"
            )}>
              <div className={cn(index % 2 === 1 && "lg:col-start-2")}>
                <CardTitle className="mb-4 text-2xl">{capability.title}</CardTitle>
                <BodyText className="mb-6 text-lg text-gray-600">
                  {capability.description}
                </BodyText>
                <div className="grid grid-cols-2 gap-3">
                  {capability.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className={cn(index % 2 === 1 && "lg:col-start-1")}>
                <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
                  <StyledImage
                    src={capability.image}
                    alt={capability.title}
                    width={600}
                    height={400}
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
