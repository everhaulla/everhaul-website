import Navbar from "../components/Navbar";
import HomeSections from "../components/HomeSections";
import Footer from "../components/Footer";
import Head from "next/head";
import HeroSection from "../components/HeroSection";

export default function Home() {
 return (
  <>
    <Navbar />

    {/* KEEP your existing hero section */}
    <HeroSection />

    {/* New homepage sections */}
    <HomeSections />

    {/* Footer */}
    <Footer />
  </>
);
   
