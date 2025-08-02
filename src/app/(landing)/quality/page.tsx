"use client";

import React from 'react';
import { Section } from '@/components/ui/Section';
import { SectionTitle, Subtitle, BodyText, CardTitle } from '@/components/ui/Typography';
import { StyledImage } from '@/components/ui/Image';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';

const qualityStandards = [
  {
    title: "FSSAI Compliance",
    description: "Licensed under Food Safety and Standards Authority of India for maintaining highest food safety standards.",
    icon: "🏛️",
    certNumber: "License No: 12345678901234",
    status: "Valid"
  },
  {
    title: "Export License",
    description: "Government authorized exporter with IEC code and RCMC certificate for international trade.",
    icon: "📋",
    certNumber: "IEC: 1234567890",
    status: "Active"
  },
  {
    title: "Quality Management",
    description: "Implementing systematic quality control processes ensuring consistent product excellence.",
    icon: "⚙️",
    certNumber: "QMS-2024-001",
    status: "Certified"
  },
  {
    title: "Traceability System",
    description: "Complete supply chain traceability from farm to export ensuring transparency and accountability.",
    icon: "🔍",
    certNumber: "TS-GAC-2024",
    status: "Implemented"
  }
];

const qualityProcess = [
  {
    step: "01",
    title: "Raw Material Inspection",
    description: "Thorough inspection of incoming rice paddy including moisture content, foreign matter, and grain quality assessment.",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&h=400&fit=crop",
    checkpoints: ["Moisture Analysis", "Purity Testing", "Grade Classification", "Pest Inspection"]
  },
  {
    step: "02",
    title: "Processing Control",
    description: "Advanced processing with automated systems ensuring consistent quality throughout the milling and sorting operations.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
    checkpoints: ["Temperature Control", "Automated Sorting", "Color Grading", "Size Classification"]
  },
  {
    step: "03",
    title: "Laboratory Testing",
    description: "Comprehensive laboratory analysis using modern equipment for moisture, broken percentage, and contamination testing.",
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&h=400&fit=crop",
    checkpoints: ["Moisture Content", "Broken Percentage", "Foreign Matter", "Pesticide Residue"]
  },
  {
    step: "04",
    title: "Packaging & Storage",
    description: "Hygienic packaging in controlled environment with proper storage conditions maintaining product integrity.",
    image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=600&h=400&fit=crop",
    checkpoints: ["Clean Environment", "Proper Sealing", "Storage Conditions", "Batch Tracking"]
  }
];

const testingParameters = [
  {
    parameter: "Moisture Content",
    specification: "≤ 14.0%",
    method: "Hot Air Oven Method",
    frequency: "Every Batch"
  },
  {
    parameter: "Broken Grains",
    specification: "≤ 5.0%",
    method: "Manual Sorting",
    frequency: "Continuous"
  },
  {
    parameter: "Foreign Matter",
    specification: "≤ 0.1%",
    method: "Visual Inspection",
    frequency: "Every Lot"
  },
  {
    parameter: "Damaged Grains",
    specification: "≤ 3.0%",
    method: "Microscopic Analysis",
    frequency: "Daily"
  },
  {
    parameter: "Chalk Content",
    specification: "≤ 6.0%",
    method: "Visual Grading",
    frequency: "Per Shipment"
  },
  {
    parameter: "Length/Width Ratio",
    specification: "As per Grade",
    method: "Micrometer",
    frequency: "Sample Testing"
  }
];

export default function QualityPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=1920&h=1080&fit=crop')` 
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 via-green-800/85 to-teal-900/90" />
        
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-6">
                <span className="w-3 h-3 bg-amber-400 rounded-full mr-3 animate-pulse"></span>
                <span className="text-white text-sm font-semibold tracking-wide">
                  QUALITY ASSURANCE
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Uncompromising
                <span className="block text-amber-300">Quality Standards</span>
              </h1>
              
              <p className="text-emerald-100 text-xl md:text-2xl leading-relaxed mb-8 max-w-3xl">
                Every grain of rice that leaves our facility meets the highest international quality standards. 
                Our comprehensive quality assurance program ensures excellence at every step.
              </p>

              <div className="flex flex-wrap gap-4">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">FSSAI Licensed</Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">Export Certified</Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">Traceability System</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quality Standards Section */}
      <Section background="white" padding="xl">
        <div className="text-center mb-16">
          <Subtitle className="mb-6 text-amber-600">Our Certifications</Subtitle>
          <SectionTitle className="mb-8">Quality Standards & Compliance</SectionTitle>
          <BodyText className="max-w-3xl mx-auto text-xl text-gray-600">
            We maintain the highest standards of quality and compliance, ensuring our rice meets 
            international food safety requirements and export regulations.
          </BodyText>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {qualityStandards.map((standard, index) => (
            <div key={index} className="group">
              <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-green-200 transform hover:-translate-y-2">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-3xl text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {standard.icon}
                  </div>
                  <CardTitle className="mb-3 group-hover:text-green-600 transition-colors">
                    {standard.title}
                  </CardTitle>
                </div>
                
                <BodyText color="secondary" className="text-center mb-6">
                  {standard.description}
                </BodyText>
                
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="text-sm font-semibold text-gray-900 mb-1">{standard.certNumber}</div>
                  <div className="inline-flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    <span className="text-green-600 text-sm font-medium">{standard.status}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Quality Process Section */}
      <Section background="gradient" padding="xl">
        <div className="text-center mb-16">
          <Subtitle className="mb-6 text-amber-600">Quality Process</Subtitle>
          <SectionTitle className="mb-8 text-white">Our 4-Step Quality Assurance Process</SectionTitle>
          <BodyText className="max-w-3xl mx-auto text-xl text-gray-200">
            From raw material to final packaging, every step is carefully monitored and controlled 
            to ensure the highest quality standards are maintained throughout the process.
          </BodyText>
        </div>

        <div className="space-y-16">
          {qualityProcess.map((process, index) => (
            <div key={index} className={cn(
              "grid lg:grid-cols-2 gap-12 items-center",
              index % 2 === 1 && "lg:grid-flow-col-dense"
            )}>
              <div className={cn(index % 2 === 1 && "lg:col-start-2")}>
                <div className="relative">
                  <div className="text-6xl font-bold text-amber-400/20 mb-4">{process.step}</div>
                  <CardTitle color="white" className="mb-6 text-3xl">
                    {process.title}
                  </CardTitle>
                  <BodyText color="white" className="mb-8 text-lg">
                    {process.description}
                  </BodyText>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {process.checkpoints.map((checkpoint, checkIndex) => (
                      <div key={checkIndex} className="flex items-center">
                        <div className="w-3 h-3 bg-amber-400 rounded-full mr-3"></div>
                        <span className="text-gray-200 text-sm">{checkpoint}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className={cn(index % 2 === 1 && "lg:col-start-1")}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <StyledImage
                    src={process.image}
                    alt={process.title}
                    width={600}
                    height={400}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                      <div className="text-gray-900 font-semibold">{process.title}</div>
                      <div className="text-gray-600 text-sm">Step {process.step}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Testing Parameters Section */}
      <Section background="white" padding="xl">
        <div className="text-center mb-16">
          <Subtitle className="mb-6 text-amber-600">Quality Testing</Subtitle>
          <SectionTitle className="mb-8">Testing Parameters & Specifications</SectionTitle>
          <BodyText className="max-w-3xl mx-auto text-xl text-gray-600">
            Our comprehensive testing protocols ensure every batch meets strict quality specifications 
            before reaching our customers.
          </BodyText>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-6">
            <h3 className="text-2xl font-bold text-white text-center">Quality Testing Matrix</h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-4 text-left font-semibold text-gray-900">Parameter</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-900">Specification</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-900">Test Method</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-900">Frequency</th>
                </tr>
              </thead>
              <tbody>
                {testingParameters.map((param, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">{param.parameter}</td>
                    <td className="px-6 py-4 text-green-600 font-semibold">{param.specification}</td>
                    <td className="px-6 py-4 text-gray-600">{param.method}</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                        {param.frequency}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

   
      
    </div>
  );
}
