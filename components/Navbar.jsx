import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Why Us", href: "/#why-us" },
  { label: "Pricing", href: "/pricing" },
  { label: "Project Gallery", href: "/#gallery" },
  { label: "Reviews", href: "/#testimonials" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#242329]/90 shadow-2xl backdrop-blur-xl"
          : "bg-[#242329]/35 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        {/* Logo and company name */}
        <a href="/" className="flex shrink-0 items-center gap-3.5">
          <img
            src="/logo.png"
            alt="Everhaul Solutions LLC"
            className="h-16 w-auto object-contain drop-shadow-lg sm:h-20 lg:h-24"
          />

          <span className="hidden whitespace-nowrap text-sm font-extrabold tracking-wide text-white/90 sm:inline lg:text-base">
            <span className="text-[#8fbd55]">Everhaul</span>{" "}
            Solutions LLC
          </span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-white/75 transition duration-200 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="/#quote"
          className="hidden rounded-full bg-[#57891d] px-6 py-3 text-sm font-black text-white shadow-lg shadow-[#57891d]/20 transition duration-300 hover:-translate-y-0.5 hover:bg-[#6aa823] lg:block"
        >
          Get a Free Estimate
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-bold text-white transition hover:bg-white/15 lg:hidden"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-white/10 bg-[#242329]/95 px-5 py-5 shadow-2xl backdrop-blur-xl lg:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-bold text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </a>
            ))}

            <a
              href="/#quote"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-xl bg-[#57891d] px-5 py-4 text-center text-sm font-black text-white transition hover:bg-[#6aa823]"
            >
              Get a Free Estimate
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
