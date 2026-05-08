import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";

export const metadata = {
  title: "Everhaul Solutions | Professional Junk & Debris Removal",
  description:
    "Family-owned and contractor-trusted junk and debris removal across Los Angeles.",
};

export default function Home() {
  return (
    <main className="bg-[#050705]">
      <Navbar />
      <HeroSection />

      <section id="services" className="bg-[#08100b] px-5 py-28 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-emerald-400">
            Services
          </p>
          <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">
            Built for contractors, cleanouts, and heavy debris jobs.
          </h2>
        </div>
      </section>

      <section id="gallery" className="bg-[#050705] px-5 py-28 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-black">Gallery</h2>
        </div>
      </section>

      <section id="about" className="bg-[#08100b] px-5 py-28 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-black">About Everhaul</h2>
        </div>
      </section>

      <section id="contact" className="bg-[#050705] px-5 py-28 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-black">Contact</h2>
        </div>
      </section>

      <section id="quote" className="bg-[#08100b] px-5 py-28 text-white lg:px-8">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 text-center backdrop-blur-xl">
          <h2 className="text-4xl font-black">Request a Free Quote</h2>
          <p className="mt-4 text-gray-300">
            Add your form, booking link, or contact information here.
          </p>
        </div>
      </section>
    </main>
  );
}
