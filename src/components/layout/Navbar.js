"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X, MessageCircle } from "lucide-react";
import FullscreenMenu from "@/components/ui/FullscreenMenu";
import { CONTACT_INFO } from "@/lib/constants";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-999 transition-all duration-500 ${
          scrolled 
            ? "bg-[#97b4f8]/10 backdrop-blur-sm " 
            : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-6 lg:px-5 md:py-2 py-3 flex items-center justify-between">

          {/* Logo — Blue Background Box + "Leatonic" Text */}
          <Link href="/" className="flex items-center gap-2.5 group">
            {/* Blue Background Logo Box */}
            <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl bg-linear-to-br from-[#003ecd] to-[#1b50ff] shadow-lg shadow-[#5b7def]/30 group-hover:scale-105 transition-transform duration-300">
              <span className="text-white font-bold text-xl md:text-2xl select-none">
                L
              </span>
            </div>

            {/* "Leatonic" Text */}
            <span className="text-white text-2xl md:text-3xl font-bold tracking-tight select-none">
              Leatonic
            </span>
          </Link>

          {/* Right Side: Phone + Let's Talk + Menu */}
          <div className="flex items-center gap-3 md:gap-5">

            {/* Phone Number */}
            <a 
              href={`tel:${CONTACT_INFO.phone}`}
              className="hidden md:flex items-center gap-2 text-white hover:text-[#97b4f8] transition-colors"
            >
              <Phone size={16} className="text-[#97b4f8]" />
              <span className="text-sm font-medium tracking-wide">
                {CONTACT_INFO.phone}
              </span>
            </a>

            {/* Divider */}
            <div className="hidden md:block w-px h-6 bg-white/20" />

            {/* Let's Talk Button */}
            <Link
              href="/contact"
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300"
            >
              <MessageCircle size={18} className="text-[#97b4f8]" />
              <span className="text-sm font-medium">Let&apos;s Talk</span>
            </Link>

            {/* Divider */}
            <div className="hidden sm:block w-px h-6 bg-white/20" />

            {/* Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`flex items-center cursor-pointer gap-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                isMenuOpen 
                  ? "bg-white/20 border-white/30" 
                  : "bg-white/10 border-white/10 hover:bg-white/20"
              }`}
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {isMenuOpen ? (
                <>
                  <X size={18} className="text-white" />
                  <span className="hidden sm:inline text-sm font-medium text-white">Close</span>
                </>
              ) : (
                <>
                  <Menu size={18} className="text-white" />
                  <span className="hidden sm:inline text-sm font-medium text-white">Menu</span>
                </>
              )}
            </button>
          </div>

        </nav>
      </header>

      <FullscreenMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}