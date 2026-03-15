import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Email Marketing & Retention Specialist | Klaviyo Expert for Shopify Brands",
  description: "I help Shopify ecommerce brands turn email into their #1 revenue channel using Klaviyo. 38% avg revenue lift, $2.4M+ generated, 50+ flows built.",
  keywords: "Klaviyo expert, email marketing specialist, Shopify email marketing, retention marketing, ecommerce email flows",
  openGraph: {
    title: "Email Marketing & Retention Specialist | Klaviyo Expert for Shopify Brands",
    description: "I help Shopify ecommerce brands turn email into their #1 revenue channel using Klaviyo.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Email Marketing & Retention Specialist | Klaviyo Expert for Shopify Brands",
    description: "I help Shopify ecommerce brands turn email into their #1 revenue channel using Klaviyo.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
