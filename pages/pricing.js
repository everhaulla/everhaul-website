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
  Your truck should be stored here:

  public/pricing/truck.png

  If your actual filename is different, change only this path.
*/
const TRUCK_IMAGE = "/pricing/truck.png";

const loadLevels = ["¼ Load", "½ Load", "¾ Load", "Full Load"];

const pricingFactors = [
  {
    title: "Volume",
    description: "The amount of space your project occupies.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 7h16v10H4zM8 4v3M16 4v3M8 17v3M16 17v3" />
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
      "Stairs, elevators, long carry distances, and other site conditions may affect the labor required.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 20h4v-4h4v-4h4V8h4M5 6h5M5 6v5" />
      </svg>
    ),
  },
  {
    title: "Labor Required",
    description:
      "Projects requiring additional time, manpower, or special handling may require additional labor.",
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
  "Fuel",
  "Licensed & Insured Professionals",
];

const processSteps = [
  {
    title: "Request a Quote",
    description:
      "Call us, text us photos, or submit our online quote form.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 4h14v12H8l-3 3V4Zm4 4h6M9 12h4" />
      </svg>
    ),
  },
  {
    title: "Free Estimate",
    description:
      "We'll inspect the project and provide an upfront price.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 5h16v14H4zM8 9h8M8 13h5" />
      </svg>
    ),
  },
  {
    title: "Approve the Quote",
    description:
      "If you're happy with the price, we'll get started.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m5 12 4 4L19 6" />
      </svg>
    ),
  },
  {
    title: "We Handle Everything",
    description:
      "Loading, hauling, disposal, and cleanup.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 7h11v9H3zM14 10h4l3 3v3h-7M7 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM18 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      </svg>
    ),
  },
];

const promiseItems = [
  "Free Estimates",
  "No Obligation",
  "Upfront Pricing",
  "No Hidden Fees",
  "Family-Owned",
  "Licensed & Insured",
];

const faqs = [
  {
    question: "Why can't you provide an exact price over the phone?",
    answer:
      "Every project is unique. We can often provide a rough estimate from photos, but an on-site estimate allows us to give you the most accurate price.",
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
        rootMargin: "0px 0px -40px 0px",
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
        className={`font-semibold leading-6 ${
          dark ? "text-[#242329]/75" : "text-white/75"
        }`}
      >
        {children}
      </span>
    </div>
  );
}

function TruckGuide() {
  const [activeLoad, setActiveLoad] = useState(null);

  return (
    <div className="mt-10">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-[#242329]/10 bg-white p-4 shadow-[0_28px_80px_rgba(36,35,41,0.12)] sm:p-7">
        <div className="relative">
          <img
            src={TRUCK_IMAGE}
            alt="Everhaul Solutions truck load-size guide"
            className="mx-auto block h-auto max-h-[570px] w-full object-contain"
          />

          <div className="truck-bed-guide" aria-label="Truck load-size guide">
            {loadLevels.map((load, index) => (
              <button
                key={load}
                type="button"
                aria-label={`Highlight ${load}`}
                aria-pressed={activeLoad === index}
                onMouseEnter={() => setActiveLoad(index)}
                onMouseLeave={() => setActiveLoad(null)}
                onFocus={() => setActiveLoad(index)}
                onBlur={() => setActiveLoad(null)}
                onClick={() =>
                  setActiveLoad((current) =>
                    current === index ? null : index
                  )
                }
                className={`truck-highlight ${
                  activeLoad === index ? "truck-highlight-active" : ""
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-5 grid grid-cols-4 gap-2 sm:gap-4">
          {loadLevels.map((load, index) => (
            <button
              key={load}
              type="button"
              onMouseEnter={() => setActiveLoad(index)}
              onMouseLeave={() => setActiveLoad(null)}
              onFocus={() => setActiveLoad(index)}
              onBlur={() => setActiveLoad(null)}
              onClick={() =>
                setActiveLoad((current) =>
                  current === index ? null : index
                )
              }
              className={`rounded-xl border px-2 py-3 text-xs font-black transition sm:rounded-2xl sm:px-4 sm:py-4 sm:text-base ${
                activeLoad === index
                  ? "border-[#57891d] bg-[#57891d] text-white shadow-[0_12px_30px_rgba(87,137,29,0.2)]"
                  : "border-[#242329]/10 bg-[#f4f4f2] text-[#242329] hover:border-[#57891d]/45"
              }`}
            >
              {load}
            </button>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-6 max-w-4xl space-y-3 text-center">
        <p className="text-sm leading-7 text-[#242329]/65">
          This guide is intended to help estimate the size of your project.
          Every quote is customized and provided upfront before any work
          begins.
        </p>

        <p className="text-sm font-semibold leading-7 text-[#242329]/75">
          Heavy materials such as concrete, dirt, brick, tile, asphalt, and
          roofing debris are priced separately due to increased disposal costs
          and weight.
        </p>
      </div>
    </div>
  );
}

export default function PricingPage() {
  return (
    <>
      <Head>
        <title>
          Junk Removal Pricing | Everhaul Solutions Los Angeles
        </title>

        <meta
          name="description"
          content="Learn how Everhaul Solutions prices junk removal, debris hauling, cleanouts, and jobsite cleanup. Get a free, customized estimate with upfront pricing and no hidden fees."
        />

        <link
          rel="canonical"
          href="https://everhaulsolutions.com/pricing"
        />
      </Head>

      <Navbar />

      <main className="overflow-hidden bg-white">
        {/* Page hero */}
        <section className="relative bg-[#242329] px-5 pb-20 pt-36 text-white sm:px-6 sm:pb-24 lg:px-8">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute left-1/2 top-[-260px] h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[#57891d]/16 blur-[140px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.025] to-black/15" />
          </div>

          <Reveal className="relative z-10 mx-auto max-w-5xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#8fbd55]">
              Everhaul Pricing
            </p>

            <h1 className="mt-5 text-4xl font-black tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
              Transparent & Upfront Pricing
            </h1>

            <p className="mt-5 text-xl font-bold text-white/82 sm:text-2xl">
              Fair pricing. No hidden fees. No surprises.
            </p>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/65 sm:text-lg">
              At Everhaul Solutions, we believe getting a quote should be
              simple and stress-free. Every project is unique, which is why
              we provide customized pricing based on your specific project.
            </p>

            <div className="mx-auto mt-8 inline-flex rounded-2xl border border-[#57891d]/40 bg-[#57891d]/15 px-6 py-4 shadow-[0_18px_50px_rgba(0,0,0,0.2)]">
              <p className="font-black text-white">
                Minimum Service Charge:{" "}
                <span className="text-[#a4ca76]">Starting at $149</span>
              </p>
            </div>
          </Reveal>
        </section>

        {/* Truck centerpiece */}
        <section className="bg-[#f4f4f2] px-5 py-20 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-7xl">
            <div className="text-center">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#57891d]">
                Visual Load Guide
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-[#242329] sm:text-5xl">
                Volume-Based Pricing
              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#242329]/65">
                Use the guide below to estimate the amount of space your
                project may require.
              </p>

              <p className="mx-auto mt-3 max-w-4xl text-sm leading-7 text-[#242329]/60">
                Final pricing is customized based on volume, material type,
                accessibility, labor required, and disposal requirements.
              </p>
            </div>

            <TruckGuide />
          </Reveal>
        </section>

        {/* Pricing factors */}
        <section className="bg-white px-5 py-20 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-7xl">
            <div className="text-center">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#57891d]">
                How We Price
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-[#242329] sm:text-4xl">
                Clear factors. Customized estimates.
              </h2>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {pricingFactors.map((factor) => (
                <article
                  key={factor.title}
                  className="rounded-[1.5rem] border border-[#242329]/10 bg-white p-6 shadow-[0_20px_55px_rgba(36,35,41,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#57891d]/35 hover:shadow-[0_24px_65px_rgba(36,35,41,0.12)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#57891d]/25 bg-[#57891d]/10 text-[#57891d]">
                    <div className="pricing-icon">
                      {factor.icon}
                    </div>
                  </div>

                  <h3 className="mt-5 text-xl font-black text-[#242329]">
                    {factor.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#242329]/62">
                    {factor.description}
                  </p>
                </article>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Included */}
        <section className="bg-[#f4f4f2] px-5 py-20 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-5xl">
            <div className="rounded-[2rem] border border-[#242329]/10 bg-white p-7 shadow-[0_28px_80px_rgba(36,35,41,0.1)] sm:p-10">
              <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.25em] text-[#57891d]">
                    What&apos;s Included
                  </p>

                  <h2 className="mt-4 text-3xl font-black tracking-tight text-[#242329]">
                    Every Project Includes
                  </h2>

                  <p className="mt-5 text-sm leading-7 text-[#242329]/65">
                    You&apos;ll always receive an upfront price before work
                    begins, so there are never any hidden surprises.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {includedItems.map((item) => (
                    <CheckItem key={item} dark>
                      {item}
                    </CheckItem>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Process */}
        <section className="bg-white px-5 py-20 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-7xl">
            <div className="text-center">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#57891d]">
                How It Works
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-[#242329] sm:text-4xl">
                Simple from quote to cleanup.
              </h2>
            </div>

            <div className="relative mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              <div className="absolute left-[12%] right-[12%] top-10 hidden h-px bg-[#57891d]/20 lg:block" />

              {processSteps.map((step) => (
                <article
                  key={step.title}
                  className="relative rounded-[1.5rem] border border-[#242329]/10 bg-white p-6 shadow-[0_20px_55px_rgba(36,35,41,0.08)]"
                >
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl bg-[#57891d] text-white shadow-[0_12px_28px_rgba(87,137,29,0.2)]">
                    <div className="pricing-icon">{step.icon}</div>
                  </div>

                  <h3 className="mt-5 text-lg font-black text-[#242329]">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#242329]/62">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Promise */}
        <section className="bg-[#f4f4f2] px-5 py-20 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-5xl">
            <div className="relative overflow-hidden rounded-[2rem] border border-[#57891d]/30 bg-[#242329] p-7 text-white shadow-[0_32px_90px_rgba(36,35,41,0.24)] sm:p-10">
              <div className="pointer-events-none absolute right-[-130px] top-[-150px] h-[340px] w-[340px] rounded-full bg-[#57891d]/18 blur-[100px]" />

              <div className="relative z-10">
                <p className="text-xs font-black uppercase tracking-[0.25em] text-[#8fbd55]">
                  Our Pricing Promise
                </p>

                <h2 className="mt-4 text-3xl font-black tracking-tight text-white">
                  Honest pricing without pressure.
                </h2>

                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {promiseItems.map((item) => (
                    <CheckItem key={item}>{item}</CheckItem>
                  ))}
                </div>

                <p className="mt-8 rounded-2xl border border-[#57891d]/30 bg-[#57891d]/12 p-5 text-center text-lg font-black leading-8 text-white">
                  If you decide not to move forward after receiving your
                  estimate, you owe us absolutely nothing.
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* FAQs */}
        <section className="bg-white px-5 py-20 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-5xl">
            <div className="text-center">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#57891d]">
                Frequently Asked Questions
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-[#242329] sm:text-4xl">
                Clear answers before you schedule.
              </h2>
            </div>

            <div className="mt-10 grid gap-5">
              {faqs.map((faq) => (
                <article
                  key={faq.question}
                  className="rounded-[1.5rem] border border-[#242329]/10 bg-[#f4f4f2] p-6"
                >
                  <h3 className="text-lg font-black text-[#242329]">
                    {faq.question}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#242329]/65">
                    {faq.answer}
                  </p>
                </article>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Final CTA */}
        <section className="bg-[#f4f4f2] px-5 pb-24 pt-10 sm:px-6 sm:pb-28 lg:px-8">
          <Reveal className="mx-auto max-w-5xl">
            <div className="relative overflow-hidden rounded-[2rem] border border-[#57891d]/30 bg-[#242329] p-7 text-center text-white shadow-[0_32px_90px_rgba(36,35,41,0.25)] sm:p-10 lg:p-12">
              <div className="pointer-events-none absolute left-1/2 top-[-210px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#57891d]/18 blur-[110px]" />

              <div className="relative z-10">
                <p className="text-xs font-black uppercase tracking-[0.25em] text-[#8fbd55]">
                  Free Estimate
                </p>

                <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">
                  Ready to Clear the Clutter?
                </h2>

                <p className="mt-5 text-base text-white/65 sm:text-lg">
                  Get your free, no-obligation estimate today.
                </p>

                <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
                  <a href={TEXT_LINK} className="btn-primary">
                    Text Photos
                  </a>

                  <a href="/#quote" className="btn-secondary">
                    Request a Free Quote
                  </a>

                  <a href={PHONE_LINK} className="btn-secondary">
                    Call Now {PHONE_DISPLAY}
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <style jsx>{`
          .pricing-reveal {
            opacity: 0;
            transform: translateY(22px);
            transition:
              opacity 600ms ease,
              transform 600ms ease;
          }

          .pricing-reveal-visible {
            opacity: 1;
            transform: translateY(0);
          }

          .pricing-icon {
            height: 1.55rem;
            width: 1.55rem;
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

          /*
            These values position the interactive area over the dump bed.

            Adjust these four values only if the overlay does not align with
            your exact truck PNG.
          */
          .truck-bed-guide {
            position: absolute;
            left: 8%;
            top: 16%;
            width: 58%;
            height: 43%;
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            overflow: hidden;
            pointer-events: none;
          }

          .truck-highlight {
            border: 0;
            border-right: 1px solid transparent;
            background: transparent;
            pointer-events: auto;
            cursor: pointer;
            transition:
              background-color 240ms ease,
              box-shadow 240ms ease;
          }

          .truck-highlight:last-child {
            border-right: 0;
          }

          .truck-highlight:hover,
          .truck-highlight:focus-visible,
          .truck-highlight-active {
            background: rgba(87, 137, 29, 0.42);
            box-shadow: inset 0 0 30px rgba(87, 137, 29, 0.26);
            outline: none;
          }

          @media (prefers-reduced-motion: reduce) {
            .pricing-reveal,
            .pricing-reveal-visible {
              opacity: 1;
              transform: none;
              transition: none;
            }

            .truck-highlight {
              transition: none;
            }
          }
        `}</style>
      </main>

      <Footer />
    </>
  );
}
