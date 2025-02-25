import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: "%s | HN PWA",
    default: "HN PWA"
  },
  description: 'Progressive Web App frontend for Hacker News built with Next.js',
  applicationName: "HN PWA",
  authors: [
    { name: "Samuel Peets", url: "https://sampeets.com" },
  ],
  keywords: ["hackernews", "news", "react", "pwa", "progressive web app"],
  openGraph: {
    type: "website",
    url: "https://hn.sampeets.com",
    title: "HN PWA",
    description: "Progressive Web App frontend for Hacker News built with Next.js",
    siteName: "HN PWA",
    images: [
      { url: "https://hn.sampeets.com/web-app-manifest-512x512.png" }
    ]
  },
  appleWebApp: {
    capable: true,
    title: "HN PWA",
    statusBarStyle: "black-translucent",
  }
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-KLRFQTTK" />
      <head>
      </head>
      <body className="flex justify-center">
        <div className="content-center max-w-4xl w-full px-4">
          <Header />
          <div className="min-h-fit">
            {children}
          </div>
          <Footer />
        </div>
      </body>
      <GoogleAnalytics gaId="G-34HH867J1X" />
    </html>
  );
}
