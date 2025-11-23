import CtaSection from '../../components/cta-section/CtaSection';
import FAQ from '../../components/faq/FAQ';
import Features from '../../components/features/Features';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Hero from '../../components/hero/Hero';
import Pricing from '../../components/pricing/Pricing';
import Testimonials from '../../components/testimonials/Testimonials';
import WhyChooseUs from '../../components/whychooseus/WhyChooseUs';

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <WhyChooseUs />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CtaSection />
      <Footer />
    </>
  );
};

export default HomePage;
