"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { name: "About", href: "/about" },
  { name: "Retreats", href: "/retreats" },
  { name: "Merch", href: "/merch" },
  { name: "Bulletin", href: "/bulletin" },
  { name: "Join", href: "/join" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-primary font-serif tracking-tight">TSI</span>
          <span className="hidden sm:inline-block font-medium text-lg text-slate-800">The Sanga Initiative</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === link.href ? "text-primary" : "text-slate-600"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/register"
            className="bg-primary text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary/90 transition-all premium-shadow"
          >
            Register Now
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-slate-600 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-xl transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? "max-height-[400px] border-t" : "max-height-0"
        }`}
      >
        <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-base font-medium ${
                pathname === link.href ? "text-primary" : "text-slate-600"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/register"
            className="bg-primary text-white px-5 py-3 rounded-xl text-center font-semibold"
            onClick={() => setMobileMenuOpen(false)}
          >
            Register Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
