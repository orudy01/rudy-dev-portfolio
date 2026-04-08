import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "Custom websites for local businesses starting at $500 — live in days, not weeks. Landing pages, custom sites, and full builds with Stripe integration.",
  openGraph: {
    title: "Services & Pricing | Rodolfo Ortega",
    description:
      "Custom websites for local businesses starting at $500 — live in days, not weeks. Landing pages, custom sites, and full builds with Stripe integration.",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
