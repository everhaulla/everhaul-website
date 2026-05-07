import Head from "next/head";
import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Everhaul Solutions | Professional Junk & Debris Removal</title>
        <meta
          name="description"
          content="Family-owned and contractor-trusted junk and debris removal services across Los Angeles."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
      </Head>

      <main className="bg-[#0f0f0f] text-white overflow-hidden">
        <HeroSection />
      </main>
    </>
  );
}
