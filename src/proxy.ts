import { NextResponse, NextRequest } from 'next/server'
import { analyticsMiddleware } from '@/app/(analytics)/_middleware/analytics-middleware'; 


export async function proxy(request: NextRequest) {
  const response = NextResponse.next();
  await analyticsMiddleware(request, response);
  return response;
}


// This middleware will run for all routes except those that match the specified patterns.
// /((?!api/analytics|_next|favicon.ico|.*\\..*).*)
// 1. Exclude API routes under `api/analytics`
// 2. Exclude Next.js internal routes like `_next` and `favicon.ico`
 
export const config = {
  matcher: '/((?!api/analytics|_next|favicon.ico|.*\\..*).*)',
}
