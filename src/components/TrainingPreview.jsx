import {
  Cpu,
  MonitorCog,
  Code2,
  CircuitBoard,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import FadeIn from "./FadeIn";


const courses = [

  {
    title: "PLC Programming",

    description:
      "Learn industrial PLC programming, control logic, and automation concepts.",

    icon: Cpu,
  },


  {
    title: "SCADA Systems",

    description:
      "Understand monitoring, control systems, and industrial visualization.",

    icon: MonitorCog,
  },


  {
    title: "Embedded Systems",

    description:
      "Build practical embedded solutions using hardware and software integration.",

    icon: CircuitBoard,
  },


  {
    title: "Web Development",

    description:
      "Learn modern frontend and backend technologies for software careers.",

    icon: Code2,
  },

];



function TrainingPreview() {


  const navigate = useNavigate();



  return (

    <section
      id="training"
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
              Professional Training
            </p>



            <h2 className="
            text-4xl
            font-bold
            text-gray-900
            mt-3
            ">
              Industry Ready Skill Development
            </h2>



            <p className="
            text-gray-600
            max-w-2xl
            mx-auto
            mt-4
            ">
              Practical training programs designed to
              develop technical skills required for
              modern industries.
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
            courses.map((course,index)=>{


              const Icon = course.icon;


              return (

                <FadeIn
                  key={index}
                >


                  <div

                    className="
                    bg-white
                    p-6
                    rounded-2xl
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
                      "

                    >

                      <Icon
                        size={28}
                        className="text-blue-700"
                      />

                    </div>




                    <h3

                      className="
                      text-xl
                      font-bold
                      mt-5
                      text-gray-900
                      "

                    >

                      {course.title}

                    </h3>




                    <p

                      className="
                      text-gray-600
                      text-sm
                      mt-3
                      leading-relaxed
                      "

                    >

                      {course.description}

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
                navigate("/training")
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

              Explore Courses

              <ArrowRight size={18}/>

            </button>


          </div>


        </FadeIn>



      </div>


    </section>

  );

}


export default TrainingPreview;