import ScrollToTop from './ScrollToTop';
import Hero from './Hero';
import Services from './Services';
import Recommend from './Recommend';
import Testimonials from './Testimonials';

function Home() {
  return (
   <>
    <ScrollToTop />
    <Hero />
    <Services />
    <Recommend />
    <Testimonials />
    </>
  )
}

export default Home