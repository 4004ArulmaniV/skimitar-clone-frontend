import { Target, CheckCircle2 } from "lucide-react";
import FadeIn from "../FadeIn";

function CourseOutcomes({ course }) {
  return (
    <FadeIn>
      <section className="bg-white rounded-2xl shadow-lg p-8">

        {/* Heading */}

        <div className="flex items-center gap-3 mb-8">

          <div className="bg-green-100 p-3 rounded-xl">

            <Target
              size={28}
              className="text-green-600"
            />

          </div>

          <h2 className="text-3xl font-bold">
            Learning Outcomes
          </h2>

        </div>

        {/* Outcomes */}

        <div className="grid md:grid-cols-2 gap-5">

          {course.outcomes.map((item, index) => (

            <div
              key={index}
              className="flex items-start gap-4 p-5 rounded-xl border border-gray-200 bg-gray-50 hover:bg-green-50 hover:border-green-500 hover:shadow-md transition-all duration-300"
            >

              <CheckCircle2
                size={24}
                className="text-green-600 mt-1 flex-shrink-0"
              />

              <div>

                <h3 className="font-semibold text-lg text-gray-800">
                  Outcome {index + 1}
                </h3>

                <p className="text-gray-600 mt-1">
                  {item}
                </p>

              </div>

            </div>

          ))}

        </div>

      </section>
    </FadeIn>
  );
}

export default CourseOutcomes;