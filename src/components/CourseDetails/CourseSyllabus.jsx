import { BookMarked } from "lucide-react";
import FadeIn from "../FadeIn";

function CourseSyllabus({ course }) {
  return (
    <FadeIn>
      <section className="bg-white rounded-2xl shadow-lg p-8">

        {/* Heading */}

        <div className="flex items-center gap-3 mb-8">

          <div className="bg-blue-100 p-3 rounded-xl">

            <BookMarked
              size={28}
              className="text-blue-700"
            />

          </div>

          <h2 className="text-3xl font-bold">
            Course Syllabus
          </h2>

        </div>

        {/* Syllabus Grid */}

        <div className="grid md:grid-cols-2 gap-6">

          {course.syllabus.map((topic, index) => (

            <div
              key={index}
              className="border border-gray-200 rounded-xl p-5 hover:border-blue-600 hover:shadow-lg transition duration-300"
            >

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold">

                  {index + 1}

                </div>

                <div>

                  <p className="text-sm text-gray-500">
                    Module {index + 1}
                  </p>

                  <h3 className="text-lg font-semibold text-gray-800">
                    {topic}
                  </h3>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>
    </FadeIn>
  );
}

export default CourseSyllabus;