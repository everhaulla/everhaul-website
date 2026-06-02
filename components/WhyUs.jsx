const reasons = [
  ["Licensed & Insured", "Protection and peace of mind on every project."],
  ["Family-Owned", "Local ownership with accountability and personal service."],
  ["Fast Response Times", "Most calls and quote requests receive a response within an hour."],
  ["100+ Projects Completed", "Trusted experience across Los Angeles."],
  ["Trusted Throughout Los Angeles", "Serving homeowners, contractors, and property managers."],
  ["Professional & Reliable", "Clear communication, dependable scheduling, and quality service."],
];

const photos = [
  "/gallery/job-1.jpg",
  "/gallery/job-2.jpg",
  "/gallery/job-3.jpg",
];

export default function WhyUs() {
  return (
    <section id="why-us" className="section-black">
      <div className="container-premium grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="eyebrow">Why Choose Everhaul</p>

          <h2 className="section-title">
            Trusted By Homeowners, Contractors & Property Managers
          </h2>

          <p className="mt-5 max-w-xl text-white/65">
            Everhaul Solutions is built around professionalism, clear communication,
            reliable scheduling, and fast response times. We help customers feel
            confident from the first call to the final cleanup.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {reasons.map(([title, text]) => (
              <div key={title} className="premium-card">
                <p className="font-black text-white">✓ {title}</p>
                <p className="mt-2 text-sm leading-6 text-white/60">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          <img
            src={photos[0]}
            alt="Everhaul truck on jobsite"
            className="h-72 w-full rounded-[2rem] object-cover shadow-2xl shadow-black/30"
          />

          <div className="grid grid-cols-2 gap-4">
            <img
              src={photos[1]}
              alt="Everhaul debris hauling project"
              className="h-44 w-full rounded-[1.5rem] object-cover shadow-xl shadow-black/25"
            />
            <img
              src={photos[2]}
              alt="Everhaul team working on project"
              className="h-44 w-full rounded-[1.5rem] object-cover shadow-xl shadow-black/25"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
