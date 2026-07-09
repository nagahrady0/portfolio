export default function sitemap() {
  const locales = ['en', 'ar'];
  const baseUrl = 'https://nagahrady.vercel.app';

  // توليد روابط الصفحات لكل لغة تلقائياً
  const sitemapEntries = locales.flatMap((locale) => [
    {
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
  ]);

  // إضافة الرابط الرئيسي القديم كافتراضي عشان جوجل ميتلغبطش
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    ...sitemapEntries,
  ];
}