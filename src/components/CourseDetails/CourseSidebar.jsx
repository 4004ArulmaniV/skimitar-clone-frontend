import { Link } from "react-router-dom";
import {
  Clock3,
  GraduationCap,
  Monitor,
  Globe,
  Award,
  Users,
} from "lucide-react";
import { useState } from "react";
import EnrollModal from "../Enrollment/EnrollModal";

function CourseSidebar({ course }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="sticky top-28">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">

          {/* Header */}

          <div className="bg-blue-700 text-white text-center py-5">
            <h3 className="text-2xl font-bold">
              Course Details
            </h3>
          </div>

          {/* Content */}

          <div className="p-6 space-y-5">

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock3
                  size={20}
                  className="text-blue-700"
                />
                <span>Duration</span>
              </div>

              <strong>{course.duration}</strong>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <GraduationCap
                  size={20}
                  className="text-blue-700"
                />
                <span>Level</span>
              </div>

              <strong>{course.level}</strong>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Monitor
                  size={20}
                  className="text-blue-700"
                />
                <span>Mode</span>
              </div>

              <strong>{course.mode}</strong>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Globe
                  size={20}
                  className="text-blue-700"
                />
                <span>Language</span>
              </div>

              <strong>{course.language}</strong>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Award
                  size={20}
                  className="text-blue-700"
                />
                <span>Certificate</span>
              </div>

              <strong>{course.certificate}</strong>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Users
                  size={20}
                  className="text-blue-700"
                />
                <span>Seats</span>
              </div>

              <strong>{course.seats}</strong>
            </div>

            {/* Enroll Button */}

            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full bg-blue-700 text-white py-3 rounded-xl font-semibold hover:bg-blue-800 transition duration-300"
            >
              Enroll Now
            </button>

            {/* Back Button */}

            <Link
              to="/training"
              className="block text-center text-blue-700 font-medium hover:text-blue-900 transition"
            >
              ← Back to Courses
            </Link>

          </div>
        </div>
      </div>

      {/* Enrollment Modal */}

      <EnrollModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        course={course}
      />
    </>
  );
}

export default CourseSidebar;