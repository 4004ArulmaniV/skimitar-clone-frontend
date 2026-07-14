import { Users, MailOpen, CalendarDays, Download, Search } from "lucide-react";
import { motion } from "framer-motion";
import ContactTable from "./ContactTable";

function ContactPage({
  contacts,
  search,
  setSearch,
  exportToCSV,
  handleDelete,
  handleMarkAsRead,
}) {
  // Statistics
  const totalContacts = contacts.length;

  const unreadContacts = contacts.filter(
    (contact) => !contact.isRead
  ).length;

  const todayContacts = contacts.filter((contact) => {
    const today = new Date();

    return (
      new Date(contact.createdAt).toDateString() ===
      today.toDateString()
    );
  }).length;

  return (
    <div className="space-y-6">
      {/* Header */}

      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Contacts Management
          </h1>

          <p className="text-gray-500 mt-1">
            Manage customer enquiries efficiently.
          </p>
        </div>

        <button
          onClick={exportToCSV}
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-lg transition"
        >
          <Download size={18} />
          Export CSV
        </button>
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
                Total Contacts
              </p>

              <h2 className="text-3xl font-bold mt-2">
                {totalContacts}
              </h2>
            </div>

            <Users
              size={34}
              className="text-blue-600"
            />
          </div>
        </motion.div>

        {/* Unread */}

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white rounded-xl shadow p-5 border-l-4 border-red-500"
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500 text-sm">
                Unread Messages
              </p>

              <h2 className="text-3xl font-bold mt-2">
                {unreadContacts}
              </h2>
            </div>

            <MailOpen
              size={34}
              className="text-red-500"
            />
          </div>
        </motion.div>

        {/* Today */}

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white rounded-xl shadow p-5 border-l-4 border-green-600"
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500 text-sm">
                Today's Contacts
              </p>

              <h2 className="text-3xl font-bold mt-2">
                {todayContacts}
              </h2>
            </div>

            <CalendarDays
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
            placeholder="Search by name, email, phone..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="w-full border rounded-lg pl-11 pr-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Table */}

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <ContactTable
          contacts={contacts}
          handleDelete={handleDelete}
          handleMarkAsRead={handleMarkAsRead}
        />
      </div>
    </div>
  );
}

export default ContactPage;