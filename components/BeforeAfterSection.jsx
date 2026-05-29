const projects = [
  {
    before: "/before-after/before-1.jpg",
    after: "/before-after/after-1.jpg",
    title: "Garage Cleanout",
  },
  {
    before: "/before-after/before-2.jpg",
    after: "/before-after/after-2.jpg",
    title: "Debris Removal",
  },
];

export default function BeforeAfterSection() {
  return (
    <section className="section-black">
      <div className="container-premium">
        <p className="eyebrow">Before & After</p>

        <h2 className="section-title">Before & After Transformations</h2>

        <p className="mt-5 max-w-2xl text-white/65">
          Real cleanouts and debris removal results for homeowners, contractors,
          and property managers across Los Angeles.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="premium-card">
              <h3 className="mb-5 text-xl font-black text-white">
                {project.title}
              </h3>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-white/50">
                    Before
                  </p>
                  <img
                    src={project.before}
                    alt={`${project.title} before`}
                    className="aspect-[4/3] w-full rounded-2xl object-cover"
                  />
                </div>

                <div>
                  <p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-[#8fbd55]">
                    After
                  </p>
                  <img
                    src={project.after}
                    alt={`${project.title} after`}
                    className="aspect-[4/3] w-full rounded-2xl object-cover"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
