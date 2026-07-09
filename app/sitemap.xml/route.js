export async function GET() {
  const locales = ['en', 'ar'];
  const baseUrl = 'https://nagahrady.vercel.app';

  // بنبني نص الـ XML الصافي بإيدينا عشان نضمن ميتداخلش مع أي Layout
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  // الرابط الرئيسي الافتراضي
  xml += `  <url>\n    <loc>${baseUrl}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>1.0</priority>\n  </url>\n`;

  // روابط اللغات
  locales.forEach((locale) => {
    xml += `  <url>\n    <loc>${baseUrl}/${locale}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>1.0</priority>\n  </url>\n`;
  });

  xml += `</urlset>`;

  // بنرجع الـ Response وبنقول للمتصفح وجوجل: ده XML صريح وصافي
  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}