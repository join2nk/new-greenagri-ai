import { NextRequest, NextResponse } from 'next/server'
import { AnalyticsService } from '@/app/(analytics)/_lib/analytics-service'
import { AnalyticsCollector } from '@/app/(analytics)/_lib/analytics'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { eventType, eventName, path, element, value, metadata, visitorId, sessionId } = body
    
    // If no visitorId/sessionId provided, try to create them
    let finalVisitorId = visitorId
    let finalSessionId = sessionId
    
    if (!finalVisitorId || !finalSessionId) {
      // Get visitor data from request
      const ipAddress = AnalyticsCollector.getClientIP(request)
      const userAgent = request.headers.get('user-agent') || 'Unknown'
      const acceptLanguage = request.headers.get('accept-language')
      const fingerprint = AnalyticsCollector.generateFingerprint(userAgent, acceptLanguage || undefined)
      
      // Try to find existing visitor
      const visitorData = {
        ipAddress,
        userAgent,
        fingerprint,
      }
      
      finalVisitorId = await AnalyticsService.trackVisitor(visitorData)
      
      // Create a simple session
      const { browser, os, device } = AnalyticsCollector.parseUserAgent(userAgent)
      const sessionData = {
        device,
        browser,
        os,
      }
      
      finalSessionId = await AnalyticsService.createSession(finalVisitorId, sessionData)
    }
    
    const eventData = {
      eventType,
      eventName,
      path,
      element,
      value,
      metadata,
    }
    
    await AnalyticsService.trackEvent(finalVisitorId, finalSessionId, eventData)
    
    return NextResponse.json({ success: true })
    
  } catch (error) {
    console.error('Error tracking event:', error)
    return NextResponse.json({ 
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}
