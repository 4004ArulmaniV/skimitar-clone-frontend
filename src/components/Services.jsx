import FadeIn from "./FadeIn";
import ServiceCard from "./ServiceCard";
import services from "../data/services";
import { Link } from "react-router-dom";

function Services() {
  return (
    <FadeIn>
      <section
        id="services"
        className="py-24 bg-gray-50 scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto px-6">

          {/* Section Heading */}
          <div className="text-center mb-16">

            <h4 className="text-blue-700 font-semibold uppercase tracking-widest">
              Our Services
            </h4>

            <h2 className="text-5xl font-bold mt-3">
              Industrial & IT Solutions
            </h2>

            <p className="text-gray-600 mt-4 max-w-3xl mx-auto leading-8">
              We provide professional industrial automation,
              software development, IoT, embedded systems,
              digital transformation and technical solutions
              designed to improve productivity, efficiency
              and business growth.
            </p>

          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {services.slice(0, 6).map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
              />
            ))}

          </div>

          {/* View All Button */}
          <div className="text-center mt-14">

            <Link
              to="/services"
              className="inline-flex items-center bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-800 transition duration-300"
            >
              View All Services →
            </Link>

          </div>

        </div>
      </section>
    </FadeIn>
  );
}

export default Services;