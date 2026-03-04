"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, COMPANY } from "@/lib/constants";
import { Button } from "./Button";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out-expo ${
          isScrolled
            ? "bg-cream-50/90 backdrop-blur-xl shadow-sm"
            : "bg-transparent"
        }`}
      >
        <nav className="container-wide flex items-center justify-between h-18 lg:h-22">
          <Link
            href="/"
            className="relative z-50 text-heading-sm font-semibold tracking-tight text-navy-900"
          >
            {COMPANY.name}
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.filter((l) => l.href !== "/contact").map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-body-sm font-medium rounded-full transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-navy-900 bg-navy-900/5"
                    : "text-charcoal-600 hover:text-navy-900 hover:bg-navy-900/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="ml-4">
              <Button href="/contact" size="sm">
                Get in touch
              </Button>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="relative z-50 lg:hidden w-10 h-10 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`block h-[2px] bg-navy-900 transition-all duration-300 ${
                  isMobileOpen ? "rotate-45 translate-y-[5px]" : ""
                }`}
              />
              <span
                className={`block h-[2px] bg-navy-900 transition-all duration-300 ${
                  isMobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-[2px] bg-navy-900 transition-all duration-300 ${
                  isMobileOpen ? "-rotate-45 -translate-y-[5px]" : ""
                }`}
              />
            </div>
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-cream-50 lg:hidden"
          >
            <div className="flex flex-col items-start justify-center h-full px-8">
              <nav className="flex flex-col gap-2">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                  >
                    <Link
                      href={link.href}
                      className={`block text-display-sm font-semibold transition-colors duration-200 ${
                        pathname === link.href
                          ? "text-copper-600"
                          : "text-navy-900 hover:text-copper-600"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-12 text-body-md text-charcoal-500"
              >
                <p>{COMPANY.email}</p>
                <p className="mt-1">{COMPANY.phone}</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
