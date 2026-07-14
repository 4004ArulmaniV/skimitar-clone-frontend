import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import {
  Link
} from "react-router-dom";

import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import FadeIn from "./FadeIn";

function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Company */}

            <div>

              <h2 className="text-2xl font-bold text-white">
                SKIMITAR
              </h2>

              <p className="mt-5 text-sm leading-relaxed">
                Providing industrial automation, software solutions and
                professional technology training for future-ready
                professionals.
              </p>

              {/* Social Icons */}

              <div className="flex gap-4 mt-6">

                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#0A66C2] transition duration-300"
                >
                  <FaLinkedin size={20} />
                </a>

                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#1877F2] transition duration-300"
                >
                  <FaFacebook size={20} />
                </a>

                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition duration-300"
                >
                  <FaInstagram size={20} />
                </a>

                <a
                  href="#"
                  aria-label="YouTube"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 transition duration-300"
                >
                  <FaYoutube size={20} />
                </a>

              </div>

            </div>

            {/* Quick Links */}

            <div>

              <h3 className="text-white font-semibold mb-5">
                Quick Links
              </h3>

              <ul className="space-y-3 text-sm">

                <li>
                  <Link to="/" className="hover:text-white transition">
                    Home
                  </Link>
                </li>

                <li>
                  <Link to="/about" className="hover:text-white transition">
                    About
                  </Link>
                </li>

                <li>
                  <Link to="/services" className="hover:text-white transition">
                    Services
                  </Link>
                </li>

                <li>
                  <Link to="/training" className="hover:text-white transition">
                    Training
                  </Link>
                </li>

                <li>
                  <Link to="/contact" className="hover:text-white transition">
                    Contact
                  </Link>
                </li>

              </ul>

            </div>

            {/* Services */}

            <div>

              <h3 className="text-white font-semibold mb-5">
                Our Services
              </h3>

              <ul className="space-y-3 text-sm">

                <li>Industrial Automation</li>

                <li>PLC | SCADA | HMI Solutions</li>

                <li>Embedded Systems Development</li>

                <li>Software & Web Development</li>

                <li>Professional Technical Training</li>

              </ul>

            </div>

            {/* Contact */}

            <div>

              <h3 className="text-white font-semibold mb-5">
                Contact Us
              </h3>

              <div className="space-y-5 text-sm">

                <div className="flex items-start gap-3">

                  <Mail
                    size={18}
                    className="mt-1 text-blue-400 flex-shrink-0"
                  />

                  <div>

                    <p className="font-medium text-white">
                      Email
                    </p>

                    <p className="text-gray-400">
                      info@skimitar.com
                    </p>

                  </div>

                </div>

                <div className="flex items-start gap-3">

                  <Phone
                    size={18}
                    className="mt-1 text-blue-400 flex-shrink-0"
                  />

                  <div>

                    <p className="font-medium text-white">
                      Phone
                    </p>

                    <p className="text-gray-400">
                      +91 98765 43210
                    </p>

                  </div>

                </div>

                <div className="flex items-start gap-3">

                  <MapPin
                    size={18}
                    className="mt-1 text-blue-400 flex-shrink-0"
                  />

                  <div>

                    <p className="font-medium text-white">
                      Office
                    </p>

                    <p className="text-gray-400 leading-relaxed">
                      Chennai,
                      Tamil Nadu,
                      India
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </FadeIn>

      </div>

      {/* Bottom */}

      <div className="border-t border-gray-800">

        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-sm">

          <p>
            © {new Date().getFullYear()} Skimitar Hindusthan Pvt Ltd. All Rights Reserved.
          </p>

          <p className="text-gray-500">
            Designed & Developed using React.js & Tailwind CSS
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;