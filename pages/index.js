export default function Home() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#111315] text-white">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/everhaul-hero.jpg"
          alt="Everhaul construction debris hauling"
          className="h-full w-full object-cover scale-105"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-12">

          <div className="max-w-3xl">

            {/* Small Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#2bb673]/30 bg-[#2bb673]/10 px-4 py-2 backdrop-blur-sm">
              <div className="h-2 w-2 rounded-full bg-[#2bb673] animate-pulse"></div>

              <span className="text-sm font-medium tracking-wide text-gray-200">
                Serving Los Angeles & The San Fernando Valley
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl font-black leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
              Professional{" "}
              <span className="text-[#2bb673]">
                Junk & Debris
              </span>{" "}
              Removal
            </h1>

            {/* Subheadline */}
            <h2 className="mt-6 text-xl font-semibold tracking-wide text-gray-200 sm:text-2xl">
              Family-Owned & Contractor-Trusted Across Los Angeles
            </h2>

            {/* Supporting Text */}
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
              Fast response times, dependable crews, and professional cleanup
              services for homeowners, contractors, and property managers.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              {/* Primary Button */}
              <a
                href="#quote"
                className="group inline-flex items-center justify-center rounded-xl bg-[#2bb673] px-8 py-4 text-base font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(43,182,115,0.35)]"
              >
                Get a Free Quote

                <svg
                  className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>

              {/* Secondary Button */}
              <a
                href="tel:+18185551234"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-[#2bb673]/40 hover:bg-white/10"
              >
                Call Now
              </a>

            </div>

            {/* Trust Indicators */}
            <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
                <div className="mb-2 text-[#2bb673]">✓</div>

                <p className="text-sm font-medium text-gray-200">
                  Family-Owned
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
                <div className="mb-2 text-[#2bb673]">✓</div>

                <p className="text-sm font-medium text-gray-200">
                  Licensed & Insured
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
                <div className="mb-2 text-[#2bb673]">✓</div>

                <p className="text-sm font-medium text-gray-200">
                  Same-Day Service
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
                <div className="mb-2 text-[#2bb673]">✓</div>

                <p className="text-sm font-medium text-gray-200">
                  Contractor Trusted
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-[#111315] to-transparent"></div>

    </section>
  );
}
