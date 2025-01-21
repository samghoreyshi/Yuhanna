import Image from "next/image";
import react from "react";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Footer from "../components/footer";
import UnderConstruction from '@/components/UnderConstruction'


export default function Home() {

  return (
    <main className="min-h-screen bg-white">
      {/* <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <Footer /> */}
      <UnderConstruction />


    </main >
  );
}
