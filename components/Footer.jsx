export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-[#242329] px-5 py-14 text-white lg:px-8"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(87,137,29,0.13),transparent_32%)]" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 border-t border-white/10 pt-10 md:grid-cols-[1.3fr_0.8fr_1fr]">
        <div>
          <div className="flex items-center gap-4">
            <img
              src="/logo.png"
              alt="Everhaul Solutions LLC"
              className="h-16 w-auto object-contain"
            />

            <p className="text-lg font-black tracking-wide text-white">
              <span className="text-[#8fbd55]">Everhaul</span> Solutions LLC
            </p>
          </div>

          <p className="mt-5 max-w-md text-sm leading-7 text-white/60">
            Professional junk removal and debris hauling services across the San
            Fernando Valley and most of Los Angeles.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.2em] text-[#8fbd55]">
            Navigation
          </h3>

          <div className="mt-5 grid gap-3 text-sm font-semibold text-white/65">
            <a href="#home" className="hover:text-white">Home</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#gallery" className="hover:text-white">Gallery</a>
            <a href="#testimonials" className="hover:text-white">Reviews</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.2em] text-[#8fbd55]">
            Get a Fast Estimate
          </h3>

          <p className="mt-5 text-sm leading-7 text-white/65">
            Text photos for a fast estimate.
            <br />
            Serving San Fernando Valley, Burbank, Glendale, Pasadena, and most
            of Los Angeles.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row md:flex-col">
            <a href="tel:+18180000000" className="btn-secondary">
              Call Now
            </a>

            <a href="#quote" className="btn-primary">
              Request Quote
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
