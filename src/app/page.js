'use client';
import Image from "next/image";
import { useState } from "react";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Footer from "../components/footer";
import Stats from "../components/stats";
import Testimonials from "../components/testimonials";
import Courses from "../components/courses";
import WhyChooseUs from "../components/whyChooseUs";
import Contact from "../components/contact";
import Books from "../components/books";
import Programs from "../components/programs";
import Preloader from "../components/Preloader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="min-h-screen bg-white">
      <Preloader isLoading={isLoading} setIsLoading={setIsLoading} />
      {!isLoading && (
        <>
          <Navbar />
          <section id="hero">
            <Hero />
          </section>
          <section id="about">
            <WhyChooseUs />
          </section>
          <section id="testimonials">
            <Testimonials />
          </section>
          <section id="contact">
            {/* <Contact /> */}
          </section>
          <Footer />
        </>
      )}
    </main>
  );
}
