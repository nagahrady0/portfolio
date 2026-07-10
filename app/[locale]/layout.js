import "../globals.css";

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { getMetadata } from '@/seo/metadata';
import { Cairo, Inter } from "next/font/google";

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-ar",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-en",
});

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }];
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return getMetadata(locale);
}

export default async function RootLayout({ children, params }) {
  const resolvedParams = await params;
  // إذا كانت الـ locale غير موجودة (undefined) اجعلها الافتراضية 'en' فوراً لمنع اعتراض جوجل
  const locale = resolvedParams?.locale || 'en';
  
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'} className="theme-dark" suppressHydrationWarning>
      <body className={`${cairo.variable} ${inter.variable}`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}