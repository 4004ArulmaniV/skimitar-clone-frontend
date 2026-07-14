import {
  Factory,
  Car,
  Cpu,
  Zap,
  Building2,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import FadeIn from "./FadeIn";


const industries = [

  {
    title: "Manufacturing",

    description:
      "Automation solutions for efficient and smart manufacturing processes.",

    icon: Factory,
  },


  {
    title: "Automotive",

    description:
      "Technology solutions supporting modern automotive industries.",

    icon: Car,
  },


  {
    title: "Industrial Automation",

    description:
      "Advanced control systems and automation solutions.",

    icon: Cpu,
  },


  {
    title: "Energy",

    description:
      "Reliable technology solutions for energy and power sectors.",

    icon: Zap,
  },


  {
    title: "Corporate Solutions",

    description:
      "Software and digital solutions for business operations.",

    icon: Building2,
  },

];



function IndustriesPreview() {


  const navigate = useNavigate();



  return (

    <section
      id="industries"
      className="py-20 bg-white"
    >

      <div className="max-w-7xl mx-auto px-6">


        <FadeIn>


          <div className="text-center mb-14">


            <p className="
            text-blue-700
            font-semibold
            uppercase
            tracking-widest
            ">
              Industries We Serve
            </p>


            <h2 className="
            text-4xl
            font-bold
            text-gray-900
            mt-3
            ">
              Solutions Across Multiple Industries
            </h2>


            <p className="
            text-gray-600
            max-w-2xl
            mx-auto
            mt-4
            ">
              We deliver automation and technology solutions
              for various industrial sectors with innovation
              and reliability.
            </p>


          </div>


        </FadeIn>




        <div className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-5
        gap-6
        ">


          {
            industries.map((industry,index)=>{


              const Icon = industry.icon;


              return (

                <FadeIn
                  key={index}
                >


                  <div

                    className="
                    p-6
                    rounded-2xl
                    bg-gray-50
                    border
                    border-gray-200
                    hover:shadow-xl
                    transition
                    duration-300
                    text-center
                    h-full
                    "

                  >


                    <div

                      className="
                      w-14
                      h-14
                      mx-auto
                      rounded-xl
                      bg-blue-100
                      flex
                      items-center
                      justify-center
                      "

                    >

                      <Icon
                        size={28}
                        className="text-blue-700"
                      />

                    </div>



                    <h3

                      className="
                      mt-5
                      font-bold
                      text-lg
                      text-gray-900
                      "

                    >

                      {industry.title}

                    </h3>



                    <p

                      className="
                      mt-3
                      text-sm
                      text-gray-600
                      leading-relaxed
                      "

                    >

                      {industry.description}

                    </p>


                  </div>


                </FadeIn>

              );


            })
          }


        </div>




        <FadeIn>


          <div className="
          text-center
          mt-12
          ">


            <button

              onClick={() =>
                navigate("/industries")
              }

              className="
              inline-flex
              items-center
              gap-2
              bg-blue-700
              text-white
              px-7
              py-3
              rounded-lg
              hover:bg-blue-800
              transition
              "

            >

              Explore Industries

              <ArrowRight size={18}/>

            </button>


          </div>


        </FadeIn>



      </div>


    </section>

  );

}


export default IndustriesPreview;