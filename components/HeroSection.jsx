import {
  ArrowRight,
  CheckCircle,
  Clock,
  MessageCircle,
  Phone,
  ShieldCheck,
  Truck,
} from "lucide-react";

const textHref =
  "sms:+18185381072?&body=Hi%20Everhaul%2C%20I%27d%20like%20a%20quote.%20I%27ve%20attached%20photos%20of%20my%20project.";

const trustItems = [
  { label: "Licensed & Insured", icon: ShieldCheck },
  { label: "Family-Owned", icon: CheckCircle },
  { label: "Fast Response Times", icon: Clock },
  { label: "100+ Projects Completed", icon: Truck },
];

const stats = [
  { value: "100+", label: "Projects Completed" },
  { value: "Fast", label: "Response Times" },
  { value: "Trusted", label: "By Contractors" },
  { value: "Family", label: "Owned & Operated" },
];

export default function HeroSection() {
  return (
    <>
      <section id="home" className="relative min-h-screen overflow-hidden bg-[#242329] text-white">
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
                Professional Junk & Debris Removal
              </h1>

              <p className="mt-7 max-w-2xl text-lg font-medium leading-relaxed text-white/72 sm:text-2xl">
                Family-Owned & Contractor-Trusted Across Los Angeles
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <a
                  href={textHref}
                  className="group inline-flex items-center justify-center rounded-2xl bg-[#57891d] px-9 py-5 text-base font-black text-white shadow-[0_20px_50px_rgba(87,137,29,0.28)] transition duration-300 hover:-translate-y-1 hover:bg-[#6aa823]"
                >
                  <MessageCircle className="mr-2" size={20} />
                  Text Photos For A Faster Estimate
                </a>

                <a
                  href="tel:+18185381072"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] px-8 py-4 text-base font-black text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[#57891d]/40 hover:bg-white/[0.09]"
                >
                  <Phone className="mr-2" size={18} />
                  Call Now
                </a>

                <a
                  href="#quote"
                  className="group inline-flex items-center justify-center rounded-2xl border border-[#57891d]/35 bg-[#57891d]/15 px-8 py-4 text-base font-black text-white transition duration-300 hover:-translate-y-1 hover:bg-[#57891d]/25"
                >
                  Get Free Quote
                  <ArrowRight className="ml-2 transition group-hover:translate-x-1" size={18} />
                </a>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {trustItems.map(({ label, icon: Icon }) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-[#242329]/45 p-4 shadow-xl shadow-black/10 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[#57891d]/35 hover:bg-white/[0.06]"
                  >
                    <Icon className="mb-3 text-[#8fbd55]" size={22} />
                    <p className="text-sm font-black text-white">{label}</p>
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
                    Built For Jobsites
                  </p>

                  <h2 className="mt-4 text-3xl font-black tracking-tight text-white">
                    Fast debris hauling for contractors, cleanouts, and heavy-load jobs.
                  </h2>

                  <div className="mt-8 space-y-5">
                    {[
                      "Licensed & insured service",
                      "Family-owned local company",
                      "Fast response times",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3 text-white/75">
                        <CheckCircle className="text-[#8fbd55]" size={20} />
                        <span className="font-semibold">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-[#1b1a1a] px-6 py-10 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/20 backdrop-blur-xl md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center">
              <p className="text-2xl font-black text-white">{stat.value}</p>
              <p className="mt-1 text-sm font-semibold text-white/55">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
