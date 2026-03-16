"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export function Nav({ active }: { active?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-md border-b border-[#181818]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-between py-5">
        <Link
          href="/"
          className="font-sans text-sm font-semibold tracking-tight text-white"
        >
          Rodolfo Ortega
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8">
          {links.map((link, i) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * i }}
            >
              <Link
                href={link.href}
                className={`font-mono text-[11px] uppercase tracking-[0.15em] transition-colors duration-300 py-2 ${
                  link.label === active
                    ? "text-white"
                    : "text-[#666] hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-white"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="bg-black/95 backdrop-blur-md border-b border-[#181818] md:hidden"
          >
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col py-6 gap-5">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`font-mono text-sm uppercase tracking-[0.15em] transition-colors duration-300 py-2 ${
                    link.label === active
                      ? "text-white"
                      : "text-[#666] hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
