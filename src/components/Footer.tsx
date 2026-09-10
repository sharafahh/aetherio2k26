"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { siteInfo } from "@/data/site";

export function Footer() {
  return (
    <footer className="py-16 border-t border-gray-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              {siteInfo.presenter} PRESENTS{" "}
              <span className="text-purple-400">{siteInfo.name}{siteInfo.year}</span>
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              National Level Technical & Non-Technical Symposium
            </p>
            <p className="text-gray-500 text-sm">
              © 2026 AMSphere Presents {siteInfo.name}{siteInfo.year}. All Rights Reserved.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {siteInfo.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Event Info</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>{siteInfo.date}</li>
              <li>{siteInfo.venue}</li>
              <li>
                <a
                  href={siteInfo.venueUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  View on Maps <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteInfo.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
