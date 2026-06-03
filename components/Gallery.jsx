const galleryImages = [
  "/gallery/job-1.jpg",
  "/gallery/job-2.jpg",
  "/gallery/job-3.jpg",
  "/gallery/job-4.jpg",
  "/gallery/job-5.jpg",
  "/gallery/job-6.jpg",
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
              key={image}
              className="group relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/25"
            >
              <img
                src={image}
                alt="Everhaul project gallery"
                className="h-full w-full object-cover opacity-85 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
