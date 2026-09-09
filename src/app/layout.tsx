import type { Metadata } from "next";
import { Fraunces, Work_Sans } from "next/font/google";
import SiteChrome from "@/components/layout/SiteChrome";
import "./globals.css";

const displaySerif = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT"],
  style: ["normal", "italic"],
  weight: "variable",
  display: "swap",
});

const bodySans = Work_Sans({
  variable: "--font-sans-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const siteUrl = "https://www.candlewoodinteriors.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Candlewood Interiors | Interior Design, Eastern Massachusetts",
    template: "%s | Candlewood Interiors",
  },
  description:
    "Candlewood Interiors is a boutique interior design studio serving Andover, Dover, Wellesley, and Eastern Massachusetts — thoughtful, livable design for the way you actually live.",
  keywords: [
    "interior designer Eastern Massachusetts",
    "interior design Andover MA",
    "interior designer Dover MA",
    "New England interior design",
    "luxury interior design Massachusetts",
    "Boston-area interior design",
  ],
  openGraph: {
    title: "Candlewood Interiors",
    description: "The journey to comfort starts at Candlewood.",
    url: siteUrl,
    siteName: "Candlewood Interiors",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Candlewood Interiors",
    description: "The journey to comfort starts at Candlewood.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${displaySerif.variable} ${bodySans.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-cream text-ink font-sans antialiased">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
