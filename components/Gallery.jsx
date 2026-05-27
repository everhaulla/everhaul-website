const galleryImages = [
  "/gallery/job-1.jpg",
  "/gallery/job-2.jpg",
  "/gallery/job-3.jpg",
];

export default function Gallery() {
  return (
    <section id="gallery" className="section-black">
      <div className="container-premium">
        <p className="eyebrow">Project Gallery</p>

        <h2 className="section-title">
          Real jobs. Real cleanup. Real results.
        </h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div
              key={image}
              className="group relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/25"
            >
              <img
                src={image}
                alt={`Everhaul jobsite cleanup ${index + 1}`}
                className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-95"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#242329]/75 via-transparent to-transparent" />

              <div className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-[#242329]/70 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white/80 backdrop-blur-md">
                Job Photo
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
