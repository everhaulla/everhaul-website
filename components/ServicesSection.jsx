const services = [
  {
    title: "Construction Debris Removal",
    icon: "M4 7h16v10H4V7Zm3 3h10M7 14h6",
    description:
      "Removal of drywall, lumber, demolition debris, and construction waste for remodels, renovations, and active jobsites.",
  },
  {
    title: "Junk Removal",
    icon: "M6 7h12l-1 13H7L6 7Zm3 0V5h6v2M9 11v5M12 11v5M15 11v5",
    description:
      "Fast and reliable removal of unwanted junk, furniture, household items, and general clutter from homes and properties.",
  },
  {
    title: "Garage Cleanouts",
    icon: "M4 20V9l8-5 8 5v11M7 20v-7h10v7M9 16h6",
    description:
      "Complete garage cleanout services for storage overflow, unwanted items, old furniture, and accumulated junk.",
  },
  {
    title: "Dirt & Concrete Hauling",
    icon: "M3 16h13l3-6h2M5 16l2 4h8l2-4M7 12h7M9 8h7",
    description:
      "Heavy-duty hauling for dirt, broken concrete, gravel, pavers, and other construction materials.",
  },
  {
    title: "Jobsite Cleanup",
    icon: "M5 19l14-14M8 16l3 3M13 6l5 5M4 20h16",
    description:
      "Professional cleanup services for active construction sites, remodels, and post-project debris removal.",
  },
  {
    title: "Appliance Removal",
    icon: "M7 3h10v18H7V3Zm3 4h4M10 17h4M15 11h.01",
    description:
      "Safe removal and hauling of refrigerators, washers, dryers, stoves, and other heavy household appliances.",
  },
];

function ServiceIcon({ path }) {
  return (
    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#57891d]/30 bg-[#57891d]/15 text-[#8fbd55] shadow-lg shadow-[#57891d]/10 transition duration-300 group-hover:scale-105 group-hover:bg-[#57891d]/22">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7"
      >
        <path d={path} />
      </svg>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="section-dark">
      <div className="container-premium">
        <p className="eyebrow">Everhaul Services</p>

        <h2 className="section-title">
          Professional removal and hauling for homeowners and contractors.
        </h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="premium-card group">
              <ServiceIcon path={service.icon} />

              <h3 className="text-xl font-black text-white">
                {service.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/65">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
