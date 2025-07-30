# Analytics Implementation Guide

This document explains the comprehensive analytics system implemented for the AKDK Agency website.

## 🚀 Features

### 📊 Website Analytics
- **Page Views Tracking** - Track every page visit with detailed metadata
- **Unique Visitors** - Identify and track unique users using IP + browser fingerprinting
- **Session Tracking** - Monitor user sessions with duration, page count, and activity
- **Real-time Analytics** - Live tracking of user interactions
- **Geolocation** - Track visitor countries, cities, and regions
- **Device Analytics** - Browser, OS, and device type detection
- **Referrer Analysis** - Track traffic sources and UTM parameters

### 🎯 Conversion Tracking
- **Contact Form Submissions** - Track all contact form interactions
- **Newsletter Subscriptions** - Monitor newsletter signup success
- **Quote Requests** - Track project inquiry forms
- **Job Applications** - Monitor career page interactions
- **Custom Events** - Track any custom user interactions

### 📈 Advanced Analytics
- **Bounce Rate Calculation** - Automatic bounce rate monitoring
- **Time on Page** - Track user engagement duration
- **Scroll Depth** - Monitor how far users scroll on pages
- **Click Tracking** - Track button clicks, links, and downloads
- **Form Analytics** - Track form focus, completion, and abandonment

## 🏗️ Architecture

### Database Models

#### Core Analytics Tables
```prisma
- Visitor      # Unique visitors with IP, geolocation, device info
- Session      # User sessions with UTM params, referrer data
- PageView     # Individual page visits with performance metrics
- AnalyticsEvent # Custom events (clicks, downloads, form submissions)
- DailyAnalytics # Pre-aggregated daily statistics
```

#### Existing Conversion Tables
```prisma
- contactformdetails    # Contact form submissions
- Subscriber           # Newsletter subscriptions  
- QuestionnaireSubmission # Quote/project requests
- JobApplication       # Career applications
```

### Key Components

#### 1. Analytics Collector (`/src/lib/analytics.ts`)
Core utility functions for:
- IP address extraction
- User agent parsing with UAParser.js
- UTM parameter parsing
- Browser fingerprinting
- Geolocation lookup

#### 2. Analytics Service (`/src/lib/analytics-service.ts`)
Database operations for:
- Visitor tracking and identification
- Session management
- Event logging
- Dashboard data aggregation
- Daily analytics snapshots

#### 3. Middleware (`/src/middleware.ts`)
Server-side tracking that:
- Captures visitor data on every request
- Enriches requests with analytics metadata
- Filters out admin routes and static files

#### 4. API Routes (`/src/app/api/analytics/`)
- `POST /api/analytics/pageview` - Track page views
- `POST /api/analytics/event` - Track custom events
- `POST /api/analytics/time-on-page` - Update time spent
- `GET /api/analytics/dashboard` - Get dashboard data

#### 5. React Hooks (`/src/hooks/use-analytics.tsx`)
Client-side tracking with:
- Automatic page view tracking
- Time on page monitoring
- Scroll depth tracking
- Event tracking utilities

#### 6. Analytics Components (`/src/components/analytics-components.tsx`)
Ready-to-use components:
- `<AnalyticsForm>` - Auto-tracking forms
- `<AnalyticsButton>` - Click-tracking buttons
- `<AnalyticsLink>` - Link tracking with download detection

## 🎛️ Analytics Dashboard

Access the analytics dashboard at `/admin/analytics`

### Dashboard Features
- **Overview Cards** - Key metrics summary
- **Traffic Trends** - Daily visitor charts
- **Popular Content** - Top pages and referrers
- **Device & Location** - Visitor demographics
- **Conversion Metrics** - Form submissions and leads
- **Real-time Events** - Live activity feed

### Metrics Available
- Total page views
- Unique visitors
- Average session duration
- Bounce rate
- Top pages by traffic
- Traffic sources and referrers
- Geographic distribution
- Device/browser breakdown
- Conversion rates by form type

## 🔧 Implementation

### Automatic Tracking

The system automatically tracks:
```typescript
// Page views (via useAnalytics hook)
- Every route change
- Page load times
- Referrer information
- User agent details

// User interactions (via AnalyticsProvider)
- External link clicks
- File downloads
- Button clicks
- Form interactions
```

### Manual Event Tracking

```typescript
import { useAnalytics } from '@/hooks/use-analytics'

function MyComponent() {
  const { trackEvent, trackFormSubmission } = useAnalytics()
  
  // Track custom events
  const handleCustomAction = () => {
    trackEvent('action', 'custom_action', 'value', { 
      metadata: 'additional data' 
    })
  }
  
  // Track form submissions
  const handleFormSubmit = () => {
    trackFormSubmission('contact_form', { formData })
  }
}
```

### Using Analytics Components

```typescript
import { 
  AnalyticsForm, 
  AnalyticsButton, 
  AnalyticsLink 
} from '@/components/analytics-components'

// Auto-tracking form
<AnalyticsForm formName="contact_form" onSubmit={handleSubmit}>
  <input name="email" />
  <AnalyticsButton eventName="submit_contact">Submit</AnalyticsButton>
</AnalyticsForm>

// Auto-tracking link
<AnalyticsLink href="/brochure.pdf" eventName="brochure_download">
  Download Brochure
</AnalyticsLink>
```

## ⚙️ Configuration

### Environment Setup

The analytics system uses your existing Prisma setup with SQLite. No additional configuration required.

### Geolocation Service

Currently using ip-api.com (free tier). For production, consider upgrading to:
- MaxMind GeoIP2
- ipstack.com
- ipgeolocation.io

Update the geolocation service in `/src/lib/analytics.ts`:

```typescript
static async getGeolocation(ip: string): Promise<Partial<VisitorData>> {
  // Replace with your preferred service
  const response = await fetch(`your-geo-service-url/${ip}`)
  // ...
}
```

### Daily Analytics Snapshots

Set up a cron job to generate daily analytics:

```bash
# Daily at midnight
0 0 * * * curl -X POST https://yoursite.com/api/analytics/dashboard
```

Or call manually:
```typescript
// Generate snapshot for specific date
await fetch('/api/analytics/dashboard', {
  method: 'POST',
  body: JSON.stringify({ date: '2024-01-01' })
})
```

## 📊 Data Privacy

### GDPR Compliance
- IP addresses are hashed for privacy
- No personal data is stored without consent
- Users can opt-out via Do Not Track header
- Data retention policies can be implemented

### Data Minimization
- Only essential analytics data is collected
- Fingerprinting is minimal and privacy-focused
- Geolocation is city-level, not precise coordinates

## 🚀 Getting Started

1. **Database Migration** (Already completed)
   ```bash
   npx prisma migrate dev --name add_analytics_tables
   ```

2. **Analytics Provider** (Already added to layout)
   ```typescript
   // src/app/layout.tsx
   <AnalyticsProvider>
     {children}
     <AnalyticsTracker />
   </AnalyticsProvider>
   ```

3. **Start Tracking**
   - Page views are automatically tracked
   - Form submissions are tracked with AnalyticsForm
   - Custom events via useAnalytics hook

4. **View Dashboard**
   - Navigate to `/admin/analytics`
   - View real-time and historical data

## 📋 Metrics You Can Track

### Traffic Metrics
- [ ] Page views (total and unique)
- [ ] Session duration
- [ ] Bounce rate
- [ ] Pages per session
- [ ] Traffic sources
- [ ] Geographic distribution
- [ ] Device and browser analytics

### Conversion Metrics  
- [ ] Contact form submissions
- [ ] Newsletter signups
- [ ] Quote requests
- [ ] Job applications
- [ ] Download tracking
- [ ] Goal completions

### Engagement Metrics
- [ ] Time on page
- [ ] Scroll depth
- [ ] Click tracking
- [ ] Form abandonment
- [ ] User flow analysis

### Business Metrics
- [ ] Lead generation
- [ ] Conversion funnels
- [ ] Campaign performance (UTM tracking)
- [ ] ROI tracking

## 🔮 Future Enhancements

### Advanced Features to Add
1. **Real-time Dashboard** - WebSocket-based live updates
2. **Cohort Analysis** - User retention tracking
3. **Funnel Analysis** - Multi-step conversion tracking
4. **A/B Testing** - Built-in experiment framework
5. **Custom Dashboards** - User-defined metrics
6. **Data Export** - CSV/Excel export functionality
7. **Alerts & Notifications** - Automated reporting
8. **Advanced Segmentation** - User behavior grouping

### Integration Opportunities
- **Google Analytics** - Dual tracking setup
- **Social Media Pixels** - Facebook, LinkedIn tracking
- **Email Marketing** - Mailchimp, SendGrid integration
- **CRM Systems** - HubSpot, Salesforce sync
- **Ad Platforms** - Google Ads, Facebook Ads optimization

## 🛠️ Troubleshooting

### Common Issues

1. **No data appearing in dashboard**
   - Check if AnalyticsProvider is added to layout
   - Verify API routes are accessible
   - Check browser console for errors

2. **Geolocation not working**
   - Verify internet connection for ip-api.com
   - Check rate limits on free tier
   - Consider upgrading to paid service

3. **High bounce rate**
   - Review page load times
   - Check mobile responsiveness
   - Analyze traffic sources

### Debug Mode

Enable debug logging:
```typescript
// Add to analytics.ts
const DEBUG = process.env.NODE_ENV === 'development'

if (DEBUG) {
  console.log('Analytics:', data)
}
```

## 📧 Support

For questions or issues with the analytics implementation:
1. Check this documentation
2. Review the code comments
3. Test with browser developer tools
4. Monitor server logs for errors

The analytics system is designed to be privacy-focused, performant, and comprehensive. It provides valuable insights while respecting user privacy and maintaining fast page load times.
