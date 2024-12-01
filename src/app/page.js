import Image from "next/image";
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

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="education">
        <Courses />
      </section>

      <section id="books">
        <Books />
      </section>
      <section id="about">
        <WhyChooseUs />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </main>
  );
}
