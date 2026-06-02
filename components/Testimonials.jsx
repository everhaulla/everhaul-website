const reviews = [
  {
    name: "Regeena Espinoza",
    text: "We reached out late Friday afternoon and they were at our house Saturday morning. Quick response, professional service, and the whole process was smooth from start to finish.",
  },
  {
    name: "Jackelin Romero",
    text: "Called in the morning and they came out the same day. Cleared a full garage in under an hour. The price was exactly what they quoted. Highly recommend.",
  },
  {
    name: "Sharlyn Aburto",
    text: "Super easy to work with. They showed up on time, gave a fair quote, and cleared everything out fast. Definitely calling again.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-dark">
      <div className="container-premium">
        <p className="eyebrow">Customer Reviews</p>

        <h2 className="section-title">
          Trusted for fast, reliable service.
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <article key={review.name} className="premium-card">
              <p className="text-sm font-black tracking-[0.2em] text-[#8fbd55]">
                ★★★★★
              </p>

              <p className="mt-3 text-sm font-black text-white">
                {review.name}
              </p>

              <p className="mt-5 text-base font-semibold leading-7 text-white/78">
                “{review.text}”
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
