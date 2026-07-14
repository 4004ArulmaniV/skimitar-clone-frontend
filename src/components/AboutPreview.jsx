import { ArrowRight, Award, Cpu, GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import FadeIn from "./FadeIn";


function AboutPreview() {

  const navigate = useNavigate();


  const highlights = [

    {
      icon: Award,
      title: "Trusted Expertise",
      description:
        "Delivering reliable industrial and technology solutions with professional expertise."
    },

    {
      icon: Cpu,
      title: "Latest Technologies",
      description:
        "Working with modern automation, software, and embedded technologies."
    },

    {
      icon: GraduationCap,
      title: "Industry Training",
      description:
        "Providing practical training programs to develop future professionals."
    }

  ];



  return (

    <section
      id="about"
      className="py-20 bg-white"
    >

      <div className="max-w-7xl mx-auto px-6">


        <FadeIn>


          <div className="grid md:grid-cols-2 gap-12 items-center">


            {/* Left Content */}

            <div>


              <p className="
              text-blue-700
              font-semibold
              uppercase
              tracking-widest
              ">
                About Skimitar
              </p>



              <h2 className="
              text-4xl
              font-bold
              text-gray-900
              mt-3
              ">
                Engineering Solutions
                <br />
                For A Smarter Future
              </h2>



              <p className="
              text-gray-600
              mt-6
              leading-relaxed
              ">
                Skimitar Hindusthan provides industrial automation,
                software solutions, embedded technologies, and
                professional training programs designed to meet
                modern industry requirements.
              </p>



              <p className="
              text-gray-600
              mt-4
              leading-relaxed
              ">
                We focus on innovation, practical learning,
                and delivering quality solutions that create
                long-term value for businesses and professionals.
              </p>



              <button

                onClick={() =>
                  navigate("/about")
                }

                className="
                mt-8
                inline-flex
                items-center
                gap-2
                bg-blue-700
                text-white
                px-6
                py-3
                rounded-lg
                hover:bg-blue-800
                transition
                "

              >

                Read More

                <ArrowRight size={18}/>

              </button>


            </div>




            {/* Right Cards */}

            <div className="
            grid
            gap-6
            ">


              {
                highlights.map((item,index)=>{


                  const Icon = item.icon;


                  return (

                    <div

                      key={index}

                      className="
                      flex
                      gap-5
                      p-6
                      rounded-xl
                      bg-gray-50
                      border
                      hover:shadow-lg
                      transition
                      "

                    >


                      <div

                        className="
                        w-14
                        h-14
                        flex
                        items-center
                        justify-center
                        rounded-xl
                        bg-blue-100
                        "

                      >

                        <Icon
                          size={28}
                          className="text-blue-700"
                        />

                      </div>



                      <div>

                        <h3 className="
                        font-bold
                        text-lg
                        text-gray-900
                        ">
                          {item.title}
                        </h3>


                        <p className="
                        text-gray-600
                        mt-2
                        text-sm
                        ">
                          {item.description}
                        </p>


                      </div>



                    </div>

                  );


                })
              }



            </div>



          </div>



        </FadeIn>



      </div>


    </section>

  );

}


export default AboutPreview;