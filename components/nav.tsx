"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { stagger } from "@/lib/motion";

const links = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

const menuItemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] as const },
  }),
  exit: (i: number) => ({
    opacity: 0,
    y: 16,
    transition: { duration: 0.25, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastY, setLastY] = useState(0);

  // Hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      if (y < 80) {
        setVisible(true);
      } else {
        setVisible(y < lastY);
      }
      setLastY(y);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastY]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return pathname === "/";
    return pathname === href;
  };

  return (
    <>
      <motion.nav
        aria-label="Main navigation"
        animate={{ y: visible || open ? 0 : -80 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/[0.06]"
      >
        <div className="max-w-7xl mx-auto px-5 md:px-12 lg:px-16 flex items-center justify-between py-3 md:py-4">
          <Link
            href="/"
            className="font-sans text-sm font-semibold tracking-tight text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm"
          >
            Rodolfo Ortega
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex gap-8">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`relative font-mono text-[11px] uppercase tracking-[0.15em] transition-colors duration-300 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm group ${
                  isActive(link.href) ? "text-white" : "text-[#666] hover:text-white"
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-px bg-white transition-all duration-300 ${
                    isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-1.5 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? "close" : "open"}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                {open ? <X size={18} /> : <Menu size={18} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      {/* Full-screen mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-black flex flex-col md:hidden"
          >
            {/* Top spacing to clear nav bar */}
            <div className="h-[49px] shrink-0 border-b border-white/[0.06]" />

            <motion.ul
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="flex flex-col justify-center flex-1 px-8 gap-1"
            >
              {links.map((link, i) => (
                <motion.li
                  key={link.label}
                  custom={i}
                  variants={menuItemVariants}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block font-sans text-[2.5rem] font-semibold leading-tight tracking-tight transition-colors duration-200 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm ${
                      isActive(link.href) ? "text-white" : "text-white/30 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>

            {/* Bottom metadata */}
            <div className="px-8 pb-10 pt-6 border-t border-white/[0.06]">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
                Temecula, CA — Available for projects
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
