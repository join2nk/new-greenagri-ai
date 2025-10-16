"use client";

import React, { useActionState, useEffect } from "react";
import { createContactMessage } from "@/app/(landing)/contact/contact/action";
import { toast } from "sonner";

export function FormComponent() {
  
  const [state,action,pending] = useActionState(createContactMessage,null)
  useEffect(()=>{
    if (state?.success){
      toast("Thank You for contacting us. We will get in touch with you soon .")
    }
  },[state])
  return (
    <form 
    action={action} 
    className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-3 text-white">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all placeholder-gray-300 text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-3 text-white">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              required
              className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all placeholder-gray-300 text-white"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-3 text-white">Company Name</label>
          <input
            type="text"
            name="companyName"
            placeholder="Your Company"
            required
            className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all placeholder-gray-300 text-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-3 text-white">Product Interest</label>
          <select
            name="productType"
            required
            className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all text-white"
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
          <label className="block text-sm font-medium mb-3 text-white">Message</label>
          <textarea
            name="message"
            rows={5}
            placeholder="Tell us about your requirements..."
            className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all placeholder-gray-300 text-white resize-none"
          ></textarea>
        </div>

      <button
        type="submit"
        disabled={pending}
        className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-xl"
      >
        <span>{pending ? "Sending..." : "Send Inquiry"}</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {state?.success && (
        <p className="text-green-400 mt-3 font-semibold">
          Message sent successfully! We will contact you soon.
        </p>
      )}
    </form>
  );
}
