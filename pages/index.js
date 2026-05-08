import Head from "next/head";

import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import HomeSections from "../components/HomeSections";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Everhaul Solutions</title>
      </Head>

      <Navbar />

      <HeroSection />

      <HomeSections />

      <Footer />
    </>
  );
}
