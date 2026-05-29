export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-[#242329] px-5 py-14 text-white lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(87,137,29,0.14),transparent_32%)]" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 border-t border-white/10 pt-10 md:grid-cols-[1.3fr_0.8fr_1fr]">
        <div>
          <div className="flex items-center gap-4">
            <img src="/logo.png" alt="Everhaul Solutions LLC" className="h-16 w-auto" />
            <p className="text-lg font-black">
              <span className="text-[#8fbd55]">Everhaul</span> Solutions LLC
            </p>
          </div>

          <p className="mt-5 max-w-md text-sm leading-7 text-white/60">
            Family-owned junk removal, construction debris hauling, and jobsite
            cleanup services. Fully licensed and insured, serving contractors,
            property managers, and homeowners throughout the San Fernando Valley,
            Burbank, Glendale, Pasadena, and most of Los Angeles.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.2em] text-[#8fbd55]">
            Navigation
          </h3>

          <div className="mt-5 grid gap-3 text-sm font-semibold text-white/65">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#gallery">Gallery</a>
            <a href="#testimonials">Reviews</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.2em] text-[#8fbd55]">
            Fast Estimate
          </h3>

          <p className="mt-5 text-sm leading-7 text-white/65">
            Text photos for fast estimate.
            <br />
            San Fernando Valley • Burbank • Glendale • Pasadena • Los Angeles
          </p>

          <div className="mt-6 flex flex-col gap-3">
            <a href="tel:+18180000000" className="btn-secondary">Call Now</a>
            <a href="#quote" className="btn-primary">Request Quote</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
