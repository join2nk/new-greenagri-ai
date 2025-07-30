import { db } from '@/db/prisma';
import { AnalyticsCollector, VisitorData, SessionData, PageViewData, AnalyticsEventData } from '@/app/(analytics)/_lib/analytics';

export class AnalyticsService {
  
  // Create or update visitor
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
        // Update existing visitor
        await db.visitor.update({
          where: { id: existing.id },
          data: {
            lastVisitAt: new Date(),
            totalVisits: { increment: 1 },
            userAgent: visitorData.userAgent, // Update in case it changed
            country: visitorData.country || existing.country,
            city: visitorData.city || existing.city,
            region: visitorData.region || existing.region,
            timezone: visitorData.timezone || existing.timezone,
          },
        });
        return existing.id;
      } else {
        // Create new visitor
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

  // Create session
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

      // Create new session
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

  // Track page view
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

      // Update session page count
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

  // Track custom event
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

  // Update time on page
  static async updateTimeOnPage(path: string, sessionId: string, timeSpent: number): Promise<void> {
    try {
      // Find the most recent page view for this path and session
      const pageView = await db.pageView.findFirst({
        where: {
          sessionId,
          path,
        },
        orderBy: {
          timestamp: 'desc',
        },
      });

      if (pageView) {
        await db.pageView.update({
          where: { id: pageView.id },
          data: { timeOnPage: timeSpent },
        });
      }
    } catch (error) {
      console.error('Error updating time on page:', error);
      throw error;
    }
  }

  // End session
  static async endSession(sessionId: string): Promise<void> {
    try {
      const session = await db.session.findUnique({
        where: { id: sessionId },
      });

      if (session && session.isActive) {
        const endTime = new Date();
        const duration = Math.floor((endTime.getTime() - session.startTime.getTime()) / 1000);

        await db.session.update({
          where: { id: sessionId },
          data: {
            isActive: false,
            endTime,
            duration,
          },
        });
      }
    } catch (error) {
      console.error('Error ending session:', error);
      throw error;
    }
  }

  // Get analytics dashboard data
  static async getDashboardData(days: number = 30) {
    try {
      const startDate = new Date();
      startDate.setDate(startDate.getDate() - days);

      const [
        totalPageViews,
        uniqueVisitors,
        totalSessions,
        topPages,
        topReferrers,
        topCountries,
        deviceStats,
        recentEvents,
        dailyStats,
      ] = await Promise.all([
        // Total page views
        db.pageView.count({
          where: {
            timestamp: { gte: startDate },
          },
        }),

        // Unique visitors
        db.visitor.count({
          where: {
            firstVisitAt: { gte: startDate },
          },
        }),

        // Total sessions
        db.session.count({
          where: {
            startTime: { gte: startDate },
          },
        }),

        // Top pages
        db.pageView.groupBy({
          by: ['path'],
          _count: { path: true },
          where: {
            timestamp: { gte: startDate },
          },
          orderBy: {
            _count: { path: 'desc' },
          },
          take: 10,
        }),

        // Top referrers
        db.session.groupBy({
          by: ['referrer'],
          _count: { referrer: true },
          where: {
            startTime: { gte: startDate },
            referrer: { not: null },
          },
          orderBy: {
            _count: { referrer: 'desc' },
          },
          take: 10,
        }),

        // Top countries
        db.visitor.groupBy({
          by: ['country'],
          _count: { country: true },
          where: {
            firstVisitAt: { gte: startDate },
            country: { not: null },
          },
          orderBy: {
            _count: { country: 'desc' },
          },
          take: 10,
        }),

        // Device statistics
        db.session.groupBy({
          by: ['device'],
          _count: { device: true },
          where: {
            startTime: { gte: startDate },
            device: { not: null },
          },
        }),

        // Recent events
        db.analyticsEvent.findMany({
          where: {
            timestamp: { gte: startDate },
          },
          include: {
            visitor: {
              select: {
                country: true,
                city: true,
              },
            },
          },
          orderBy: {
            timestamp: 'desc',
          },
          take: 50,
        }),

        // Daily statistics
        this.getDailyStats(days),

      ]);

      return {
        overview: {
          totalPageViews,
          uniqueVisitors,
          totalSessions,
          avgSessionDuration: await this.getAvgSessionDuration(startDate),
          bounceRate: await this.getBounceRate(startDate),
        },
        topPages: topPages.map(p => ({ path: p.path, views: p._count.path })),
        topReferrers: topReferrers.map(r => ({ referrer: r.referrer, count: r._count.referrer })),
        topCountries: topCountries.map(c => ({ country: c.country, count: c._count.country })),
        deviceStats: deviceStats.map(d => ({ device: d.device, count: d._count.device })),
        recentEvents: recentEvents.map(event => ({
          ...event,
          metadata: event.metadata ? JSON.parse(event.metadata) : null,
        })),
        dailyStats,
        // conversions: conversionStats,
      };
    } catch (error) {
      console.error('Error getting dashboard data:', error);
      throw error;
    }
  }

  // Get daily statistics
  private static async getDailyStats(days: number) {
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);

    const result = await db.$queryRaw`
      SELECT 
        DATE(timestamp) as date,
        COUNT(*) as pageViews,
        COUNT(DISTINCT visitorId) as uniqueVisitors
      FROM PageView 
      WHERE timestamp >= ${startDate.toISOString()}
      GROUP BY DATE(timestamp)
      ORDER BY date DESC
    ` as any[];
    //   const result = await db.pageView.groupBy({
    //   by: ['timestamp'],
    //   _count: { _all: true },
    //   _countDistinct: { visitorId: true },
    //   where: {
    //   timestamp: { gte: startDate },
    //   },
    //   orderBy: {
    //   timestamp: 'desc',
    //   },
    // });

    return result.map(row => ({
      date: row.date,
      pageViews: Number(row.pageViews),
      uniqueVisitors: Number(row.uniqueVisitors),
    }));
  }


  // Get average session duration
  private static async getAvgSessionDuration(startDate: Date): Promise<number> {
    const result = await db.session.aggregate({
      _avg: { duration: true },
      where: {
        startTime: { gte: startDate },
        duration: { not: null },
      },
    });

    return Math.round(result._avg.duration || 0);
  }

  // Get bounce rate
  private static async getBounceRate(startDate: Date): Promise<number> {
    const [totalSessions, bouncedSessions] = await Promise.all([
      db.session.count({
        where: { startTime: { gte: startDate } },
      }),
      db.session.count({
        where: {
          startTime: { gte: startDate },
          pageCount: { lte: 1 },
        },
      }),
    ]);

    return totalSessions > 0 ? Math.round((bouncedSessions / totalSessions) * 100) : 0;
  }

  // Generate daily analytics snapshots (run this as a cron job)
  static async generateDailySnapshot(date?: Date): Promise<void> {
    const targetDate = date || new Date();
    targetDate.setHours(0, 0, 0, 0);
    
    const nextDay = new Date(targetDate);
    nextDay.setDate(nextDay.getDate() + 1);

    try {
      const [
        pageViews,
        uniqueVisitors,
        sessions,
        bounceRate,
        avgDuration,
        topPages,
        topReferrers,
        topCountries,
        topDevices,
      ] = await Promise.all([
        // Page views for the day
        db.pageView.count({
          where: {
            timestamp: { gte: targetDate, lt: nextDay },
          },
        }),

        // Unique visitors for the day
        db.visitor.count({
          where: {
            firstVisitAt: { gte: targetDate, lt: nextDay },
          },
        }),

        // Sessions for the day
        db.session.count({
          where: {
            startTime: { gte: targetDate, lt: nextDay },
          },
        }),


        // Bounce rate
        this.getBounceRate(targetDate),

        // Average session duration
        this.getAvgSessionDuration(targetDate),

        // Top pages
        db.pageView.groupBy({
          by: ['path'],
          _count: { path: true },
          where: { timestamp: { gte: targetDate, lt: nextDay } },
          orderBy: { _count: { path: 'desc' } },
          take: 10,
        }),

        // Top referrers
        db.session.groupBy({
          by: ['referrer'],
          _count: { referrer: true },
          where: {
            startTime: { gte: targetDate, lt: nextDay },
            referrer: { not: null },
          },
          orderBy: { _count: { referrer: 'desc' } },
          take: 10,
        }),

        // Top countries
        db.visitor.groupBy({
          by: ['country'],
          _count: { country: true },
          where: {
            firstVisitAt: { gte: targetDate, lt: nextDay },
            country: { not: null },
          },
          orderBy: { _count: { country: 'desc' } },
          take: 10,
        }),

        // Top devices
        db.session.groupBy({
          by: ['device'],
          _count: { device: true },
          where: {
            startTime: { gte: targetDate, lt: nextDay },
            device: { not: null },
          },
          orderBy: { _count: { device: 'desc' } },
          take: 10,
        }),
      ]);

      // Create or update daily analytics record
      await db.dailyAnalytics.upsert({
        where: { date: targetDate },
        update: {
          totalPageViews: pageViews,
          uniqueVisitors,
          totalSessions: sessions,
          bounceRate,
          avgSessionDuration: avgDuration,
          topPages: JSON.stringify(topPages.map(p => ({ path: p.path, views: p._count.path }))),
          topReferrers: JSON.stringify(topReferrers.map(r => ({ referrer: r.referrer, count: r._count.referrer }))),
          topCountries: JSON.stringify(topCountries.map(c => ({ country: c.country, count: c._count.country }))),
          topDevices: JSON.stringify(topDevices.map(d => ({ device: d.device, count: d._count.device }))),
        },
        create: {
          date: targetDate,
          totalPageViews: pageViews,
          uniqueVisitors,
          totalSessions: sessions,
          bounceRate,
          avgSessionDuration: avgDuration,
          topPages: JSON.stringify(topPages.map(p => ({ path: p.path, views: p._count.path }))),
          topReferrers: JSON.stringify(topReferrers.map(r => ({ referrer: r.referrer, count: r._count.referrer }))),
          topCountries: JSON.stringify(topCountries.map(c => ({ country: c.country, count: c._count.country }))),
          topDevices: JSON.stringify(topDevices.map(d => ({ device: d.device, count: d._count.device }))),
        },
      });

      console.log(`Daily analytics snapshot generated for ${targetDate.toISOString().split('T')[0]}`);
    } catch (error) {
      console.error('Error generating daily analytics snapshot:', error);
      throw error;
    }
  }
}
