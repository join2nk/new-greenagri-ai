import { NextRequest, NextResponse } from 'next/server'
import { AnalyticsService } from '@/app/(analytics)/_lib/analytics-service'

export async function POST(request: NextRequest) {
  try {
    let body: any = {}

    // Safely parse JSON
    try {
      body = await request.json()
    } catch {
      return NextResponse.json(
        { error: 'Invalid or missing JSON body' },
        { status: 400 }
      )
    }

    const { path, timeSpent, sessionId, visitorId } = body

    // Ensure required fields
    if (!path || !timeSpent) {
      return NextResponse.json(
        { error: 'Missing required fields: path or timeSpent' },
        { status: 400 }
      )
    }

    // Handle sessionId logic
    let finalSessionId = sessionId
    if (!finalSessionId && visitorId) {
      console.warn('Time on page tracking skipped - no session ID available')
      return NextResponse.json({ success: true, skipped: true })
    }

    if (!finalSessionId) {
      return NextResponse.json(
        { error: 'Missing session ID' },
        { status: 400 }
      )
    }

    // Save to analytics service
    await AnalyticsService.updateTimeOnPage(path, finalSessionId, timeSpent)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error updating time on page:', error)
    return NextResponse.json(
      {
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}
