import Header from './Header';
import ServicesGrid from '@/components/ServicesGrid';
import LatestNews from '@/components/LatestNews';


export default function Hero() {
  return (
    <>
      <section id="home">
        <Header />
        <ServicesGrid />
        <LatestNews />
      </section>

    </>
  );
}
