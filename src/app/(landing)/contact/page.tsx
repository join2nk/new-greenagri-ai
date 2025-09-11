"use client";

import React from 'react';
import { Section } from '@/components/ui/Section';
import { SectionTitle, Subtitle, BodyText, CardTitle } from '@/components/ui/Typography';
import { Badge } from '@/components/ui/badge';

const contactMethods = [
  {
    title: "Export Inquiry",
    description: "Direct line for export-related questions and international business partnerships.",
    icon: "🌍",
    contact: "greenagri@gmail.com",
    subtext: "Response within 24 hours",
    color: "from-green-500 to-emerald-600"
  },
  {
    title: "Business Development", 
    description: "Connect with our business development team for new partnerships and collaborations.",
    icon: "📞",
    contact: "+91-XXX-XXX-XXXX",
    subtext: "Available during business hours",
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Quality Assurance",
    description: "Quality-related inquiries and certification requests for our rice products.",
    icon: "⚗️",
    contact: "greenagri@gmail.com",
    subtext: "Technical support available",
    color: "from-purple-500 to-purple-600"
  },
  {
    title: "Factory Direct",
    description: "Direct communication with our manufacturing facility in Raipur for factory visits.",
    icon: "🏭",
    contact: "greenagri@gmail.com",
    subtext: "Schedule facility tours",
    color: "from-orange-500 to-orange-600"
  }
];

const offices = [
  {
    title: "Corporate Head Office",
    location: "Delhi, India",
    description: "Business operations, export documentation, and client relations",
    icon: "🏢",
    address: ["Strategic business hub", "Export documentation center", "Client relationship management"],
    color: "from-green-600 to-emerald-700"
  },
  {
    title: "Manufacturing Facility",
    location: "Raipur, Chhattisgarh",
    description: " processing facility with 10,000+ MT annual capacity",
    icon: "🏭",
    address: ["State-of-the-art processing", "Quality control laboratory", "Packaging & storage"],
    color: "from-blue-600 to-indigo-700"
  }
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1920&h=1080&fit=crop')` 
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
                  GET IN TOUCH
                </span>
              </div> */}
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Let's Start a
                <span className="block text-amber-300">Partnership</span>
              </h1>
              
              <p className="text-emerald-100 text-xl md:text-2xl leading-relaxed mb-8 max-w-3xl">
                Connect with Green Agri Corp for premium rice solutions. We're here to support your 
                business with reliable supply, quality assurance, and professional service.
              </p>

              <div className="flex flex-wrap gap-4">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">Export Support</Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">24/7 Response</Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">Global Reach</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Methods Section */}
      <Section background="white" padding="xl">
        <div className="text-center mb-16">
          <Subtitle className="mb-6 text-amber-600">Contact Options</Subtitle>
          <SectionTitle className="mb-8">Multiple Ways to Connect</SectionTitle>
          <BodyText className="max-w-3xl mx-auto text-xl text-gray-600">
            Choose the most convenient way to reach us. Our dedicated teams are ready to 
            assist you with all your rice business requirements.
          </BodyText>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <div key={index} className="group">
              <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-green-200 transform hover:-translate-y-2 text-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center text-3xl text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {method.icon}
                </div>
                
                <CardTitle className="mb-4 group-hover:text-green-600 transition-colors">
                  {method.title}
                </CardTitle>
                
                <BodyText color="secondary" className="mb-6 text-center">
                  {method.description}
                </BodyText>
                
                <div className="space-y-2">
                  <div className="font-semibold text-gray-900">{method.contact}</div>
                  <div className="text-sm text-green-600">{method.subtext}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact Form & Office Locations */}
      <Section background="gradient" padding="xl">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-lg p-10 rounded-3xl shadow-2xl border border-white/20">
            <CardTitle color="white" className="mb-8 text-3xl flex items-center">
              <span className="w-3 h-8 bg-gradient-to-b from-amber-400 to-amber-600 rounded-full mr-4"></span>
              Send Your Inquiry
            </CardTitle>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-3 text-white">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all placeholder-gray-300 text-white"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-3 text-white">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all placeholder-gray-300 text-white"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-3 text-white">Company Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all placeholder-gray-300 text-white"
                  placeholder="Your Company"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-3 text-white">Product Interest</label>
                <select className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all text-white">
                  <option value="">Select Product Type</option>
                  <option value="non-basmati">Non-Basmati Rice</option>
                  <option value="basmati">Basmati Rice</option>
                  <option value="private-label">Private Labelling</option>
                  <option value="wholesale">Wholesale Distribution</option>
                  <option value="export">Export Services</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-3 text-white">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all placeholder-gray-300 text-white resize-none"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-xl"
              >
                <span>Send Inquiry</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </form>
          </div>

          {/* Office Locations */}
          <div className="space-y-8">
            <div>
              <CardTitle color="white" className="mb-8 text-3xl">Our Locations</CardTitle>
              <BodyText color="white" className="mb-8 text-lg">
                Visit our facilities or reach out to our teams at these locations for 
                direct communication and business partnerships.
              </BodyText>
            </div>

            {offices.map((office, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-white/20">
                <div className="flex items-start space-x-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${office.color} rounded-2xl flex items-center justify-center text-3xl text-white shadow-lg`}>
                    {office.icon}
                  </div>
                  <div className="flex-1">
                    <CardTitle color="white" className="mb-2 text-xl">
                      {office.title}
                    </CardTitle>
                    <div className="text-amber-300 font-semibold mb-2">{office.location}</div>
                    <BodyText color="white" className="mb-4">
                      {office.description}
                    </BodyText>
                    <div className="space-y-2">
                      {office.address.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                          <span className="text-gray-200 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Quick Stats */}
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-white/20">
              <CardTitle color="white" className="mb-6 text-xl text-center">
                Response Time Commitment
              </CardTitle>
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-amber-300 mb-2">24hrs</div>
                  <div className="text-gray-200 text-sm">Email Response</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-amber-300 mb-2">Same Day</div>
                  <div className="text-gray-200 text-sm">Phone Callback</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

   
    </div>
  );
}
