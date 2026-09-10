"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { siteInfo } from "@/data/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-md shadow-lg shadow-purple-500/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <motion.a
            href="/"
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-xl md:text-2xl font-bold text-white tracking-tight">
              {siteInfo.presenter}
              <span className="text-purple-400"> PRESENTS </span>
              {siteInfo.name}
              {siteInfo.year}
            </span>
          </motion.a>

          <div className="hidden md:flex items-center gap-8">
            {siteInfo.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-300 hover:text-white transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full" />
              </a>
            ))}
            <a
              href={siteInfo.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-full transition-all hover:shadow-lg hover:shadow-purple-500/30"
            >
              REGISTER ({siteInfo.passFee} FOR ALL)
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-lg border-t border-gray-800"
          >
            <div className="px-4 py-6 space-y-4">
              {siteInfo.navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-gray-300 hover:text-white transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={siteInfo.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center px-6 py-3 bg-purple-600 text-white font-medium rounded-full"
              >
                REGISTER ({siteInfo.passFee} FOR ALL)
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
