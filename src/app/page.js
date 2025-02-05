import Image from "next/image";
import react from "react";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Footer from "../components/footer";
import UnderConstruction from '@/components/UnderConstruction'
import ServicesSections from '@/components/ServicesSections';
import Testimonials from "@/components/testimonials";
import Newsletter from '@/components/Newsletter';
import ImageCarousel from '@/components/ImageCarousel';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <section id="hero">
        <Hero />
      </section>
      <ImageCarousel />
      <ServicesSections />
      <Testimonials />
      <Newsletter />
      {/* <UnderConstruction /> */}
    </main>
  );
}
