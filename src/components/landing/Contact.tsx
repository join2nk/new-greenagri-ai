import React from 'react'
import { Button } from '@/components/ui/button';
// import QuoteDialog from '@/components/landing/Quote';

import { CardTitle, BodyText } from '../ui/Typography';
import Link from 'next/link';


export default function Contact() {
  return (
    <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-16'>
       {/* Company Locations */}
       <div className="bg-gray-900 rounded-2xl p-12 text-white">
       <div className="grid lg:grid-cols-2 gap-12 items-center">
         <div>
           <CardTitle color="white" className="mb-8 text-3xl">Our Locations</CardTitle>
           
           <div className="space-y-8">
             <div className="flex items-start space-x-6">
               <div className="bg-green-600 rounded-xl p-4">
                 <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                 </svg>
               </div>
               <div>
                 <div className="font-bold text-xl mb-2">Corporate Head Office</div>
                 <BodyText color="white" className="mb-2">
                   Delhi, India
                 </BodyText>
                 <div className="text-gray-300 text-sm">
                   Business operations, export documentation, and client relations
                 </div>
               </div>
             </div>
             
             <div className="flex items-start space-x-6">
               <div className="bg-blue-600 rounded-xl p-4">
                 <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 11.172V5L8 4z" />
                 </svg>
               </div>
               <div>
                 <div className="font-bold text-xl mb-2">Manufacturing Unit</div>
                 <BodyText color="white" className="mb-2">
                   Raipur, Chhattisgarh, India
                 </BodyText>
                 <div className="text-gray-300 text-sm">
                 processing facility with 10,000+ MT annual capacity
                 </div>
               </div>
             </div>
           </div>
         </div>
         
         <div className="text-center lg:text-right">
           <BodyText color="white" className="text-xl mb-8">
             Partner with a trusted rice exporter committed to quality, 
             reliability, and long-term business relationships.
           </BodyText>
           
           <div className="space-y-4">
             {/* <QuoteDialog /> */}
             <Link href="/contact" className="w-full lg:w-auto min-w-[200px]">
               <Button variant="secondary" size="lg" className="w-full lg:w-auto">
               Request Quote
               </Button>
             </Link>
             <div className="lg:ml-4 lg:inline-block">
               <Link href="#products" className="w-full lg:w-auto min-w-[200px]">
                 <Button variant="secondary" size="lg" className="w-full lg:w-auto">
                   View Products
                 </Button>
               </Link>
             </div>
           </div>
           
           <div className="mt-8 pt-8 border-t border-gray-700">
             <div className="text-sm text-gray-300">
               <div>Export Inquiry: export@greenagricorp.com</div>
               <div>Business Development: +91-XXX-XXXX-XXX</div>
             </div>
           </div>
         </div>
       </div>
     </div>
     </div>
  )
}
