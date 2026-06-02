const galleryImages = [
  {
    src: "/gallery/job-1.jpg",
    label: "Construction Debris Removal",
  },
  {
    src: "/gallery/job-2.jpg",
    label: "Garage Cleanout",
  },
  {
    src: "/gallery/job-3.jpg",
    label: "Property Cleanup",
  },
  {
    src: "/gallery/job-4.jpg",
    label: "Debris Hauling Project",
  },
  {
    src: "/gallery/job-5.jpg",
    label: "Los Angeles Cleanup Project",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="section-black">
      <div className="container-premium">
        <p className="eyebrow">Project Gallery</p>

        <h2 className="section-title">
          Real Jobs. Real Cleanup. Real Results.
        </h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image) => (
            <div
              key={image.src}
              className="group relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/25"
            >
              <img
                src={image.src}
                alt={image.label}
                className="h-full w-full object-cover opacity-85 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#242329]/80 via-transparent to-transparent" />

              <div className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-[#242329]/75 px-4 py-2 text-xs font-black uppercase tracking-[0.15em] text-white/85 backdrop-blur-md">
                {image.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
