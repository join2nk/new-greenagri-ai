import { NextRequest, NextResponse } from 'next/server'
import { AnalyticsCollector } from '@/app/(analytics)/_lib/analytics'

export async function GET(request: NextRequest) {
  const ipAddress = AnalyticsCollector.getClientIP(request)
  const userAgent = request.headers.get('user-agent') || 'Unknown'
  const acceptLanguage = request.headers.get('accept-language')
  const referrer = request.headers.get('referer')
  
  const fingerprint = AnalyticsCollector.generateFingerprint(userAgent, acceptLanguage || undefined)
  const { browser, os, device } = AnalyticsCollector.parseUserAgent(userAgent)
  
  return NextResponse.json({
    ipAddress,
    userAgent,
    acceptLanguage,
    referrer,
    fingerprint,
    browser,
    os,
    device,
    timestamp: new Date().toISOString(),
  })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    return NextResponse.json({
      received: body,
      timestamp: new Date().toISOString(),
      headers: {
        userAgent: request.headers.get('user-agent'),
        ip: AnalyticsCollector.getClientIP(request),
      }
    })
  } catch (error) {
    return NextResponse.json({
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString(),
    }, { status: 400 })
  }
}
