import { NextRequest } from 'next/server';
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
  
  static getClientIP(request: NextRequest): string {
    const forwarded = request.headers.get('x-forwarded-for');
    const realIP = request.headers.get('x-real-ip');
    const remoteAddr = request.headers.get('x-vercel-forwarded-for');
    
    if (forwarded) {
      return forwarded.split(',')[0].trim();
    }
    if (realIP) {
      return realIP;
    }
    if (remoteAddr) {
      return remoteAddr;
    }
    
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
      return result.device.type; // mobile, tablet, etc.
    }
    
    // Fallback logic
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
    // Simple fingerprinting - in production, you might want a more sophisticated approach
    const data = `${userAgent}-${acceptLanguage || ''}-${timezone || ''}`;
    return Buffer.from(data).toString('base64').substring(0, 32);
  }

  // Get geolocation from IP (you'll need to integrate with a service like ipapi or maxmind)
  static async getGeolocation(ip: string): Promise<Partial<VisitorData>> {
    try {
      // Free IP geolocation service - consider upgrading to a paid service for production
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
  // Session storage for visitor/session IDs
  getSessionInfo: () => {
    if (typeof window === 'undefined') return null
    const stored = sessionStorage.getItem('analytics-session')
    return stored ? JSON.parse(stored) : null
  },

  setSessionInfo: (visitorId: string, sessionId: string) => {
    if (typeof window === 'undefined') return
    sessionStorage.setItem('analytics-session', JSON.stringify({ visitorId, sessionId }))
  },

  // Track page view
  trackPageView: async (data: Partial<PageViewData>) => {
    try {
      const payload = {
        ...data,
        timestamp: new Date().toISOString(),
        screenResolution: `${screen.width}x${screen.height}`,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        url: window.location.href, // Include full URL for UTM parsing
      };
      
      console.log('Tracking page view:', payload); // Debug log
      
      const response = await fetch('/api/analytics/pageview', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        console.error('Analytics API error:', errorData);
        throw new Error(`HTTP ${response.status}: ${errorData.error || 'Unknown error'}`);
      }
      
      const result = await response.json();
      console.log('Page view tracked successfully:', result); // Debug log
      
      // Store session info for future events
      if (result.visitorId && result.sessionId) {
        clientAnalytics.setSessionInfo(result.visitorId, result.sessionId)
      }
      
      return result;
    } catch (error) {
      console.error('Error tracking page view:', error);
      throw error;
    }
  },

  // Track custom events
  trackEvent: async (data: AnalyticsEventData) => {
    try {
      const sessionInfo = clientAnalytics.getSessionInfo()
      
      const payload = {
        ...data,
        ...sessionInfo, // Include visitorId and sessionId if available
        timestamp: new Date().toISOString(),
      };
      
      console.log('Tracking event:', payload); // Debug log
      
      const response = await fetch('/api/analytics/event', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        console.error('Event tracking API error:', errorData);
        throw new Error(`HTTP ${response.status}: ${errorData.error || 'Unknown error'}`);
      }
      
      const result = await response.json();
      console.log('Event tracked successfully:', result); // Debug log
      return result;
    } catch (error) {
      console.error('Error tracking event:', error);
      throw error;
    }
  },

  // Track form submissions
  trackFormSubmission: async (formName: string, formData?: Record<string, any>) => {
    await clientAnalytics.trackEvent({
      eventType: 'form_submit',
      eventName: formName,
      path: window.location.pathname,
      value: formName,
      metadata: formData,
    });
  },

  // Track downloads
  trackDownload: async (fileName: string, fileUrl: string) => {
    await clientAnalytics.trackEvent({
      eventType: 'download',
      eventName: 'file_download',
      path: window.location.pathname,
      value: fileName,
      metadata: { fileUrl, fileName },
    });
  },

  // Track scroll depth
  trackScrollDepth: async (depth: number) => {
    await clientAnalytics.trackEvent({
      eventType: 'scroll',
      eventName: 'scroll_depth',
      path: window.location.pathname,
      value: `${depth}%`,
      metadata: { depth },
    });
  },

  // Track time on page when user leaves
  trackTimeOnPage: async (timeSpent: number) => {
    try {
      const sessionInfo = clientAnalytics.getSessionInfo()
      
      const payload = {
        path: window.location.pathname,
        timeSpent,
        timestamp: new Date().toISOString(),
        ...sessionInfo, // Include session info if available
      };
      
      console.log('Tracking time on page:', payload); // Debug log
      
      const response = await fetch('/api/analytics/time-on-page', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        console.error('Time tracking API error:', errorData);
        // Don't throw here as this is called during page unload
      }
    } catch (error) {
      console.error('Error tracking time on page:', error);
      // Don't throw here as this is called during page unload
    }
  },
};

// Utility functions for analytics data processing
export const analyticsUtils = {
  calculateBounceRate: (sessions: any[]): number => {
    if (sessions.length === 0) return 0;
    const bouncedSessions = sessions.filter(session => session.pageCount <= 1);
    return (bouncedSessions.length / sessions.length) * 100;
  },

  calculateAverageSessionDuration: (sessions: any[]): number => {
    if (sessions.length === 0) return 0;
    const totalDuration = sessions.reduce((sum, session) => sum + (session.duration || 0), 0);
    return Math.round(totalDuration / sessions.length);
  },

  formatDuration: (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  },

  getTopItems: (items: any[], key: string, limit: number = 10) => {
    const counts = items.reduce((acc, item) => {
      const value = item[key];
      acc[value] = (acc[value] || 0) + 1;
      return acc;
    }, {});

    return Object.entries(counts)
      .sort(([,a], [,b]) => (b as number) - (a as number))
      .slice(0, limit)
      .map(([name, count]) => ({ name, count }));
  },
};
