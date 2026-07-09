import "../globals.css";

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
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
  const isAr = locale === 'ar';
  const baseUrl = "https://nagahrady.vercel.app";

  return {
    metadataBase: new URL(baseUrl),
    title: isAr
      ? "نجاح راضي | مصمم مواقع ومطور واجهات أمامية"
      : "Nagah Rady | Web Designer & Front End Developer",
    description: isAr
      ? "مصمم مواقع محترف وشغوف بخبرة في إنشاء مواقع جذابة وسهلة الاستخدام."
      : "Skilled and passionate web designer with experience in creating visually appealing and user-friendly websites.",
    
    // 👇 الحتة السحرية اللي ناقصاك عشان جوجل والأرشفة القديمة
    alternates: {
      canonical: `${baseUrl}/${locale === 'en' ? '' : locale}`,
      languages: {
        en: `${baseUrl}/en`,
        ar: `${baseUrl}/ar`,
        'x-default': baseUrl, // اللينك الرئيسي القديم يفضل هو الواجهة الافتراضية
      },
    },

    openGraph: {
      title: isAr
        ? "نجاح راضي | مصمم مواقع ومطور واجهات أمامية"
        : "Nagah Rady | Web Designer & Front End Developer",
      description: isAr
        ? "مصمم مواقع محترف وشغوف بخبرة في إنشاء مواقع جذابة وسهلة الاستخدام."
        : "Skilled and passionate web designer with experience in creating visually appealing and user-friendly websites.",
      url: `${baseUrl}/${locale}`,
      siteName: "Nagah Rady Portfolio",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "Nagah Rady Portfolio",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: isAr
        ? "نجاح راضي | مصمم مواقع ومطور واجهات أمامية"
        : "Nagah Rady | Web Designer & Front End Developer",
      description: isAr
        ? "مصمم مواقع محترف وشغوف بخبرة في إنشاء مواقع جذابة وسهلة الاستخدام."
        : "Skilled and passionate web designer with experience in creating visually appealing and user-friendly websites.",
      images: ["/og-image.png"],
    },
    verification: {
      google: "i-xPsKLIMHewIeYku54-cojkMuZxFjbTtDqz72AyGfU",
    },
  };
}

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
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