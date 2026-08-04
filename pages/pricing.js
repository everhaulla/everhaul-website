import Head from "next/head";
import { useEffect, useRef, useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PHONE_LINK = "tel:+18185381072";

const TEXT_MESSAGE =
  "Hi Everhaul, I'd like a quote. I've attached photos of my project.";

const TEXT_LINK = `sms:+18185381072?&body=${encodeURIComponent(TEXT_MESSAGE)}`;

const TRUCK_IMAGE = "/pricing/truck.png";

function PackageIcon({ className = "h-6 w-6" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
      <path d="m4 7.5 8 4.5 8-4.5" />
      <path d="M12 12v9" />
    </svg>
  );
}

function MaterialIcon({ className = "h-6 w-6" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="5" width="8" height="5" rx="1" />
      <rect x="13" y="5" width="8" height="5" rx="1" />
      <rect x="8" y="12" width="8" height="5" rx="1" />
      <path d="M3 19h8" />
      <path d="M13 19h8" />
    </svg>
  );
}

function StairsIcon({ className = "h-6 w-6" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M3 20h5v-4h4v-4h4V8h5" />
      <path d="M5 5h5v5" />
      <path d="m5 10 5-5" />
    </svg>
  );
}

function LaborClockIcon({ className = "h-6 w-6" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M7 9a5 5 0 0 1 10 0" />
      <path d="M6 9h12" />
      <path d="M8 9v2a4 4 0 0 0 8 0V9" />
      <path d="M5 21v-2a5 5 0 0 1 5-5h4" />
      <circle cx="17" cy="17" r="4" />
      <path d="M17 15v2l1.4 1" />
    </svg>
  );
}

function CheckIcon({ className = "h-5 w-5", strokeWidth = 2.6 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function CheckCircleIcon({ className = "h-5 w-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12 2.5 2.5L16 9" />
    </svg>
  );
}

const loadLevels = [
  {
    label: "¼ Load",
    examples: ["Couch + Mattress", "Small Garage Cleanup"],
  },
  {
    label: "½ Load",
    examples: ["Bedroom Furniture", "Medium Garage Cleanup"],
  },
  {
    label: "¾ Load",
    examples: ["Renovation Debris", "Multiple Rooms of Furniture"],
  },
  {
    label: "Full Load",
    examples: ["Estate Cleanout", "Large Construction Cleanup"],
  },
];

const comparisonRows = [
  ["Couch + Mattress", "¼ Truck"],
  ["Small Garage Cleanout", "¼–½ Truck"],
  ["Bedroom Furniture", "½ Truck"],
  ["Kitchen Remodel Debris", "½–¾ Truck"],
  ["Whole Garage Cleanout", "¾ Truck"],
  ["Estate / Whole Home Cleanout", "Full Truck"],
];

const pricingFactors = [
  {
    title: "Truck Space",
    description:
      "How much of our truck your project is expected to occupy.",
    icon: PackageIcon,
  },
  {
    title: "Material Type",
    description:
      "Different materials may require different handling and disposal.",
    icon: MaterialIcon,
  },
  {
    title: "Accessibility",
    description:
      "Stairs, elevators, long carries, and site access may affect labor.",
    icon: StairsIcon,
  },
  {
    title: "Time & Labor",
    description:
      "Projects requiring additional time or manpower may affect pricing.",
    icon: LaborClockIcon,
  },
];

const processSteps = [
  {
    title: "Text Photos or Call",
  },
  {
    title: "Receive Your Free Estimate",
  },
  {
    title: "Official Price Confirmed On-Site",
  },
  {
    title: "We Remove Everything",
  },
  {
    title: "Pay After Completion",
  },
];

const includedItems = [
  "Loading",
  "Hauling",
  "Disposal",
  "Fuel",
  "Sweep-Up Before We Leave",
  "Licensed & Insured Professionals",
];

const guaranteeItems = [
  "Free Estimates",
  "No Hidden Fees",
  "Upfront Pricing",
  "No Obligation",
  "Family-Owned",
  "Final Price Confirmed Before Work Begins",
];

const faqs = [
  {
    question: "Why can't you give an exact price over the phone?",
    answer:
      "Every project is different. The final price depends on truck space, material type, accessibility, labor, and disposal requirements. We can often provide a rough estimate from photos, but an on-site estimate gives us the clearest way to provide an accurate final price.",
  },
  {
    question: "Can I text photos for an estimate?",
    answer:
      "Yes. Texting two or three clear photos is often the fastest way to get an initial estimate. Include photos of the items, the surrounding area, and any stairs or access conditions.",
  },
  {
    question: "When do I pay?",
    answer:
      "You pay only after you approve the price and the agreed-upon work is completed.",
  },
  {
    question: "Do I need to be home?",
    answer:
      "Not always. If the materials are accessible and we have clear instructions, we may be able to complete the project without you being present. We will confirm the details with you before the appointment.",
  },
  {
    question: "How quickly can you come out?",
    answer:
      "Availability varies, but we prioritize fast response times and may be able to offer same-day or next-day service depending on the project and schedule.",
  },
  {
    question: "What happens if I decide not to move forward?",
    answer:
      "You owe nothing. No work begins until the final on-site price is confirmed and approved by you.",
  },
];

function Reveal({ children, className = "", delay = 0 }) {
  const elementRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return undefined;
    }

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
        threshold: 0.08,
        rootMargin: "0px 0px -35px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={elementRef}
      style={{ transitionDelay: `${delay}ms` }}
      className={`pricing-reveal ${
        visible ? "pricing-reveal-visible" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}

function PricingFeatureIcon({ icon: Icon }) {
  return (
    <div className="pricing-feature-icon flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#57891d]/25 bg-[#57891d]/10 text-[#57891d] transition duration-300">
      <Icon className="h-6 w-6" />
    </div>
  );
}

function CheckItem({ children, light = false }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#57891d] text-[11px] font-black text-white">
        ✓
      </span>

      <span
        className={`text-sm font-semibold leading-6 ${
          light ? "text-white/78" : "text-[#242329]/75"
        }`}
      >
        {children}
      </span>
    </div>
  );
}

function ShieldIcon() {
  return (
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-[#8fbd55]">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <path d="M12 3 20 6v6c0 5-3.4 8-8 9-4.6-1-8-4-8-9V6l8-3Z" />
        <path d="m8.5 12 2.2 2.2 4.8-5" />
      </svg>
    </div>
  );
}

function FAQItem({ item, open, onToggle }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-[#242329]/10 bg-white shadow-[0_14px_38px_rgba(36,35,41,0.06)]">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-5 px-5 py-4 text-left sm:px-6"
      >
        <span className="font-black text-[#242329]">
          {item.question}
        </span>

        <span
          aria-hidden="true"
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#57891d]/25 bg-[#57891d]/10 text-lg font-black text-[#57891d] transition duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
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

function TruckGuide() {
  const [activeLoad, setActiveLoad] = useState(null);

  return (
    <div className="mt-7">
      <div className="relative mx-auto max-w-6xl">
        <div className="relative">
          <img
            src={TRUCK_IMAGE}
            alt="Everhaul Solutions truck capacity guide"
            className="truck-image mx-auto block h-auto max-h-[590px] w-full object-contain"
          />

          <div
            className="truck-bed-guide"
            aria-label="Interactive truck load guide"
          >
            {loadLevels.map((load, index) => (
              <button
                key={load.label}
                type="button"
                aria-label={`Highlight ${load.label}`}
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
                className={`truck-bed-section ${
                  activeLoad === index
                    ? "truck-bed-section-active"
                    : ""
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-4 grid grid-cols-4 gap-2 sm:gap-4">
          {loadLevels.map((load, index) => (
            <button
              key={load.label}
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
              className={`rounded-xl border px-2 py-3 text-xs font-black transition duration-300 sm:rounded-2xl sm:px-4 sm:text-base ${
                activeLoad === index
                  ? "border-[#57891d] bg-[#57891d] text-white shadow-[0_12px_28px_rgba(87,137,29,0.22)]"
                  : "border-[#242329]/10 bg-white text-[#242329] hover:border-[#57891d]/45"
              }`}
            >
              {load.label}
            </button>
          ))}
        </div>

        <p className="mt-5 text-center text-base font-black text-[#242329]">
          You only pay for the truck space your project uses.
        </p>
      </div>
    </div>
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
          content="Understand how Everhaul Solutions prices junk removal and debris hauling projects. Estimate your load size and request a free upfront estimate."
        />

        <link
          rel="canonical"
          href="https://everhaulsolutions.com/pricing"
        />
      </Head>

      <Navbar />

      <main className="overflow-hidden bg-[#f4f4f2]">
        <section className="relative bg-[#242329] px-5 pb-12 pt-32 text-white sm:px-6 sm:pb-14 sm:pt-36 lg:px-8">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute left-1/2 top-[-280px] h-[540px] w-[540px] -translate-x-1/2 rounded-full bg-[#57891d]/15 blur-[140px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.025] to-black/15" />
          </div>

          <div className="pricing-enter relative z-10 mx-auto max-w-5xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#8fbd55]">
              Everhaul Pricing
            </p>

            <h1 className="mt-4 text-4xl font-black tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
              Understand How Junk Removal Pricing Works
            </h1>

            <p className="mt-4 text-xl font-bold text-white/80 sm:text-2xl">
              Fair pricing. No hidden fees. No surprises.
            </p>

            <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-white/68 sm:text-lg">
              Every project is unique. You&apos;ll always receive an
              upfront estimate, and we&apos;ll confirm the final price
              on-site before any work begins. If you decide not to move
              forward, you owe nothing.
            </p>

            <div className="mx-auto mt-6 inline-flex flex-col rounded-2xl border border-[#57891d]/35 bg-[#57891d]/12 px-6 py-4 shadow-[0_18px_48px_rgba(0,0,0,0.2)]">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#a4ca76]">
                Minimum Service Charge
              </span>

              <span className="mt-1 text-xl font-black text-white">
                Starting at $149
              </span>
            </div>

            <div className="mt-5 flex flex-wrap justify-center gap-2.5">
              {[
                "Free On-Site Estimates",
                "Licensed & Insured",
                "Family-Owned",
                "No Hidden Fees",
                "Final Price Confirmed Before We Begin",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-bold text-white/75"
                >
                  ✓ {item}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <a href={TEXT_LINK} className="btn-primary">
                📱 Text Photos
              </a>

              <a href={PHONE_LINK} className="btn-secondary">
                📞 Call Now
              </a>
            </div>
          </div>
        </section>

        <section className="px-5 py-9 sm:px-6 sm:py-11 lg:px-8">
          <Reveal className="mx-auto max-w-6xl rounded-[2rem] border border-[#242329]/10 bg-white p-6 text-center shadow-[0_24px_70px_rgba(36,35,41,0.08)] sm:p-8">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#57891d]">
              How Volume Pricing Works
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#242329] sm:text-4xl">
              Estimate Your Load Size
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-[#242329]/65 sm:text-base">
              You only pay for the portion of our truck your project
              fills—not for unused space.
            </p>

            <div className="relative mx-auto mt-7 max-w-5xl">
              <div className="absolute left-[14%] right-[14%] top-1/2 hidden h-px -translate-y-1/2 bg-[#57891d]/35 md:block" />

              <div className="relative z-10 grid gap-4 md:grid-cols-3">
                {[
                  ["📦", "Gather Your Items"],
                  [
                    "🚚",
                    "Estimate How Much of Our Truck They’ll Fill",
                  ],
                  ["💲", "Pay Only For That Portion"],
                ].map(([icon, label]) => (
                  <article
                    key={label}
                    className="rounded-2xl border border-[#242329]/10 bg-[#f4f4f2] p-5 shadow-[0_12px_30px_rgba(36,35,41,0.05)]"
                  >
                    <span
                      className="text-3xl"
                      aria-hidden="true"
                    >
                      {icon}
                    </span>

                    <p className="mt-3 font-black leading-6 text-[#242329]">
                      {label}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        <section className="px-5 pb-9 sm:px-6 sm:pb-11 lg:px-8">
          <Reveal className="mx-auto max-w-7xl rounded-[2rem] border border-[#242329]/10 bg-white p-6 shadow-[0_24px_70px_rgba(36,35,41,0.09)] sm:p-8 lg:p-10">
            <div className="text-center">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#57891d]">
                Truck Capacity
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-[#242329] sm:text-5xl">
                Our Truck Holds Approximately 25 Cubic Yards
              </h2>

              <p className="mx-auto mt-4 max-w-4xl text-sm leading-7 text-[#242329]/65 sm:text-base">
                Approximately the same as{" "}
                <strong className="text-[#242329]">
                  8–10 standard pickup truck loads
                </strong>
                , making it easy to handle everything from a few furniture
                items to large cleanouts in one trip.
              </p>
            </div>

            <TruckGuide />
          </Reveal>
        </section>

        <section className="px-5 pb-9 sm:px-6 sm:pb-11 lg:px-8">
          <Reveal className="mx-auto max-w-7xl">
            <div className="text-center">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#57891d]">
                Load Examples
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-[#242329] sm:text-4xl">
                What Fits in Each Load?
              </h2>
            </div>

            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {loadLevels.map((load, index) => (
                <Reveal key={load.label} delay={index * 70}>
                  <article className="h-full rounded-[1.5rem] border border-[#242329]/10 bg-white p-5 shadow-[0_18px_50px_rgba(36,35,41,0.07)]">
                    <p className="text-2xl font-black text-[#242329]">
                      {load.label}
                    </p>

                    <div className="mt-5 grid gap-3">
                      {load.examples.map((example) => (
                        <CheckItem key={example}>
                          {example}
                        </CheckItem>
                      ))}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </section>

        <section className="px-5 pb-9 sm:px-6 sm:pb-11 lg:px-8">
          <Reveal className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-[#242329]/10 bg-white shadow-[0_24px_70px_rgba(36,35,41,0.08)]">
            <div className="p-6 sm:p-8">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#57891d]">
                Common Project Guide
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-[#242329] sm:text-4xl">
                Common Projects & Estimated Truck Space
              </h2>

              <div className="mt-6 overflow-hidden rounded-2xl border border-[#242329]/10">
                <div className="grid grid-cols-[1.3fr_0.7fr] bg-[#242329] px-5 py-4 text-xs font-black uppercase tracking-[0.14em] text-white sm:px-7">
                  <span>Common Project</span>
                  <span>Typical Truck Space</span>
                </div>

                {comparisonRows.map(
                  ([project, space], index) => (
                    <div
                      key={project}
                      className={`grid grid-cols-[1.3fr_0.7fr] gap-4 px-5 py-5 text-sm sm:px-7 ${
                        index % 2 === 0
                          ? "bg-white"
                          : "bg-[#f4f4f2]"
                      }`}
                    >
                      <span className="font-semibold text-[#242329]/75">
                        {project}
                      </span>

                      <span className="font-black text-[#57891d]">
                        {space}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="border-t border-[#242329]/10 bg-[#f4f4f2] p-6 text-center sm:p-8">
              <h3 className="text-3xl font-black tracking-tight text-[#242329]">
                Still Not Sure?
              </h3>

              <p className="mx-auto mt-3 max-w-3xl text-sm leading-7 text-[#242329]/65 sm:text-base">
                Text us <strong>2–3 photos</strong> of your project
                for the most accurate estimate. We&apos;ll often be
                able to estimate how much truck space your project will
                require before scheduling an on-site visit.
              </p>

              <a href={TEXT_LINK} className="btn-primary mt-6">
                📱 Text Photos
              </a>
            </div>
          </Reveal>
        </section>

        <section className="px-5 pb-9 sm:px-6 sm:pb-11 lg:px-8">
          <Reveal className="mx-auto max-w-7xl rounded-[2rem] border border-[#242329]/10 bg-white p-6 shadow-[0_24px_70px_rgba(36,35,41,0.08)] sm:p-8">
            <div className="text-center">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#57891d]">
                Customized Quotes
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-[#242329] sm:text-4xl">
                What Affects Pricing?
              </h2>
            </div>

            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {pricingFactors.map((factor, index) => {
                const Icon = factor.icon;

                return (
                  <Reveal
                    key={factor.title}
                    delay={index * 60}
                  >
                    <article className="pricing-factor-card group flex h-full flex-col rounded-2xl border border-[#242329]/10 bg-[#f4f4f2] p-5 shadow-[0_14px_38px_rgba(36,35,41,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#57891d]/30 hover:shadow-[0_22px_55px_rgba(36,35,41,0.1)]">
                      <PricingFeatureIcon icon={Icon} />

                      <h3 className="mt-4 font-black text-[#242329]">
                        {factor.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-gray-700">
                        {factor.description}
                      </p>
                    </article>
                  </Reveal>
                );
              })}
            </div>

            <div className="mt-6 flex items-center justify-center gap-2.5 text-center text-sm font-semibold leading-6 text-[#242329]/68">
              <CheckCircleIcon className="h-5 w-5 shrink-0 text-[#57891d]" />

            <p className="text-gray-700 leading-7">
  Your final upfront price is customized for your
  project and confirmed before any work begins.
</p>
            </div>
          </Reveal>
        </section>

        <section className="px-5 pb-9 sm:px-6 sm:pb-11 lg:px-8">
          <Reveal className="mx-auto max-w-7xl rounded-[2rem] border border-[#242329]/10 bg-white p-6 shadow-[0_24px_70px_rgba(36,35,41,0.08)] sm:p-8">
            <div className="text-center">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#57891d]">
                Simple Process
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-[#242329] sm:text-4xl">
                Here&apos;s Exactly What Happens
              </h2>
            </div>

            <div className="journey-timeline mt-8">
              <div
                className="journey-desktop-line"
                aria-hidden="true"
              >
                <span className="journey-desktop-line-fill" />
              </div>

              <div
                className="journey-mobile-line"
                aria-hidden="true"
              >
                <span className="journey-mobile-line-fill" />
              </div>

              <div className="relative z-10 grid gap-5 lg:grid-cols-5 lg:gap-4">
                {processSteps.map((step, index) => (
                  <div
                    key={step.title}
                    className="journey-step group relative grid grid-cols-[3.25rem_1fr] items-start gap-4 lg:block"
                    style={{
                      "--journey-delay": `${
                        180 + index * 130
                      }ms`,
                    }}
                  >
                    <div className="relative flex justify-center lg:block">
                      <div className="journey-milestone">
                        <CheckIcon className="h-5 w-5" />
                      </div>

                      <span
                        aria-hidden="true"
                        className="journey-connector"
                      />
                    </div>

                    <article className="journey-card flex min-h-[92px] items-center rounded-2xl border border-[#242329]/10 bg-[#f4f4f2] p-4 transition duration-300 group-hover:-translate-y-1 group-hover:border-[#57891d]/25 group-hover:shadow-[0_18px_42px_rgba(36,35,41,0.09)] lg:mt-5 lg:min-h-[116px] lg:justify-center lg:text-center">
                      <div>
                        <p className="text-xs font-black uppercase tracking-[0.12em] text-[#57891d]">
                          Step {index + 1}
                        </p>

                        <p className="mt-1 text-sm font-black leading-5 text-[#242329]">
                          {step.title}
                        </p>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        <section className="px-5 pb-9 sm:px-6 sm:pb-11 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-2">
            <Reveal>
              <article className="h-full rounded-[2rem] border border-[#242329]/10 bg-white p-6 shadow-[0_24px_70px_rgba(36,35,41,0.08)] sm:p-8">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#57891d]">
                  Every Project Includes
                </p>

                <h2 className="mt-3 text-3xl font-black tracking-tight text-[#242329]">
                  Everything Needed to Complete the Job
                </h2>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {includedItems.map((item) => (
                    <CheckItem key={item}>{item}</CheckItem>
                  ))}
                </div>
              </article>
            </Reveal>

            <Reveal delay={90}>
              <article className="relative h-full overflow-hidden rounded-[2rem] border border-[#57891d]/30 bg-[#242329] p-6 text-white shadow-[0_28px_80px_rgba(36,35,41,0.2)] sm:p-8">
                <div className="pointer-events-none absolute right-[-100px] top-[-120px] h-64 w-64 rounded-full bg-[#57891d]/18 blur-[80px]" />

                <div className="relative z-10">
                  <div className="flex items-center gap-4">
                    <ShieldIcon />

                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.22em] text-[#8fbd55]">
                        Our Pricing Promise
                      </p>

                      <h2 className="mt-2 text-3xl font-black tracking-tight text-white">
                        Honest Pricing Without Pressure
                      </h2>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {guaranteeItems.map((item) => (
                      <CheckItem key={item} light>
                        {item}
                      </CheckItem>
                    ))}
                  </div>

                  <p className="mt-6 rounded-2xl border border-[#57891d]/25 bg-[#57891d]/10 p-5 text-sm font-bold leading-7 text-white/82">
                    If you decide not to move forward after receiving
                    your estimate, you owe us absolutely nothing.
                  </p>
                </div>
              </article>
            </Reveal>
          </div>
        </section>

        <section className="px-5 pb-9 sm:px-6 sm:pb-11 lg:px-8">
          <Reveal className="mx-auto max-w-5xl">
            <div className="text-center">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#57891d]">
                Frequently Asked Questions
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-[#242329] sm:text-4xl">
                Clear Answers Before You Schedule
              </h2>
            </div>

            <div className="mt-7 grid gap-3">
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

        <section className="px-5 pb-16 sm:px-6 sm:pb-20 lg:px-8">
          <Reveal className="mx-auto max-w-5xl">
            <div className="relative overflow-hidden rounded-[2rem] border border-[#57891d]/30 bg-[#242329] p-7 text-center text-white shadow-[0_30px_90px_rgba(36,35,41,0.24)] sm:p-10">
              <div className="pointer-events-none absolute left-1/2 top-[-220px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#57891d]/18 blur-[110px]" />

              <div className="relative z-10">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#8fbd55]">
                  Fast Estimate
                </p>

                <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-5xl">
                  Still Not Sure?
                </h2>

                <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-white/68 sm:text-lg">
                  Text us <strong>2–3 photos</strong> of your
                  project and we&apos;ll usually be able to estimate how
                  much truck space you&apos;ll need before we arrive.
                </p>

                <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                  <a href={TEXT_LINK} className="btn-primary">
                    📱 Text Photos
                  </a>

                  <a href={PHONE_LINK} className="btn-secondary">
                    📞 Call Now
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <style jsx>{`
          .pricing-enter {
            animation: pricingEnter 550ms ease-out both;
          }

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

          .pricing-factor-card:hover .pricing-feature-icon {
            border-color: rgba(87, 137, 29, 0.45);
            background: rgba(87, 137, 29, 0.16);
            box-shadow: 0 10px 28px rgba(87, 137, 29, 0.12);
          }

          .truck-image {
            animation: truckFadeIn 700ms ease-out both;
          }

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

          .truck-bed-section {
            border: 0;
            background: transparent;
            cursor: pointer;
            pointer-events: auto;
            transition:
              background-color 320ms ease,
              box-shadow 320ms ease;
          }

          .truck-bed-section:hover,
          .truck-bed-section:focus-visible,
          .truck-bed-section-active {
            background: rgba(87, 137, 29, 0.44);
            box-shadow: inset 0 0 30px rgba(87, 137, 29, 0.25);
            outline: none;
          }

          .journey-timeline {
            position: relative;
          }

          .journey-desktop-line {
            display: none;
          }

          .journey-mobile-line {
            position: absolute;
            bottom: 2.25rem;
            left: 1.625rem;
            top: 1.625rem;
            width: 3px;
            overflow: hidden;
            border-radius: 999px;
            background: rgba(87, 137, 29, 0.14);
          }

          .journey-mobile-line-fill {
            display: block;
            height: 100%;
            width: 100%;
            border-radius: inherit;
            background: #57891d;
            transform: scaleY(0);
            transform-origin: top;
            animation: journeyMobileLineDraw 950ms ease-out 150ms
              forwards;
          }

          .journey-step {
            opacity: 0;
            transform: translateY(10px);
            animation: journeyStepReveal 480ms ease-out
              var(--journey-delay) forwards;
          }

          .journey-milestone {
            position: relative;
            z-index: 3;
            display: flex;
            height: 3.25rem;
            width: 3.25rem;
            align-items: center;
            justify-content: center;
            border: 3px solid white;
            border-radius: 999px;
            background: #57891d;
            color: white;
            box-shadow:
              0 0 0 1px rgba(87, 137, 29, 0.25),
              0 9px 24px rgba(87, 137, 29, 0.2);
            transition:
              box-shadow 250ms ease,
              transform 250ms ease;
          }

          .journey-connector {
            position: absolute;
            left: 50%;
            top: 3.25rem;
            z-index: 1;
            height: 1.5rem;
            width: 2px;
            transform: translateX(-50%);
            border-radius: 999px;
            background: #57891d;
          }

          .journey-step:hover .journey-milestone {
            box-shadow:
              0 0 0 1px rgba(87, 137, 29, 0.35),
              0 0 24px rgba(87, 137, 29, 0.2),
              0 12px 28px rgba(87, 137, 29, 0.22);
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

          @keyframes truckFadeIn {
            from {
              opacity: 0;
              transform: translateY(14px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes journeyDesktopLineDraw {
            from {
              transform: scaleX(0);
            }

            to {
              transform: scaleX(1);
            }
          }

          @keyframes journeyMobileLineDraw {
            from {
              transform: scaleY(0);
            }

            to {
              transform: scaleY(1);
            }
          }

          @keyframes journeyStepReveal {
            from {
              opacity: 0;
              transform: translateY(10px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @media (min-width: 1024px) {
            .journey-desktop-line {
              position: absolute;
              left: 10%;
              right: 10%;
              top: 1.625rem;
              display: block;
              height: 3px;
              overflow: hidden;
              border-radius: 999px;
              background: rgba(87, 137, 29, 0.14);
            }

            .journey-desktop-line-fill {
              display: block;
              height: 100%;
              width: 100%;
              border-radius: inherit;
              background: #57891d;
              transform: scaleX(0);
              transform-origin: left;
              animation: journeyDesktopLineDraw 950ms ease-out 150ms
                forwards;
            }

            .journey-mobile-line {
              display: none;
            }

            .journey-milestone {
              margin-inline: auto;
            }

            .journey-connector {
              height: 1.65rem;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .pricing-enter,
            .truck-image {
              animation: none;
            }

            .pricing-reveal,
            .pricing-reveal-visible {
              opacity: 1;
              transform: none;
              transition: none;
            }

            .truck-bed-section {
              transition: none;
            }

            .journey-desktop-line-fill,
            .journey-mobile-line-fill,
            .journey-step {
              animation: none;
              opacity: 1;
              transform: none;
            }

            .journey-desktop-line-fill {
              transform: scaleX(1);
            }

            .journey-mobile-line-fill {
              transform: scaleY(1);
            }

            .journey-card,
            .journey-milestone,
            .pricing-feature-icon {
              transition: none;
            }
          }
        `}</style>
      </main>

      <Footer />
    </>
  );
}
