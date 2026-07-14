import { useParams, Link } from "react-router-dom";
import {
  CheckCircle,
  ArrowLeft,
} from "lucide-react";

import industryData from "../data/industryData";

export default function IndustryDetails() {

  const { id } = useParams();

  const industry = industryData.find(
    (item) => item.id === id
  );

  if (!industry) {

    return (
      <div className="min-h-screen flex justify-center items-center">
        Industry Not Found
      </div>
    );
  }

  const Icon = industry.icon;

  return (

    <section className="pt-32 pb-20 bg-gray-50 min-h-screen">

      <div className="max-w-6xl mx-auto px-6">

        <Link
          to="/industries"
          className="inline-flex items-center gap-2 text-blue-600 mb-10 hover:underline"
        >
          <ArrowLeft size={18} />
          Back to Industries
        </Link>

        <div className="bg-white rounded-3xl shadow-lg p-10">

          <Icon
            size={70}
            className="text-blue-600 mb-6"
          />

          <h1 className="text-5xl font-bold mb-6">
            {industry.title}
          </h1>

          <p className="text-gray-600 text-lg leading-8 mb-10">
            {industry.description}
          </p>

          <div className="grid md:grid-cols-3 gap-10">

            <div>

              <h2 className="text-2xl font-bold mb-5">
                Solutions
              </h2>

              {industry.solutions.map((item) => (

                <div
                  key={item}
                  className="flex gap-3 mb-3"
                >
                  <CheckCircle
                    size={18}
                    className="text-green-600 mt-1"
                  />

                  <span>{item}</span>

                </div>

              ))}

            </div>

            <div>

              <h2 className="text-2xl font-bold mb-5">
                Technologies
              </h2>

              <div className="flex flex-wrap gap-3">

                {industry.technologies.map((tech) => (

                  <span
                    key={tech}
                    className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full"
                  >
                    {tech}
                  </span>

                ))}

              </div>

            </div>

            <div>

              <h2 className="text-2xl font-bold mb-5">
                Benefits
              </h2>

              {industry.benefits.map((item) => (

                <div
                  key={item}
                  className="flex gap-3 mb-3"
                >
                  <CheckCircle
                    size={18}
                    className="text-green-600 mt-1"
                  />

                  <span>{item}</span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}