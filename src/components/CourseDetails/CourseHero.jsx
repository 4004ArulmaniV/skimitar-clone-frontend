import { Link } from "react-router-dom";
import { Clock3, Monitor, ChevronRight } from "lucide-react";
import CourseBadge from "../Training/CourseBadge";
import FadeIn from "../FadeIn";

function CourseHero({ course }) {
  return (
    <section className="relative h-[500px] overflow-hidden">

      {/* Background Image */}

      <img
        src={course.image}
        alt={course.title}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/65"></div>

      {/* Content */}

      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-6">

        <FadeIn>

          {/* Breadcrumb */}

          <div className="flex items-center gap-2 text-gray-300 text-sm mb-6">

            <Link
              to="/"
              className="hover:text-white transition"
            >
              Home
            </Link>

            <ChevronRight size={18} />

            <span><Link
              to="/training"
              className="hover:text-white transition"
            >
              Training
            </Link></span>

            <ChevronRight size={18} />

            <span className="text-white">
              {course.title}
            </span>

          </div>

          {/* Title */}

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {course.title}
          </h1>

          {/* Description */}

          <p className="text-gray-200 text-lg max-w-3xl leading-8 mb-8">
            {course.description}
          </p>

          {/* Info */}

          <div className="flex flex-wrap gap-4">

            <CourseBadge level={course.level} />

            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white">

              <Clock3 size={18} />

              {course.duration}

            </div>

            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white">

              <Monitor size={18} />

              {course.mode}

            </div>

          </div>

        </FadeIn>

      </div>

    </section>
  );
}

export default CourseHero;