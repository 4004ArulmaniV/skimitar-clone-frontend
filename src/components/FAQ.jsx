import { useState } from "react";
import { ChevronDown } from "lucide-react";
import FadeIn from "./FadeIn";

function FAQ({
  title = "Frequently Asked Questions",
  subtitle = "Find answers to common questions about our services and training programs.",
  badge = "FAQ",
  faqs = [],
}) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">

        <FadeIn>
          <div className="text-center mb-14">

            <p className="text-blue-700 font-semibold uppercase tracking-widest">
              {badge}
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
              {title}
            </h2>

            <p className="text-gray-600 mt-4">
              {subtitle}
            </p>

          </div>
        </FadeIn>

        <div className="space-y-4">

          {faqs.map((faq, index) => (

            <FadeIn key={index}>

              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">

                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex justify-between items-center p-6 text-left"
                >

                  <span className="font-semibold text-gray-900">
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={22}
                    className={`text-blue-700 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />

                </button>

                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    openIndex === index
                      ? "max-h-48 opacity-100 pb-6 px-6"
                      : "max-h-0 opacity-0"
                  }`}
                >

                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>

                </div>

              </div>

            </FadeIn>

          ))}

        </div>

      </div>
    </section>
  );
}

export default FAQ;