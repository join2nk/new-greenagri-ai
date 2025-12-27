import { NextRequest, NextResponse } from 'next/server'
import { AnalyticsService } from '@/app/(analytics)/_lib/analytics-service'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { path, timeSpent, sessionId } = body
    
    // If no sessionId provided, try to get from analytics session in body
    let finalSessionId = sessionId
    if (!finalSessionId && body.visitorId) {
      // For now, just log and skip if no session ID
      console.warn('Time on page tracking skipped - no session ID available')
      return NextResponse.json({ success: true, skipped: true })
    }
    
    if (!finalSessionId) {
      return NextResponse.json({ error: 'Missing session ID' }, { status: 400 })
    }
    
    await AnalyticsService.updateTimeOnPage(path, finalSessionId, timeSpent)
    
    return NextResponse.json({ success: true })
    
  } catch (error) {
    console.error('Error updating time on page:', error)
    return NextResponse.json({ 
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}
