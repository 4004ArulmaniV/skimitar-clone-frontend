import { useParams } from "react-router-dom";

import courses from "../components/Training/CourseData";

import CourseHero from "../components/CourseDetails/CourseHero";
import CourseSidebar from "../components/CourseDetails/CourseSidebar";
import CourseOverview from "../components/CourseDetails/CourseOverview";
import CourseSyllabus from "../components/CourseDetails/CourseSyllabus";
import CourseOutcomes from "../components/CourseDetails/CourseOutcomes";
import CoursePrerequisites from "../components/CourseDetails/CoursePrerequisites";
import RelatedCourses from "../components/CourseDetails/RelatedCourses";

function CourseDetails() {
  const { id } = useParams();

  const course = courses.find(
    (item) => item.id === Number(id)
  );

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">
          Course Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero Section */}
      <CourseHero course={course} />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-3 gap-10">

          {/* Left Content */}
          <div className="lg:col-span-2 space-y-12">

            <CourseOverview course={course} />

            <CourseSyllabus course={course} />

            <CourseOutcomes course={course} />

            <CoursePrerequisites course={course} />

            <RelatedCourses
              currentCourse={course}
              courses={courses}
            />

          </div>

          {/* Sidebar */}
          <div>

            <CourseSidebar course={course} />

          </div>

        </div>

      </div>

    </div>
  );
}

export default CourseDetails;