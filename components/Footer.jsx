export default function Footer() {
  return (
    <footer id="contact" className="bg-[#242329] px-5 py-12 text-white lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 border-t border-white/10 pt-8 md:grid-cols-3">
        <div>
          <img src="/logo.png" alt="Everhaul Solutions" className="h-12 w-auto" />
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/60">
            Professional junk and debris removal for homeowners and contractors
            across Los Angeles.
          </p>
        </div>

        <div>
          <h3 className="font-black">Services</h3>
          <p className="mt-4 text-sm leading-7 text-white/60">
            Junk Removal<br />
            Construction Debris<br />
            Dirt & Concrete Hauling<br />
            Jobsite Cleanup
          </p>
        </div>

        <div>
          <h3 className="font-black">Contact</h3>
          <p className="mt-4 text-sm leading-7 text-white/60">
            Los Angeles, CA<br />
            <a href="tel:+18180000000" className="hover:text-white">
              Call Now
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}  
