'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Star, Truck, ShieldCheck, Clock, MapPin, CheckCircle, Hammer, Home, Building2 } from 'lucide-react';

export default function EverhaulWebsite() {
  const phone = '(818) 538-1072';
  const logoSrc = '/everhaul-logo.png';

  const services = [
    { icon: <Hammer className="w-7 h-7" />, title: 'Construction Debris Removal', desc: 'Fast cleanup for wood, drywall, concrete, metal, roofing debris, and job site waste.' },
    { icon: <Truck className="w-7 h-7" />, title: 'Dirt & Concrete Hauling', desc: 'Heavy-load hauling for dirt, concrete, bricks, gravel, and demolition material.' },
    { icon: <Home className="w-7 h-7" />, title: 'Residential Junk Removal', desc: 'Garage cleanouts, furniture removal, appliances, yard waste, and bulky junk pickup.' },
    { icon: <Building2 className="w-7 h-7" />, title: 'Commercial Hauling', desc: 'Reliable hauling support for contractors, property managers, realtors, and businesses.' }
  ];

  const benefits = ['Licensed and insured', 'Same-day and next-day availability', 'Contractor-friendly hauling', 'Upfront pricing', 'Locally owned in Los Angeles', 'Heavy debris and bulk load specialists'];

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <header className="sticky top-0 z-50 bg-neutral-950/90 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logoSrc} alt="Everhaul Solutions Logo" className="w-14 h-14 rounded-2xl object-cover shadow-lg border border-white/10" />
            <div>
              <p className="font-black text-xl leading-tight">Everhaul</p>
              <p className="text-xs text-neutral-400 uppercase tracking-widest">Junk Removal</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-7 text-sm text-neutral-300">
            <a href="#services" className="hover:text-green-400">Services</a>
            <a href="#why" className="hover:text-green-400">Why Us</a>
            <a href="#areas" className="hover:text-green-400">Areas</a>
            <a href="#quote" className="hover:text-green-400">Get Quote</a>
          </nav>
          <a href="tel:18185381072" className="inline-flex items-center gap-2 rounded-full bg-green-500 px-5 py-3 text-white font-bold shadow-lg hover:bg-green-400 transition"><Phone className="w-4 h-4" />Call Now</a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,.25),transparent_35%),linear-gradient(to_bottom,rgba(0,0,0,.2),rgba(0,0,0,.8))]" />
        <div className="relative max-w-7xl mx-auto px-5 py-20 md:py-28 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-green-400/40 bg-green-400/10 px-4 py-2 text-green-300 text-sm font-semibold mb-6"><Star className="w-4 h-4 fill-green-300" />5.0 Google Reviews • Los Angeles Hauling</div>
            <h1 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight mb-6">Junk Removal & Heavy Debris Hauling in Los Angeles</h1>
            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed max-w-2xl mb-8">Everhaul Solutions LLC provides fast, reliable, and affordable hauling for contractors, property managers, homeowners, and businesses. From construction debris and concrete to household junk and yard waste, we handle the heavy loads.</p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="tel:18185381072" className="inline-flex justify-center items-center gap-3 rounded-2xl bg-green-500 px-8 py-4 text-white font-black text-lg shadow-xl hover:bg-green-400 transition"><Phone className="w-5 h-5" />Call {phone}</a>
              <a href="#quote" className="inline-flex justify-center items-center gap-3 rounded-2xl border border-white/20 px-8 py-4 font-bold text-lg hover:bg-white/10 transition">Get a Free Estimate</a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm text-neutral-300">
              <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-green-400" />Licensed & Insured</div>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-green-400" />Open Until 6 PM</div>
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-green-400" />Los Angeles Area</div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.15 }} className="relative">
            <div className="rounded-[2rem] bg-white/10 border border-white/10 p-6 shadow-2xl backdrop-blur">
              <div className="rounded-[1.5rem] bg-neutral-900 border border-white/10 p-8 min-h-[420px] flex flex-col justify-between">
                <div>
                  <div className="w-full rounded-3xl bg-neutral-950 border border-white/10 flex items-center justify-center mb-8 p-6"><img src={logoSrc} alt="Everhaul Solutions Logo" className="max-h-56 w-full object-contain rounded-2xl" /></div>
                  <h2 className="text-3xl font-black mb-4">Need debris gone fast?</h2>
                  <p className="text-neutral-300 leading-relaxed mb-6">Send photos, location, and access details. We’ll give you a quick estimate and schedule pickup.</p>
                </div>
                <div className="grid gap-3">{['Construction debris', 'Dirt & concrete', 'Furniture & appliances', 'Yard waste', 'Job site cleanup'].map((item) => <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3"><CheckCircle className="w-5 h-5 text-green-400" /><span className="font-semibold">{item}</span></div>)}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="max-w-7xl mx-auto px-5 py-20">
        <div className="max-w-3xl mb-12"><p className="text-green-400 font-black uppercase tracking-widest text-sm mb-3">Our Services</p><h2 className="text-4xl md:text-5xl font-black mb-5">Reliable hauling for cleanouts, contractors, and heavy debris.</h2><p className="text-neutral-300 text-lg">We specialize in the jobs that need more than a pickup truck. Our team handles bulky, heavy, and messy debris safely and efficiently.</p></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">{services.map((service) => <div key={service.title} className="rounded-3xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition"><div className="w-14 h-14 rounded-2xl bg-green-500 text-white flex items-center justify-center mb-5">{service.icon}</div><h3 className="text-xl font-black mb-3">{service.title}</h3><p className="text-neutral-300 leading-relaxed">{service.desc}</p></div>)}</div>
      </section>

      <section id="why" className="bg-neutral-900 border-y border-white/10"><div className="max-w-7xl mx-auto px-5 py-20 grid lg:grid-cols-2 gap-12 items-center"><div><p className="text-green-400 font-black uppercase tracking-widest text-sm mb-3">Why Everhaul</p><h2 className="text-4xl md:text-5xl font-black mb-6">Professional service without the headache.</h2><p className="text-neutral-300 text-lg leading-relaxed mb-8">Everhaul Solutions LLC focuses on customer satisfaction, safety, and timely service. Whether you need a one-time junk pickup or ongoing hauling support for job sites, we make the process simple.</p><div className="grid sm:grid-cols-2 gap-4">{benefits.map((benefit) => <div key={benefit} className="flex items-center gap-3 rounded-2xl bg-neutral-950 border border-white/10 px-4 py-4"><CheckCircle className="w-5 h-5 text-green-400 shrink-0" /><span className="font-semibold">{benefit}</span></div>)}</div></div><div className="rounded-[2rem] bg-green-500 text-white p-8 md:p-10 shadow-2xl"><div className="flex items-center gap-2 mb-6">{[1, 2, 3, 4, 5].map((n) => <Star key={n} className="w-7 h-7 fill-white" />)}</div><h3 className="text-3xl font-black mb-4">5.0 Google Reviews</h3><p className="text-lg font-semibold leading-relaxed mb-8">Trusted by local customers for fast response, professional hauling, and clean job completion.</p><a href="tel:18185381072" className="inline-flex items-center gap-3 rounded-2xl bg-neutral-950 px-7 py-4 text-white font-black hover:bg-neutral-800 transition"><Phone className="w-5 h-5" />Call for a Quote</a></div></div></section>

      <section id="areas" className="max-w-7xl mx-auto px-5 py-20"><div className="rounded-[2rem] bg-white/5 border border-white/10 p-8 md:p-12"><div className="grid lg:grid-cols-2 gap-10 items-center"><div><p className="text-green-400 font-black uppercase tracking-widest text-sm mb-3">Service Areas</p><h2 className="text-4xl md:text-5xl font-black mb-5">Serving Los Angeles and surrounding areas.</h2><p className="text-neutral-300 text-lg leading-relaxed">We help customers across Los Angeles, the San Fernando Valley, and nearby communities with junk removal, construction debris hauling, and dump truck services.</p></div><div className="grid sm:grid-cols-2 gap-3">{['Los Angeles', 'San Fernando Valley', 'Arleta', 'North Hollywood', 'Burbank', 'Glendale', 'Van Nuys', 'Surrounding Areas'].map((area) => <div key={area} className="rounded-2xl bg-neutral-950 border border-white/10 px-5 py-4 font-bold flex items-center gap-3"><MapPin className="w-5 h-5 text-green-400" />{area}</div>)}</div></div></div></section>

      <section id="quote" className="max-w-7xl mx-auto px-5 pb-20"><div className="rounded-[2rem] bg-gradient-to-br from-green-500 to-green-400 text-white p-8 md:p-14 text-center shadow-2xl"><h2 className="text-4xl md:text-6xl font-black mb-5">Ready to clear the junk?</h2><p className="text-lg md:text-xl font-semibold max-w-3xl mx-auto mb-8">Call Everhaul Junk Removal for a free estimate. For the fastest quote, have photos, material type, location, and access details ready.</p><div className="flex flex-col sm:flex-row justify-center gap-4"><a href="tel:18185381072" className="inline-flex justify-center items-center gap-3 rounded-2xl bg-neutral-950 px-8 py-4 text-white font-black text-lg hover:bg-neutral-800 transition"><Phone className="w-5 h-5" />{phone}</a><a href="https://www.google.com/search?q=Everhaul+Junk+Removal" target="_blank" rel="noreferrer" className="inline-flex justify-center items-center gap-3 rounded-2xl border-2 border-white px-8 py-4 font-black text-lg hover:bg-white hover:text-green-600 transition">View Google Profile</a></div></div></section>

      <footer className="border-t border-white/10 py-8"><div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row justify-between gap-4 text-neutral-400 text-sm"><p>© {new Date().getFullYear()} Everhaul Solutions LLC. All rights reserved.</p><p>Junk Removal • Construction Debris • Dirt & Concrete Hauling • Los Angeles</p></div></footer>
    </main>
  );
}
