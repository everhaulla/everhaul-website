const textHref =
  "sms:+18185381072?&body=Hi%20Everhaul%2C%20I%E2%80%99d%20like%20a%20quote.%20I%E2%80%99ve%20attached%20photos%20of%20my%20project.";

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-[#242329] px-5 py-14 text-white lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(87,137,29,0.14),transparent_32%)]" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 border-t border-white/10 pt-10 md:grid-cols-[1.2fr_0.7fr_1fr]">
        <div>
          <div className="flex items-center gap-4">
            <img src="/logo.png" alt="Everhaul Solutions LLC" className="h-16 w-auto object-contain" />

            <p className="text-lg font-black tracking-wide text-white">
              <span className="text-[#8fbd55]">Everhaul</span> Solutions LLC
            </p>
          </div>

          <p className="mt-5 max-w-md text-sm leading-7 text-white/60">
            Family-owned junk removal, construction debris hauling, and jobsite
            cleanup services. Fully licensed and insured, serving contractors,
            property managers, and homeowners throughout the San Fernando Valley,
            Burbank, Glendale, Pasadena, and most of Los Angeles.
          </p>

          <div className="mt-5 flex gap-3">
            <a className="social-icon" href="https://www.instagram.com/everhaulla?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr" target="_blank" rel="noreferrer">
              IG
            </a>
            <a className="social-icon" href="https://www.facebook.com/profile.php?id=61580059156080&mibextid=wwXIfr" target="_blank" rel="noreferrer">
              FB
            </a>
            <a className="social-icon" href="https://share.google/CsAqJn9wd5sMckvT6" target="_blank" rel="noreferrer">
              G
            </a>
          </div>
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
            <a href="#quote" className="hover:text-white">Request Quote</a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.2em] text-[#8fbd55]">
            Contact
          </h3>

          <p className="mt-5 text-sm leading-7 text-white/65">
            Phone: <a href="tel:+18185381072" className="font-bold text-white hover:text-[#8fbd55]">(818) 538-1072</a>
            <br />
            Email: <a href="mailto:info@everhaulsolutions.com" className="font-bold text-white hover:text-[#8fbd55]">info@everhaulsolutions.com</a>
          </p>

          <div className="mt-6 flex flex-col gap-3">
            <a href="#quote" className="btn-primary">Request Quote</a>
            <a href={textHref} className="btn-secondary">Text Photos For A Faster Estimate</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
