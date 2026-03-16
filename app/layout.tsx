import type { Metadata } from "next";
import "./globals.css";

const BASE_URL = "https://rudyortega.dev"; // TODO: update when domain is live

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Rodolfo Ortega — Builder, Designer, Creator",
    template: "%s | Rodolfo Ortega",
  },
  description:
    "Creative director and full-stack developer based in Temecula, CA. Custom websites for local businesses — live in 7 days.",
  keywords: [
    "web design",
    "web development",
    "Next.js",
    "freelance developer",
    "Temecula",
    "California",
    "local business websites",
    "creative director",
  ],
  authors: [{ name: "Rodolfo Ortega", url: BASE_URL }],
  creator: "Rodolfo Ortega",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Rodolfo Ortega",
    title: "Rodolfo Ortega — Builder, Designer, Creator",
    description:
      "Creative director and full-stack developer based in Temecula, CA. Custom websites for local businesses — live in 7 days.",
    images: [
      {
        url: "/og-image.jpg", // TODO: add a 1200x630 image to /public
        width: 1200,
        height: 630,
        alt: "Rodolfo Ortega — Builder, Designer, Creator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rodolfo Ortega — Builder, Designer, Creator",
    description:
      "Creative director and full-stack developer based in Temecula, CA. Custom websites for local businesses — live in 7 days.",
    images: ["/og-image.jpg"],
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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
