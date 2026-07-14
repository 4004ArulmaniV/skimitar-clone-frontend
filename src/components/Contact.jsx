import { useState } from "react";
import FadeIn from "./FadeIn";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
} from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone =
        "Enter a valid 10 digit mobile number";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess(false);
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:5000/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (data.success) {
        setSuccess(true);

        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });

        setErrors({});
      }
    } catch (error) {
      console.error(error);

      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <FadeIn>
      <section
        id="contact"
        className="py-24 bg-gray-50 scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}

          <div className="text-center mb-16">

            <span className="text-blue-700 font-semibold uppercase tracking-widest">
              Contact Us
            </span>

            <h2 className="text-5xl font-bold mt-4">
              Let's Build Something Great Together
            </h2>

            <p className="text-gray-600 max-w-3xl mx-auto mt-6 leading-8">
              Have questions about our industrial automation,
              training programs or software solutions?
              Our experts are always ready to help you.
            </p>

          </div>

          <div className="grid lg:grid-cols-2 gap-10">

            {/* LEFT SIDE */}

            <div className="bg-white rounded-3xl shadow-xl p-8">

              <h3 className="text-3xl font-bold mb-6">
                Send us a Message
              </h3>

              {success && (
                <div className="flex items-center gap-3 bg-green-100 text-green-700 rounded-xl p-4 mb-6">
                  <CheckCircle size={22} />
                  <span>
                    Message sent successfully!
                  </span>
                </div>
              )}

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                <div>

                  <label className="font-medium text-gray-700">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      })
                    }
                    className="w-full mt-2 border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-700"
                  />

                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name}
                    </p>
                  )}

                </div>

                <div>

                  <label className="font-medium text-gray-700">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                    className="w-full mt-2 border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-700"
                  />

                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email}
                    </p>
                  )}

                </div>

                <div>

                  <label className="font-medium text-gray-700">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    maxLength={10}
                    placeholder="Enter your mobile number"
                    value={formData.phone}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, "");

                      setFormData({
                        ...formData,
                        phone: value,
                      });
                    }}
                    className="w-full mt-2 border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-700"
                  />

                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phone}
                    </p>
                  )}

                </div>

                <div>

                  <label className="font-medium text-gray-700">
                    Message
                  </label>

                  <textarea
                    rows="5"
                    placeholder="Write your message..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        message: e.target.value,
                      })
                    }
                    className="w-full mt-2 border rounded-xl px-4 py-3 resize-none outline-none focus:ring-2 focus:ring-blue-700"
                  />

                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}

                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-700 text-white py-3 rounded-xl font-semibold hover:bg-blue-800 transition flex items-center justify-center gap-2"
                >
                  <Send size={18} />

                  {loading ? "Sending..." : "Send Message"}
                </button>

              </form>
             {/* Google Map */}

<div className="bg-white rounded-3xl shadow-xl overflow-hidden">

  <div className="p-6">

    <h3 className="text-2xl font-bold mb-2">
      Find Us on Map
    </h3>

    <p className="text-gray-600">
      Visit our office for industrial automation solutions and training.
    </p>

  </div>

  <iframe
    title="Skimitar Hindusthan Location"
    src="https://www.google.com/maps?q=Chennai,Tamil%20Nadu&output=embed"
    width="100%"
    height="320"
    loading="lazy"
    allowFullScreen
    referrerPolicy="no-referrer-when-downgrade"
    className="border-0"
  ></iframe>

</div>

            </div>

                        {/* RIGHT SIDE */}

            <div className="space-y-6">

              {/* Contact Information */}

              <div className="bg-white rounded-3xl shadow-xl p-8">

                <h3 className="text-3xl font-bold mb-8">
                  Contact Information
                </h3>

                <div className="space-y-6">

                  <div className="flex items-start gap-5">

                    <div className="bg-blue-100 p-4 rounded-2xl">

                      <MapPin
                        className="text-blue-700"
                        size={24}
                      />

                    </div>

                    <div>

                      <h4 className="font-bold text-lg">
                        Office Address
                      </h4>

                      <p className="text-gray-600 mt-1 leading-7">
                        Skimitar Hindusthan Pvt Ltd
                        <br />
                        Chennai,
                        Tamil Nadu,
                        India
                      </p>

                    </div>

                  </div>

                  <div className="flex items-start gap-5">

                    <div className="bg-blue-100 p-4 rounded-2xl">

                      <Phone
                        className="text-blue-700"
                        size={24}
                      />

                    </div>

                    <div>

                      <h4 className="font-bold text-lg">
                        Phone Number
                      </h4>

                      <p className="text-gray-600 mt-1">
                        +91 98765 43210
                      </p>

                    </div>

                  </div>

                  <div className="flex items-start gap-5">

                    <div className="bg-blue-100 p-4 rounded-2xl">

                      <Mail
                        className="text-blue-700"
                        size={24}
                      />

                    </div>

                    <div>

                      <h4 className="font-bold text-lg">
                        Email Address
                      </h4>

                      <p className="text-gray-600 mt-1">
                        info@skimitarhindusthan.com
                      </p>

                    </div>

                  </div>

                </div>

              </div>

              {/* Working Hours */}

              <div className="bg-blue-700 text-white rounded-3xl shadow-xl p-8">

                <div className="flex items-center gap-3 mb-6">

                  <Clock size={28} />

                  <h3 className="text-2xl font-bold">
                    Working Hours
                  </h3>

                </div>

                <div className="space-y-4">

                  <div className="flex justify-between border-b border-blue-500 pb-3">

                    <span>Monday - Friday</span>

                    <span>09:00 AM - 06:00 PM</span>

                  </div>

                  <div className="flex justify-between border-b border-blue-500 pb-3">

                    <span>Saturday</span>

                    <span>09:00 AM - 04:00 PM</span>

                  </div>

                  <div className="flex justify-between">

                    <span>Sunday</span>

                    <span>Closed</span>

                  </div>

                </div>

              </div>

              {/* Why Choose Us */}

              <div className="bg-white rounded-3xl shadow-xl p-8">

                <h3 className="text-2xl font-bold mb-6">
                  Why Choose Us?
                </h3>

                <div className="space-y-4">

                  <div className="flex items-center gap-3">

                    <CheckCircle
                      className="text-green-600"
                      size={22}
                    />

                    <span>
                      10+ Years of Industry Experience
                    </span>

                  </div>

                  <div className="flex items-center gap-3">

                    <CheckCircle
                      className="text-green-600"
                      size={22}
                    />

                    <span>
                      Professional Industrial Training
                    </span>

                  </div>

                  <div className="flex items-center gap-3">

                    <CheckCircle
                      className="text-green-600"
                      size={22}
                    />

                    <span>
                      Automation & Software Solutions
                    </span>

                  </div>

                  <div className="flex items-center gap-3">

                    <CheckCircle
                      className="text-green-600"
                      size={22}
                    />

                    <span>
                      Dedicated Technical Support
                    </span>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </FadeIn>
  );
}

export default Contact;