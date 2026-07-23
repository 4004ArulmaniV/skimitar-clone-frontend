import { useState } from "react";
import FadeIn from "../FadeIn";
import CourseCard from "./CourseCard";
import courses from "./CourseData";
import EnrollModal from "../Enrollment/EnrollModal";

import {
  GraduationCap,
  Cpu,
  Award,
  Briefcase,
} from "lucide-react";

const benefits = [
  {
    title: "Industry Expert Mentors",
    description:
      "Learn from experienced professionals with real industrial knowledge.",
    icon: GraduationCap,
  },
  {
    title: "Real-Time Projects",
    description:
      "Work on practical projects based on current industry requirements.",
    icon: Cpu,
  },
  {
    title: "Certification",
    description:
      "Receive recognized certificates after successful course completion.",
    icon: Award,
  },
  {
    title: "Career Support",
    description:
      "Get placement guidance, interview preparation and career assistance.",
    icon: Briefcase,
  },
];

function Training() {

  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <section
      id="training"
      className="py-24 bg-gray-50 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-blue-700 font-semibold uppercase tracking-wider">
              Our Training
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Professional Industrial Training Programs
            </h2>

            <div className="w-24 h-1 bg-blue-700 mx-auto mt-5 rounded-full"></div>

            <p className="text-gray-600 max-w-3xl mx-auto mt-6 text-lg leading-relaxed">
              Gain industry-ready skills through hands-on training,
              real-world projects and expert mentorship. Our programs help
              students and professionals build successful careers in industrial
              automation and modern technologies.
            </p>
          </div>
        </FadeIn>

        {/* Training Benefits */}

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <FadeIn key={index}>
                <div className="bg-white rounded-2xl shadow-lg p-8 text-center min-h-[260px] flex flex-col items-center justify-center hover:-translate-y-2 hover:shadow-2xl transition">
                  <div className="bg-blue-100 text-blue-700 p-4 rounded-full mb-5">
                    <Icon size={32} />
                  </div>

                  <h3 className="text-xl font-bold mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-7">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Courses */}

        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">
              Explore Our Courses
            </h2>

            <p className="text-gray-600 mt-4">
              Choose from automation, software and digital technology programs.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {courses.map((course) => (
            <FadeIn key={course.id}>
              <CourseCard
                course={course}
                onEnroll={() => setSelectedCourse(course)}
              />
            </FadeIn>
          ))}
        </div>

        {/* Single Shared Modal */}

        <EnrollModal
          isOpen={!!selectedCourse}
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
        />

      </div>
    </section>
  );
}

export default Training;