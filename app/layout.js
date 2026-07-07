import "./globals.css";
import I18nProvider from "@/providers/I18nProvider";

import { Cairo, Inter } from "next/font/google";

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-ar",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-en",
});
export const metadata = {
  metadataBase: new URL("https://nagahrady.vercel.app/"),
  title: "Nagah Rady | Web Designer & Front End Developer",
  description: "Skilled and passionate web designer with experience in creating visually appealing and user-friendly websites.",
  openGraph: {
    title: "Nagah Rady | Web Designer & Front End Developer",
    description: "Skilled and passionate web designer with experience in creating visually appealing and user-friendly websites.",
    url: "https://nagahrady.vercel.app/",
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
    title: "Nagah Rady | Web Designer & Front End Developer",
    description: "Skilled and passionate web designer with experience in creating visually appealing and user-friendly websites.",
    images: ["/og-image.png"],
  },
  verification: {
    google: "i-xPsKLIMHewIeYku54-cojkMuZxFjbTtDqz72AyGfU",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="theme-dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
            const theme = localStorage.getItem('theme') || 'theme-dark';
            document.documentElement.className = theme;
          `
        }} />
      </head>
      <body className={`${cairo.variable} ${inter.variable}`}>
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
