import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import API_BASE_URL from "../../config/api";

function EnrollForm({ course, onClose }) {
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    qualification: "",
    mode: course.mode,
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrors = {};

    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[6-9]\d{9}$/;

    if (!nameRegex.test(formData.name)) {
      newErrors.name = "Name should contain only letters";
    }

    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter valid email address";
    }

    if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Enter valid 10 digit mobile number";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await fetch(
        `${API_BASE_URL}/enrollments`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            qualification: formData.qualification,
            mode: formData.mode,
            course: course.title,
            message: formData.message,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Enrollment failed"
        );
      }

      setSuccess(true);

      setFormData({
        name: "",
        email: "",
        phone: "",
        qualification: "",
        mode: course.mode,
        message: "",
      });
    } catch (error) {
      alert(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="text-center py-8">
        <CheckCircle2
          size={70}
          className="mx-auto text-green-600"
        />

        <h2 className="text-2xl font-bold mt-5">
          Enrollment Successful!
        </h2>

        <p className="text-gray-600 mt-3">
          Thank you for your interest in
          <strong> {course.title}</strong>.
          <br />
          Our team will contact you soon.
        </p>

        <button
          onClick={onClose}
          className="mt-6 bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-800 transition"
        >
          Close
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      {/* Name + Email */}

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-semibold">
            Full Name
          </label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="w-full border rounded-lg px-4 py-2.5 mt-1"
            required
          />

          {errors.name && (
            <p className="text-red-600 text-sm">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label className="text-sm font-semibold">
            Email
          </label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@gmail.com"
            className="w-full border rounded-lg px-4 py-2.5 mt-1"
            required
          />

          {errors.email && (
            <p className="text-red-600 text-sm">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      {/* Phone + Qualification */}

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-semibold">
            Phone Number
          </label>

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            maxLength={10}
            onChange={(e) =>
              setFormData({
                ...formData,
                phone: e.target.value.replace(/\D/g, ""),
              })
            }
            placeholder="Enter 10 digit mobile number"
            className="w-full border rounded-lg px-4 py-2.5 mt-1"
            required
          />

          {errors.phone && (
            <p className="text-red-600 text-sm">
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label className="text-sm font-semibold">
            Qualification
          </label>

          <input
            type="text"
            name="qualification"
            value={formData.qualification}
            onChange={handleChange}
            placeholder="Ex: BE, B.Tech, Diploma"
            className="w-full border rounded-lg px-4 py-2.5 mt-1"
            required
          />
        </div>
      </div>

      {/* Mode */}

      <div>
        <label className="text-sm font-semibold">
          Preferred Mode
        </label>

        <select
          name="mode"
          value={formData.mode}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-2.5 mt-1"
        >
          <option>Offline</option>
          <option>Online</option>
          <option>Hybrid</option>
        </select>
      </div>

      {/* Message */}

      <div>
        <label className="text-sm font-semibold">
          Message
        </label>

        <textarea
          rows="3"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Any additional information..."
          className="w-full border rounded-lg px-4 py-2.5 mt-1 resize-none"
        />
      </div>

      {/* Buttons */}

      <div className="flex gap-3">
        <button
          type="button"
          onClick={onClose}
          disabled={isSubmitting}
          className="flex-1 border rounded-lg py-3 font-semibold"
        >
          Cancel
        </button>

        <button
          type="submit"
          disabled={isSubmitting}
          className="flex-1 bg-blue-700 text-white rounded-lg py-3 font-semibold hover:bg-blue-800 transition flex justify-center items-center gap-2 disabled:opacity-70"
        >
          {isSubmitting ? (
            <>
              <Loader2
                size={20}
                className="animate-spin"
              />
              Submitting...
            </>
          ) : (
            "Enroll Now"
          )}
        </button>
      </div>
    </form>
  );
}

export default EnrollForm;