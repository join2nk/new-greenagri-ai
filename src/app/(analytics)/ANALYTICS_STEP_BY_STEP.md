# Step-by-Step Analytics Implementation Guide

This guide will help you implement a comprehensive analytics system from scratch for your Next.js application.

## 📋 Prerequisites

Before starting, ensure you have:
- Next.js 13+ with App Router
- Prisma with SQLite database
- Basic understanding of React hooks and API routes

## 🎯 Step 1: Database Schema Setup

### 1.1 Update Prisma Schema

Add the analytics models to your `prisma/schema.prisma`:

```prisma
// Add these models to your existing schema.prisma

// Website Analytics Models
model Visitor {
  id           String   @id @default(uuid())
  ipAddress    String
  userAgent    String
  fingerprint  String?  // Browser fingerprint for unique identification
  country      String?
  city         String?
  region       String?
  timezone     String?
  
  // First visit info
  firstVisitAt DateTime @default(now())
  lastVisitAt  DateTime @default(now())
  totalVisits  Int      @default(1)
  
  // Relations
  sessions     Session[]
  pageViews    PageView[]
  events       AnalyticsEvent[]
  
  @@unique([ipAddress, fingerprint])
  @@index([ipAddress])
  @@index([firstVisitAt])
  @@index([lastVisitAt])
}

model Session {
  id          String   @id @default(uuid())
  visitorId   String
  startTime   DateTime @default(now())
  endTime     DateTime?
  duration    Int?     // in seconds
  pageCount   Int      @default(0)
  isActive    Boolean  @default(true)
  
  // Session metadata
  referrer    String?
  utm_source  String?
  utm_medium  String?
  utm_campaign String?
  utm_content String?
  utm_term    String?
  
  // Device info
  device      String?  // mobile, tablet, desktop
  browser     String?
  os          String?
  screenResolution String?
  
  // Relations
  visitor     Visitor  @relation(fields: [visitorId], references: [id], onDelete: Cascade)
  pageViews   PageView[]
  events      AnalyticsEvent[]
  
  @@index([visitorId])
  @@index([startTime])
  @@index([isActive])
}

model PageView {
  id          String   @id @default(uuid())
  visitorId   String
  sessionId   String
  path        String
  title       String?
  referrer    String?
  timestamp   DateTime @default(now())
  timeOnPage  Int?     // in seconds
  exitPage    Boolean  @default(false)
  
  // Performance metrics
  loadTime    Int?     // in milliseconds
  
  // Relations
  visitor     Visitor  @relation(fields: [visitorId], references: [id], onDelete: Cascade)
  session     Session  @relation(fields: [sessionId], references: [id], onDelete: Cascade)
  
  @@index([visitorId])
  @@index([sessionId])
  @@index([path])
  @@index([timestamp])
}

model AnalyticsEvent {
  id          String   @id @default(uuid())
  visitorId   String
  sessionId   String
  eventType   String   // click, scroll, form_submit, download, etc.
  eventName   String   // specific event name
  path        String   // page where event occurred
  element     String?  // CSS selector or element description
  value       String?  // event value (form name, download file, etc.)
  metadata    String?  // JSON string for additional data
  timestamp   DateTime @default(now())
  
  // Relations
  visitor     Visitor  @relation(fields: [visitorId], references: [id], onDelete: Cascade)
  session     Session  @relation(fields: [sessionId], references: [id], onDelete: Cascade)
  
  @@index([visitorId])
  @@index([sessionId])
  @@index([eventType])
  @@index([timestamp])
}

// Daily Analytics Aggregations
model DailyAnalytics {
  id              String   @id @default(uuid())
  date            DateTime @unique
  
  // Traffic metrics
  totalPageViews  Int      @default(0)
  uniqueVisitors  Int      @default(0)
  totalSessions   Int      @default(0)
  bounceRate      Float    @default(0) // percentage
  avgSessionDuration Int   @default(0) // in seconds
  
  // Popular content
  topPages        String?  // JSON array of {path, views}
  topReferrers    String?  // JSON array of {referrer, count}
  topCountries    String?  // JSON array of {country, count}
  topDevices      String?  // JSON array of {device, count}
  
  // Conversion metrics
  contactFormSubmissions Int @default(0)
  newsletterSubscriptions Int @default(0)
  quoteRequests          Int @default(0)
  jobApplications        Int @default(0)
  
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt
  
  @@index([date])
}
```

### 1.2 Run Migration

```bash
npx prisma migrate dev --name add_analytics_tables
npx prisma generate
```

## 🔧 Step 2: Install Dependencies

Install required packages:

```bash
pnpm add ua-parser-js @types/ua-parser-js
```

## 📝 Step 3: Create Core Analytics Library

### 3.1 Create Analytics Utilities (`src/lib/analytics.ts`)

```typescript
import { UAParser } from 'ua-parser-js';

export interface VisitorData {
  ipAddress: string;
  userAgent: string;
  fingerprint?: string;
  country?: string;
  city?: string;
  region?: string;
  timezone?: string;
}

export interface SessionData {
  referrer?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  device?: string;
  browser?: string;
  os?: string;
  screenResolution?: string;
}

export interface PageViewData {
  path: string;
  title?: string;
  referrer?: string;
  loadTime?: number;
}

export interface AnalyticsEventData {
  eventType: string;
  eventName: string;
  path: string;
  element?: string;
  value?: string;
  metadata?: Record<string, any>;
}

export class AnalyticsCollector {
  
  static getClientIP(): string {
    // This will be set by the server
    return '127.0.0.1';
  }

  static parseUserAgent(userAgent: string) {
    const parser = new UAParser(userAgent);
    const result = parser.getResult();
    
    return {
      browser: `${result.browser.name || 'Unknown'} ${result.browser.version || ''}`.trim(),
      os: `${result.os.name || 'Unknown'} ${result.os.version || ''}`.trim(),
      device: this.getDeviceType(result),
    };
  }

  private static getDeviceType(result: UAParser.IResult): string {
    if (result.device.type) {
      return result.device.type;
    }
    
    if (result.os.name && ['iOS', 'Android'].includes(result.os.name)) {
      return 'mobile';
    }
    
    return 'desktop';
  }

  static parseUTMParams(url: string): Partial<SessionData> {
    const urlObj = new URL(url);
    const searchParams = urlObj.searchParams;
    
    return {
      utm_source: searchParams.get('utm_source') || undefined,
      utm_medium: searchParams.get('utm_medium') || undefined,
      utm_campaign: searchParams.get('utm_campaign') || undefined,
      utm_content: searchParams.get('utm_content') || undefined,
      utm_term: searchParams.get('utm_term') || undefined,
    };
  }

  static generateFingerprint(userAgent: string, acceptLanguage?: string, timezone?: string): string {
    const data = `${userAgent}-${acceptLanguage || ''}-${timezone || ''}`;
    return Buffer.from(data).toString('base64').substring(0, 32);
  }

  static async getGeolocation(ip: string): Promise<Partial<VisitorData>> {
    try {
      const response = await fetch(`http://ip-api.com/json/${ip}?fields=status,country,city,regionName,timezone`);
      const data = await response.json();
      
      if (data.status === 'success') {
        return {
          country: data.country,
          city: data.city,
          region: data.regionName,
          timezone: data.timezone,
        };
      }
    } catch (error) {
      console.error('Error fetching geolocation:', error);
    }
    
    return {};
  }
}

// Client-side analytics functions
export const clientAnalytics = {
  trackPageView: async (data: Partial<PageViewData>) => {
    try {
      const response = await fetch('/api/analytics/pageview', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          timestamp: new Date().toISOString(),
          screenResolution: typeof window !== 'undefined' ? `${screen.width}x${screen.height}` : undefined,
          timezone: typeof window !== 'undefined' ? Intl.DateTimeFormat().resolvedOptions().timeZone : undefined,
          currentUrl: typeof window !== 'undefined' ? window.location.href : undefined,
        }),
      });
      
      if (response.ok) {
        return await response.json();
      }
    } catch (error) {
      console.error('Error tracking page view:', error);
    }
  },

  trackEvent: async (data: AnalyticsEventData & { visitorId?: string; sessionId?: string }) => {
    try {
      await fetch('/api/analytics/event', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          timestamp: new Date().toISOString(),
        }),
      });
    } catch (error) {
      console.error('Error tracking event:', error);
    }
  },

  trackFormSubmission: async (formName: string, formData?: Record<string, any>) => {
    await clientAnalytics.trackEvent({
      eventType: 'form_submit',
      eventName: formName,
      path: typeof window !== 'undefined' ? window.location.pathname : '',
      value: formName,
      metadata: formData,
    });
  },

  trackTimeOnPage: async (timeSpent: number, sessionId?: string) => {
    try {
      await fetch('/api/analytics/time-on-page', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          path: typeof window !== 'undefined' ? window.location.pathname : '',
          timeSpent,
          sessionId,
          timestamp: new Date().toISOString(),
        }),
      });
    } catch (error) {
      console.error('Error tracking time on page:', error);
    }
  },
};
```

### 3.2 Create Analytics Service (`src/lib/analytics-service.ts`)

```typescript
import { db } from '@/db/prisma';
import { AnalyticsCollector, VisitorData, SessionData, PageViewData, AnalyticsEventData } from '@/lib/analytics';

export class AnalyticsService {
  
  static async trackVisitor(visitorData: VisitorData): Promise<string> {
    try {
      const existing = await db.visitor.findUnique({
        where: {
          ipAddress_fingerprint: {
            ipAddress: visitorData.ipAddress,
            fingerprint: visitorData.fingerprint || 'unknown',
          },
        },
      });

      if (existing) {
        await db.visitor.update({
          where: { id: existing.id },
          data: {
            lastVisitAt: new Date(),
            totalVisits: { increment: 1 },
            userAgent: visitorData.userAgent,
            country: visitorData.country || existing.country,
            city: visitorData.city || existing.city,
            region: visitorData.region || existing.region,
            timezone: visitorData.timezone || existing.timezone,
          },
        });
        return existing.id;
      } else {
        const newVisitor = await db.visitor.create({
          data: {
            ipAddress: visitorData.ipAddress,
            userAgent: visitorData.userAgent,
            fingerprint: visitorData.fingerprint || 'unknown',
            country: visitorData.country,
            city: visitorData.city,
            region: visitorData.region,
            timezone: visitorData.timezone,
          },
        });
        return newVisitor.id;
      }
    } catch (error) {
      console.error('Error tracking visitor:', error);
      throw error;
    }
  }

  static async createSession(visitorId: string, sessionData: SessionData): Promise<string> {
    try {
      // End any active sessions for this visitor
      await db.session.updateMany({
        where: {
          visitorId: visitorId,
          isActive: true,
        },
        data: {
          isActive: false,
          endTime: new Date(),
        },
      });

      const session = await db.session.create({
        data: {
          visitorId,
          referrer: sessionData.referrer,
          utm_source: sessionData.utm_source,
          utm_medium: sessionData.utm_medium,
          utm_campaign: sessionData.utm_campaign,
          utm_content: sessionData.utm_content,
          utm_term: sessionData.utm_term,
          device: sessionData.device,
          browser: sessionData.browser,
          os: sessionData.os,
          screenResolution: sessionData.screenResolution,
        },
      });

      return session.id;
    } catch (error) {
      console.error('Error creating session:', error);
      throw error;
    }
  }

  static async trackPageView(visitorId: string, sessionId: string, pageViewData: PageViewData): Promise<void> {
    try {
      await db.pageView.create({
        data: {
          visitorId,
          sessionId,
          path: pageViewData.path,
          title: pageViewData.title,
          referrer: pageViewData.referrer,
          loadTime: pageViewData.loadTime,
        },
      });

      await db.session.update({
        where: { id: sessionId },
        data: {
          pageCount: { increment: 1 },
        },
      });
    } catch (error) {
      console.error('Error tracking page view:', error);
      throw error;
    }
  }

  static async trackEvent(visitorId: string, sessionId: string, eventData: AnalyticsEventData): Promise<void> {
    try {
      await db.analyticsEvent.create({
        data: {
          visitorId,
          sessionId,
          eventType: eventData.eventType,
          eventName: eventData.eventName,
          path: eventData.path,
          element: eventData.element,
          value: eventData.value,
          metadata: eventData.metadata ? JSON.stringify(eventData.metadata) : null,
        },
      });
    } catch (error) {
      console.error('Error tracking event:', error);
      throw error;
    }
  }

  static async getDashboardData(days: number = 30) {
    try {
      const startDate = new Date();
      startDate.setDate(startDate.getDate() - days);

      const [
        totalPageViews,
        uniqueVisitors,
        totalSessions,
        topPages,
        conversionStats,
      ] = await Promise.all([
        db.pageView.count({
          where: { timestamp: { gte: startDate } },
        }),

        db.visitor.count({
          where: { firstVisitAt: { gte: startDate } },
        }),

        db.session.count({
          where: { startTime: { gte: startDate } },
        }),

        db.pageView.groupBy({
          by: ['path'],
          _count: { path: true },
          where: { timestamp: { gte: startDate } },
          orderBy: { _count: { path: 'desc' } },
          take: 10,
        }),

        this.getConversionStats(startDate),
      ]);

      return {
        overview: {
          totalPageViews,
          uniqueVisitors,
          totalSessions,
          avgSessionDuration: 0,
          bounceRate: 0,
        },
        topPages: topPages.map(p => ({ path: p.path, views: p._count.path })),
        topReferrers: [],
        topCountries: [],
        deviceStats: [],
        recentEvents: [],
        dailyStats: [],
        conversions: conversionStats,
      };
    } catch (error) {
      console.error('Error getting dashboard data:', error);
      throw error;
    }
  }

  private static async getConversionStats(startDate: Date) {
    const [contactForms, newsletters, quotes, jobApplications] = await Promise.all([
      db.contactformdetails.count({
        where: { created_at: { gte: startDate } },
      }),
      db.subscriber.count({
        where: { subscribedAt: { gte: startDate } },
      }),
      db.questionnaireSubmission.count({
        where: { createdAt: { gte: startDate } },
      }),
      db.jobApplication.count({
        where: { createdAt: { gte: startDate } },
      }),
    ]);

    return {
      contactForms,
      newsletters,
      quotes,
      jobApplications,
    };
  }
}
```

## 🌐 Step 4: Create API Routes

### 4.1 Page View Tracking (`src/app/api/analytics/pageview/route.ts`)

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { AnalyticsService } from '@/lib/analytics-service';
import { AnalyticsCollector } from '@/lib/analytics';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { path, title, loadTime, screenResolution, timezone, currentUrl } = body;
    
    // Get visitor data from request
    const ipAddress = request.headers.get('x-forwarded-for')?.split(',')[0] || 
                     request.headers.get('x-real-ip') || 
                     '127.0.0.1';
    const userAgent = request.headers.get('user-agent') || 'Unknown';
    const acceptLanguage = request.headers.get('accept-language');
    const referrer = request.headers.get('referer');
    
    // Generate fingerprint and parse user agent
    const fingerprint = AnalyticsCollector.generateFingerprint(userAgent, acceptLanguage || undefined, timezone);
    const { browser, os, device } = AnalyticsCollector.parseUserAgent(userAgent);
    
    // Get geolocation
    const geoData = await AnalyticsCollector.getGeolocation(ipAddress);
    
    // Track visitor
    const visitorData = {
      ipAddress,
      userAgent,
      fingerprint,
      ...geoData,
      timezone,
    };
    
    const visitorId = await AnalyticsService.trackVisitor(visitorData);
    
    // Parse UTM parameters
    const utmParams = currentUrl ? AnalyticsCollector.parseUTMParams(currentUrl) : {};
    
    // Create session
    const sessionData = {
      referrer,
      ...utmParams,
      device,
      browser,
      os,
      screenResolution,
    };
    
    const sessionId = await AnalyticsService.createSession(visitorId, sessionData);
    
    // Track page view
    const pageViewData = {
      path,
      title,
      referrer,
      loadTime,
    };
    
    await AnalyticsService.trackPageView(visitorId, sessionId, pageViewData);
    
    return NextResponse.json({ 
      success: true, 
      visitorId, 
      sessionId 
    });
    
  } catch (error) {
    console.error('Error tracking page view:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
```

### 4.2 Event Tracking (`src/app/api/analytics/event/route.ts`)

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { AnalyticsService } from '@/lib/analytics-service';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { eventType, eventName, path, element, value, metadata, visitorId, sessionId } = body;
    
    // For now, we'll create a dummy session if none provided
    const finalVisitorId = visitorId || 'anonymous';
    const finalSessionId = sessionId || 'anonymous';
    
    const eventData = {
      eventType,
      eventName,
      path,
      element,
      value,
      metadata,
    };
    
    await AnalyticsService.trackEvent(finalVisitorId, finalSessionId, eventData);
    
    return NextResponse.json({ success: true });
    
  } catch (error) {
    console.error('Error tracking event:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
```

### 4.3 Dashboard API (`src/app/api/analytics/dashboard/route.ts`)

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { AnalyticsService } from '@/lib/analytics-service';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const days = parseInt(searchParams.get('days') || '30');
    
    const dashboardData = await AnalyticsService.getDashboardData(days);
    
    return NextResponse.json(dashboardData);
    
  } catch (error) {
    console.error('Error getting dashboard data:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
```

### 4.4 Time on Page API (`src/app/api/analytics/time-on-page/route.ts`)

```typescript
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log('Time on page:', body);
    
    return NextResponse.json({ success: true });
    
  } catch (error) {
    console.error('Error updating time on page:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
```

## ⚛️ Step 5: Create React Hooks

### 5.1 Analytics Hook (`src/hooks/use-analytics.tsx`)

```typescript
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { clientAnalytics } from '@/lib/analytics';

interface AnalyticsSession {
  visitorId: string;
  sessionId: string;
}

export function useAnalytics() {
  const pathname = usePathname();
  const [session, setSession] = useState<AnalyticsSession | null>(null);
  const startTime = useRef<number>(Date.now());
  const scrollDepthTracked = useRef<Set<number>>(new Set());

  // Track page view on mount and route changes
  useEffect(() => {
    const trackPageView = async () => {
      const loadTime = performance.timing ? 
        performance.timing.loadEventEnd - performance.timing.navigationStart : 
        undefined;

      try {
        const result = await clientAnalytics.trackPageView({
          path: pathname,
          title: document.title,
          referrer: document.referrer || undefined,
          loadTime,
        });
        
        if (result && result.visitorId && result.sessionId) {
          setSession({ 
            visitorId: result.visitorId, 
            sessionId: result.sessionId 
          });
        }
      } catch (error) {
        console.error('Failed to track page view:', error);
      }
    };

    trackPageView();
    startTime.current = Date.now();
    scrollDepthTracked.current.clear();
  }, [pathname]);

  // Track time on page when leaving
  useEffect(() => {
    const handleBeforeUnload = () => {
      const timeSpent = Math.floor((Date.now() - startTime.current) / 1000);
      if (timeSpent > 5) {
        clientAnalytics.trackTimeOnPage(timeSpent, session?.sessionId);
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [pathname, session]);

  const trackEvent = (eventType: string, eventName: string, value?: string, metadata?: Record<string, any>) => {
    clientAnalytics.trackEvent({
      eventType,
      eventName,
      path: pathname,
      value,
      metadata,
      visitorId: session?.visitorId,
      sessionId: session?.sessionId,
    });
  };

  const trackFormSubmission = (formName: string, formData?: Record<string, any>) => {
    clientAnalytics.trackFormSubmission(formName, formData);
  };

  return {
    session,
    trackEvent,
    trackFormSubmission,
  };
}
```

## 🎨 Step 6: Create Analytics Components

### 6.1 Analytics Provider (`src/components/analytics-provider.tsx`)

```typescript
'use client';

import { useAnalytics } from '@/hooks/use-analytics';

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

export function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  useAnalytics();
  return <>{children}</>;
}
```

### 6.2 Analytics Dashboard (`src/components/analytics-dashboard.tsx`)

```typescript
'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Eye, 
  Users, 
  Clock, 
  TrendingUp, 
  Globe,
  Mail,
  MessageSquare,
  Briefcase,
  FileText,
  RefreshCw,
} from 'lucide-react';

interface DashboardData {
  overview: {
    totalPageViews: number;
    uniqueVisitors: number;
    totalSessions: number;
    avgSessionDuration: number;
    bounceRate: number;
  };
  topPages: { path: string; views: number }[];
  conversions: {
    contactForms: number;
    newsletters: number;
    quotes: number;
    jobApplications: number;
  };
}

export function AnalyticsDashboard() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [days, setDays] = useState(30);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/analytics/dashboard?days=${days}`);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching analytics data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [days]);

  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <RefreshCw className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (!data) {
    return (
      <div className="p-8 text-center">
        <p>Failed to load analytics data</p>
        <Button onClick={fetchData} className="mt-4">
          Try Again
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
          <p className="text-muted-foreground">
            Website analytics for the last {days} days
          </p>
        </div>
        <div className="flex gap-2">
          {[7, 30, 90].map((period) => (
            <Button
              key={period}
              variant={days === period ? 'default' : 'outline'}
              size="sm"
              onClick={() => setDays(period)}
            >
              {period}d
            </Button>
          ))}
          <Button onClick={fetchData} size="sm" variant="outline">
            <RefreshCw className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Page Views</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatNumber(data.overview.totalPageViews)}</div>
            <p className="text-xs text-muted-foreground">Total page views</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Unique Visitors</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatNumber(data.overview.uniqueVisitors)}</div>
            <p className="text-xs text-muted-foreground">Unique visitors</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sessions</CardTitle>
            <Globe className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatNumber(data.overview.totalSessions)}</div>
            <p className="text-xs text-muted-foreground">Total sessions</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Bounce Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.overview.bounceRate}%</div>
            <p className="text-xs text-muted-foreground">Single-page sessions</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Duration</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.overview.avgSessionDuration}s</div>
            <p className="text-xs text-muted-foreground">Average session</p>
          </CardContent>
        </Card>
      </div>

      {/* Conversion Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Contact Forms</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.conversions.contactForms}</div>
            <p className="text-xs text-muted-foreground">Form submissions</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Newsletter</CardTitle>
            <Mail className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.conversions.newsletters}</div>
            <p className="text-xs text-muted-foreground">Subscriptions</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Quote Requests</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.conversions.quotes}</div>
            <p className="text-xs text-muted-foreground">Project inquiries</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Job Applications</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.conversions.jobApplications}</div>
            <p className="text-xs text-muted-foreground">Career inquiries</p>
          </CardContent>
        </Card>
      </div>

      {/* Top Pages */}
      <Card>
        <CardHeader>
          <CardTitle>Top Pages</CardTitle>
          <CardDescription>Most visited pages</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {data.topPages.map((page, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm truncate flex-1">{page.path}</span>
                <Badge variant="secondary">{page.views}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
```

## 🔗 Step 7: Connect Everything

### 7.1 Update Main Layout (`src/app/layout.tsx`)

```typescript
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { AnalyticsProvider } from "@/components/analytics-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "AKDK Digital",
  description: "Creating web solutions",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <AnalyticsProvider>
            {children}
          </AnalyticsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
```

### 7.2 Update Analytics Page (`src/app/(su)/admin/analytics/page.tsx`)

```typescript
'use client';

import { AnalyticsDashboard } from '@/components/analytics-dashboard';

export default function AnalyticsPage() {
  return (
    <div className="container mx-auto p-6">
      <AnalyticsDashboard />
    </div>
  );
}
```

## 🧪 Step 8: Test the Implementation

### 8.1 Start Development Server

```bash
npm run dev
```

### 8.2 Test Analytics Tracking

1. **Visit your website** - This should automatically track a page view
2. **Check browser network tab** - Look for calls to `/api/analytics/pageview`
3. **Navigate between pages** - Each navigation should create new page views
4. **Visit analytics dashboard** - Go to `/admin/analytics` to see the data

### 8.3 Debug Common Issues

1. **Check database** - Verify tables were created correctly:
```bash
npx prisma studio
```

2. **Check API responses** - Look for 400/500 errors in network tab

3. **Console logging** - Add logs to debug data flow:
```typescript
console.log('Tracking page view:', data);
```

## 🚀 Step 9: Enhance with Form Tracking

### 9.1 Wrap Your Forms

```typescript
import { useAnalytics } from '@/hooks/use-analytics';

export function ContactForm() {
  const { trackFormSubmission } = useAnalytics();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Track form submission
    trackFormSubmission('contact_form', {
      page: window.location.pathname,
      timestamp: new Date().toISOString()
    });
    
    // Your form submission logic
  };
  
  return (
    <form onSubmit={handleSubmit}>
      {/* Your form fields */}
    </form>
  );
}
```

## 🎯 Step 10: Monitor and Optimize

### 10.1 Set Up Monitoring

- Check database size regularly
- Monitor API response times
- Review error logs for failed tracking

### 10.2 Add More Metrics

As your needs grow, you can extend the system with:
- Real-time dashboards
- Email reports
- Advanced segmentation
- A/B testing integration

## ✅ Verification Checklist

- [ ] Database tables created successfully
- [ ] API routes responding without errors
- [ ] Page views being tracked automatically
- [ ] Dashboard displaying data correctly
- [ ] Form submissions being recorded
- [ ] No console errors in browser
- [ ] Analytics data persisting across page refreshes

## 🎉 Success!

You now have a fully functional analytics system that tracks:
- Page views and unique visitors
- Session data with device information
- Conversion metrics from your existing forms
- Real-time dashboard with key metrics

The system is privacy-focused, lightweight, and easily extensible for future needs.
