"use client";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
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
    </html>
  );
}
