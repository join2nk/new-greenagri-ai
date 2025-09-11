"use client";

import React from 'react';
import { Section } from '@/components/ui/Section';
import { SectionTitle, Subtitle, BodyText, CardTitle } from '@/components/ui/Typography';
import { Badge } from '@/components/ui/badge';
// import { HeroSection } from '@/components/HeroSection';

const services = [
  {
    title: "Rice Export",
    description: "Export of premium non-basmati and basmati rice to international markets with quality assurance and compliance.",
    icon: "🌍",
    color: "from-green-500 to-green-600",
    features: ["International quality standards", "Proper documentation", "Timely delivery worldwide"]
  },
  {
    title: "Private Labelling",
    description: "Custom packaging and branding solutions for domestic and international clients with flexible options.",
    icon: "🏷️",
    color: "from-blue-500 to-blue-600",
    features: ["Custom packaging design", "Multiple rice variants", "Brand development support"]
  },
  {
    title: "Wholesale Distribution",
    description: "Bulk rice supply for wholesalers and mass distribution networks including major online platforms.",
    icon: "📦",
    color: "from-purple-500 to-purple-600",
    features: ["Bulk quantity supply", "Amazon & Reliance Fresh partner", "Assured quality guarantee"]
  },
  {
    title: "Factory Outlet",
    description: "Direct sales from our Raipur factory with online store capabilities and convenient pickup options.",
    icon: "🏪",
    color: "from-orange-500 to-orange-600",
    features: ["Direct factory prices", "Online ordering available", "Pickup option in Raipur"]
  },
  {
    title: "Quality Assurance",
    description: "Comprehensive quality control and analysis using advanced technology and rigorous testing processes.",
    icon: "⚗️",
    color: "from-teal-500 to-teal-600",
    features: ["Advanced testing equipment", "Multi-stage quality checks", "Certification compliance"]
  },
  {
    title: "Export Support",
    description: "Support services for third-party exporters including private labelling and comprehensive quality assurance.",
    icon: "🤝",
    color: "from-indigo-500 to-indigo-600",
    features: ["Export documentation", "Quality certification", "Logistics support"]
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      {/* <HeroSection /> */}
      <div className="relative overflow-hidden py-12">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=1920&h=1080&fit=crop')` 
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 via-green-800/85 to-teal-900/90" />
        
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="p-14"></div>
              {/* <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-6">
                <span className="w-3 h-3 bg-amber-400 rounded-full mr-3 animate-pulse"></span>
                <span className="text-white text-sm font-semibold tracking-wide">
                  OUR SERVICES
                </span>
              </div> */}
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Comprehensive 
                <span className="block text-amber-300">Solutions</span>
              </h1>
              
              <p className="text-emerald-100 text-xl md:text-2xl leading-relaxed mb-8 max-w-3xl">
                From export to retail, we provide end-to-end rice solutions with unmatched quality 
                and service excellence across all business verticals.
              </p>

              <div className="flex flex-wrap gap-4">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">Export Services</Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">Private Labelling</Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">Quality Assured</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <Section background="white" padding="xl">
        <div className="text-center mb-16">
          <Subtitle className="mb-6 text-amber-600">What We Offer</Subtitle>
          <SectionTitle className="mb-8">Complete Rice Business Solutions</SectionTitle>
          <BodyText className="max-w-3xl mx-auto text-xl text-gray-600">
            Our comprehensive service portfolio covers every aspect of the rice business, 
            from processing and quality control to export and distribution solutions.
          </BodyText>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-green-200 transform hover:-translate-y-2 relative overflow-hidden">
                {/* Background decoration */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500`}></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-3xl text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {service.icon}
                  </div>
                  
                  <CardTitle className="mb-4 text-center group-hover:text-green-600 transition-colors">
                    {service.title}
                  </CardTitle>
                  
                  <BodyText color="secondary" className="text-center mb-6">
                    {service.description}
                  </BodyText>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3`}></div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Why Choose Our Services Section */}
      <Section background="gradient" padding="xl">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/95 via-emerald-800/90 to-teal-900/95 rounded-3xl" />
          <div className="relative bg-gradient-to-r from-green-900/90 via-emerald-800/85 to-teal-900/90 rounded-3xl p-16">
            <div className="text-center mb-12">
              <Subtitle className="mb-6 text-amber-300">Why Choose Us</Subtitle>
              <SectionTitle className="mb-8 text-white">Service Excellence</SectionTitle>
              <BodyText className="max-w-3xl mx-auto text-xl text-gray-200">
                Our commitment to quality and customer satisfaction sets us apart in the industry.
              </BodyText>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-amber-500 rounded-2xl flex items-center justify-center text-3xl text-white mx-auto mb-6 shadow-lg">
                  🏆
                </div>
                <CardTitle color="white" className="mb-4">Quality First</CardTitle>
                <BodyText color="white" className="text-center">
                  Every service is backed by our commitment to maintaining the highest quality standards.
                </BodyText>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-green-500 rounded-2xl flex items-center justify-center text-3xl text-white mx-auto mb-6 shadow-lg">
                  🚀
                </div>
                <CardTitle color="white" className="mb-4">Fast Delivery</CardTitle>
                <BodyText color="white" className="text-center">
                  Timely execution and delivery across all our service offerings and commitments.
                </BodyText>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-blue-500 rounded-2xl flex items-center justify-center text-3xl text-white mx-auto mb-6 shadow-lg">
                  💼
                </div>
                <CardTitle color="white" className="mb-4">Professional Support</CardTitle>
                <BodyText color="white" className="text-center">
                  Dedicated support team ensuring seamless service experience for all clients.
                </BodyText>
              </div>
            </div>

        
          </div>
        </div>
      </Section>

      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 -z-10"></div>
    </div>
  );
}
