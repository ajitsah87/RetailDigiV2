import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "RetailDigi – Builders of Category Leaders | D2C & Ecommerce Growth Partner",
  description:
    "RetailDigi is a digital commerce growth partner helping brands scale into category leaders through performance-led strategy, content, ads & analytics across Meta, Google, Amazon, Flipkart & Quick Commerce.",
  keywords: [
    "RetailDigi",
    "D2C marketing",
    "ecommerce growth",
    "digital marketing agency",
    "Meta ads",
    "Google ads",
    "Amazon marketing",
    "Flipkart marketing",
    "quick commerce",
    "Shopify",
    "brand scaling",
    "performance marketing",
  ],
  openGraph: {
    title: "RetailDigi – Builders of Category Leaders",
    description:
      "Scaling brands with Attention, Ads & Analytics. We help D2C & Ecommerce brands dominate their category.",
    type: "website",
    locale: "en_IN",
    siteName: "RetailDigi",
  },
  twitter: {
    card: "summary_large_image",
    title: "RetailDigi – Builders of Category Leaders",
    description:
      "Scaling brands with Attention, Ads & Analytics.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${montserrat.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
