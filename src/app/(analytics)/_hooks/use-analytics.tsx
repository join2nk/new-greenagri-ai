import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { clientAnalytics } from '@/app/(analytics)/_lib/analytics'

interface AnalyticsSession {
  visitorId: string
  sessionId: string
}

export function useAnalytics() {
  const pathname = usePathname()
  const [session, setSession] = useState<AnalyticsSession | null>(null)
  const startTime = useRef<number>(Date.now())
  const scrollDepthTracked = useRef<Set<number>>(new Set())

  // Track page view on mount and route changes
  useEffect(() => {
    const trackPageView = async () => {
      const loadTime = performance.timing ? 
        performance.timing.loadEventEnd - performance.timing.navigationStart : 
        undefined

      try {
        const result = await clientAnalytics.trackPageView({
          path: pathname,
          title: document.title,
          referrer: document.referrer || undefined,
          loadTime,
        })
        
        // Store session info if returned by API
        if (result && result.visitorId && result.sessionId) {
          setSession({ 
            visitorId: result.visitorId, 
            sessionId: result.sessionId 
          })
        }
      } catch (error) {
        console.error('Failed to track page view:', error)
      }
    }

    trackPageView()
    startTime.current = Date.now()
    scrollDepthTracked.current.clear()
  }, [pathname])

  // Track time on page when leaving
  useEffect(() => {
    const handleBeforeUnload = () => {
      const timeSpent = Math.floor((Date.now() - startTime.current) / 1000)
      if (timeSpent > 5) { // Only track if user spent more than 5 seconds
        clientAnalytics.trackTimeOnPage(timeSpent)
      }
    }

    const handleVisibilityChange = () => {
      if (document.hidden) {
        const timeSpent = Math.floor((Date.now() - startTime.current) / 1000)
        if (timeSpent > 5) {
          clientAnalytics.trackTimeOnPage(timeSpent)
        }
      } else {
        startTime.current = Date.now() // Reset timer when page becomes visible again
      }
    }

    window.addEventListener('beforeunload', handleBeforeUnload)
    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [pathname])

  // Track scroll depth
  useEffect(() => {
    const trackScrollDepth = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      )

      const depths = [25, 50, 75, 90, 100]
      depths.forEach(depth => {
        if (scrollPercent >= depth && !scrollDepthTracked.current.has(depth)) {
          scrollDepthTracked.current.add(depth)
          clientAnalytics.trackScrollDepth(depth)
        }
      })
    }

    const throttledTrackScrollDepth = throttle(trackScrollDepth, 500)
    window.addEventListener('scroll', throttledTrackScrollDepth)

    return () => {
      window.removeEventListener('scroll', throttledTrackScrollDepth)
    }
  }, [pathname])

  // Analytics functions to expose
  const trackEvent = (eventType: string, eventName: string, value?: string, metadata?: Record<string, any>) => {
    clientAnalytics.trackEvent({
      eventType,
      eventName,
      path: pathname,
      value,
      metadata,
    })
  }

  const trackFormSubmission = (formName: string, formData?: Record<string, any>) => {
    clientAnalytics.trackFormSubmission(formName, formData)
  }

  const trackDownload = (fileName: string, fileUrl: string) => {
    clientAnalytics.trackDownload(fileName, fileUrl)
  }

  const trackClick = (element: string, value?: string) => {
    trackEvent('click', 'element_click', value, { element })
  }

  return {
    session,
    trackEvent,
    trackFormSubmission,
    trackDownload,
    trackClick,
  }
}

// Throttle function
function throttle<T extends (...args: any[]) => any>(func: T, limit: number): T {
  let inThrottle: boolean
  return ((...args: any[]) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }) as T
}

// HOC for automatic analytics tracking
export function withAnalytics<P extends object>(Component: React.ComponentType<P>) {
  return function AnalyticsWrappedComponent(props: P) {
    useAnalytics()
    return <Component {...props} />
  }
}
