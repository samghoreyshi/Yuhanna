import Header from './Header';
import Programs from "./programs";
import EducationHouse from './EducationHouse';
import Counseling from './Counseling';
import Gallery from './Gallery';
import Features from "./Features";
import Events from './Events';
import Books from './books';
import Exams from './Exams';

export default function Hero() {
  return (
    <>
      <section id="home">
        <Header />
      </section>
      <section id="counseling">
        <Counseling />
      </section>
      <section id="studyHouse">
        <Programs />
      </section>
      <section id="educationHouse">
        <EducationHouse />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="books">
        <Books />
      </section>
      <section id="exams">
        <Exams />
      </section>
      <section id="events">
        <Events />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
    </>
  );
}
