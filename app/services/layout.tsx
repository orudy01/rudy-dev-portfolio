import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "Custom websites for local businesses starting at $1,200 — live in 7 days. Landing pages, business sites, and full e-commerce packages.",
  openGraph: {
    title: "Services & Pricing | Rodolfo Ortega",
    description:
      "Custom websites for local businesses starting at $1,200 — live in 7 days. Landing pages, business sites, and full e-commerce packages.",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
