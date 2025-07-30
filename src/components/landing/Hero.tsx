"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Link from "next/link";

const heroSlides = [
  {
    id: 1,
    title: "Premium Indian Non-Basmati Rice Exporter",
    subtitle: "Quality Assured • Global Reach • Reliable Supply",
    description: "Partner with Green Agri Corp for consistent, high-quality rice exports. ISO certified facility with 10,000+ MT annual capacity serving 50+ countries worldwide.",
    image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=1920&h=1080&fit=crop",
    bgGradient: "from-slate-900/85 via-gray-900/80 to-slate-800/85",
    stats: [
      { label: "Countries Served", value: "50+" },
      { label: "Annual Capacity", value: "10,000 MT" },
      { label: "Years Experience", value: "40+" }
    ]
  },
  {
    id: 2,
    title: "Advanced Rice Processing Technology",
    subtitle: "State-of-the-Art Manufacturing • Quality Control",
    description: "Our 8-acre facility in Raipur features cutting-edge processing equipment, automated sorting systems, and comprehensive quality testing laboratories.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&h=1080&fit=crop",
    bgGradient: "from-blue-900/85 via-slate-900/80 to-gray-900/85",
    stats: [
      { label: "Processing Accuracy", value: "99.9%" },
      { label: "Quality Testing", value: "24/7" },
      { label: "ISO Certified", value: "9001:2015" }
    ]
  },
  {
    id: 3,
    title: "Trusted Global Export Partner",
    subtitle: "Reliable Delivery • Export Documentation • Compliance",
    description: "Complete export solutions including documentation, quality certificates, and timely delivery. Building long-term partnerships with importers across Middle East, Africa, and Asia.",
    image: "https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?w=1920&h=1080&fit=crop",
    bgGradient: "from-green-900/85 via-emerald-900/80 to-teal-900/85",
    stats: [
      { label: "Export Markets", value: "Middle East, Africa, Asia" },
      { label: "Delivery Record", value: "99% On-Time" },
      { label: "Client Retention", value: "95%" }
    ]
  }
];

export default function Hero() {
  const swiperRef = useRef(null);

  return (
    <section className="relative h-screen overflow-hidden">
      <Swiper
        ref={swiperRef}
        modules={[Pagination, Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        pagination={{
          clickable: true,
          bulletActiveClass: "swiper-pagination-bullet-active",
          bulletClass: "swiper-pagination-bullet",
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={1000}
        className="h-full w-full hero-swiper"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              
              {/* Professional Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${slide.bgGradient}`} />
              
              {/* Content */}
              <div className="relative z-10 h-full flex items-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Main Content */}
                    <div className="space-y-8">
                      {/* Company Badge */}
                      <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3">
                        <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                        <span className="text-white text-sm font-semibold tracking-wide">
                          GREEN AGRI CORP PVT LTD
                        </span>
                      </div>
                      
                      {/* Subtitle */}
                      <p className="text-green-300 text-lg md:text-xl font-medium tracking-wide">
                        {slide.subtitle}
                      </p>
                      
                      {/* Main Title */}
                      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
                        {slide.title}
                      </h1>
                      
                      {/* Description */}
                      <p className="text-gray-200 text-lg md:text-xl leading-relaxed max-w-2xl">
                        {slide.description}
                      </p>
                      
                      {/* CTA Buttons */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                          href="#contact"
                          className="inline-flex items-center justify-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl min-w-[180px]"
                        >
                          Request Quote
                          <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                        
                        <Link
                          href="#products"
                          className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/30 hover:bg-white/20 transition-all duration-300 min-w-[180px]"
                        >
                          View Products
                        </Link>
                      </div>

                      {/* Certifications */}
                      <div className="flex items-center space-x-6 pt-4">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <span className="text-white text-sm font-medium">ISO 9001:2015</span>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <span className="text-white text-sm font-medium">HACCP Certified</span>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <span className="text-white text-sm font-medium">Export License</span>
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Stats Card */}
                    <div className="lg:block hidden">
                      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl">
                        <div className="text-center mb-8">
                          <h3 className="text-2xl font-bold text-white mb-2">Key Performance</h3>
                          <p className="text-gray-300">Industry-leading statistics</p>
                        </div>
                        
                        <div className="space-y-6">
                          {slide.stats.map((stat, index) => (
                            <div key={index} className="flex justify-between items-center py-3 border-b border-white/20 last:border-b-0">
                              <span className="text-gray-300 font-medium">{stat.label}</span>
                              <span className="text-white font-bold text-lg">{stat.value}</span>
                            </div>
                          ))}
                        </div>

                        <div className="mt-8 pt-6 border-t border-white/20 text-center">
                          <Link
                            href="#about"
                            className="text-green-300 hover:text-green-200 font-medium transition-colors duration-300"
                          >
                            Learn More About Us →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Info Bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/30 backdrop-blur-sm border-t border-white/10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
                  <div className="flex flex-wrap justify-between items-center text-white text-sm">
                    <div className="flex items-center space-x-6">
                      <div className="flex items-center space-x-2">
                        <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>Delhi (HO) • Raipur (Manufacturing)</span>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.828 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span>export@greenagricorp.com</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-xs">
                      <span className="bg-green-600 px-3 py-1 rounded-full">24/7 Export Support</span>
                      <span className="bg-blue-600 px-3 py-1 rounded-full">Global Shipping</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .hero-swiper .swiper-pagination {
          bottom: 80px !important;
          left: 50% !important;
          transform: translateX(-50%) !important;
          width: auto !important;
        }
        
        .hero-swiper .swiper-pagination-bullet {
          background-color: rgba(255, 255, 255, 0.4) !important;
          border: 2px solid rgba(255, 255, 255, 0.6) !important;
          width: 14px !important;
          height: 14px !important;
          opacity: 1 !important;
          margin: 0 8px !important;
          transition: all 0.3s ease !important;
        }
        
        .hero-swiper .swiper-pagination-bullet-active {
          background-color: #16a34a !important;
          border-color: #16a34a !important;
          transform: scale(1.3) !important;
          box-shadow: 0 0 20px rgba(34, 197, 94, 0.5) !important;
        }

        @media (max-width: 768px) {
          .hero-swiper .swiper-pagination {
            bottom: 100px !important;
          }
        }
      `}</style>
    </section>
  );
}
