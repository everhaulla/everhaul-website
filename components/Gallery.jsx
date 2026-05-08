const reviews = [
  "We reached out late Friday afternoon and they were at our house Saturday morning. Quick response, professional service, and the whole process was smooth from start to finish.",
  "Called in the morning and they came out the same day. Cleared a full garage in under an hour. The price was exactly what they quoted. Highly recommend.",
  "Super easy to work with. They showed up on time, gave a fair quote, and cleared everything out fast. Definitely calling again.",
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-dark">
      <div className="container-premium">
        <p className="eyebrow">Customer Reviews</p>

        <h2 className="section-title">
          Fast, reliable service customers can trust.
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {reviews.map((review, index) => (
            <article key={index} className="premium-card">
              <p className="text-base tracking-[0.22em] text-[#8fbd55]">
                ★★★★★
              </p>

              <p className="mt-5 text-base font-semibold leading-7 text-white/78">
                “{review}”
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
