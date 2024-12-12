import Header from './Header';
import Programs from "./programs";
import EducationHouse from './EducationHouse';
import Counseling from './Counseling';
import Gallery from './Gallery';
import Features from "./Features";
import Events from './Events';
import Books from './books';

export default function Hero() {
  return (
    <>
      <Header />
      <Counseling />
      <section id="pension">
        <Programs />
      </section>
      <EducationHouse />
      <Features />
      <Books />
      <Events />
      <Gallery />
    </>
  );
}
