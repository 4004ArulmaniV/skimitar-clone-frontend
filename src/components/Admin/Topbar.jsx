import NotificationDropdown from "./NotificationDropdown";
import ProfileDropdown from "./ProfileDropdown";


function Topbar({
  activeTab,
  contacts,
  enrollments,
  handleMarkAllRead,
  handleLogout,
}) {


  const pageTitles = {

    dashboard:
      "Dashboard",

    contacts:
      "Contact Management",

    enrollments:
      "Enrollment Management",

    services:
      "Service Management",

  };


  return (

<header className="
 bg-white
 dark:bg-slate-900
 shadow-sm
 rounded-xl
 p-5
 mb-8
 flex
 justify-between
 items-center
">

      {/* Left Section */}

      <div>


        <h1 className="
          text-3xl
          font-bold
          text-gray-800
          dark:text-white
        ">

          {
            pageTitles[activeTab]
            ||
            "Dashboard"
          }

        </h1>



        <p className="
          text-gray-500
          mt-1
        ">

          Manage your website content and enquiries

        </p>


      </div>




      {/* Right Section */}


      <div className="
        flex
        items-center
        gap-5
      ">


        {/* Notification */}


       <NotificationDropdown

       contacts={contacts}

       enrollments={enrollments}

       handleMarkAllRead={handleMarkAllRead}

       />





        {/* Admin Profile */}
        
      <ProfileDropdown
  handleLogout={handleLogout}
/>



      </div>



    </header>

  );

}


export default Topbar;