import {
  X,
  Mail,
  MessageSquare,
  GraduationCap,
  Save,
} from "lucide-react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import { useState } from "react";


function AccountSettingsModal({
  show,
  setShow,
}) {


  const [settings,setSettings] = useState({

    emailNotification:true,

    contactAlert:true,

    enrollmentAlert:true,

  });



  const handleChange = (key)=>{


    setSettings((prev)=>({

      ...prev,

      [key]:!prev[key]

    }));


  };



  const handleSave = ()=>{


    console.log(
      "Saved Settings:",
      settings
    );


    alert(
      "Settings saved successfully!"
    );


    setShow(false);


  };




  return (


    <AnimatePresence>


    {
      show && (


      <motion.div

        initial={{
          opacity:0
        }}

        animate={{
          opacity:1
        }}

        exit={{
          opacity:0
        }}

        className="
          fixed
          inset-0
          bg-black/40
          backdrop-blur-sm
          flex
          items-center
          justify-center
          z-[100]
        "

      >



        <motion.div


          initial={{
            scale:0.8,
            y:40
          }}

          animate={{
            scale:1,
            y:0
          }}

          exit={{
            scale:0.8,
            y:40
          }}


          className="
            bg-white
            w-[90%]
            max-w-md
            rounded-2xl
            shadow-2xl
            overflow-hidden
          "

        >



          {/* Header */}


          <div className="
            flex
            justify-between
            items-center
            p-5
            border-b
          ">


            <div>


              <h2 className="
                text-xl
                font-bold
                text-gray-800
              ">

                Account Settings

              </h2>


              <p className="
                text-sm
                text-gray-500
              ">

                Manage your preferences

              </p>


            </div>




            <button

              onClick={()=>setShow(false)}

              className="
                p-2
                rounded-full
                hover:bg-gray-100
              "

            >

              <X size={20}/>

            </button>


          </div>





          {/* Settings */}



          <div className="
            p-6
            space-y-5
          ">



            {/* Email */}


            <SettingItem

              icon={<Mail size={22}/>}

              title="Email Notifications"

              description="Receive important admin emails"

              enabled={
                settings.emailNotification
              }

              onClick={()=>
                handleChange(
                  "emailNotification"
                )
              }

            />




            {/* Contact */}


            <SettingItem

              icon={
                <MessageSquare size={22}/>
              }

              title="Contact Alerts"

              description="New contact enquiry alerts"

              enabled={
                settings.contactAlert
              }

              onClick={()=>
                handleChange(
                  "contactAlert"
                )
              }

            />





            {/* Enrollment */}


            <SettingItem


              icon={
                <GraduationCap size={22}/>
              }


              title="Enrollment Alerts"


              description="New course enrollment alerts"


              enabled={
                settings.enrollmentAlert
              }


              onClick={()=>
                handleChange(
                  "enrollmentAlert"
                )
              }


            />



          </div>





          {/* Footer */}



          <div className="
            px-6
            pb-6
          ">


            <button

              onClick={handleSave}


              className="
                w-full
                flex
                justify-center
                items-center
                gap-2
                bg-blue-600
                text-white
                py-3
                rounded-xl
                hover:bg-blue-700
              "

            >

              <Save size={18}/>

              Save Settings

            </button>


          </div>



        </motion.div>



      </motion.div>


      )
    }


    </AnimatePresence>


  );

}




function SettingItem({

  icon,

  title,

  description,

  enabled,

  onClick,

}){


return (

<div className="
 flex
 items-center
 justify-between
 bg-gray-50
 p-4
 rounded-xl
">


<div className="
 flex
 items-center
 gap-3
">


<div className="
 text-blue-600
">

{icon}

</div>


<div>

<p className="
font-semibold
">

{title}

</p>


<p className="
text-xs
text-gray-500
">

{description}

</p>


</div>


</div>




<button

onClick={onClick}

className={`
w-12
h-6
rounded-full
transition
relative
${
enabled
?
"bg-blue-600"
:
"bg-gray-300"
}
`}


>


<span

className={`
absolute
top-1
h-4
w-4
bg-white
rounded-full
transition
${
enabled
?
"left-7"
:
"left-1"
}
`}

/>


</button>


</div>

);


}



export default AccountSettingsModal;