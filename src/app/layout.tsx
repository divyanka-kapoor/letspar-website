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

export const metadata: Metadata = {
  metadataBase: new URL("https://letspar.com"),
  title: "LetSpar - Train Your Wit",
  description: "Never fumble a comeback again. AI-coached wit training. Voice-first. 10 minutes a day. Join the waitlist for early access.",
  keywords: ["wit training", "comebacks", "AI coach", "conversation skills", "quick thinking", "verbal agility"],
  authors: [{ name: "LetSpar" }],
  creator: "LetSpar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://letspar.com",
    siteName: "LetSpar",
    title: "LetSpar - Train Your Wit",
    description: "Never fumble a comeback again. AI-coached wit training. Voice-first. 10 minutes a day.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "LetSpar - Train Your Wit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LetSpar - Train Your Wit",
    description: "Never fumble a comeback again. AI-coached wit training. Voice-first. 10 minutes a day.",
    images: ["/og-image.png"],
    creator: "@letspar",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-cream text-espresso`}
      >
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
