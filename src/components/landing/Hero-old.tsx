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
    title: "Premium Quality Rice Milling",
    subtitle: "Delivering Excellence in Every Grain",
    description: "Experience state-of-the-art rice milling processes that ensure the highest quality and purity. Trusted by farmers, traders, and exporters worldwide.",
    image: "/images/hero-1.jpeg", 
    bgGradient: "from-green-900/80 via-teal-800/70 to-emerald-900/80",
  },
  {
    id: 2,
    title: "Trusted Partner for Rice Traders",
    subtitle: "Building Long-Lasting Business Relationships",
    description: "We provide reliable and consistent rice supply chains tailored to meet the needs of traders and distributors. Your success is our priority.",
    image: "images/hero-2.jpeg",
    bgGradient: "from-green-900/80 via-teal-800/70 to-emerald-900/80",
  },
  {
    id: 3,
    title: "Global Rice Export Solutions",
    subtitle: "Connecting You to International Markets",
    description: "Expand your reach with our seamless rice export services. We ensure quality, compliance, and timely delivery to buyers across the globe.",
    image: "images/hero-3.jpeg",
    bgGradient: "from-green-900/80 via-teal-800/70 to-emerald-900/80",
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
          delay: 4000,
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
              
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${slide.bgGradient}`} />
              
              {/* Content */}
              <div className="relative z-10 h-full flex items-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="max-w-4xl">
                    <div className="space-y-6">
                      {/* Subtitle */}
                      <p className="text-green-300 text-lg md:text-xl font-medium tracking-wide uppercase">
                        {slide.subtitle}
                      </p>
                      
                      {/* Main Title */}
                      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                        {slide.title}
                      </h1>
                      
                      {/* Description */}
                      <p className="text-gray-200 text-lg md:text-xl max-w-2xl leading-relaxed">
                        {slide.description}
                      </p>
                      
                      {/* CTA Buttons */}
                      <div className="flex flex-col sm:flex-row gap-4 pt-6">
                        <Link
                          href="/contact"
                          className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-full hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-2xl"
                        >
                          Get Started
                          <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                        
                        <Link
                          href="#about"
                          className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/30 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                        >
                          Learn More
                        </Link>
                      </div>
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
          bottom: 30px !important;
        }
        
        .hero-swiper .swiper-pagination-bullet {
          background-color: rgba(255, 255, 255, 0.3) !important;
          border: 2px solid rgba(255, 255, 255, 0.5) !important;
          width: 12px !important;
          height: 12px !important;
          opacity: 1 !important;
          transition: all 0.3s ease !important;
        }
        
        .hero-swiper .swiper-pagination-bullet-active {
          background-color: #10b981 !important;
          border-color: #10b981 !important;
          transform: scale(1.2) !important;
        }
      `}</style>
    </section>
  );
}
