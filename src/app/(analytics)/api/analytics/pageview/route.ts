import { NextRequest, NextResponse } from 'next/server'
import { AnalyticsService } from '@/app/(analytics)/_lib/analytics-service'
import { AnalyticsCollector } from '@/app/(analytics)/_lib/analytics'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { path, title, loadTime, screenResolution, timezone } = body
    
    // Get visitor data directly from request
    const ipAddress = AnalyticsCollector.getClientIP(request)
    const userAgent = request.headers.get('user-agent') || 'Unknown'
    const acceptLanguage = request.headers.get('accept-language')
    const referrer = request.headers.get('referer') || undefined
    
    // Generate fingerprint
    const fingerprint = AnalyticsCollector.generateFingerprint(userAgent, acceptLanguage || undefined, timezone)
    
    // Parse user agent
    const { browser, os, device } = AnalyticsCollector.parseUserAgent(userAgent)
    
    // Parse UTM parameters from the current URL if provided
    const currentUrl = body.url || `${request.nextUrl.origin}${path}`
    const utmParams = AnalyticsCollector.parseUTMParams(currentUrl)
    
    // Get geolocation data (this might be slow, consider caching)
    let geoData = {}
    try {
      geoData = await AnalyticsCollector.getGeolocation(ipAddress)
    } catch (error) {
      console.warn('Failed to get geolocation:', error)
    }
    
    // Track visitor
    const visitorData = {
      ipAddress,
      userAgent,
      fingerprint,
      ...geoData,
      timezone,
    }
    
    const visitorId = await AnalyticsService.trackVisitor(visitorData)
    
    // Create session
    const sessionData = {
      referrer,
      ...utmParams,
      device,
      browser,
      os,
      screenResolution,
    }
    
    const sessionId = await AnalyticsService.createSession(visitorId, sessionData)
    
    // Track page view
    const pageViewData = {
      path,
      title,
      referrer,
      loadTime,
    }
    
    await AnalyticsService.trackPageView(visitorId, sessionId, pageViewData)
    
    return NextResponse.json({ 
      success: true, 
      visitorId, 
      sessionId 
    })
    
  } catch (error) {
    console.error('Error tracking page view:', error)
    return NextResponse.json({ 
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}
