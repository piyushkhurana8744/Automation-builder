import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Define the routes that should be public (no authentication required)
const isPublicRoute = createRouteMatcher([
    '/',
    '/sign-in(.*)',
    '/sign-up(.*)',
    '/api/clerk-webhook',
    '/api/drive-activity/notification',
    '/api/payment/success',
    '/_next/static/(.*)'
]);

// Define the routes that should be ignored by the middleware
const isIgnoredRoute = createRouteMatcher([
  '/api/auth/callback/discord',
  '/api/auth/callback/notion',
  '/api/auth/callback/slack',
  '/api/flow(.*)',
  '/api/cron/wait(.*)',
]);

export default clerkMiddleware((auth, request) => {
  if (!isPublicRoute(request) && !isIgnoredRoute(request)) {
    // Protect the route if it's not public or ignored
    auth().protect();
  }
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
