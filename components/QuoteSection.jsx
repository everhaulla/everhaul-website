import { useState } from "react";

export default function QuoteSection() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    await fetch("PASTE_YOUR_FORMSPREE_ENDPOINT_HERE", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    setSubmitted(true);
    form.reset();
  }

  return (
    <section id="quote" className="section-dark">
      <div className="container-premium grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="eyebrow">Request A Quote</p>

          <h2 className="section-title">
            Junk removal and debris hauling made simple across Los Angeles.
          </h2>

          <p className="mt-5 max-w-xl text-white/65">
            Get fast help from a family-owned, licensed and insured hauling
            company serving the San Fernando Valley, Burbank, Glendale,
            Pasadena, and most of Los Angeles.
          </p>

          <p className="mt-6 font-bold text-[#8fbd55]">
            Upload photos for a faster estimate. Fast response times.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="premium-card grid gap-4"
          encType="multipart/form-data"
        >
          {submitted && (
            <div className="rounded-2xl border border-[#57891d]/30 bg-[#57891d]/15 p-4 text-sm font-bold text-white">
              Thank you for contacting Everhaul Solutions. We received your
              request and will contact you shortly.
            </div>
          )}

          <input className="form-input" name="name" required placeholder="Name" />

          <input
            className="form-input"
            name="phone"
            required
            placeholder="Phone Number"
          />

          <input
            className="form-input"
            name="zip"
            required
            placeholder="Project ZIP Code"
          />

          <select className="form-input" name="preferredContact">
            <option>Preferred Contact Method</option>
            <option>Call</option>
            <option>Text</option>
          </select>

          <input className="form-input" name="photos" type="file" multiple />

          <textarea
            className="form-input min-h-32"
            name="details"
            placeholder="Additional Details"
          />

          <button type="submit" className="btn-primary w-full">
            Request Quote
          </button>
        </form>
      </div>
    </section>
  );
}
