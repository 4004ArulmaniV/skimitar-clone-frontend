import { X } from "lucide-react";
import { useEffect } from "react";
import EnrollForm from "./EnrollForm";

function EnrollModal({ isOpen, onClose, course }) {
  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl shadow-2xl w-full max-w-xl overflow-hidden animate-[fadeIn_.3s_ease]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}

        <div className="bg-blue-700 text-white px-8 py-6 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold">
              Enroll Now
            </h2>

            <p className="text-blue-100 mt-2">
              {course.title}
            </p>
          </div>

          <button
            onClick={onClose}
            className="hover:bg-white/20 rounded-full p-2 transition"
          >
            <X size={28} />
          </button>
        </div>

        {/* Form */}

        <div className="p-8">
          <EnrollForm
            course={course}
            onClose={onClose}
          />
        </div>
      </div>
    </div>
  );
}

export default EnrollModal;