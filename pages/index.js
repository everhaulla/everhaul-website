import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import HomeSections from "../components/HomeSections";
import Footer from "../components/Footer";
export default function Home() {
return (
  <>
    <Navbar />

    {/* Keep your existing hero exactly as-is */}
    <HeroSection />

    <ServicesSection />

    <HomeSections />

    <Footer />
  </>
);
