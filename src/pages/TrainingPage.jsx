import FAQ from "../components/FAQ";
import { trainingFaqs } from "../data/faqs";
import Navbar from "../components/Navbar";
import Training from "../components/Training/Training";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

function TrainingPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
  <Training />

  <FAQ
    badge="Training FAQ"
    title="Training Frequently Asked Questions"
    subtitle="Find answers to common questions about our professional training programs."
    faqs={trainingFaqs}
  />
</main>
      <BackToTop />
      <Footer />
    </>
  );
}

export default TrainingPage;