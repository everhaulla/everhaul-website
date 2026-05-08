import Head from "next/head";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import HomeSections from "../components/HomeSections";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Everhaul Solutions | Junk & Debris Removal Los Angeles</title>
        <meta
          name="description"
          content="Everhaul Solutions provides professional junk removal, construction debris removal, dirt and concrete hauling, appliance removal, garage cleanouts, and jobsite cleanup across Los Angeles."
        />
      </Head>

      <Navbar />
      <HeroSection />
      <ServicesSection />
      <HomeSections />
      <Footer />
    </>
  );
}
