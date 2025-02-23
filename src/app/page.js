import Image from "next/image";
import react from "react";
import Navbar1 from "../components/navbar";
import Hero from "../components/hero";
import Footer from "../components/footer";
import UnderConstruction from '@/components/UnderConstruction'
import ServicesSections from '@/components/ServicesSections';
import Testimonials from "@/components/testimonials";
import Newsletter from '@/components/Newsletter';
import ImageCarousel from '@/components/ImageCarousel';
import StudySection from '@/components/LandingPage/Hero'
import Counseling from '@/components/LandingPage/Counseling'
import Education from '@/components/LandingPage/Education'
import Pension from '@/components/LandingPage/Pension'
import BookExam from '@/components/LandingPage/BookExam'
import Divider from '@/components/LandingPage/Divider'
import HeroBanner from '@/components/LandingPage/Hero-Banner'
import Ticker from '@/components/LandingPage/Testing'
import Navbar from '@/components/LandingPage/Navbar'
import EventBanner from '@/components/LandingPage/EventBanner'
import BentoGallery from '@/components/LandingPage/BentoGallery'
import Modal from '@/components/LandingPage/Modal'


export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <div id="study-home">
        <StudySection />
      </div>

      <div id="consulting">
        <Counseling />
      </div>

      {/* <EventBanner/> */}

      <Divider />
      <div id="pension">
        <Pension />
      </div>

      <BentoGallery/>

      <Divider />

      <div id="education-home">
        <Education />
      </div>

      <Divider />

      <div id="book-exam">
        <BookExam />
      </div>
      {/* <HeroBanner /> */}
      <div id="Footer">

      <Footer />
      <Modal/>
      </div>
    </main>
  );
}
