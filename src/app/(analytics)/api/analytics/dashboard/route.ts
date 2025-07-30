import { NextRequest, NextResponse } from 'next/server'
import { AnalyticsService } from '@/app/(analytics)/_lib/analytics-service'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const days = parseInt(searchParams.get('days') || '30')
    
    const dashboardData = await AnalyticsService.getDashboardData(days)
    
    return NextResponse.json(dashboardData)
    
  } catch (error) {
    console.error('Error getting dashboard data:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    // Generate daily snapshot (can be called manually or via cron)
    const { date } = await request.json().catch(() => ({}))
    const targetDate = date ? new Date(date) : undefined
    
    await AnalyticsService.generateDailySnapshot(targetDate)
    
    return NextResponse.json({ success: true })
    
  } catch (error) {
    console.error('Error generating daily snapshot:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
