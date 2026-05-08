const reasons = [
  "Fast response times for homeowners and contractors",
  "Clean jobsite presence and professional communication",
  "Family-owned service with reliable follow-through",
  "Built for heavy debris, cleanouts, and serious hauling jobs",
];

const testimonials = [
  "We reached out to Everhaul late Friday afternoon and they were at our house Saturday morning! They were quick to respond.",
];

export default function HomeSections() {
  return (
    <>
      <section id="why-us" className="section-black">
        <div className="container-premium grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">Why Choose Everhaul</p>

            <h2 className="section-title">
              A more organized, professional hauling experience.
            </h2>

            <p className="mt-5 max-w-xl text-white/65">
              Everhaul Solutions is built for customers who want clear
              communication, reliable scheduling, and professional debris removal
              without the cheap junk-hauling feel.
            </p>
          </div>

          <div className="grid gap-4">
            {reasons.map((reason) => (
              <div key={reason} className="premium-card flex gap-4">
                <span className="mt-2 h-3 w-3 rounded-full bg-[#57891d] shadow-lg shadow-[#57891d]/40" />
                <p className="font-semibold text-white/80">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="section-dark">
        <div className="container-premium">
          <p className="eyebrow">Customer Reviews</p>

          <h2 className="section-title">
            Trusted for fast, reliable service.
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {testimonials.map((text, index) => (
              <div key={index} className="premium-card">
                <p className="text-lg tracking-[0.25em] text-[#8fbd55]">
                  ★★★★★
                </p>

                <p className="mt-5 text-lg font-semibold leading-8 text-white/80">
                  “{text}”
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="section-black">
        <div className="container-premium">
          <p className="eyebrow">Project Gallery</p>

          <h2 className="section-title">
            Real jobs. Real cleanup. Real results.
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="flex aspect-[4/3] items-center justify-center rounded-3xl border border-white/10 bg-white/[0.04] text-sm font-bold text-white/40 shadow-2xl shadow-black/20"
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
              dirt, concrete, appliance removal, and jobsite cleanup.
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
