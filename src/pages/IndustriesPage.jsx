import Navbar from "../components/Navbar";
import Industries from "../components/Industries";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

function IndustriesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Industries />
      </main>
      <BackToTop />
      <Footer />
    </>
  );
}

export default IndustriesPage;