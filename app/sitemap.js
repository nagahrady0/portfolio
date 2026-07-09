export default function sitemap() {
  const locales = ['en', 'ar'];
  const baseUrl = 'https://nagahrady.vercel.app';

  return locales.map((locale) => ({
    url: `${baseUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: locale === 'en' ? 1.0 : 0.9,
  }));
}