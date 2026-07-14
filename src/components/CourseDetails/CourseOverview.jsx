import { BookOpen, CheckCircle2 } from "lucide-react";
import FadeIn from "../FadeIn";

function CourseOverview({ course }) {
  return (
    <FadeIn>
      <section className="bg-white rounded-2xl shadow-lg p-8">

        {/* Heading */}

        <div className="flex items-center gap-3 mb-6">

          <div className="bg-blue-100 p-3 rounded-xl">

            <BookOpen
              size={28}
              className="text-blue-700"
            />

          </div>

          <h2 className="text-3xl font-bold">
            Course Overview
          </h2>

        </div>

        {/* Overview */}

        <p className="text-gray-600 leading-8 text-lg">
          {course.overview}
        </p>

        {/* Highlights */}

        <div className="mt-10">

          <h3 className="text-2xl font-semibold mb-6">
            Course Highlights
          </h3>

          <div className="grid sm:grid-cols-2 gap-5">

            {course.highlights.map((item, index) => (

              <div
                key={index}
                className="flex items-center gap-3 bg-gray-50 border rounded-xl p-4 hover:border-blue-600 hover:shadow-md transition duration-300"
              >

                <CheckCircle2
                  size={22}
                  className="text-green-600 flex-shrink-0"
                />

                <span className="font-medium text-gray-700">
                  {item}
                </span>

              </div>

            ))}

          </div>

        </div>

      </section>
    </FadeIn>
  );
}

export default CourseOverview;