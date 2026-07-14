import {
  LayoutDashboard,
  Mail,
  GraduationCap,
  LogOut,
} from "lucide-react";

function Sidebar({
  activeTab,
  setActiveTab,
  handleLogout,
}) {
  return (
    <aside
      className="
        w-72
        min-h-screen
        p-6
        bg-white
        dark:bg-slate-900
        border-r
        border-gray-200
        dark:border-slate-800
        transition-colors
        duration-300
      "
    >
      <h1
        className="
          text-3xl
          font-bold
          mb-10
          text-slate-800
          dark:text-white
        "
      >
        Admin Panel
      </h1>

      <nav className="space-y-2">
        <button
          onClick={() => setActiveTab("dashboard")}
          className={`
            w-full
            flex
            items-center
            gap-3
            px-4
            py-3
            rounded-lg
            transition-all
            ${
              activeTab === "dashboard"
                ? "bg-blue-600 text-white"
                : "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            }
          `}
        >
          <LayoutDashboard size={20} />
          Dashboard
        </button>

        <button
          onClick={() => setActiveTab("contacts")}
          className={`
            w-full
            flex
            items-center
            gap-3
            px-4
            py-3
            rounded-lg
            transition-all
            ${
              activeTab === "contacts"
                ? "bg-blue-600 text-white"
                : "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            }
          `}
        >
          <Mail size={20} />
          Contacts
        </button>

        <button
          onClick={() => setActiveTab("enrollments")}
          className={`
            w-full
            flex
            items-center
            gap-3
            px-4
            py-3
            rounded-lg
            transition-all
            ${
              activeTab === "enrollments"
                ? "bg-blue-600 text-white"
                : "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            }
          `}
        >
          <GraduationCap size={20} />
          Enrollments
        </button>
      </nav>

      <button
        onClick={handleLogout}
        className="
          mt-12
          flex
          items-center
          gap-3
          w-full
          px-4
          py-3
          rounded-lg
          bg-red-600
          text-white
          hover:bg-red-700
          transition
        "
      >
        <LogOut size={20} />
        Logout
      </button>
    </aside>
  );
}

export default Sidebar;