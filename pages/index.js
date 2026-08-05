import Head from "next/head";
import {
  ArrowRight,
  CheckCircle,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";

import Navbar from "../components/Navbar";
import ServicesSection from "../components/ServicesSection";
import WhyUs from "../components/WhyUs";
import Gallery from "../components/Gallery";
import BeforeAfterSection from "../components/BeforeAfterSection";
import Testimonials from "../components/Testimonials";
import QuoteSection from "../components/QuoteSection";
import Footer from "../components/Footer";

const textHref =
  "sms:+18185381072?&body=Hi%20Everhaul%2C%20I%27d%20like%20a%20quote.%20I%27ve%20attached%20photos%20of%20my%20project.";

const phoneHref = "tel:+18185381072";

function StarOutlineIcon({ className = "h-5 w-5" }) {
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
      <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z" />
    </svg>
  );
}

function UsersOutlineIcon({ className = "h-5 w-5" }) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
      <circle cx="9.5" cy="7" r="4" />
      <path d="M18 8a3 3 0 0 1 0 6" />
      <path d="M21 21v-2a4 4 0 0 0-3-3.9" />
    </svg>
  );
}

function DollarCheckIcon({ className = "h-5 w-5" }) {
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
      <circle cx="10" cy="12" r="8" />
      <path d="M10 7v10" />
      <path d="M13 9H8.5a2 2 0 0 0 0 4H11a2 2 0 0 1 0 4H7" />
      <path d="m16 18 2 2 4-5" />
    </svg>
  );
}

function HeavyLiftingIcon({ className = "h-5 w-5" }) {
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
      <path d="M7 9a5 5 0 0 1 10 0" />
      <path d="M6 9h12" />
      <path d="M8 9v2a4 4 0 0 0 8 0V9" />
      <path d="M5 21v-2a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v2" />
      <path d="M3 16h4" />
      <path d="M17 16h4" />
    </svg>
  );
}

function CalendarClockIcon({ className = "h-5 w-5" }) {
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
      <path d="M4 5h16v14H4z" />
      <path d="M8 3v4M16 3v4M4 9h16" />
      <circle cx="16.5" cy="15.5" r="3.5" />
      <path d="M16.5 13.5v2l1.3.8" />
    </svg>
  );
}

function EstimateIcon({ className = "h-6 w-6" }) {
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
      <path d="M4 5h16v14H4z" />
      <path d="M8 9h8M8 13h5" />
      <path d="m15 17 2 2 4-5" />
    </svg>
  );
}

function CleanupIcon({ className = "h-6 w-6" }) {
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
      <path d="M3 7h11v9H3z" />
      <path d="M14 10h4l3 3v3h-7" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="18" cy="18" r="2" />
      <path d="m3 4 4 3" />
    </svg>
  );
}

const heroTrustItems = [
  {
    label: "5-Star Rated",
    icon: StarOutlineIcon,
  },
  {
    label: "Licensed & Insured",
    icon: ShieldCheck,
  },
  {
    label: "Family-Owned",
    icon: UsersOutlineIcon,
  },
];

const heroStats = [
  {
    value: "500+",
    label: "Projects Completed",
  },
  {
    value: "Fast",
    label: "Response Times",
  },
  {
    value: "Trusted",
    label: "By Property Owners",
  },
  {
    value: "Family",
    label: "Owned & Operated",
  },
];

const gettingStartedSteps = [
  {
    number: "01",
    title: "Text Photos or Call",
    description: "Send us a few photos or give us a call to get started.",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "Receive Your Free Estimate",
    description:
      "We’ll review your project and schedule a convenient time if an on-site visit is needed.",
    icon: EstimateIcon,
  },
  {
    number: "03",
    title: "We Arrive & Remove Everything",
    description:
      "We confirm the final upfront price before work begins, remove everything, and clean up before leaving.",
    icon: CleanupIcon,
  },
];

const compactTrustItems = [
  {
    title: "Licensed & Insured",
    description: "Professional protection and peace of mind.",
    icon: ShieldCheck,
  },
  {
    title: "Family-Owned",
    description: "Local ownership with personal accountability.",
    icon: UsersOutlineIcon,
  },
  {
    title: "Upfront Pricing",
    description: "Know the final price before work begins.",
    icon: DollarCheckIcon,
  },
  {
    title: "Text Photos for Fast Estimates",
    description: "Send photos directly from your phone.",
    icon: MessageCircle,
  },
  {
    title: "We Do All the Heavy Lifting",
    description: "Our team handles loading, hauling, and cleanup.",
    icon: HeavyLiftingIcon,
  },
  {
    title: "Same-Day Availability",
    description: "Available when scheduling allows.",
    icon: CalendarClockIcon,
  },
];

function HeroSection() {
  return (
    <>
      <section
        id="home"
        className="relative min-h-screen overflow-hidden bg-[#242329] text-white"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/everhaul-hero.jpg')] bg-cover bg-[center_right] opacity-[0.78]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#242329]/92 via-[#242329]/52 to-[#242329]/10" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#242329]/80 via-[#242329]/55 to-[#1b1a1a]" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-24 pt-36 lg:px-8">
          <div className="grid w-full items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="max-w-4xl">
              <div className="mb-6 inline-flex rounded-full border border-[#57891d]/25 bg-white/[0.05] px-5 py-2.5 text-xs font-black uppercase tracking-[0.28em] text-[#8fbd55] backdrop-blur-xl">
                Los Angeles Junk Removal & Debris Hauling
              </div>

              <h1 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.06em] sm:text-6xl lg:text-8xl">
                Professional Junk Removal in Los Angeles
              </h1>

              <p className="mt-7 max-w-2xl text-lg font-medium leading-relaxed text-white/72 sm:text-2xl">
                Fast, reliable junk removal for homes, businesses, apartments,
                and job sites throughout Los Angeles.
              </p>

              <div className="mt-10">
                <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                  <a
                    id="text-photos-cta-hero"
                    data-conversion-action="text-photos"
                    href={textHref}
                    className="group inline-flex items-center justify-center rounded-2xl bg-[#57891d] px-9 py-5 text-base font-black text-white shadow-[0_20px_50px_rgba(87,137,29,0.28)] transition duration-300 hover:-translate-y-1 hover:bg-[#6aa823]"
                  >
                    <MessageCircle
                      aria-hidden="true"
                      className="mr-2"
                      size={20}
                    />
                    Text Photos For A Faster Estimate
                  </a>

                  <a
                    id="call-now-cta-hero"
                    data-conversion-action="call-now"
                    href={phoneHref}
                    className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] px-8 py-4 text-base font-black text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[#57891d]/40 hover:bg-white/[0.09]"
                  >
                    <Phone aria-hidden="true" className="mr-2" size={18} />
                    Call Now
                  </a>

                  <a
                    id="get-quote-cta-hero"
                    data-conversion-action="get-quote"
                    href="#quote"
                    className="group inline-flex items-center justify-center rounded-2xl border border-[#57891d]/35 bg-[#57891d]/15 px-8 py-4 text-base font-black text-white transition duration-300 hover:-translate-y-1 hover:bg-[#57891d]/25"
                  >
                    Get Free Quote
                    <ArrowRight
                      aria-hidden="true"
                      className="ml-2 transition group-hover:translate-x-1"
                      size={18}
                    />
                  </a>
                </div>

                <div className="mt-6 text-center sm:text-left">
                  <a
                    id="pricing-link-hero"
                    data-conversion-action="learn-pricing"
                    href="/pricing"
                    className="inline-flex cursor-pointer items-center text-[15px] font-semibold text-[#8fbd55] transition-colors duration-200 hover:text-[#a4ca76] hover:underline sm:text-base"
                  >
                    💰 See How Pricing Works →
                  </a>

                  <p className="mt-2 text-sm font-medium text-white/60">
                    No hidden fees. Free on-site estimates.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {heroTrustItems.map(({ label, icon: Icon }) => (
                  <div
                    key={label}
                    className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-[#242329]/45 px-4 py-2.5 text-sm font-bold text-white/85 shadow-lg shadow-black/10 backdrop-blur-md"
                  >
                    <Icon
                      aria-hidden="true"
                      className="h-5 w-5 text-[#8fbd55]"
                      strokeWidth={1.9}
                    />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#2b2a31]/80 p-7 shadow-[0_30px_90px_rgba(0,0,0,0.42)] backdrop-blur-md">
                <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.065),rgba(255,255,255,0.018))]" />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#57891d]/50 to-transparent" />

                <div className="relative z-10">
                  <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#8fbd55]">
                    Simple, Upfront Pricing
                  </p>

                  <h2 className="mt-4 text-3xl font-black tracking-tight text-white">
                    Know the price before we start.
                  </h2>

                  <div className="mt-8 space-y-4">
                    {[
                      "Free Estimates",
                      "Upfront Pricing",
                      "No Hidden Fees",
                      "Final Price Confirmed Before Work Begins",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 text-white/75"
                      >
                        <CheckCircle
                          aria-hidden="true"
                          className="shrink-0 text-[#8fbd55]"
                          size={20}
                        />
                        <span className="font-semibold">{item}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    id="pricing-cta"
                    data-conversion-action="learn-pricing"
                    href="/pricing"
                    className="group mt-8 inline-flex items-center justify-center rounded-2xl border border-[#57891d]/35 bg-[#57891d]/10 px-5 py-3.5 text-sm font-black text-white transition duration-300 hover:-translate-y-0.5 hover:border-[#57891d]/60 hover:bg-[#57891d]/20"
                  >
                    Learn How Pricing Works
                    <ArrowRight
                      aria-hidden="true"
                      className="ml-2 transition group-hover:translate-x-1"
                      size={17}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-[#1b1a1a] px-6 py-10 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/20 backdrop-blur-xl md:grid-cols-4">
          {heroStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center"
            >
              <p className="text-2xl font-black text-white">{stat.value}</p>
              <p className="mt-1 text-sm font-semibold text-white/55">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function GettingStartedSection() {
  return (
    <section className="relative overflow-hidden bg-[#242329] px-5 py-14 text-white sm:px-6 lg:px-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(87,137,29,0.12),transparent_42%)]"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[#8fbd55]">
            Simple Process
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
            Getting Started Is Easy
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
            Three simple steps from first contact to a cleared space.
          </p>
        </div>

        <div className="relative mt-9">
          <div
            aria-hidden="true"
            className="absolute left-[16%] right-[16%] top-6 hidden h-px rounded-full bg-[#57891d]/40 lg:block"
          />

          <div className="grid gap-4 lg:grid-cols-3">
            {gettingStartedSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.title}
                  className="conversion-card group relative flex h-full gap-4 rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-5 shadow-xl shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-[#57891d]/35 hover:bg-white/[0.065] lg:flex-col lg:items-center lg:text-center"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-4 border-[#242329] bg-[#57891d] text-white shadow-[0_10px_28px_rgba(87,137,29,0.22)]">
                    <Icon aria-hidden="true" className="h-6 w-6" />
                  </div>

                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-[#8fbd55]">
                      Step {index + 1}
                    </p>

                    <h3 className="mt-2 text-lg font-black text-white">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-white/60">
                      {step.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function CompactTrustSection() {
  return (
    <section className="bg-[#f4f4f2] px-5 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[#57891d]">
            Why Everhaul
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-[#242329] sm:text-4xl">
            Why Customers Choose Everhaul
          </h2>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {compactTrustItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="conversion-card group flex items-start gap-4 rounded-2xl border border-[#242329]/10 bg-white p-4 shadow-[0_14px_38px_rgba(36,35,41,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#57891d]/30 hover:shadow-[0_20px_48px_rgba(36,35,41,0.1)]"
                style={{
                  animationDelay: `${index * 70}ms`,
                }}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#57891d]/25 bg-[#57891d]/10 text-[#57891d] transition duration-300 group-hover:border-[#57891d]/45 group-hover:bg-[#57891d]/15">
                  <Icon
                    aria-hidden="true"
                    className="h-5 w-5"
                    strokeWidth={1.9}
                  />
                </div>

                <div>
                  <h3 className="text-sm font-black leading-5 text-[#242329]">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-[#242329]/60">
                    {item.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Los Angeles Junk Removal | Everhaul Solutions</title>

        <meta
          name="description"
          content="Professional junk removal in Los Angeles for homes, businesses, apartments, and job sites. Licensed and insured, family-owned service with free estimates and upfront pricing."
        />

        <link rel="canonical" href="https://everhaulsolutions.com/" />
      </Head>

      <Navbar />
      <HeroSection />
      <GettingStartedSection />
      <CompactTrustSection />
      <ServicesSection />
      <WhyUs />
      <Gallery />
      <BeforeAfterSection />
      <Testimonials />
      <QuoteSection />
      <Footer />

      <style jsx>{`
        .conversion-card {
          opacity: 0;
          transform: translateY(14px);
          animation: conversionCardReveal 560ms ease-out forwards;
        }

        @keyframes conversionCardReveal {
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
          .conversion-card {
            opacity: 1;
            transform: none;
            animation: none;
          }
        }
      `}</style>
    </>
  );
}
