import { X, User, Mail, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";


function ProfileModal({
  show,
  setShow,
}) {


  return (

    <AnimatePresence>

      {
        show && (

          <motion.div

            initial={{
              opacity:0,
            }}

            animate={{
              opacity:1,
            }}

            exit={{
              opacity:0,
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
                y:30,
              }}

              animate={{
                scale:1,
                y:0,
              }}

              exit={{
                scale:0.8,
                y:30,
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
                bg-gradient-to-r
                from-blue-600
                to-purple-600
                p-6
                text-white
                relative
                text-center
              ">


                <button

                  onClick={()=>setShow(false)}

                  className="
                    absolute
                    right-4
                    top-4
                    hover:bg-white/20
                    rounded-full
                    p-2
                  "

                >

                  <X size={20}/>

                </button>



                <div className="
                  w-20
                  h-20
                  rounded-full
                  bg-white
                  text-blue-600
                  mx-auto
                  flex
                  items-center
                  justify-center
                  text-2xl
                  font-bold
                  shadow-lg
                ">

                  AV

                </div>



                <h2 className="
                  text-2xl
                  font-bold
                  mt-4
                ">

                  Arul Venkatesh

                </h2>


                <p className="
                  text-blue-100
                ">

                  System Administrator

                </p>


              </div>




              {/* Body */}


              <div className="
                p-6
                space-y-4
              ">


                {/* Name */}


                <div className="
                  flex
                  items-center
                  gap-4
                  bg-gray-50
                  p-4
                  rounded-xl
                ">

                  <User
                    className="text-blue-600"
                    size={22}
                  />


                  <div>

                    <p className="
                      text-sm
                      text-gray-500
                    ">

                      Full Name

                    </p>


                    <p className="
                      font-semibold
                    ">

                      Arul Venkatesh 

                    </p>


                  </div>


                </div>




                {/* Email */}


                <div className="
                  flex
                  items-center
                  gap-4
                  bg-gray-50
                  p-4
                  rounded-xl
                ">


                  <Mail
                    className="text-blue-600"
                    size={22}
                  />


                  <div>

                    <p className="
                      text-sm
                      text-gray-500
                    ">

                      Email

                    </p>


                    <p className="
                      font-semibold
                    ">

                      admin@skimitar.com

                    </p>


                  </div>


                </div>




                {/* Role */}


                <div className="
                  flex
                  items-center
                  gap-4
                  bg-gray-50
                  p-4
                  rounded-xl
                ">


                  <ShieldCheck

                    className="text-green-600"

                    size={22}

                  />


                  <div>


                    <p className="
                      text-sm
                      text-gray-500
                    ">

                      Role

                    </p>


                    <p className="
                      font-semibold
                    ">

                      Administrator

                    </p>


                  </div>


                </div>


              </div>




              {/* Footer */}


              <div className="
                px-6
                pb-6
              ">


                <button

                  onClick={()=>setShow(false)}

                  className="
                    w-full
                    bg-blue-600
                    text-white
                    py-3
                    rounded-xl
                    hover:bg-blue-700
                    transition
                  "

                >

                  Close

                </button>


              </div>



            </motion.div>


          </motion.div>

        )
      }


    </AnimatePresence>

  );

}


export default ProfileModal;