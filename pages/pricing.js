import Head from "next/head";
import { useEffect, useRef, useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PHONE_DISPLAY = "(818) 538-1072";
const PHONE_LINK = "tel:+18185381072";

const TEXT_MESSAGE =
  "Hi Everhaul, I'd like a quote. I've attached photos of my project.";

const TEXT_LINK = `sms:+18185381072?&body=${encodeURIComponent(TEXT_MESSAGE)}`;

/*
  Change only this path if your existing truck PNG uses a different filename.

  Expected location:
  public/pricing/everhaul-topkick-cutout.png
*/
const TRUCK_IMAGE = "/pricing/truck.png";

const pricingFactors = [
  {
    icon: "📦",
    title: "Space Used",
    description: "The amount of truck space your project requires.",
  },
  {
    icon: "🗑️",
    title: "Material Type",
    description:
      "Different materials require different handling and disposal methods.",
  },
  {
    icon: "🚪",
    title: "Accessibility",
    description:
      "Stairs, elevators, long carry distances, and site conditions may affect labor.",
  },
  {
    icon: "👷",
    title: "Labor Required",
    description:
      "Projects requiring additional time, manpower, or special handling.",
  },
];

const includedItems = [
  "Loading",
  "Hauling",
  "Disposal",
  "Jobsite Cleanup",
];

const processSteps = [
  "Request a Quote",
  "Free Estimate",
  "Approve the Quote",
  "We Handle Everything",
];

const promiseItems = [
  "Free Estimates",
  "No Obligation",
  "Upfront Pricing",
  "No Hidden Fees",
  "Licensed & Insured",
];

const faqs = [
  {
    question: "Why can't you provide an exact price over the phone?",
    answer:
      "Every project is unique. We can often provide a rough estimate from photos, but an on-site estimate allows us to provide the most accurate quote.",
  },
  {
    question: "Can I text photos?",
    answer:
      "Yes. In many cases we can provide an estimate from clear photos of the material and access area.",
  },
  {
    question: "When do I pay?",
    answer:
      "Only after you approve the quote and the work is completed.",
  },
];

function Reveal({ children, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return undefined;

    if (
      typeof window === "undefined" ||
      !("IntersectionObserver" in window)
    ) {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`pricing-reveal ${
        visible ? "pricing-reveal-visible" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}

function CheckItem({ children, dark = false }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#57891d] text-sm font-black text-white">
        ✓
      </span>

      <span
        className={`text-sm font-semibold leading-6 ${
          dark ? "text-[#242329]/75" : "text-white/75"
        }`}
      >
        {children}
      </span>
    </div>
  );
}

function FAQItem({ item, open, onToggle }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-[#242329]/10 bg-white shadow-[0_14px_40px_rgba(36,35,41,0.06)]">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
      >
        <span className="font-black text-[#242329]">{item.question}</span>

        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#57891d]/25 bg-[#57891d]/10 text-xl font-bold text-[#57891d] transition duration-300 ${
            open ? "rotate-45" : ""
          }`}
          aria-hidden="true"
        >
          +
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-sm leading-7 text-[#242329]/65 sm:px-6 sm:pb-6">
            {item.answer}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      <Head>
        <title>
          Junk Removal Pricing | Everhaul Solutions Los Angeles
        </title>

        <meta
          name="description"
          content="Learn how Everhaul Solutions determines junk removal and debris hauling pricing. Get a free estimate with upfront pricing and no hidden fees."
        />

        <link
          rel="canonical"
          href="https://everhaulsolutions.com/pricing"
        />
      </Head>

      <Navbar />

      <main className="overflow-hidden bg-white">
        {/* Compact hero */}
        <section className="relative bg-[#242329] px-5 pb-14 pt-32 text-white sm:px-6 sm:pb-16 sm:pt-36 lg:px-8">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute left-1/2 top-[-250px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#57891d]/16 blur-[135px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.025] to-black/15" />
          </div>

          <Reveal className="relative z-10 mx-auto max-w-5xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#8fbd55]">
              Everhaul Pricing
            </p>

            <h1 className="mt-4 text-4xl font-black tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
              Transparent & Upfront Pricing
            </h1>

            <p className="mt-4 text-xl font-bold text-white/82 sm:text-2xl">
              Fair pricing. No hidden fees. No surprises.
            </p>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-white/65 sm:text-lg">
              At Everhaul Solutions, we believe getting a quote should be
              simple and stress-free.
            </p>

            <div className="mx-auto mt-6 inline-flex rounded-2xl border border-[#57891d]/40 bg-[#57891d]/15 px-6 py-4 shadow-[0_18px_50px_rgba(0,0,0,0.2)]">
              <p className="font-black text-white">
                Minimum Service Charge:{" "}
                <span className="text-[#a4ca76]">Starting at $149</span>
              </p>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {["Free Estimates", "Upfront Pricing", "No Hidden Fees"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-bold text-white/75"
                  >
                    ✓ {item}
                  </div>
                )
              )}
            </div>

            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <a href={TEXT_LINK} className="btn-primary">
                Text Photos
              </a>

              <a href="/#quote" className="btn-secondary">
                Request a Free Quote
              </a>
            </div>
          </Reveal>
        </section>

        {/* Volume pricing centerpiece */}
        <section className="bg-[#f4f4f2] px-5 py-14 sm:px-6 sm:py-16 lg:px-8">
          <Reveal className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.25em] text-[#57891d]">
                  Volume-Based Pricing
                </p>

                <h2 className="mt-3 text-3xl font-black tracking-tight text-[#242329] sm:text-5xl">
                  Only Pay for the Space You Use
                </h2>

                <div className="mt-5 space-y-4 text-sm leading-7 text-[#242329]/65 sm:text-base">
                  <p>
                    At Everhaul Solutions, pricing is based on the size of your
                    project—not a one-size-fits-all rate.
                  </p>

                  <p>
                    Rather than charging every customer for a full truck,
                    you&apos;ll only pay for the amount of truck space your
                    project occupies, along with material type, accessibility,
                    and labor required.
                  </p>

                  <p>
                    Every estimate is customized, provided upfront, and approved
                    before any work begins.
                  </p>
                </div>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {pricingFactors.map((factor) => (
                    <article
                      key={factor.title}
                      className="rounded-2xl border border-[#242329]/10 bg-white p-4 shadow-[0_14px_38px_rgba(36,35,41,0.07)]"
                    >
                      <div className="flex items-start gap-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#57891d]/10 text-xl">
                          {factor.icon}
                        </span>

                        <div>
                          <h3 className="font-black text-[#242329]">
                            {factor.title}
                          </h3>

                          <p className="mt-1 text-xs leading-5 text-[#242329]/60">
                            {factor.description}
                          </p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                <p className="mt-6 rounded-2xl border border-[#57891d]/20 bg-[#57891d]/8 p-4 text-sm font-semibold leading-6 text-[#242329]/70">
                  Heavy materials such as concrete, dirt, brick, tile, asphalt,
                  and roofing debris are quoted separately due to increased
                  weight and disposal requirements.
                </p>
              </div>

              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-[#57891d]/10 blur-[80px]" />

                <img
                  src={TRUCK_IMAGE}
                  alt="Everhaul Solutions dump truck representing volume-based pricing"
                  className="relative z-10 mx-auto block h-auto max-h-[560px] w-full object-contain"
                />

                <p className="relative z-10 mt-4 text-center text-xs font-bold uppercase tracking-[0.16em] text-[#242329]/45">
                  Visual representation of truck capacity
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Compact trust cards */}
        <section className="bg-white px-5 py-14 sm:px-6 sm:py-16 lg:px-8">
          <Reveal className="mx-auto max-w-7xl">
            <div className="grid gap-5 lg:grid-cols-3">
              <article className="flex h-full flex-col rounded-[1.75rem] border border-[#242329]/10 bg-white p-6 shadow-[0_20px_55px_rgba(36,35,41,0.08)]">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#57891d]">
                  What&apos;s Included
                </p>

                <h2 className="mt-3 text-2xl font-black text-[#242329]">
                  Every Project Includes
                </h2>

                <div className="mt-6 grid gap-4">
                  {includedItems.map((item) => (
                    <CheckItem key={item} dark>
                      {item}
                    </CheckItem>
                  ))}
                </div>
              </article>

              <article className="flex h-full flex-col rounded-[1.75rem] border border-[#242329]/10 bg-[#f4f4f2] p-6 shadow-[0_20px_55px_rgba(36,35,41,0.08)]">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#57891d]">
                  How It Works
                </p>

                <h2 className="mt-3 text-2xl font-black text-[#242329]">
                  Simple From Start to Finish
                </h2>

                <div className="mt-6 grid gap-4">
                  {processSteps.map((step, index) => (
                    <div key={step} className="flex items-center gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#57891d] text-xs font-black text-white">
                        {index + 1}
                      </span>

                      <p className="text-sm font-bold text-[#242329]/75">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </article>

              <article className="relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-[#57891d]/30 bg-[#242329] p-6 text-white shadow-[0_24px_65px_rgba(36,35,41,0.18)]">
                <div className="pointer-events-none absolute right-[-80px] top-[-100px] h-56 w-56 rounded-full bg-[#57891d]/18 blur-[70px]" />

                <div className="relative z-10">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-[#8fbd55]">
                    Our Promise
                  </p>

                  <h2 className="mt-3 text-2xl font-black text-white">
                    Honest Pricing Without Pressure
                  </h2>

                  <div className="mt-6 grid gap-4">
                    {promiseItems.map((item) => (
                      <CheckItem key={item}>{item}</CheckItem>
                    ))}
                  </div>
                </div>
              </article>
            </div>
          </Reveal>
        </section>

        {/* CTA */}
        <section className="bg-[#f4f4f2] px-5 py-12 sm:px-6 sm:py-14 lg:px-8">
          <Reveal className="mx-auto max-w-5xl">
            <div className="relative overflow-hidden rounded-[2rem] border border-[#57891d]/30 bg-[#242329] p-7 text-center text-white shadow-[0_30px_85px_rgba(36,35,41,0.24)] sm:p-10">
              <div className="pointer-events-none absolute left-1/2 top-[-210px] h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-[#57891d]/18 blur-[110px]" />

              <div className="relative z-10">
                <p className="text-xs font-black uppercase tracking-[0.24em] text-[#8fbd55]">
                  Free Estimate
                </p>

                <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-5xl">
                  Ready to Clear the Clutter?
                </h2>

                <p className="mt-4 text-base text-white/65 sm:text-lg">
                  Get your free, no-obligation estimate today.
                </p>

                <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
                  <a href={TEXT_LINK} className="btn-primary">
                    Text Photos
                  </a>

                  <a href="/#quote" className="btn-secondary">
                    Request a Free Quote
                  </a>

                  <a href={PHONE_LINK} className="btn-secondary">
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* FAQ */}
        <section className="bg-white px-5 py-14 sm:px-6 sm:py-16 lg:px-8">
          <Reveal className="mx-auto max-w-4xl">
            <div className="text-center">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#57891d]">
                Frequently Asked Questions
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-[#242329] sm:text-4xl">
                Clear answers before you schedule.
              </h2>
            </div>

            <div className="mt-8 grid gap-4">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={faq.question}
                  item={faq}
                  open={openFaq === index}
                  onToggle={() =>
                    setOpenFaq((current) =>
                      current === index ? null : index
                    )
                  }
                />
              ))}
            </div>
          </Reveal>
        </section>

        <style jsx>{`
          .pricing-reveal {
            opacity: 0;
            transform: translateY(18px);
            transition:
              opacity 550ms ease,
              transform 550ms ease;
          }

          .pricing-reveal-visible {
            opacity: 1;
            transform: translateY(0);
          }

          @media (prefers-reduced-motion: reduce) {
            .pricing-reveal,
            .pricing-reveal-visible {
              opacity: 1;
              transform: none;
              transition: none;
            }
          }
        `}</style>
      </main>

      <Footer />
    </>
  );
}
