import { useState } from "react";

const phoneDisplay = "(818) 538-1072";
const phoneHref = "tel:+18185381072";
const textHref =
  "sms:+18185381072?&body=Hi%20Everhaul%2C%20I%E2%80%99d%20like%20a%20quote.%20I%E2%80%99ve%20attached%20photos%20of%20my%20project.";

export default function QuoteSection() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/xwvzzbeo", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setSubmitted(true);
      form.reset();
    }
  }

  return (
    <section id="quote" className="section-dark">
      <div className="container-premium">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="premium-card">
            <p className="eyebrow">Free Estimate</p>

            <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl">
              Fast, Professional Junk Removal Starts With A Free Estimate
            </h2>

            <p className="mt-5 text-white/65">
              Licensed and insured, family-owned, and built for fast response
              times. Easy scheduling for homeowners, contractors, and property
              managers across Los Angeles.
            </p>

            <div className="mt-7 grid gap-3">
              {[
                "Licensed & Insured",
                "Family-Owned",
                "Fast Response Times",
                "Professional & Reliable",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-white/80">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#57891d]" />
                  <span className="font-bold">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#8fbd55]">
                Contact
              </p>

              <div className="mt-4 space-y-2 text-white/70">
                <p>
                  Phone:{" "}
                  <a href={phoneHref} className="font-bold text-white hover:text-[#8fbd55]">
                    {phoneDisplay}
                  </a>
                </p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:info@everhaulsolutions.com"
                    className="font-bold text-white hover:text-[#8fbd55]"
                  >
                    info@everhaulsolutions.com
                  </a>
                </p>
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#8fbd55]">
                Service Areas
              </p>

              <p className="mt-3 text-sm leading-7 text-white/65">
                San Fernando Valley • Burbank • Glendale • Pasadena • Most of
                Los Angeles
              </p>
            </div>

            <a href={textHref} className="btn-primary mt-6 w-full">
              Text Photos For A Faster Estimate
            </a>
          </div>

          <form onSubmit={handleSubmit} className="premium-card grid gap-4">
            {submitted && (
              <div className="rounded-2xl border border-[#57891d]/35 bg-[#57891d]/15 p-4 text-sm font-bold text-white">
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

            <select className="form-input" name="preferred_contact_method">
              <option value="">Preferred Contact Method</option>
              <option value="Call">Call</option>
              <option value="Text">Text</option>
            </select>

            <textarea
              className="form-input min-h-[140px]"
              name="details"
              placeholder="Additional Details"
            />

            <button type="submit" className="btn-primary w-full">
              Request Quote
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
