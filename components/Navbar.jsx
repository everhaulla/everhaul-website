import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#242329]/90 shadow-2xl backdrop-blur-xl"
          : "bg-[#242329]/35 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#home" className="flex items-center gap-3.5 shrink-0">
  <img
    src="/logo.png"
    alt="Everhaul Solutions"
    className="h-14 w-auto object-contain drop-shadow-lg sm:h-16"
  />

  <span className="hidden whitespace-nowrap text-sm font-extrabold tracking-wide text-white/90 sm:inline lg:text-base">
    <span className="text-[#8fbd55]">Everhaul</span>{" "}
    Solutions LLC
  </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-white/75 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#quote"
          className="hidden rounded-full bg-[#57891d] px-6 py-3 text-sm font-black text-white shadow-lg shadow-[#57891d]/20 transition hover:-translate-y-0.5 hover:bg-[#6aa823] lg:block"
        >
          Get Quote
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-bold text-white lg:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-[#242329]/95 px-5 py-5 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-bold text-white/80 hover:bg-white/10"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#quote"
              onClick={() => setOpen(false)}
              className="rounded-xl bg-[#57891d] px-5 py-4 text-center text-sm font-black text-white"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
