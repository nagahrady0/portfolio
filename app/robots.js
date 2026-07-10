export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://nagahrady.vercel.app/sitemap.xml',
  }
}