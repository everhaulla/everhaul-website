"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Phone, ShieldCheck, Clock, Truck } from "lucide-react";

const trustItems = [
  { label: "Family-Owned", icon: ShieldCheck },
  { label: "Licensed & Insured", icon: CheckCircle },
  { label: "Same-Day Service", icon: Clock },
  { label: "Contractor Trusted", icon: Truck },
];

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "Fast", label: "Response Times" },
  { value: "Trusted", label: "By Contractors" },
  { value: "Family", label: "Owned & Operated" },
];

export default function HeroSection() {
  return (
    <>
      <section id="home" className="relative min-h-screen overflow-hidden bg-[#050705] text-white">
        <div className="absolute inset-0 scale-105 bg-[url('/everhaul-hero.jpg')] bg-cover bg-center motion-safe:animate-slow-zoom" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/70 to-[#050705]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/75" />

        <div className="absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-emerald-800/20 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-52 w-full bg-gradient-to-t from-[#050705] to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-24 pt-36 lg:px-8">
          <div className="grid w-full items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-4xl"
            >
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-emerald-500/25 bg-white/[0.06] px-5 py-2.5 text-xs font-black uppercase tracking-[0.28em] text-emerald-300 backdrop-blur-xl">
                Los Angeles Debris Removal
              </div>

              <h1 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.06em] sm:text-6xl lg:text-8xl">
                Professional Junk & Debris Removal
              </h1>

              <p className="mt-7 max-w-2xl text-lg font-medium leading-relaxed text-gray-200 sm:text-2xl">
                Family-Owned & Contractor-Trusted Across Los Angeles
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#quote"
                  className="group rounded-2xl bg-emerald-700 px-8 py-4 text-center text-base font-black text-white shadow-2xl shadow-emerald-950/60 transition duration-300 hover:-translate-y-1 hover:bg-emerald-600"
                >
                  Get a Free Quote
                  <ArrowRight className="ml-2 inline-block transition group-hover:translate-x-1" size={18} />
                </a>

                <a
                  href="tel:+18180000000"
                  className="rounded-2xl border border-white/15 bg-white/10 px-8 py-4 text-center text-base font-black text-white backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-emerald-500/70 hover:bg-white/15"
                >
                  <Phone className="mr-2 inline-block" size={18} />
                  Call Now
                </a>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {trustItems.map(({ label, icon: Icon }) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#57891d] hover:bg-white/[0.09]"
                  >
                    <Icon className="mb-3 text-[#57891d]" size={22} />
                    <p className="text-sm font-black text-white">{label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
              className="hidden lg:block"
            >
              <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-xl">
                <div className="absolute -inset-1 -z-10 rounded-[2rem] bg-gradient-to-br from-[#57891d] to-transparent blur-xl" />

                <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-300">
                  Built For Jobsites
                </p>

                <h2 className="mt-4 text-3xl font-black tracking-tight">
                  Fast debris hauling for contractors, cleanouts, and heavy-load jobs.
                </h2>

                <div className="mt-8 space-y-4">
                  {["Construction debris", "Concrete, dirt & heavy material", "Garage & property cleanouts"].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-gray-200">
                      <CheckCircle className="text-[#57891d]" size={20} />
                      <span className="font-semibold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 skew-y-[-2deg] bg-[#08100b] origin-left" />
      </section>

      <section className="relative bg-[#08100b] px-5 py-10 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-white/10 bg-[#242329] p-5 text-center">
              <p className="text-2xl font-black text-white">{stat.value}</p>
              <p className="mt-1 text-sm font-semibold text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="fixed bottom-0 left-0 right-0 z-50 grid grid-cols-2 gap-2 border-t border-white/10 bg-black/90 p-3 backdrop-blur-xl sm:hidden">
        <a href="tel:+18180000000" className="rounded-xl border border-white/15 py-3 text-center text-sm font-black text-white">
          Call Now
        </a>
        <a href="#quote" className="rounded-xl bg-[#57891d] py-3 text-center text-sm font-black text-white">
          Get Quote
        </a>
      </div>
    </>
  );
}
