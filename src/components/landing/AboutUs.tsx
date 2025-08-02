"use client";

import React from 'react';
import { Section } from '../ui/Section';
import { SectionTitle, BodyText, CardTitle } from '../ui/Typography';

import { Badge } from '../ui/Badge';


const companyStats = [
  {
    number: "2016",
    label: "Established",
    description: "Years of operations",
    icon: "📅"
  },
  {
    number: "40+",
    label: "Years Experience",
    description: "Industry expertise",
    icon: "📈"
  },

  {
    number: "10,000+",
    label: "MT Annual",
    description: "Processing capacity",
    icon: "🏭"
  }
];

const certifications = [

  {
    name: "FSSAI",
    description: "Food Safety License",
    logo: "✅"
  },
  {
    name: "Export License",
    description: "Government Authorized",
    logo: "📋"
  }
];




export default function AboutUs() {
  return (
    <Section id="about" background="white" padding="xl">
      {/* Professional Header */}
      <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-2xl p-16 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            Established Rice Exporter Since 2016
          </div>
          
          <SectionTitle className="mb-6 text-4xl lg:text-5xl text-gray-900">
            Green Agri Corp Private Limited
          </SectionTitle>
          
          <BodyText className="text-xl text-gray-600 mb-8 leading-relaxed">
            A leading manufacturer and exporter of premium Indian non-basmati rice, 
            serving global markets with consistent quality and reliable supply chain solutions.
          </BodyText>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Badge variant="secondary">Rice Manufacturer</Badge>
            <Badge variant="success">Global Exporter</Badge>
            <Badge variant="primary">ISO Certified</Badge>
            <Badge variant="outline">B2B Supplier</Badge>
          </div>
        </div>
      </div>

      {/* Company Overview */}
      <div className="grid lg:grid-cols-3 gap-12 mb-20">
        <div className="lg:col-span-2">
          <CardTitle className="mb-6 text-3xl">Company Overview</CardTitle>
          <div className="space-y-4 text-lg">
            <BodyText>
              <strong>Green Agri Corp Private Limited</strong> was established in 2016 as a rice processing and export company, 
              leveraging over four decades of combined experience in the food grains industry. We specialize in the manufacturing 
              and export of high-quality Indian non-basmati rice varieties to international markets.
            </BodyText>
            <BodyText>
              Our company operates from a modern 8-acre manufacturing facility located in Raipur, Chhattisgarh, equipped with 
              advanced processing technology and quality control systems. We maintain strict adherence to international food 
              safety standards and export regulations.
            </BodyText>
            <BodyText>
              With our head office strategically located in Delhi, we serve as a reliable partner for importers, distributors, 
              and food manufacturers across 50+ countries, ensuring consistent supply and competitive pricing.
            </BodyText>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {companyStats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-green-600 mb-1">{stat.number}</div>
                <div className="font-semibold text-gray-900 text-sm mb-1">{stat.label}</div>
                <div className="text-xs text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <CardTitle className="mb-6 text-2xl">Certifications & Compliance</CardTitle>
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center p-4 bg-gray-50 rounded-xl border border-gray-100">
                <div className="text-2xl mr-4">{cert.logo}</div>
                <div>
                  <div className="font-semibold text-gray-900">{cert.name}</div>
                  <div className="text-sm text-gray-600">{cert.description}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-green-50 rounded-xl border border-green-100">
            <div className="text-center">
              <div className="text-green-600 font-bold text-lg mb-2">Export Registration</div>
              <div className="text-sm text-gray-700">IEC Code: 1234567890</div>
              <div className="text-sm text-gray-700">RCMC Certificate Holder</div>
            </div>
          </div>
        </div>
      </div>

     
    

   
    </Section>
  );
}
