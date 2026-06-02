"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Leadership", href: "#leadership" },
  { label: "Achievements", href: "#achievements" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="#home" className="flex items-center gap-3 group">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold transition-transform group-hover:scale-110"
            style={{ background: "linear-gradient(135deg, #0a2563, #2563eb)" }}
          >
            PD
          </div>
          <span
            className={`font-display font-semibold text-sm tracking-wide transition-colors ${
              scrolled ? "text-slate-800" : "text-white"
            }`}
          >
            Pham Tien Dung
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-all duration-200 relative group ${
                scrolled ? "text-slate-600 hover:text-navy-800" : "text-white/80 hover:text-white"
              }`}
              style={{ fontFamily: "var(--font-body)" }}
            >
              {link.label}
              <span
                className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                style={{ background: "var(--accent)" }}
              />
            </a>
          ))}
          <a
            href="/resume.pdf"
            download
            className="text-sm font-medium px-4 py-2 rounded-full border transition-all duration-200 hover:scale-105"
            style={{
              borderColor: scrolled ? "#0a2563" : "rgba(255,255,255,0.5)",
              color: scrolled ? "#0a2563" : "white",
            }}
          >
            Resume ↓
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`block w-6 h-0.5 transition-all duration-300 ${
                scrolled ? "bg-slate-800" : "bg-white"
              } ${menuOpen && i === 0 ? "rotate-45 translate-y-2" : ""} ${
                menuOpen && i === 1 ? "opacity-0" : ""
              } ${menuOpen && i === 2 ? "-rotate-45 -translate-y-2" : ""}`}
            />
          ))}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-700 font-medium text-sm py-2 border-b border-slate-50"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download
            className="text-center text-sm font-medium px-4 py-2 rounded-full border border-navy-800 text-navy-800 mt-2"
          >
            Download Resume
          </a>
        </div>
      )}
    </nav>
  );
}
