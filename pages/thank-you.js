import Head from "next/head";
import Script from "next/script";

const textMessage =
  "Hi Everhaul, I'd like a quote. I've attached photos of my project.";

const textHref = `sms:+18185381072?&body=${encodeURIComponent(textMessage)}`;

const trustItems = [
  "Licensed & Insured",
  "Family-Owned Business",
  "500+ Projects Completed",
  "Fast Response Times",
  "Trusted by Homeowners, Contractors & Property Managers Across Los Angeles",
];

export default function ThankYouPage() {
  return (
    <>
    <Script id="google-ads-request-quote-conversion" strategy="afterInteractive">
  {`
    gtag('event', 'conversion', {
      'send_to': 'AW-18352022232/_gadCJGrld0cENjF9q5E',
      'value': 1.0,
      'currency': 'USD'
    });
  `}
</Script>
      <Head>
        <title>Quote Request Received | Everhaul Solutions</title>

        <meta
          name="description"
          content="Thank you for requesting a quote from Everhaul Solutions. We’ll contact you shortly regarding your junk removal or debris hauling project."
        />

        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <main className="relative min-h-screen overflow-hidden bg-[#242329] px-5 py-20 text-white sm:px-6">
        {/* Subtle Everhaul lighting */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          <div className="absolute left-1/2 top-[-180px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#57891d]/15 blur-[120px]" />

          <div className="absolute bottom-[-220px] right-[-140px] h-[420px] w-[420px] rounded-full bg-[#57891d]/10 blur-[130px]" />

          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.025] via-transparent to-black/20" />
        </div>

        <div className="thank-you-page relative z-10 mx-auto max-w-[700px]">
          <section className="text-center">
            {/* Animated success icon */}
            <div className="success-icon mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-[#57891d]/35 bg-[#57891d]/15 shadow-[0_20px_60px_rgba(87,137,29,0.18)]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-12 w-12 text-[#8fbd55]"
                aria-hidden="true"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>

            <p className="mt-8 text-xs font-black uppercase tracking-[0.3em] text-[#8fbd55]">
              Thank You
            </p>

            <h1 className="mt-4 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
              Quote Request Received!
            </h1>

            <div className="mx-auto mt-6 max-w-2xl space-y-4 text-base leading-7 text-white/68 sm:text-lg">
              <p>Thank you for contacting Everhaul Solutions.</p>

              <p>We’ve successfully received your quote request.</p>

              <p>
                Our team will review your information and contact you as soon as
                possible.
              </p>

              <p>
                Most customers receive a response within one hour during
                business hours.
              </p>

              <p>
                If your project is urgent, feel free to call or text us directly
                for a faster estimate.
              </p>
            </div>

            {/* Main actions */}
            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              <a
                href={textHref}
                className="inline-flex min-h-14 items-center justify-center rounded-2xl bg-[#57891d] px-7 py-4 text-base font-black text-white shadow-[0_18px_45px_rgba(87,137,29,0.25)] transition duration-300 hover:-translate-y-1 hover:bg-[#669f24]"
              >
                📱 Text Photos
              </a>

              <a
                href="tel:+18185381072"
                className="inline-flex min-h-14 items-center justify-center rounded-2xl border border-[#57891d]/35 bg-white/[0.05] px-7 py-4 text-base font-black text-white transition duration-300 hover:-translate-y-1 hover:border-[#57891d]/60 hover:bg-white/[0.08]"
              >
                📞 Call Now
              </a>
            </div>

            <a
              href="/"
              className="mt-6 inline-flex text-sm font-bold text-white/60 transition hover:text-[#8fbd55]"
            >
              ← Return Home
            </a>
          </section>

          {/* Trust card */}
          <section className="premium-thank-you-card mt-12">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#8fbd55]">
              Why Customers Choose Everhaul
            </p>

            <div className="mt-6 grid gap-4">
              {trustItems.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#57891d]/18 text-sm font-black text-[#8fbd55]">
                    ✓
                  </span>

                  <p className="font-semibold leading-6 text-white/78">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Faster estimate card */}
          <section className="premium-thank-you-card mt-5 border-[#57891d]/35 bg-[#57891d]/10 text-center">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#8fbd55]">
              Fast Estimate
            </p>

            <h2 className="mt-3 text-2xl font-black tracking-tight text-white">
              Need a Faster Estimate?
            </h2>

            <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-white/65">
              Text us photos of your project and we’ll usually provide an
              estimate even faster.
            </p>

            <a
              href={textHref}
              className="mt-6 inline-flex min-h-14 w-full items-center justify-center rounded-2xl bg-[#57891d] px-7 py-4 text-base font-black text-white shadow-[0_18px_45px_rgba(87,137,29,0.22)] transition duration-300 hover:-translate-y-1 hover:bg-[#669f24]"
            >
              📱 Text Photos
            </a>
          </section>
        </div>

        <style jsx>{`
          .thank-you-page {
            animation: pageFadeIn 600ms ease-out both;
          }

          .success-icon {
            animation: successFadeIn 650ms ease-out 120ms both;
          }

          .premium-thank-you-card {
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 1.75rem;
            background: linear-gradient(
              145deg,
              rgba(255, 255, 255, 0.065),
              rgba(255, 255, 255, 0.025)
            );
            padding: 1.75rem;
            box-shadow: 0 24px 80px rgba(0, 0, 0, 0.24);
            transition:
              transform 250ms ease,
              border-color 250ms ease,
              box-shadow 250ms ease;
          }

          .premium-thank-you-card:hover {
            transform: translateY(-3px);
            border-color: rgba(87, 137, 29, 0.35);
            box-shadow: 0 28px 90px rgba(0, 0, 0, 0.3);
          }

          @keyframes pageFadeIn {
            from {
              opacity: 0;
              transform: translateY(12px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes successFadeIn {
            from {
              opacity: 0;
              transform: scale(0.88);
            }

            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .thank-you-page,
            .success-icon {
              animation: none;
            }

            .premium-thank-you-card {
              transition: none;
            }
          }
        `}</style>
      </main>
    </>
  );
}
