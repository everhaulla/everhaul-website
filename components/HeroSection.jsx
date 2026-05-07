import React from "react";

const trustItems = [
  "Family-Owned",
  "Licensed & Insured",
  "Same-Day Service",
  "Contractor Trusted",
];

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-charcoal text-white">
      <div className="absolute inset-0 bg-[url('/everhaul-hero.jpg')] bg-cover bg-center" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/70 to-charcoal" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(22,101,52,0.18),transparent_45%)]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center justify-center px-6 py-28 text-center">
        <div className="max-w-4xl animate-fade-up">
          <p className="mb-5 inline-flex rounded-full border border-everhaul-green/40 bg-white/5 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-everhaul-green backdrop-blur">
            Everhaul Solutions
          </p>

          <h1 className="text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Professional Junk & Debris Removal
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg font-medium text-gray-200 sm:text-2xl">
            Family-Owned & Contractor-Trusted Across Los Angeles
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#quote"
              className="w-full rounded-xl bg-everhaul-green px-8 py-4 text-base font-bold text-white shadow-xl shadow-everhaul-green/20 transition duration-300 hover:-translate-y-1 hover:bg-green-700 sm:w-auto"
            >
              Get a Free Quote
            </a>

            <a
              href="tel:+18180000000"
              className="w-full rounded-xl border border-white/20 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-everhaul-green hover:bg-white/15 sm:w-auto"
            >
              Call Now
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {trustItems.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-gray-100 backdrop-blur transition hover:border-everhaul-green/60 hover:bg-white/10"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      <a
        href="tel:+18180000000"
        className="fixed bottom-5 left-5 right-5 z-50 rounded-xl bg-everhaul-green py-4 text-center text-base font-black text-white shadow-2xl shadow-black/40 sm:hidden"
      >
        Call Now
      </a>
    </section>
  );
}
