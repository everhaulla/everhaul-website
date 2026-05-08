"use client";

import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = ["Home", "Services", "Gallery", "About", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-black/80 shadow-2xl backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#home" className="flex items-center gap-3">
          <img src="/logo.png" alt="Everhaul Solutions" className="h-11 w-auto" />
          <div className="leading-tight">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-white">
              Everhaul
            </p>
            <p className="text-xs font-semibold text-emerald-400">
              Solutions
            </p>
          </div>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-semibold text-gray-300 transition hover:text-white"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+18180000000"
            className="flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-bold text-white transition hover:border-emerald-500/70 hover:bg-white/10"
          >
            <Phone size={16} />
            Call Now
          </a>

          <a
            href="#quote"
            className="rounded-full bg-emerald-700 px-6 py-3 text-sm font-black text-white shadow-lg shadow-emerald-950/40 transition hover:-translate-y-0.5 hover:bg-emerald-600"
          >
            Get Quote
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-xl border border-white/10 bg-white/10 p-3 text-white lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-black/95 px-5 py-5 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-bold text-gray-200 hover:bg-white/10"
              >
                {link}
              </a>
            ))}

            <a
              href="#quote"
              onClick={() => setOpen(false)}
              className="rounded-xl bg-emerald-700 px-5 py-4 text-center text-sm font-black text-white"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
