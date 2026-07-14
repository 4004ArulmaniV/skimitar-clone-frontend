import {
  GraduationCap,
  Clock3,
  CheckCircle,
  Search,
} from "lucide-react";

import { motion } from "framer-motion";

import EnrollmentTable from "./EnrollmentTable";

function EnrollmentPage({
  enrollments,
  search,
  setSearch,
  handleDelete,
  handleStatusUpdate,
}) {

  // Search Filter
  const filteredEnrollments = enrollments.filter((item) => {

    const keyword = search.toLowerCase();

    return (
      item.name.toLowerCase().includes(keyword) ||
      item.email.toLowerCase().includes(keyword) ||
      item.phone.toLowerCase().includes(keyword) ||
      item.course.toLowerCase().includes(keyword) ||
      item.qualification.toLowerCase().includes(keyword) ||
      item.status.toLowerCase().includes(keyword)
    );

  });

  // Statistics
  const totalEnrollments = enrollments.length;

  const pendingCount = enrollments.filter(
    (item) => item.status === "Pending"
  ).length;

  const approvedCount = enrollments.filter(
    (item) => item.status === "Approved"
  ).length;

  return (
    <div className="space-y-6">

      {/* Header */}

      <div className="flex flex-col md:flex-row justify-between items-center gap-4">

        <div>

          <h1 className="text-3xl font-bold text-slate-800">
            Enrollment Management
          </h1>

          <p className="text-gray-500 mt-1">
            Manage student enrollments and training requests.
          </p>

        </div>

      </div>

      {/* Statistics */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">

        {/* Total */}

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white rounded-xl shadow p-5 border-l-4 border-blue-600"
        >

          <div className="flex justify-between items-center">

            <div>

              <p className="text-gray-500 text-sm">
                Total Enrollments
              </p>

              <h2 className="text-3xl font-bold mt-2">
                {totalEnrollments}
              </h2>

            </div>

            <GraduationCap
              size={34}
              className="text-blue-600"
            />

          </div>

        </motion.div>

        {/* Pending */}

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white rounded-xl shadow p-5 border-l-4 border-yellow-500"
        >

          <div className="flex justify-between items-center">

            <div>

              <p className="text-gray-500 text-sm">
                Pending
              </p>

              <h2 className="text-3xl font-bold mt-2">
                {pendingCount}
              </h2>

            </div>

            <Clock3
              size={34}
              className="text-yellow-500"
            />

          </div>

        </motion.div>

        {/* Approved */}

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white rounded-xl shadow p-5 border-l-4 border-green-600"
        >

          <div className="flex justify-between items-center">

            <div>

              <p className="text-gray-500 text-sm">
                Approved
              </p>

              <h2 className="text-3xl font-bold mt-2">
                {approvedCount}
              </h2>

            </div>

            <CheckCircle
              size={34}
              className="text-green-600"
            />

          </div>

        </motion.div>

      </div>

      {/* Search */}

      <div className="bg-white rounded-xl shadow p-4">

        <div className="relative">

          <Search
            size={18}
            className="absolute left-4 top-3 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search by name, email, phone, course..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border rounded-lg pl-11 pr-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />

        </div>

      </div>

      {/* Table */}

      <div className="bg-white rounded-xl shadow overflow-hidden">

        <EnrollmentTable
          enrollments={filteredEnrollments}
          handleDelete={handleDelete}
          handleStatusUpdate={handleStatusUpdate}
        />

      </div>

    </div>
  );
}

export default EnrollmentPage;