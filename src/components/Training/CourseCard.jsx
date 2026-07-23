import { Clock, Monitor } from "lucide-react";
import { Link } from "react-router-dom";
import CourseBadge from "./CourseBadge";

const CourseCard = ({ course, onEnroll }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">

      <div className="relative overflow-hidden">

        <img
          src={course.image}
          alt={course.title}
          className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute top-4 left-4">
          <CourseBadge level={course.level} />
        </div>

      </div>

      <div className="p-6">

        <h3 className="text-2xl font-bold mb-3">
          {course.title}
        </h3>

        <p className="text-gray-600 mb-5">
          {course.description}
        </p>

        <div className="flex justify-between text-gray-500 text-sm mb-6">

          <div className="flex items-center gap-2">
            <Clock size={18} />
            {course.duration}
          </div>

          <div className="flex items-center gap-2">
            <Monitor size={18} />
            {course.mode}
          </div>

        </div>

        <div className="flex gap-3">

          <Link
            to={`/courses/${course.id}`}
            className="flex-1 border border-blue-700 text-blue-700 rounded-lg py-3 text-center hover:bg-blue-700 hover:text-white transition"
          >
            View Details
          </Link>

          <button
            onClick={onEnroll}
            className="flex-1 bg-blue-600 text-white rounded-lg py-2 font-semibold hover:bg-blue-700 transition"
          >
            Enroll Now
          </button>

        </div>

      </div>

    </div>
  );
};

export default CourseCard;