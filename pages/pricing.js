import Head from "next/head";
import { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PHONE_DISPLAY = "(818) 538-1072";
const PHONE_LINK = "tel:+18185381072";

const TEXT_MESSAGE =
  "Hi Everhaul, I'd like a quote. I've attached photos of my project.";

const TEXT_LINK = `sms:+18185381072?&body=${encodeURIComponent(TEXT_MESSAGE)}`;

const TRUCK_IMAGE = "/pricing/truck.png";

const pricingFactors = [
  {
    title: "Space Used",
    description: "The amount of truck space your project requires.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 7h16v10H4V7Zm4-3v3m8-3v3M8 17v3m8-3v3" />
      </svg>
    ),
  },
  {
    title: "Material Type",
    description:
      "Different materials require different handling and disposal methods.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m12 3 8 4-8 4-8-4 8-4Zm-8 8 8 4 8-4M4 15l8 4 8-4" />
      </svg>
    ),
  },
  {
    title: "Accessibility",
    description:
      "Stairs, elevators, long carry distances, and other site conditions may affect labor.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 20h4v-4h4v-4h4V8h4M5 6h5M5 6v5" />
      </svg>
    ),
  },
  {
    title: "Labor Required",
    description:
      "Some projects require additional time, manpower, or special handling.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14 6a4 4 0 0 0-5 5L3 17l4 4 6-6a4 4 0 0 0 5-5l-3 3-4-4 3-3Z" />
      </svg>
    ),
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
  "Receive a Free Estimate",
  "Approve the Price",
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
    question: "Why can’t you provide an exact price over the phone?",
    answer:
      "Every project is unique. We can often provide a rough estimate from photos, but an on-site estimate allows us to provide the most accurate quote.",
  },
  {
    question: "Can I text photos?",
    answer:
      "Yes. In many cases, we can provide an estimate from photos.",
  },
  {
    question: "When do I pay?",
    answer:
      "Only after you approve the quote and the work is completed.",
  },
];

function PricingIcon({ children }) {
  return (
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#57891d]/25 bg-[#57891d]/10 text-[#57891d]">
      <div className="pricing-icon">{children}</div>
    </div>
  );
}

function CheckItem({ children, dark = true }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#57891d] text-[11px] font-black text-white">
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

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-[#242329]/10 bg-white shadow-[0_14px_40px_rgba(36,35,41,0.06)]">
      <button
        type="button"
        aria-expanded={isOpen}
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-5 px-5 py-4 text-left sm:px-6"
      >
        <span className="font-black text-[#242329]">{item.question}</span>

        <span
          aria-hidden="true"
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#57891d]/25 bg-[#57891d]/10 text-lg font-black text-[#57891d] transition duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-sm leading-7 text-[#242329]/65 sm:px-6">
            {item.answer}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <Head>
        <title>
          Junk Removal Pricing | Everhaul Solutions Los Angeles
        </title>

        <meta
          name="description"
          content="Learn how Everhaul Solutions determines junk removal and debris hauling pricing. Minimum service charge starts at $149. Free estimates, upfront pricing, and no hidden fees."
        />

        <link
          rel="canonical"
          href="https://everhaulsolutions.com/pricing"
        />
      </Head>

      <Navbar />

      <main className="overflow-hidden bg-[#f4f4f2]">
        {/* Compact Hero */}
        <section className="relative bg-[#242329] px-5 pb-12 pt-32 text-white sm:px-6 sm:pb-14 sm:pt-36 lg:px-8">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute left-1/2 top-[-260px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#57891d]/15 blur-[135px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.025] to-black/15" />
          </div>

          <div className="pricing-enter relative z-10 mx-auto max-w-5xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#8fbd55]">
              Everhaul Pricing
            </p>

            <h1 className="mt-4 text-4xl font-black tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
              Transparent & Upfront Pricing
            </h1>

            <p className="mt-4 text-xl font-bold text-white/82 sm:text-2xl">
              Fair pricing. No hidden fees. No surprises.
            </p>

            <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-white/65 sm:text-lg">
              At Everhaul Solutions, getting a quote should be simple and
              stress-free.
            </p>

            <div className="mx-auto mt-6 max-w-md rounded-[1.5rem] border border-[#57891d]/40 bg-[#57891d]/14 px-6 py-5 shadow-[0_18px_50px_rgba(0,0,0,0.22)]">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#a4ca76]">
                Minimum Service Charge
              </p>

              <p className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl">
                Starting at $149
              </p>
            </div>

            <div className="mt-5 flex flex-wrap justify-center gap-2.5">
              {["Free Estimates", "Upfront Pricing", "No Hidden Fees"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-bold text-white/75"
                  >
                    ✓ {item}
                  </span>
                )
              )}
            </div>

            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <a href={TEXT_LINK} className="btn-primary">
                Text Photos
              </a>

              <a href={PHONE_LINK} className="btn-secondary">
                Call Now
              </a>
            </div>
          </div>
        </section>

        {/* Volume-Based Pricing */}
        <section className="px-5 py-12 sm:px-6 sm:py-14 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#242329]/10 bg-white p-6 shadow-[0_24px_70px_rgba(36,35,41,0.09)] sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.24em] text-[#57891d]">
                  Volume-Based Pricing
                </p>

                <h2 className="mt-3 text-3xl font-black tracking-tight text-[#242329] sm:text-5xl">
                  Only Pay for the Space You Use
                </h2>

                <div className="mt-4 max-w-2xl space-y-3 text-sm leading-7 text-[#242329]/65 sm:text-base">
                  <p>
                    We believe junk removal pricing should be simple and
                    transparent. Your quote is based on the amount of truck
                    space your project occupies, along with material type,
                    accessibility, and labor required.
                  </p>

                  <p>
                    Every estimate is customized, provided upfront, and
                    approved before any work begins, so you will always know
                    the exact price before making a decision.
                  </p>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {pricingFactors.map((factor) => (
                    <article
                      key={factor.title}
                      className="rounded-2xl border border-[#242329]/10 bg-[#f4f4f2] p-4"
                    >
                      <div className="flex items-start gap-3">
                        <PricingIcon>{factor.icon}</PricingIcon>

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

                <p className="mt-5 rounded-2xl border border-[#57891d]/20 bg-[#57891d]/[0.07] p-4 text-sm font-semibold leading-6 text-[#242329]/70">
                  Heavy materials such as concrete, dirt, brick, tile, asphalt,
                  and roofing debris are quoted separately because weight and
                  disposal requirements differ.
                </p>
              </div>

              <div className="flex items-center justify-center">
                <img
                  src={TRUCK_IMAGE}
                  alt="Everhaul Solutions dump truck representing volume-based pricing"
                  className="block h-auto max-h-[500px] w-full object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Combined Conversion Section */}
        <section className="px-5 pb-12 sm:px-6 sm:pb-14 lg:px-8">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-[#242329]/10 bg-white shadow-[0_24px_70px_rgba(36,35,41,0.09)]">
            <div className="grid lg:grid-cols-3">
              <article className="border-b border-[#242329]/10 p-6 sm:p-7 lg:border-b-0 lg:border-r">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#57891d]">
                  What&apos;s Included
                </p>

                <h2 className="mt-3 text-2xl font-black text-[#242329]">
                  Every Project Includes
                </h2>

                <div className="mt-5 grid gap-3">
                  {includedItems.map((item) => (
                    <CheckItem key={item}>{item}</CheckItem>
                  ))}
                </div>
              </article>

              <article className="border-b border-[#242329]/10 bg-[#fafaf8] p-6 sm:p-7 lg:border-b-0 lg:border-r">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#57891d]">
                  How It Works
                </p>

                <h2 className="mt-3 text-2xl font-black text-[#242329]">
                  Simple From Start to Finish
                </h2>

                <div className="mt-5 grid gap-3">
                  {processSteps.map((step, index) => (
                    <div key={step} className="flex items-center gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#57891d] text-xs font-black text-white">
                        {index + 1}
                      </span>

                      <p className="text-sm font-bold text-[#242329]/72">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </article>

              <article className="relative overflow-hidden bg-[#242329] p-6 text-white sm:p-7">
                <div className="pointer-events-none absolute right-[-90px] top-[-110px] h-60 w-60 rounded-full bg-[#57891d]/17 blur-[75px]" />

                <div className="relative z-10">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-[#8fbd55]">
                    Our Promise
                  </p>

                  <h2 className="mt-3 text-2xl font-black text-white">
                    Honest Pricing Without Pressure
                  </h2>

                  <div className="mt-5 grid gap-3">
                    {promiseItems.map((item) => (
                      <CheckItem key={item} dark={false}>
                        {item}
                      </CheckItem>
                    ))}
                  </div>
                </div>
              </article>
            </div>

            <div className="border-t border-[#242329]/10 bg-[#f4f4f2] p-6 text-center sm:p-8">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#57891d]">
                Free Estimate
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-[#242329] sm:text-4xl">
                Ready to Clear the Clutter?
              </h2>

              <p className="mt-3 text-sm leading-7 text-[#242329]/62 sm:text-base">
                Get your free, no-obligation estimate today.
              </p>

              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                <a href={TEXT_LINK} className="btn-primary">
                  Text Photos
                </a>

                <a href={PHONE_LINK} className="btn-secondary-dark">
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Compact FAQ */}
        <section className="px-5 pb-16 sm:px-6 sm:pb-20 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#57891d]">
                Frequently Asked Questions
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-[#242329] sm:text-4xl">
                Clear answers before you schedule.
              </h2>
            </div>

            <div className="mt-7 grid gap-3">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={faq.question}
                  item={faq}
                  isOpen={openFaq === index}
                  onToggle={() =>
                    setOpenFaq((current) =>
                      current === index ? null : index
                    )
                  }
                />
              ))}
            </div>
          </div>
        </section>

        <style jsx>{`
          .pricing-enter {
            animation: pricingEnter 550ms ease-out both;
          }

          .pricing-icon {
            height: 1.45rem;
            width: 1.45rem;
          }

          .pricing-icon :global(svg) {
            height: 100%;
            width: 100%;
            fill: none;
            stroke: currentColor;
            stroke-width: 1.8;
            stroke-linecap: round;
            stroke-linejoin: round;
          }

          :global(.btn-secondary-dark) {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: 999px;
            border: 1px solid rgba(36, 35, 41, 0.16);
            background: rgba(36, 35, 41, 0.06);
            padding: 1rem 1.75rem;
            color: #242329;
            font-weight: 900;
            transition:
              transform 250ms ease,
              background 250ms ease,
              border-color 250ms ease;
          }

          :global(.btn-secondary-dark:hover) {
            transform: translateY(-3px);
            border-color: rgba(87, 137, 29, 0.5);
            background: rgba(87, 137, 29, 0.1);
          }

          @keyframes pricingEnter {
            from {
              opacity: 0;
              transform: translateY(14px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .pricing-enter {
              animation: none;
            }
          }
        `}</style>
      </main>

      <Footer />
    </>
  );
}
