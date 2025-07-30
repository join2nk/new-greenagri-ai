import React from 'react'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnalyticsProvider, AnalyticsTracker } from "@/app/(analytics)/_components/analytics-provider";

export default function LayoutLanding({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
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
