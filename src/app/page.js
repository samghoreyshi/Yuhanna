import Image from "next/image";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Footer from "../components/footer";
import Stats from "../components/stats";
import Testimonials from "../components/testimonials";
import Courses from "../components/courses";
import WhyChooseUs from "../components/whyChooseUs";
import Contact from "../components/contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Stats />
      <WhyChooseUs />
      <Courses />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
