import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'ar'],
  defaultLocale: 'en'
});

export const config = {
  // ضيفنا sitemap|robots صراحة جوه الاستثناء عشان الميدل وير يرفع إيده عنهم تماماً
  matcher: ['/((?!api|_next|sitemap\\.xml|robots\\.txt|.*\\..*).*)']
};