import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';

const intlMiddleware = createMiddleware({
  locales: ['en', 'ar'],
  defaultLocale: 'en'
});

export default function proxy(request) {
  const response = intlMiddleware(request);

  if (response.status === 307 || response.status === 308) {
    return NextResponse.redirect(response.headers.get('location'), 308);
  }

  return response;
}

export const config = {
  matcher: ['/((?!api|_next|sitemap\\.xml|robots\\.txt|.*\\..*).*)']
};