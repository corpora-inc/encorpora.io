import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ This is where you set the title & description globally
export const metadata: Metadata = {
  title: "Encorpora - AI-Powered Education",
  description: "Innovative AI-powered learning for K-12 students. Download free educational books and explore the future of learning.",
  openGraph: {
    title: "Encorpora - AI-Powered Education",
    description: "Revolutionizing education with AI. Explore free resources and cutting-edge learning tools.",
    images: [
      {
        // url: "/hexagon-logo.webp",
        url: "https://encorpora.io/hexagon-logo-optimized.webp",
        width: 1200,
        height: 630,
        alt: "Encorpora Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
