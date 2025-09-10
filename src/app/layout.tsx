import type { Metadata } from "next";
import { Inter, Kode_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const kodeMono = Kode_Mono({
  subsets: ["latin"],
  variable: "--font-kode-mono",
});

// Gilroy font configuration - add font files to src/app/fonts/
const gilroy = localFont({
  src: [
    {
      path: "./fonts/Gilroy-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Gilroy-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Gilroy-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Gilroy-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-gilroy",
  fallback: ["Inter", "system-ui", "sans-serif"],
});

// Broetown Signature font configuration
const broetownSignature = localFont({
  src: [
    {
      path: "./fonts/BroetownSignature.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-broetown-signature",
  fallback: ["cursive", "serif"],
});

// Broad font configuration
const broad = localFont({
  src: [
    {
      path: "./fonts/Broad-Regular.woff2",
      weight: "400",
      style: "normal",
    },
   
    
  ],
  variable: "--font-broad",
  fallback: ["Arial", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Zarea",
  description: "Simplifying Commodity Trade for Modern Businesses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${gilroy.variable} ${kodeMono.variable} ${broetownSignature.variable} ${broad.variable} antialiased font-gilroy`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
