import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import FadeIn from "../components/FadeIn";
import ServiceCard from "../components/ServiceCard";
import FAQ from "../components/FAQ";
import { serviceFaqs } from "../data/faqs";
import services from "../data/services";

function Services() {
  return (
    <>
      <Navbar />

      <main className="pt-20 bg-gray-50 min-h-screen">

        {/* Hero */}

        <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-20">

          <div className="max-w-7xl mx-auto px-6 text-center">

            <h1 className="text-5xl font-bold">
              Our Services
            </h1>

            <p className="mt-6 text-lg max-w-3xl mx-auto leading-8 text-blue-100">
              We provide complete Industrial Automation,
              Embedded Systems, IoT, Software Development,
              Digital Marketing and Electrical Engineering
              solutions tailored for modern industries.
            </p>

          </div>

        </section>

        {/* Services */}
        <section className="py-20">

<div className="max-w-7xl mx-auto px-6">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

{services.map((service) => (

<FadeIn key={service.id}>

<ServiceCard
  service={service}
/>

</FadeIn>

))}

</div>

</div>

</section>
        <FAQ
  badge="Services FAQ"
  title="Frequently Asked Service Questions"
  subtitle="Find answers to common questions about our industrial automation and engineering services."
  faqs={serviceFaqs}
/>

      </main>

      <BackToTop />
      <Footer />

    </>
  );
}

export default Services;