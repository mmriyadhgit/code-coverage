

import { NextResponse, type NextRequest } from 'next/server';
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  console.log(`midleware->${request.url}`);
  const response = NextResponse.next();
  if (request.nextUrl.pathname.startsWith('/bugs')) {
   
    response.cookies.set('page', 'bugs');
  }
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|__/fonts|favicon.ico).*)', '/'
  ],
}