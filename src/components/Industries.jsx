import FadeIn from "./FadeIn";
import { Link } from "react-router-dom";
import industryData from "../data/industryData";
function Industries() {
  const industries = [
    "Manufacturing",
    "Automotive",
    "Healthcare",
    "Information Technology",
    "Renewable Energy",
    "Oil & Gas",
    "Logistics",
    "Education",
  ];

  return (
  <FadeIn>
    <section id="industries" className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-blue-700 font-semibold uppercase tracking-wider">
            Industries
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Industries We Serve
          </h2>

          <div className="w-24 h-1 bg-blue-700 mx-auto mt-4"></div>

          <p className="text-gray-600 mt-6">
            Delivering innovative solutions across multiple sectors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {industryData.map((industry) => {

            const Icon = industry.icon;

            return (

              <Link
                key={industry.id}
                to={`/industries/${industry.id}`}
              >

                <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 h-full border hover:border-blue-600 hover:-translate-y-2">

                  <Icon
                    size={45}
                    className="text-blue-600 mb-6 transition group-hover:scale-110"
                  />

                  <h3 className="text-2xl font-bold mb-4">
                    {industry.title}
                  </h3>

                  <p className="text-gray-600 line-clamp-3">
                    {industry.description}
                  </p>

                  <div className="mt-6 text-blue-600 font-semibold">
                    Learn More →
                  </div>

                </div>

              </Link>

            );

          })}
      
       </div>

      </div>

    </section>
  </FadeIn>
);
}

export default Industries;