import Head from "next/head";

import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import Gallery from "../components/Gallery";
import BeforeAfterSection from "../components/BeforeAfterSection";
import Testimonials from "../components/Testimonials";
import QuoteSection from "../components/QuoteSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Everhaul Solutions | Junk & Debris Removal Los Angeles</title>
        <meta
          name="description"
          content="Family-owned junk removal, construction debris hauling, cleanouts, and jobsite cleanup services across the San Fernando Valley, Burbank, Glendale, Pasadena, and most of Los Angeles."
        />
      </Head>

      <Navbar />
      <HeroSection />
      <ServicesSection />
      <Gallery />
      <BeforeAfterSection />
      <Testimonials />
      <QuoteSection />
      <Footer />
    </>
  );
}
