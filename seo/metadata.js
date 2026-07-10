export function getMetadata(locale) {
  const isAr = locale === 'ar';
  const baseUrl = "https://nagahrady.vercel.app";

  const title = isAr
    ? "نجاح راضي | مصمم مواقع ومطور واجهات أمامية"
    : "Nagah Rady | Web Designer & Front End Developer";

  const description = isAr
    ? "مصمم مواقع محترف وشغوف بخبرة في إنشاء مواقع جذابة وسهلة الاستخدام."
    : "Skilled and passionate web designer with experience in creating visually appealing and user-friendly websites.";

  return {
    metadataBase: new URL(baseUrl),
    title,
    description,

    // الحتة السحرية اللي ناقصاك عشان جوجل والأرشفة القديمة
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        en: `${baseUrl}/en`,
        ar: `${baseUrl}/ar`,
        'x-default': baseUrl, // اللينك الرئيسي القديم يفضل هو الواجهة الافتراضية
      },
    },

    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}`,
      siteName: "Nagah Rady Portfolio",
      images: [
        { url: "/og-image.png", width: 1200, height: 630, alt: "Nagah Rady Portfolio" },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.png"],
    },
    verification: {
      google: "i-xPsKLIMHewIeYku54-cojkMuZxFjbTtDqz72AyGfU",
    },
  };
}