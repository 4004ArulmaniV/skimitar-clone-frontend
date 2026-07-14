import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Sidebar from "../components/Admin/Sidebar";
import Topbar from "../components/Admin/Topbar";
import DashboardCards from "../components/Admin/DashboardCards";
import ContactTable from "../components/Admin/ContactTable";
import EnrollmentTable from "../components/Admin/EnrollmentTable";
import ContactPage from "../components/Admin/ContactPage";
import EnrollmentPage from "../components/Admin/EnrollmentPage";

function Admin() {

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  // ==========================
  // States
  // ==========================

  const [contacts, setContacts] = useState([]);

  const [enrollments, setEnrollments] = useState([]);

  const [activeTab, setActiveTab] = useState("dashboard");

  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(true);

  // ==========================
  // Fetch Dashboard Data
  // ==========================

  useEffect(() => {

    if (!token) {
      navigate("/admin/login");
      return;
    }

    const fetchData = async () => {

      try {

        // Contacts

        const contactResponse = await fetch(
          "http://localhost:5000/api/contact",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (contactResponse.status === 401) {

          localStorage.removeItem("token");

          navigate("/admin/login");

          return;

        }

        const contactData =
          await contactResponse.json();

        if (contactData.success) {

          setContacts(contactData.data);

        }

        // Enrollments

        const enrollmentResponse =
          await fetch(
            "http://localhost:5000/api/enrollments",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

        const enrollmentData =
          await enrollmentResponse.json();

        if (enrollmentData.success) {

          setEnrollments(
            enrollmentData.data
          );

        }

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);

      }

    };

    fetchData();

  }, [navigate, token]);

  // ==========================
  // Logout
  // ==========================

  const handleLogout = () => {

    const confirmLogout = window.confirm(
      "Are you sure you want to logout?"
    );

    if (!confirmLogout) return;

    localStorage.removeItem("token");

    navigate("/admin/login");

  };

  // ==========================
  // Mark Contact Read
  // ==========================

  const handleMarkAsRead = async (id) => {

    try {

      const response = await fetch(

        `http://localhost:5000/api/contact/${id}/read`,

        {
          method: "PUT",

          headers: {
            Authorization: `Bearer ${token}`,
          },

        }

      );

      const data = await response.json();

      if (data.success) {

        setContacts((prev) =>

          prev.map((item) =>

            item._id === id
              ? {
                  ...item,
                  isRead: true,
                }
              : item

          )

        );

      }

    } catch (error) {

      console.error(error);

    }

  };

  // ==========================
  // Delete Contact
  // ==========================

  const handleDelete = async (id) => {

    const confirmDelete =
      window.confirm(
        "Delete this contact?"
      );

    if (!confirmDelete) return;

    try {

      const response = await fetch(

        `http://localhost:5000/api/contact/${id}`,

        {
          method: "DELETE",

          headers: {
            Authorization: `Bearer ${token}`,
          },

        }

      );

      const data = await response.json();

      if (data.success) {

        setContacts((prev) =>

          prev.filter(

            (item) => item._id !== id

          )

        );

      }

    } catch (error) {

      console.error(error);

    }

  };
    // ==========================
  // Delete Enrollment
  // ==========================

  const handleDeleteEnrollment = async (id) => {

    const confirmDelete = window.confirm(
      "Delete this enrollment?"
    );

    if (!confirmDelete) return;

    try {

      const response = await fetch(

        `http://localhost:5000/api/enrollments/${id}`,

        {
          method: "DELETE",

          headers: {
            Authorization: `Bearer ${token}`,
          },

        }

      );

      const data = await response.json();

      if (data.success) {

        setEnrollments((prev) =>

          prev.filter(
            (item) => item._id !== id
          )

        );

      }

    } catch (error) {

      console.error(error);

    }

  };

  // ==========================
  // Update Enrollment Status
  // ==========================

  const handleStatusUpdate = async (
    id,
    status
  ) => {

    try {

      const response = await fetch(

        `http://localhost:5000/api/enrollments/${id}/status`,

        {

          method: "PUT",

          headers: {

            "Content-Type": "application/json",

            Authorization: `Bearer ${token}`,

          },

          body: JSON.stringify({
            status,
          }),

        }

      );

      const data = await response.json();

      if (data.success) {

        setEnrollments((prev) =>

          prev.map((item) =>

            item._id === id
              ? {
                  ...item,
                  status,
                }
              : item

          )

        );

      }

    } catch (error) {

      console.error(error);

    }

  };

  const handleMarkAllRead = async () => {

try {


const unreadContacts =
contacts.filter(
(contact)=>!contact.isRead
);


const unreadEnrollments =
enrollments.filter(
(enrollment)=>!enrollment.isRead
);


await Promise.all([

...unreadContacts.map(contact=>

axios.put(
`http://localhost:5000/api/contact/${contact._id}/read`,
{},
{
headers:{
Authorization:`Bearer ${token}`
}
}
)

),


...unreadEnrollments.map(enrollment=>

axios.put(
`http://localhost:5000/api/enrollments/${enrollment._id}/read`,
{},
{
headers:{
Authorization:`Bearer ${token}`
}
}
)

)

]);



setContacts(prev=>

prev.map(contact=>(

{
...contact,
isRead:true
}

))

);



}
catch(error){

console.log(
"Mark all read error:",
error
);

}


};

  // ==========================
  // Dashboard Statistics
  // ==========================

  const totalContacts = contacts.length;

  const totalEnrollments =
    enrollments.length;

  const unreadContacts =
    contacts.filter(
      (contact) => !contact.isRead
    ).length;

  const todayContacts =
    contacts.filter((contact) => {

      const today = new Date();

      const created =
        new Date(contact.createdAt);

      return (
        today.toDateString() ===
        created.toDateString()
      );

    });

  const weeklyContacts =
    contacts.filter((contact) => {

      const diff =

        (new Date() -
          new Date(contact.createdAt)) /

        (1000 * 60 * 60 * 24);

      return diff <= 7;

    });

  // ==========================
  // Search Filter
  // ==========================

  const filteredContacts =
    contacts.filter(

      (contact) =>

        contact.name
          .toLowerCase()
          .includes(search.toLowerCase())

        ||

        contact.email
          .toLowerCase()
          .includes(search.toLowerCase())

    );

  // ==========================
  // Export CSV
  // ==========================

  const exportToCSV = () => {

    const headers = [

      "Name",
      "Email",
      "Phone",
      "Message",
      "Status",
      "Date",

    ];

    const rows =
      filteredContacts.map(

        (contact) => [

          contact.name,

          contact.email,

          contact.phone,

          contact.message,

          contact.isRead
            ? "Read"
            : "Unread",

          new Date(
            contact.createdAt
          ).toLocaleDateString(),

        ]

      );

    const csv =

      [headers, ...rows]
        .map((row) => row.join(","))
        .join("\n");

    const blob = new Blob(

      [csv],

      {
        type:
          "text/csv;charset=utf-8;",
      }

    );

    const url =
      window.URL.createObjectURL(blob);

    const link =
      document.createElement("a");

    link.href = url;

    link.download = "contacts.csv";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

  };

  // ==========================
  // Loading
  // ==========================

  if (loading) {

    return (

      <div className="text-center py-20 text-2xl">

        Loading Dashboard...

      </div>

    );

  }
    // ==========================
  // Render Content
  // ==========================

  const renderContent = () => {

    switch (activeTab) {

      // ==========================
      // Dashboard
      // ==========================

      case "dashboard":

  return (

    <DashboardCards
  totalContacts={totalContacts}
  totalEnrollments={totalEnrollments}
  todayContacts={todayContacts.length}
  weeklyContacts={weeklyContacts.length}
  unreadContacts={unreadContacts}
  setActiveTab={setActiveTab}
/>

  );

      // ==========================
      // Contacts
      // ==========================

      case "contacts":

  return (

    <ContactPage
      contacts={filteredContacts}
      search={search}
      setSearch={setSearch}
      exportToCSV={exportToCSV}
      handleDelete={handleDelete}
      handleMarkAsRead={handleMarkAsRead}
    />

  );

      // ==========================
      // Enrollments
      // ==========================

      case "enrollments":

  return (

    <EnrollmentPage
      enrollments={enrollments}
      search={search}
      setSearch={setSearch}
      handleDelete={handleDeleteEnrollment}
      handleStatusUpdate={handleStatusUpdate}
    />

  );

      // ==========================
      // Default
      // ==========================

      default:

  return (

    <DashboardCards

      totalContacts={totalContacts}

      totalEnrollments={totalEnrollments}

      todayContacts={todayContacts.length}

      weeklyContacts={weeklyContacts.length}

      unreadContacts={unreadContacts}

    />

  );

    }

  };
    // ==========================
  // Main UI
  // ==========================

  return (

    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}

      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        handleLogout={handleLogout}
      />

      {/* Main Content */}

      <div className="flex-1">

        <Topbar
        activeTab={activeTab}
        contacts={contacts}
        enrollments={enrollments}
        handleMarkAllRead={handleMarkAllRead}
        handleLogout={handleLogout}
        />

        <main className="p-6">

          {renderContent()}

        </main>

      </div>

    </div>

  );

}

export default Admin;