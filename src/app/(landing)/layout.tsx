import React from 'react'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AnalyticsProvider, AnalyticsTracker } from "@/app/(analytics)/_components/analytics-provider";

export default function LayoutLanding({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>
        <AnalyticsProvider>
          {children}
          <AnalyticsTracker />
        </AnalyticsProvider>
      </main>
      <Footer />
    </>
  )
}
