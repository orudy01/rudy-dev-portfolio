import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work & Case Studies",
  description:
    "Selected client work and personal projects — B&B Auto Detailing, Sandra's Mini Pancakes, Gym Logger, and more. Built end-to-end with Next.js.",
  openGraph: {
    title: "Work & Case Studies | Rodolfo Ortega",
    description:
      "Selected client work and personal projects built end-to-end with Next.js, React, and Framer Motion.",
  },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
