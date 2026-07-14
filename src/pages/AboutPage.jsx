import Navbar from "../components/Navbar";
import About from "../components/About";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <About />
      </main>
      <BackToTop />
      <Footer />
    </>
  );
}

export default AboutPage;