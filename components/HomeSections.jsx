const services = [
  "Construction Debris Removal",
  "Junk Removal",
  "Garage Cleanouts",
  "Dirt & Concrete Hauling",
  "Jobsite Cleanup",
  "Appliance Removal",
];

const reasons = [
  "Fast response times for contractors and homeowners",
  "Clean, organized, professional jobsite presence",
  "Family-owned service with reliable communication",
  "Built for heavy debris, cleanouts, and serious hauling jobs",
];

const testimonials = [
  {
    text: "We reached out to Everhaul late Friday afternoon and they were at our house Saturday morning! They were quick to respond.",
  },
];

export default function HomeSections() {
  return (
    <>
      <section id="services" className="section-dark">
        <div className="container-premium">
          <p className="eyebrow">Our Services</p>
          <h2 className="section-title">
            Professional hauling solutions for homes, contractors, and jobsites.
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service} className="premium-card">
                <div className="mb-5 h-10 w-10 rounded-xl bg-[#57891d]/20 ring-1 ring-[#57891d]/30" />
                <h3 className="text-xl font-black text-white">{service}</h3>
                <p className="mt-3 text-sm leading-6 text-white/60">
                  Reliable removal, hauling, and cleanup support across Los Angeles.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="why-us" className="section-black">
        <div className="container-premium grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">Why Choose Everhaul</p>
            <h2 className="section-title">
              Built like a real operation, not a side-job hauling service.
            </h2>
            <p className="mt-5 max-w-xl text-white/65">
              Everhaul Solutions focuses on clean communication, reliable arrival
              times, professional service, and contractor-ready hauling.
            </p>
          </div>

          <div className="grid gap-4">
            {reasons.map((reason) => (
              <div key={reason} className="premium-card flex gap-4">
                <span className="mt-1 h-3 w-3 rounded-full bg-[#57891d] shadow-lg shadow-[#57891d]/40" />
                <p className="font-semibold text-white/80">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="section-dark">
        <div className="container-premium">
          <p className="eyebrow">Customer Reviews</p>
          <h2 className="section-title">Trusted by local customers.</h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {testimonials.map((review, index) => (
              <div key={index} className="premium-card">
                <p className="text-lg tracking-[0.25em] text-[#57891d]">
                  ★★★★★
                </p>
                <p className="mt-5 text-lg font-semibold leading-8 text-white/80">
                  “{review.text}”
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="section-black">
        <div className="container-premium">
          <p className="eyebrow">Gallery</p>
          <h2 className="section-title">Real cleanup. Real hauling. Real results.</h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="flex aspect-[4/3] items-center justify-center rounded-3xl border border-white/10 bg-white/[0.04] text-sm font-bold text-white/40"
              >
                Add Job Photo
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="quote" className="section-dark">
        <div className="container-premium">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-8 text-center shadow-2xl shadow-black/30 lg:p-14">
            <p className="eyebrow">Get Started</p>
            <h2 className="mx-auto max-w-3xl text-4xl font-black tracking-tight text-white sm:text-5xl">
              Need junk or debris removed fast?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-white/65">
              Get a quick quote for junk removal, construction debris, cleanouts,
              dirt, concrete, and contractor jobsite cleanup.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a href="#contact" className="btn-primary">
                Get a Free Quote
              </a>
              <a href="tel:+18180000000" className="btn-secondary">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
