import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutPreview from "../components/AboutPreview";
import ServicesPreview from "../components/ServicesPreview";
import IndustriesPreview from "../components/IndustriesPreview";
import TrainingPreview from "../components/TrainingPreview";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import Partners from "../components/Partners";
import FAQ from "../components/FAQ";
import { homeFaqs } from "../data/faqs";
import CTA from "../components/CTA";
import ContactPreview from "../components/ContactPreview";
import BackToTop from "../components/BackToTop";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <div className="pt-20">
        <Hero />
        <AboutPreview />
        <ServicesPreview />
        <IndustriesPreview />
        <TrainingPreview />
        <Stats />
        <Testimonials />
        <Partners />
        <FAQ
    badge="Services FAQ"
    title="Frequently Asked Service Questions"
    subtitle="Everything you need to know about our industrial automation and software services."
    faqs={homeFaqs}
  />
        <CTA />
        <ContactPreview />
        <BackToTop />
        <Footer />
      </div>
    </>
  );
}

export default Home;