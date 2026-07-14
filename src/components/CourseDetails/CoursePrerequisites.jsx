import { ClipboardList, CircleCheckBig } from "lucide-react";
import FadeIn from "../FadeIn";

function CoursePrerequisites({ course }) {
  return (
    <FadeIn>
      <section className="bg-white rounded-2xl shadow-lg p-8">

        {/* Heading */}

        <div className="flex items-center gap-3 mb-8">

          <div className="bg-amber-100 p-3 rounded-xl">

            <ClipboardList
              size={28}
              className="text-amber-600"
            />

          </div>

          <div>

            <h2 className="text-3xl font-bold">
              Prerequisites
            </h2>

            <p className="text-gray-500 mt-1">
              Recommended knowledge before starting this course.
            </p>

          </div>

        </div>

        {/* Prerequisites */}

        <div className="grid md:grid-cols-2 gap-5">

          {course.prerequisites.map((item, index) => (

            <div
              key={index}
              className="flex items-center gap-4 p-5 rounded-xl border border-gray-200 bg-amber-50 hover:bg-amber-100 hover:border-amber-400 hover:shadow-md transition-all duration-300"
            >

              <CircleCheckBig
                size={24}
                className="text-amber-600 flex-shrink-0"
              />

              <span className="text-gray-700 font-medium">
                {item}
              </span>

            </div>

          ))}

        </div>

        {/* Extra Note */}

        <div className="mt-8 rounded-xl bg-blue-50 border border-blue-200 p-5">

          <p className="text-blue-700 leading-7">
            <strong>Note:</strong> If you're enthusiastic about learning,
            don't worry if you don't meet every prerequisite. Our trainers
            will guide you from the fundamentals wherever possible.
          </p>

        </div>

      </section>
    </FadeIn>
  );
}

export default CoursePrerequisites;