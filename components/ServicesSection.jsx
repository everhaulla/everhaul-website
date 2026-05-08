const services = [
  {
    title: "Construction Debris Removal",
    icon: "▣",
    description:
      "Removal of drywall, lumber, demolition debris, and construction waste for remodels, renovations, and active jobsites.",
  },
  {
    title: "Junk Removal",
    icon: "◆",
    description:
      "Fast and reliable removal of unwanted junk, furniture, household items, and general clutter from homes and properties.",
  },
  {
    title: "Garage Cleanouts",
    icon: "▤",
    description:
      "Complete garage cleanout services for storage overflow, unwanted items, old furniture, and accumulated junk.",
  },
  {
    title: "Dirt & Concrete Hauling",
    icon: "◼",
    description:
      "Heavy-duty hauling for dirt, broken concrete, gravel, pavers, and other construction materials.",
  },
  {
    title: "Jobsite Cleanup",
    icon: "▰",
    description:
      "Professional cleanup services for active construction sites, remodels, and post-project debris removal.",
  },
  {
    title: "Appliance Removal",
    icon: "⬢",
    description:
      "Safe removal and hauling of refrigerators, washers, dryers, stoves, and other heavy household appliances.",
  },
];

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
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#57891d]/30 bg-[#57891d]/15 text-2xl font-black text-[#8fbd55] shadow-lg shadow-[#57891d]/10 transition group-hover:scale-105 group-hover:bg-[#57891d]/25">
                {service.icon}
              </div>

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
