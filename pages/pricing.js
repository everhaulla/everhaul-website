import Head from "next/head";
import { useEffect, useRef, useState } from "react";

const PHONE_DISPLAY = "(818) 538-1072";
const PHONE_LINK = "tel:+18185381072";

const TEXT_MESSAGE =
  "Hi Everhaul, I'd like a quote. I've attached photos of my project.";

const TEXT_LINK = `sms:+18185381072?&body=${encodeURIComponent(TEXT_MESSAGE)}`;

const pricingFactors = [
  "Volume of material",
  "Material type",
  "Weight",
  "Accessibility",
  "Labor required",
  "Disposal costs",
];

const includedServices = [
  "Loading",
  "Labor",
  "Hauling",
  "Disposal",
  "Jobsite Cleanup",
  "Fuel",
  "Disposal Fees",
];

const pricingPromise = [
  "Free estimates",
  "No obligation",
  "No hidden fees",
  "Upfront pricing",
  "Licensed & Insured",
  "Family-Owned",
  "Professional service from start to finish",
];

const processSteps = [
  {
    number: "01",
    title: "Request a Quote",
    description:
      "Call us, text us photos, or submit our online quote form.",
  },
  {
    number: "02",
    title: "Free On-Site Estimate",
    description:
      "We'll inspect the project and provide a clear, upfront price.",
  },
  {
    number: "03",
    title: "Approve the Quote",
    description:
      "Once you're comfortable with the price, we'll schedule or begin the work.",
  },
  {
    number: "04",
    title: "We Handle Everything",
    description:
      "Our team handles the lifting, loading, hauling, disposal, and final cleanup.",
  },
];

const frequentlyAskedQuestions = [
  {
    question: "Why can't you give an exact price over the phone?",
    answer:
      "Every project is different. Volume, weight, material type, accessibility, labor, and disposal costs can all affect the final price. We can often provide a rough estimate from photos, but an on-site estimate allows us to give you the most accurate upfront price.",
  },
  {
    question: "Can I text photos instead of scheduling an estimate?",
    answer:
      "Yes. In many cases, we can provide an estimate from clear photos of the material and surrounding access. If we need to inspect the project in person, we'll schedule a free on-site estimate.",
  },
  {
    question: "Do you charge for estimates?",
    answer:
      "Never. Every Everhaul estimate is completely free and comes with no obligation.",
  },
  {
    question: "When do I pay?",
    answer:
      "You only pay after you approve the quote and the agreed-upon work is completed.",
  },
];

const loadSections = ["¼ Load", "½ Load", "¾ Load", "Full Load"];

function FadeInSection({ children, className = "" }) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) return undefined;

    if (
      typeof window === "undefined" ||
      !("IntersectionObserver" in window)
    ) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`pricing-reveal ${
        isVisible ? "pricing-reveal-visible" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}

function CheckItem({ children }) {
  return (
    <div className="flex items-start gap-3">
      <span
        aria-hidden="true"
        className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#57891d]/35 bg-[#57891d]/15 text-sm font-black text-[#8fbd55]"
      >
        ✓
      </span>

      <span className="font-semibold leading-6 text-white/75">
        {children}
      </span>
    </div>
  );
}

function TruckLoadGuide() {
  const [activeSection, setActiveSection] = useState(null);

  return (
    <div className="mt-10">
      <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#1d1c21] p-4 shadow-[0_30px_90px_rgba(0,0,0,0.35)] sm:p-7">
        <div className="relative mx-auto max-w-5xl">
          <img
            src="/pricing/everhaul-topkick-cutout.png"
            alt="Everhaul Solutions white GMC TopKick dump truck load-size guide"
            className="block h-auto w-full object-contain"
          />

          {/*
            IMPORTANT:
            This overlay must sit over the dump bed only.

            The current values are a safe starting point:
            left: 8%
            top: 17%
            width: 58%
            height: 43%

            Adjust these four values in the styled-jsx section if your
            transparent truck photo has different framing.
          */}
          <div
            className="truck-bed-overlay"
            aria-label="Interactive truck load size guide"
          >
            {loadSections.map((label, index) => {
              const isActive = activeSection === index;

              return (
                <button
                  key={label}
                  type="button"
                  aria-pressed={isActive}
                  aria-label={`Highlight ${label}`}
                  onMouseEnter={() => setActiveSection(index)}
                  onMouseLeave={() => setActiveSection(null)}
                  onFocus={() => setActiveSection(index)}
                  onBlur={() => setActiveSection(null)}
                  onClick={() =>
                    setActiveSection((current) =>
                      current === index ? null : index
                    )
                  }
                  className={`truck-load-section ${
                    isActive ? "truck-load-section-active" : ""
                  }`}
                >
                  <span>{label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-2 text-center text-xs font-bold uppercase tracking-[0.14em] text-white/45">
          <span>Visual size guide only</span>
          <span className="hidden sm:inline" aria-hidden="true">
            •
          </span>
          <span>Final pricing is customized</span>
        </div>
      </div>

      <p className="mx-auto mt-6 max-w-4xl text-center text-sm font-semibold leading-7 text-white/60">
        Heavy materials such as concrete, dirt, brick, tile, asphalt, and
        roofing debris are priced separately due to increased disposal costs
        and weight.
      </p>
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
          content="Learn how Everhaul Solutions prices junk removal, debris hauling, cleanouts, and jobsite cleanup. Free, no-obligation estimates with upfront pricing and no hidden fees."
        />

        <link rel="canonical" href="https://everhaulsolutions.com/pricing" />
      </Head>

      <main className="min-h-screen overflow-hidden bg-[#242329] text-white">
        <section className="relative px-5 pb-20 pt-24 sm:px-6 sm:pb-24 sm:pt-28 lg:px-8">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
          >
            <div className="absolute left-1/2 top-[-240px] h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[#57891d]/15 blur-[150px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.025] via-transparent to-black/20" />
          </div>

          <FadeInSection className="relative z-10 mx-auto max-w-7xl">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#8fbd55]">
                Everhaul Pricing
              </p>

              <h1 className="mt-5 text-4xl font-black leading-tight tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
                Transparent & Upfront Pricing
              </h1>

              <p className="mt-5 text-xl font-bold text-white/80 sm:text-2xl">
                Fair pricing. No hidden fees. No surprises.
              </p>

              <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/65 sm:text-lg">
                At Everhaul Solutions, we believe getting a quote should be
                simple and stress-free.
              </p>

              <div className="mx-auto mt-9 max-w-xl rounded-[1.75rem] border border-[#57891d]/35 bg-[#57891d]/12 p-6 shadow-[0_22px_60px_rgba(0,0,0,0.2)]">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#8fbd55]">
                  Minimum Service Charge
                </p>

                <p className="mt-3 text-3xl font-black tracking-tight text-white">
                  Starting at $149
                </p>
              </div>
            </div>
          </FadeInSection>
        </section>

        <section className="px-5 py-20 sm:px-6 lg:px-8">
          <FadeInSection className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.25em] text-[#8fbd55]">
                  Customized Pricing
                </p>

                <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
                  Every project is different.
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-8 text-white/65">
                  Every project is unique, which is why we provide customized
                  pricing based on your specific job—not a one-size-fits-all
                  rate.
                </p>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-[0_25px_70px_rgba(0,0,0,0.24)] sm:p-8">
                <p className="font-black text-white">
                  Our pricing is based on:
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {pricingFactors.map((factor) => (
                    <CheckItem key={factor}>{factor}</CheckItem>
                  ))}
                </div>
              </div>
            </div>
          </FadeInSection>
        </section>

        <section className="border-y border-white/10 bg-black/15 px-5 py-20 sm:px-6 lg:px-8">
          <FadeInSection className="mx-auto max-w-7xl">
            <div className="text-center">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#8fbd55]">
                How We Price Your Project
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">
                Know what to expect before we arrive.
              </h2>

              <div className="mx-auto mt-6 max-w-4xl space-y-4 text-base leading-8 text-white/65">
                <p>
                  Every project is different, which is why we don&apos;t
                  believe in one-size-fits-all pricing.
                </p>

                <p>
                  To help you better understand the size of your project,
                  we&apos;ve included a visual guide below.
                </p>

                <p>
                  Final pricing depends on the amount and type of material,
                  weight, accessibility, labor required, and disposal costs.
                </p>
              </div>
            </div>

            <TruckLoadGuide />
          </FadeInSection>
        </section>

        <section className="px-5 py-20 sm:px-6 lg:px-8">
          <FadeInSection className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.25em] text-[#8fbd55]">
                  What&apos;s Included
                </p>

                <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
                  Everything needed to complete the job.
                </h2>

                <p className="mt-5 max-w-xl text-base leading-8 text-white/65">
                  Your approved quote includes the services required to remove
                  the material and leave the work area clean.
                </p>

                <div className="mt-7 space-y-2 text-lg font-black text-white">
                  <p>No hidden charges.</p>
                  <p>No surprise fees.</p>
                  <p>No extra labor costs.</p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {includedServices.map((service) => (
                  <div
                    key={service}
                    className="rounded-2xl border border-white/10 bg-white/[0.045] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.18)]"
                  >
                    <CheckItem>{service}</CheckItem>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>
        </section>

        <section className="border-y border-white/10 bg-black/15 px-5 py-20 sm:px-6 lg:px-8">
          <FadeInSection className="mx-auto max-w-7xl">
            <div className="rounded-[2rem] border border-[#57891d]/30 bg-[#57891d]/10 p-7 shadow-[0_28px_80px_rgba(0,0,0,0.25)] sm:p-10 lg:p-12">
              <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.25em] text-[#8fbd55]">
                    Free, No-Obligation Estimates
                  </p>

                  <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
                    Not sure what your project will cost?
                  </h2>

                  <p className="mt-5 max-w-2xl text-base leading-8 text-white/68">
                    We provide free, no-obligation on-site estimates throughout
                    Los Angeles and the San Fernando Valley.
                  </p>

                  <p className="mt-5 font-black text-white">
                    You&apos;ll always know the exact cost before we start.
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-white/10 bg-[#242329]/70 p-6">
                  <p className="font-black text-white">
                    One of our team members will:
                  </p>

                  <div className="mt-5 grid gap-4">
                    <CheckItem>Assess your project</CheckItem>
                    <CheckItem>Answer your questions</CheckItem>
                    <CheckItem>
                      Provide an upfront price before any work begins
                    </CheckItem>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </section>

        <section className="px-5 py-20 sm:px-6 lg:px-8">
          <FadeInSection className="mx-auto max-w-7xl">
            <div className="text-center">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#8fbd55]">
                How It Works
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">
                Simple from the first call to the final cleanup.
              </h2>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step) => (
                <article
                  key={step.number}
                  className="rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-6 shadow-[0_22px_65px_rgba(0,0,0,0.2)]"
                >
                  <p className="text-sm font-black tracking-[0.2em] text-[#8fbd55]">
                    {step.number}
                  </p>

                  <h3 className="mt-5 text-xl font-black text-white">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/62">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </FadeInSection>
        </section>

        <section className="border-y border-white/10 bg-black/15 px-5 py-20 sm:px-6 lg:px-8">
          <FadeInSection className="mx-auto max-w-5xl">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 text-center shadow-[0_28px_80px_rgba(0,0,0,0.25)] sm:p-10">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#8fbd55]">
                Our Pricing Promise
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
                Hiring Everhaul should feel completely risk-free.
              </h2>

              <div className="mx-auto mt-8 grid max-w-3xl gap-4 text-left sm:grid-cols-2">
                {pricingPromise.map((item) => (
                  <CheckItem key={item}>{item}</CheckItem>
                ))}
              </div>

              <div className="mx-auto mt-9 max-w-3xl rounded-2xl border border-[#57891d]/30 bg-[#57891d]/10 p-6">
                <p className="text-base leading-8 text-white/70">
                  If you decide not to move forward after receiving your
                  estimate...
                </p>

                <p className="mt-2 text-2xl font-black text-white">
                  You owe us absolutely nothing.
                </p>
              </div>
            </div>
          </FadeInSection>
        </section>

        <section className="px-5 py-20 sm:px-6 lg:px-8">
          <FadeInSection className="mx-auto max-w-5xl">
            <div className="text-center">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#8fbd55]">
                Frequently Asked Questions
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">
                Clear answers before you schedule.
              </h2>
            </div>

            <div className="mt-12 grid gap-5">
              {frequentlyAskedQuestions.map((item) => (
                <article
                  key={item.question}
                  className="rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-6 shadow-[0_20px_55px_rgba(0,0,0,0.18)] sm:p-7"
                >
                  <h3 className="text-lg font-black text-white">
                    {item.question}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/65 sm:text-base">
                    {item.answer}
                  </p>
                </article>
              ))}
            </div>
          </FadeInSection>
        </section>

        <section className="px-5 pb-24 pt-8 sm:px-6 sm:pb-28 lg:px-8">
          <FadeInSection className="mx-auto max-w-5xl">
            <div className="relative overflow-hidden rounded-[2.25rem] border border-[#57891d]/35 bg-[#1d1c21] p-7 text-center shadow-[0_35px_100px_rgba(0,0,0,0.35)] sm:p-10 lg:p-14">
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-[-200px] h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-[#57891d]/18 blur-[110px]"
              />

              <div className="relative z-10">
                <p className="text-xs font-black uppercase tracking-[0.25em] text-[#8fbd55]">
                  Free Estimate
                </p>

                <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">
                  Ready to Clear the Clutter?
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
                  Get your free, no-obligation estimate today.
                </p>

                <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
                  <a
                    href={TEXT_LINK}
                    className="inline-flex min-h-14 items-center justify-center rounded-2xl bg-[#57891d] px-8 py-4 text-base font-black text-white shadow-[0_18px_45px_rgba(87,137,29,0.25)] transition duration-300 hover:-translate-y-1 hover:bg-[#669f24]"
                  >
                    Text Photos
                  </a>

                  <a
                    href="/#quote"
                    className="inline-flex min-h-14 items-center justify-center rounded-2xl border border-[#57891d]/35 bg-[#57891d]/12 px-8 py-4 text-base font-black text-white transition duration-300 hover:-translate-y-1 hover:bg-[#57891d]/22"
                  >
                    Request a Free Quote
                  </a>

                  <a
                    href={PHONE_LINK}
                    className="inline-flex min-h-14 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.055] px-8 py-4 text-base font-black text-white transition duration-300 hover:-translate-y-1 hover:border-[#57891d]/45 hover:bg-white/[0.085]"
                  >
                    Call Now {PHONE_DISPLAY}
                  </a>
                </div>
              </div>
            </div>
          </FadeInSection>
        </section>

        <style jsx>{`
          .pricing-reveal {
            opacity: 0;
            transform: translateY(24px);
            transition:
              opacity 650ms ease,
              transform 650ms ease;
          }

          .pricing-reveal-visible {
            opacity: 1;
            transform: translateY(0);
          }

          .truck-bed-overlay {
            position: absolute;

            /*
              Adjust these values after adding your transparent truck image.
              The overlay must cover only the dump bed.
            */
            left: 8%;
            top: 17%;
            width: 58%;
            height: 43%;

            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            overflow: hidden;
            border: 1px solid rgba(87, 137, 29, 0.38);
            border-radius: 0.5rem;
          }

          .truck-load-section {
            position: relative;
            display: flex;
            min-width: 0;
            align-items: center;
            justify-content: center;
            border: 0;
            border-right: 1px solid rgba(255, 255, 255, 0.32);
            background: rgba(87, 137, 29, 0.12);
            color: rgba(255, 255, 255, 0.92);
            cursor: pointer;
            transition:
              background-color 250ms ease,
              box-shadow 250ms ease;
          }

          .truck-load-section:last-child {
            border-right: 0;
          }

          .truck-load-section span {
            border-radius: 999px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            background: rgba(36, 35, 41, 0.78);
            padding: 0.45rem 0.65rem;
            font-size: clamp(0.58rem, 1.25vw, 0.85rem);
            font-weight: 900;
            line-height: 1;
            white-space: nowrap;
            box-shadow: 0 8px 22px rgba(0, 0, 0, 0.22);
            backdrop-filter: blur(8px);
          }

          .truck-load-section-active,
          .truck-load-section:hover,
          .truck-load-section:focus-visible {
            background: rgba(87, 137, 29, 0.48);
            box-shadow: inset 0 0 28px rgba(87, 137, 29, 0.32);
            outline: none;
          }

          @media (max-width: 640px) {
            .truck-load-section span {
              padding: 0.32rem 0.38rem;
              font-size: 0.52rem;
              letter-spacing: -0.02em;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .pricing-reveal,
            .pricing-reveal-visible {
              opacity: 1;
              transform: none;
              transition: none;
            }

            .truck-load-section {
              transition: none;
            }
          }
        `}</style>
      </main>
    </>
  );
}
