import { ArrowRight, GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import FadeIn from "./FadeIn";


function CTA() {


  const navigate = useNavigate();



  return (

    <section
      className="
      py-24
      bg-gradient-to-r
      from-blue-900
      to-blue-700
      text-white
      "
    >

      <div className="
      max-w-7xl
      mx-auto
      px-6
      ">


        <FadeIn>


          <div className="
          text-center
          max-w-4xl
          mx-auto
          ">


            <div className="
            flex
            justify-center
            mb-6
            ">

              <div className="
              w-16
              h-16
              rounded-full
              bg-white/10
              flex
              items-center
              justify-center
              ">

                <GraduationCap
                  size={34}
                  className="text-white"
                />

              </div>

            </div>




            <h2 className="
            text-4xl
            md:text-5xl
            font-bold
            leading-tight
            ">

              Ready To Build Your
              Future With Technology?

            </h2>




            <p className="
            text-blue-100
            mt-6
            text-lg
            leading-relaxed
            ">

              Partner with Skimitar Hindusthan
              for industrial automation solutions,
              software development, and industry-ready
              professional training programs.

            </p>




            <div className="
            flex
            flex-col
            sm:flex-row
            justify-center
            gap-5
            mt-10
            ">



              <button

                onClick={() =>
                  navigate("/contact")
                }

                className="
                inline-flex
                items-center
                justify-center
                gap-2
                bg-white
                text-blue-700
                px-8
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





              <button

                onClick={() =>
                  navigate("/training")
                }

                className="
                border
                border-white
                px-8
                py-3
                rounded-lg
                font-semibold
                hover:bg-white
                hover:text-blue-700
                transition
                "

              >

                Explore Training

              </button>




            </div>



          </div>


        </FadeIn>


      </div>


    </section>

  );

}


export default CTA;