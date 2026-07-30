import { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xwvzzbeo";

const phoneDisplay = "(818) 538-1072";
const phoneHref = "tel:+18185381072";

const textMessage =
  "Hi Everhaul, I'd like a quote. I've attached photos of my project.";

const textHref = `sms:+18185381072?&body=${encodeURIComponent(textMessage)}`;

export default function QuoteSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    if (isSubmitting) return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);
    setFormError("");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        let message =
          "We could not submit your request. Please try again or contact us directly.";

        try {
          const result = await response.json();

          if (Array.isArray(result.errors) && result.errors.length > 0) {
            message = result.errors
              .map((error) => error.message)
              .filter(Boolean)
              .join(" ");
          }
        } catch {
          // Keep the default error message when Formspree returns no JSON.
        }

        throw new Error(message);
      }

      form.reset();

      // Redirect only after Formspree confirms a successful submission.
      window.location.assign("/thank-you");
    } catch (error) {
      setFormError(
        error instanceof Error
          ? error.message
          : "We could not submit your request. Please try again."
      );

      setIsSubmitting(false);
    }
  }

  return (
    <section id="quote" className="section-dark">
      <div className="container-premium">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          {/* Existing quote information */}
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
                  <a
                    href={phoneHref}
                    className="font-bold text-white hover:text-[#8fbd55]"
                  >
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

            <a href={textHref} className="btn-primary mt-6 w-full">
              Text Photos For A Faster Estimate
            </a>
          </div>

          {/* Existing Formspree form */}
          <form onSubmit={handleSubmit} className="premium-card grid gap-4">
            {formError && (
              <div
                role="alert"
                className="rounded-2xl border border-red-400/30 bg-red-400/10 p-4 text-sm font-bold text-white"
              >
                {formError}
              </div>
            )}

            <input
              className="form-input"
              type="text"
              name="name"
              autoComplete="name"
              placeholder="Name"
              required
            />

            <input
              className="form-input"
              type="tel"
              name="phone"
              autoComplete="tel"
              placeholder="Phone Number"
              required
            />

            <input
              className="form-input"
              type="text"
              name="zip"
              inputMode="numeric"
              autoComplete="postal-code"
              placeholder="Project ZIP Code"
              required
            />

            <select
              className="form-input"
              name="preferred_contact_method"
              defaultValue=""
            >
              <option value="" disabled>
                Preferred Contact Method
              </option>

              <option value="Call">Call</option>
              <option value="Text">Text</option>
            </select>

            <textarea
              className="form-input min-h-[140px]"
              name="details"
              placeholder="Additional Details"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Submitting..." : "Request Quote"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
