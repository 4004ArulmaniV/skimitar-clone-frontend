import { useParams, Link } from "react-router-dom";
import services from "../data/services";
import {
  CheckCircle,
  ArrowLeft,
  Phone,
  Briefcase,
} from "lucide-react";

function ServiceDetails() {
  const { id } = useParams();

  const service = services.find((item) => item.id === id);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">
            Service Not Found
          </h1>

          <p className="text-gray-600 mt-3">
            The requested service does not exist.
          </p>

          <Link
            to="/"
            className="inline-block mt-6 bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero */}

      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex flex-col lg:flex-row items-center gap-10">

            <div className="bg-white/10 p-8 rounded-3xl">
              <Icon size={90} />
            </div>

            <div>

              <span className="uppercase tracking-widest text-blue-200 font-semibold">
                Our Service
              </span>

              <h1 className="text-5xl font-bold mt-4">
                {service.title}
              </h1>

              <p className="text-lg text-blue-100 mt-6 max-w-3xl leading-8">
                {service.shortDescription}
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Main Content */}

      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-3 gap-10">

            {/* Left */}

            <div className="lg:col-span-2 space-y-10">

              <div className="bg-white rounded-2xl shadow-lg p-8">

                <h2 className="text-3xl font-bold mb-5">
                  Service Overview
                </h2>

                <p className="text-gray-600 leading-8">
                  {service.shortDescription}
                  {" "}
                  We deliver reliable industrial and IT solutions using modern technologies,
                  experienced engineers, and industry best practices. Our team focuses on
                  quality, safety, and customer satisfaction while delivering scalable
                  solutions tailored to your business needs.
                </p>

              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">

                <h2 className="text-3xl font-bold mb-6">
                  Key Features
                </h2>

                <div className="grid md:grid-cols-2 gap-5">

                  {service.features.map((feature, index) => (

                    <div
                      key={index}
                      className="flex items-center gap-3 bg-gray-50 rounded-xl p-4"
                    >
                      <CheckCircle
                        className="text-green-600"
                        size={20}
                      />

                      <span>{feature}</span>

                    </div>

                  ))}

                </div>

              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">

                <h2 className="text-3xl font-bold mb-5">
                  Why Choose Us?
                </h2>

                <div className="grid md:grid-cols-2 gap-5">

                  <div className="border rounded-xl p-5">
                    ✅ Experienced Engineers
                  </div>

                  <div className="border rounded-xl p-5">
                    ✅ Industry Standard Solutions
                  </div>

                  <div className="border rounded-xl p-5">
                    ✅ On-Time Project Delivery
                  </div>

                  <div className="border rounded-xl p-5">
                    ✅ Technical Support
                  </div>

                </div>

              </div>

            </div>

            {/* Sidebar */}

            <div>

              <div className="sticky top-28 bg-white rounded-2xl shadow-xl overflow-hidden">

                <div className="bg-blue-700 text-white p-6">

                  <h3 className="text-2xl font-bold">
                    Service Enquiry
                  </h3>

                </div>

                <div className="p-6 space-y-5">

                  <div className="flex items-center gap-3">

                    <Briefcase
                      className="text-blue-700"
                      size={20}
                    />

                    <span>
                      Professional Industrial Solutions
                    </span>

                  </div>

                  <div className="flex items-center gap-3">

                    <CheckCircle
                      className="text-green-600"
                      size={20}
                    />

                    <span>
                      Customized Project Support
                    </span>

                  </div>

                  <div className="flex items-center gap-3">

                    <Phone
                      className="text-blue-700"
                      size={20}
                    />

                    <span>
                      Free Technical Consultation
                    </span>

                  </div>

                  <Link
  to="/contact"
  className="block w-full bg-blue-700 text-white py-3 rounded-xl text-center font-semibold hover:bg-blue-800 transition"
>
  Contact Us
</Link>

                  <Link
                    to="/services"
                    className="flex items-center justify-center gap-2 text-blue-700 hover:text-blue-900 font-medium"
                  >
                    <ArrowLeft size={18} />
                    Back to Services
                  </Link>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default ServiceDetails;