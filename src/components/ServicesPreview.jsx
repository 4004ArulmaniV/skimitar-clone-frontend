import {
  Cpu,
  Code2,
  CircuitBoard,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import FadeIn from "./FadeIn";


const services = [

  {
    title: "Industrial Automation",

    description:
      "PLC, SCADA, HMI, and automation solutions to improve industrial efficiency.",

    icon: Cpu,
  },


  {
    title: "Software Solutions",

    description:
      "Modern web and software solutions designed for business requirements.",

    icon: Code2,
  },


  {
    title: "Embedded Systems",

    description:
      "Embedded development solutions with practical hardware and software integration.",

    icon: CircuitBoard,
  },


  {
    title: "Professional Training",

    description:
      "Industry-focused training programs with practical learning and projects.",

    icon: GraduationCap,
  },

];



function ServicesPreview() {


  const navigate = useNavigate();



  return (

    <section
      id="services"
      className="py-20 bg-gray-50"
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
              Our Services
            </p>


            <h2 className="
            text-4xl
            font-bold
            text-gray-900
            mt-3
            ">
              Complete Technology Solutions
            </h2>


            <p className="
            text-gray-600
            mt-4
            max-w-2xl
            mx-auto
            ">
              We provide innovative automation, software,
              embedded, and training solutions to meet
              modern industry needs.
            </p>


          </div>


        </FadeIn>




        <div className="
        grid
        md:grid-cols-2
        lg:grid-cols-4
        gap-6
        ">


          {
            services.map((service,index)=>{


              const Icon = service.icon;


              return (

                <FadeIn
                  key={index}
                >

                  <div

                    className="
                    bg-white
                    rounded-2xl
                    p-6
                    border
                    border-gray-200
                    hover:shadow-xl
                    transition
                    duration-300
                    h-full
                    "

                  >


                    <div

                      className="
                      w-14
                      h-14
                      rounded-xl
                      bg-blue-100
                      flex
                      items-center
                      justify-center
                      mb-5
                      "

                    >

                      <Icon
                        size={30}
                        className="text-blue-700"
                      />

                    </div>




                    <h3

                      className="
                      text-xl
                      font-bold
                      text-gray-900
                      "

                    >

                      {service.title}

                    </h3>




                    <p

                      className="
                      text-gray-600
                      mt-3
                      text-sm
                      leading-relaxed
                      "

                    >

                      {service.description}

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
                navigate("/services")
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

              View All Services

              <ArrowRight size={18}/>

            </button>


          </div>


        </FadeIn>



      </div>


    </section>

  );

}


export default ServicesPreview;