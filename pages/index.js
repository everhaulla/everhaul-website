import Head from "next/head";

import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import WhyUs from "../components/WhyUs";
import Gallery from "../components/Gallery";
import BeforeAfterSection from "../components/BeforeAfterSection";
import Testimonials from "../components/Testimonials";
import QuoteSection from "../components/QuoteSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Everhaul Solutions | Junk Removal & Debris Hauling Los Angeles</title>
        <meta
          name="description"
          content="Licensed and insured, family-owned junk removal and debris hauling company serving the San Fernando Valley, Burbank, Glendale, Pasadena, and most of Los Angeles."
        />
      </Head>

      <Navbar />
      <HeroSection />
      <ServicesSection />
      <WhyUs />
      <Gallery />
      <BeforeAfterSection />
      <Testimonials />
      <QuoteSection />
      <Footer />
    </>
  );
}
