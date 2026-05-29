export default function QuoteSection() {
  return (
    <section id="quote" className="section-dark">
      <div className="container-premium grid gap-10 lg:grid-cols-2 lg:items-center">
        {/* Left Side */}
        <div>
          <p className="eyebrow">Request A Quote</p>

          <h2 className="section-title">
            Professional Junk Removal & Debris Hauling Across Los Angeles
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

        {/* Quote Form */}
        <form
          action="PASTE_YOUR_FORMSPREE_ENDPOINT_HERE"
          method="POST"
          encType="multipart/form-data"
          className="premium-card grid gap-4"
        >
          <input
            className="form-input"
            type="text"
            name="name"
            placeholder="Name"
            required
          />

          <input
            className="form-input"
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
          />

          <input
            className="form-input"
            type="text"
            name="zip"
            placeholder="Project ZIP Code"
            required
          />

          <select
            className="form-input"
            name="preferred_contact_method"
          >
            <option value="">Preferred Contact Method</option>
            <option value="Call">Call</option>
            <option value="Text">Text</option>
          </select>

          <input
            className="form-input"
            type="file"
            name="photos"
            multiple
          />

          <textarea
            className="form-input min-h-[140px]"
            name="details"
            placeholder="Additional Details"
          />

          <button
            type="submit"
            className="btn-primary w-full"
          >
            Request Quote
          </button>
        </form>
      </div>
    </section>
  );
}
