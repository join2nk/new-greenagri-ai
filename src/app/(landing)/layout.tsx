import React from 'react'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterOld from "@/components/Footer-old";
import { AnalyticsProvider, AnalyticsTracker } from "@/app/(analytics)/_components/analytics-provider";
import { Toaster } from "@/components/ui/sonner"
export default function LayoutLanding({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {/* <div className="p-14" /> */}
      <main>
        <AnalyticsProvider>
          {children}
          <AnalyticsTracker />
        </AnalyticsProvider>
      </main>
      <FooterOld />
      <Toaster  position='top-left' />
      {/* <Footer /> */}
    </>
  )
}
