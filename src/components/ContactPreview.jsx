import {
  Mail,
  Phone,
  ArrowRight
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import FadeIn from "./FadeIn";


function ContactPreview() {


  const navigate = useNavigate();



  return (

    <section
      id="contact"
      className="py-20 bg-blue-700"
    >

      <div className="max-w-7xl mx-auto px-6">


        <FadeIn>


          <div className="
          grid
          md:grid-cols-2
          gap-10
          items-center
          ">


            {/* Left Content */}

            <div>


              <h2 className="
              text-4xl
              font-bold
              text-white
              ">
                Ready To Start Your
                Next Project?
              </h2>


              <p className="
              text-blue-100
              mt-5
              leading-relaxed
              ">
                Connect with Skimitar Hindusthan
                for industrial automation,
                software solutions, and professional
                training requirements.
              </p>




              <button

                onClick={() =>
                  navigate("/contact")
                }

                className="
                mt-8
                inline-flex
                items-center
                gap-2
                bg-white
                text-blue-700
                px-7
                py-3
                rounded-lg
                font-semibold
                hover:bg-gray-100
                transition
                "

              >

                Contact Us

                <ArrowRight size={18}/>

              </button>


            </div>




            {/* Right Cards */}

            <div className="
            space-y-5
            ">


              <div

                className="
                flex
                items-center
                gap-5
                bg-white/10
                p-5
                rounded-xl
                "

              >

                <Mail
                  className="text-white"
                  size={28}
                />


                <div>

                  <h3 className="
                  text-white
                  font-semibold
                  ">
                    Email Us
                  </h3>


                  <p className="
                  text-blue-100
                  text-sm
                  ">
                    Get professional assistance
                  </p>

                </div>


              </div>





              <div

                className="
                flex
                items-center
                gap-5
                bg-white/10
                p-5
                rounded-xl
                "

              >

                <Phone
                  className="text-white"
                  size={28}
                />


                <div>

                  <h3 className="
                  text-white
                  font-semibold
                  ">
                    Call Us
                  </h3>


                  <p className="
                  text-blue-100
                  text-sm
                  ">
                    Discuss your requirements
                  </p>

                </div>


              </div>


            </div>



          </div>


        </FadeIn>


      </div>


    </section>

  );

}


export default ContactPreview;