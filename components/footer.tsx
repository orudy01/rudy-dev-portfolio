import Link from "next/link";
import { Container } from "@/components/container";

export function Footer({ variant = "dark" }: { variant?: "dark" | "light" }) {
  // Contrast-checked: all values meet WCAG AA 4.5:1
  const textColor = variant === "light" ? "text-[#555]" : "text-[#888]";
  const hoverColor = variant === "light" ? "hover:text-black" : "hover:text-white";
  const borderColor = variant === "light" ? "border-[#e0e0e0]" : "border-[#1a1a1a]";
  const mutedColor = variant === "light" ? "text-[#666]" : "text-[#888]";

  return (
    <footer className={`border-t ${borderColor} py-10`}>
      <Container>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className={`font-mono text-[10px] ${textColor} uppercase tracking-[0.15em]`}>
            Rodolfo Ortega — Temecula, CA
          </p>
          <nav aria-label="Footer navigation">
            <div className="flex gap-6">
              {[
                { label: "Work", href: "/work" },
                { label: "Services", href: "/services" },
                { label: "Contact", href: "/#contact" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`font-mono text-[10px] ${textColor} uppercase tracking-[0.15em] ${hoverColor} transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current rounded-sm`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
          <p className={`font-mono text-[10px] ${mutedColor}`}>
            &copy; {new Date().getFullYear()}
          </p>
        </div>
      </Container>
    </footer>
  );
}
