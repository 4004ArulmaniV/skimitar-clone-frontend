import { Link } from "react-router-dom";
import { ArrowRight, Clock3 } from "lucide-react";
import FadeIn from "../FadeIn";
import CourseBadge from "../Training/CourseBadge";

function RelatedCourses({ currentCourse, courses }) {
  const relatedCourses = courses
    .filter((course) => course.id !== currentCourse.id)
    .slice(0, 3);

  return (
    <FadeIn>
      <section className="mt-6">

        {/* Heading */}

        <div className="mb-10">

          <h2 className="text-3xl font-bold">
            Related Courses
          </h2>

          <p className="text-gray-600 mt-2">
            Explore more professional training programs.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {relatedCourses.map((course) => (

            <div
              key={course.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 group"
            >

              {/* Image */}

              <div className="relative overflow-hidden">

                <img
                  src={course.image}
                  alt={course.title}
                  className="h-56 w-full object-cover group-hover:scale-110 transition duration-500"
                />

                <div className="absolute top-4 left-4">

                  <CourseBadge level={course.level} />

                </div>

              </div>

              {/* Body */}

              <div className="p-6">

                <h3 className="text-xl font-bold mb-3">
                  {course.title}
                </h3>

                <p className="text-gray-600 line-clamp-3">
                  {course.description}
                </p>

                <div className="flex items-center gap-2 mt-5 text-gray-500">

                  <Clock3 size={18} />

                  {course.duration}

                </div>

                <Link
                  to={`/courses/${course.id}`}
                  className="mt-6 inline-flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-900 transition"
                >
                  View Details

                  <ArrowRight size={18} />

                </Link>

              </div>

            </div>

          ))}

        </div>

      </section>
    </FadeIn>
  );
}

export default RelatedCourses;