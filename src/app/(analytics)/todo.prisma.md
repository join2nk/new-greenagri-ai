```prisma


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