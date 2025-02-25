import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { GoogleAnalytics } from '@next/third-parties/google'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HN PWA',
  description: 'Progressive Web App frontend for Hacker News built with Next.js',
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="HN PWA" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="flex justify-center">
        <div className="content-center max-w-4xl w-full px-4">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
      <GoogleAnalytics gaId="G-34HH867J1X" />
    </html>
  );
}
