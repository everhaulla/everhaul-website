import Navbar from "../components/Navbar";
import HomeSections from "../components/HomeSections";
import Footer from "../components/Footer";
import Head from "next/head";
import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Everhaul Solutions | Professional Junk & Debris Removal</title>
        <meta
          name="description"
          content="Family-owned and contractor-trusted junk and debris removal across Los Angeles."
        />
      </Head>

      <main>
        <HeroSection />

        <section id="quote" className="bg-charcoal px-6 py-24 text-white">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-black sm:text-4xl">
              Request a Free Quote
            </h2>
            <p className="mt-4 text-gray-300">
              Add your quote form, contact form, or booking section here.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
