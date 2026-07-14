import { useEffect, useRef, useState } from "react";
import {
  User,
  Settings,
  Lock,
  Moon,
  LogOut,
  ChevronDown,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import ProfileModal from "./Modals/ProfileModal";
import AccountSettingsModal from "./Modals/AccountSettingsModal";
import ChangePasswordModal from "./Modals/ChangePasswordModal";
import AppearanceModal from "./Modals/AppearanceModal";

function ProfileDropdown({ handleLogout }) {

  const [open, setOpen] = useState(false);

  const [showProfile, setShowProfile] = useState(false);
  
  const [showSettings,setShowSettings] = useState(false);

  const [showPassword,setShowPassword] = useState(false);

  const [showAppearance,setShowAppearance] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  return (
    <div
      className="relative"
      ref={dropdownRef}
    >
      {/* Profile Button */}

      <button
        onClick={() => setOpen(!open)}
        className="
          flex
          items-center
          gap-3
          rounded-xl
          px-3
          py-2
          hover:bg-gray-100
          transition
        "
      >
        {/* Avatar */}

        <div className="relative">

          <div
            className="
              h-11
              w-11
              rounded-full
              bg-gradient-to-r
              from-blue-600
              to-purple-600
              text-white
              font-bold
              flex
              items-center
              justify-center
            "
          >
            AV
          </div>

          {/* Online Status */}

          <span
            className="
              absolute
              bottom-0
              right-0
              h-3
              w-3
              rounded-full
              bg-green-500
              border-2
              border-white
            "
          />
        </div>

        {/* User Info */}

        <div className="hidden md:block text-left">

          <h3 className="font-semibold text-slate-800">
            Arul Venkatesh
          </h3>

          <p className="text-xs text-gray-500">
            Administrator
          </p>

        </div>

        <ChevronDown
          size={18}
          className={`transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}

      <AnimatePresence>

        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: -10,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -10,
              scale: 0.95,
            }}
            transition={{
              duration: 0.2,
            }}
            className="
              absolute
              right-0
              mt-3
              w-72
              rounded-2xl
              bg-white
              shadow-2xl
              border
              overflow-hidden
              z-50
            "
          >
            {/* Header */}

            <div className="p-6 text-center border-b">

              <div
                className="
                  h-16
                  w-16
                  rounded-full
                  mx-auto
                  bg-gradient-to-r
                  from-blue-600
                  to-purple-600
                  text-white
                  text-xl
                  font-bold
                  flex
                  items-center
                  justify-center
                "
              >
                AV
              </div>

              <h2 className="mt-3 font-bold text-lg">
                Arul Venkatesh
              </h2>

              <p className="text-gray-500 text-sm">
                Administrator
              </p>

              <p className="text-xs text-gray-400 mt-1">
                Online
              </p>

            </div>

            {/* Menu */}

            <div className="p-2">

              <button

  onClick={()=>{
    setShowProfile(true);
    setOpen(false);
  }}

  className="
    w-full
    flex
    items-center
    gap-3
    px-4
    py-3
    rounded-lg
    hover:bg-gray-100
    transition
  "

>

  <User size={18} />

  My Profile

</button>

              <button
onClick={()=>{
  setShowSettings(true);
  setOpen(false);
}}
className="
w-full
flex
items-center
gap-3
px-4
py-3
rounded-lg
hover:bg-gray-100
transition
"
>

<Settings size={18}/>

Account Settings

</button>

              <button

onClick={()=>{

setShowPassword(true);

setOpen(false);

}}

className="
w-full
flex
items-center
gap-3
px-4
py-3
rounded-lg
hover:bg-gray-100
transition
"

>

<Lock size={18}/>

Change Password

</button>

              <button

onClick={()=>{

setShowAppearance(true);

setOpen(false);

}}

className="
w-full
flex
items-center
gap-3
px-4
py-3
rounded-lg
hover:bg-gray-100
transition
"

>

<Moon size={18}/>

Appearance

</button>

              <hr className="my-2" />

              <button
                onClick={handleLogout}
                className="
                  w-full
                  flex
                  items-center
                  gap-3
                  px-4
                  py-3
                  rounded-lg
                  text-red-600
                  hover:bg-red-50
                  transition
                "
              >
                <LogOut size={18} />

                Logout
              </button>

            </div>
          </motion.div>
        )}

      </AnimatePresence>
    <ProfileModal
  show={showProfile}
  setShow={setShowProfile}
/>
   <AccountSettingsModal
show={showSettings}
setShow={setShowSettings}
/>
   <ChangePasswordModal

show={showPassword}

setShow={setShowPassword}

/>
    <AppearanceModal

show={showAppearance}

setShow={setShowAppearance}

/>
    </div>
  );
}

export default ProfileDropdown;