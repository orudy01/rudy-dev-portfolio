import Link from "next/link";
import { Container } from "@/components/container";

export function Footer({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const textColor = variant === "light" ? "text-[#999]" : "text-[#666]";
  const hoverColor =
    variant === "light"
      ? "hover:text-black"
      : "hover:text-white";
  const borderColor =
    variant === "light" ? "border-[#e0e0e0]" : "border-[#1a1a1a]";
  const mutedColor = variant === "light" ? "text-[#bbb]" : "text-[#555]";

  return (
    <footer className={`border-t ${borderColor} py-10`}>
      <Container>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p
            className={`font-mono text-[10px] ${textColor} uppercase tracking-[0.15em]`}
          >
            Rodolfo Ortega — Temecula, CA
          </p>
          <div className="flex gap-6">
            {[
              { label: "Work", href: "/work" },
              { label: "Services", href: "/services" },
              { label: "Contact", href: "/#contact" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`font-mono text-[10px] ${textColor} uppercase tracking-[0.15em] ${hoverColor} transition-colors duration-300`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p className={`font-mono text-[10px] ${mutedColor}`}>
            &copy; {new Date().getFullYear()}
          </p>
        </div>
      </Container>
    </footer>
  );
}
