import { Quote, Star } from "lucide-react";
import FadeIn from "./FadeIn";


function Testimonials() {


  const testimonials = [

    {
      name: "Arun Kumar",
      role: "Embedded Systems Student",
      text:
        "The training program helped me gain practical knowledge and secure a placement opportunity in the technology industry.",
    },


    {
      name: "Priya S",
      role: "Automation Engineer",
      text:
        "Excellent industrial training with real-time project exposure and professional guidance from experienced trainers.",
    },


    {
      name: "Rahul M",
      role: "Software Developer",
      text:
        "Professional trainers and industry-focused curriculum helped me improve my technical skills.",
    },

  ];



  return (

    <section
      className="
      py-24
      bg-gray-50
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
          mb-16
          ">


            <p className="
            text-blue-700
            uppercase
            tracking-widest
            font-semibold
            ">
              Testimonials
            </p>


            <h2 className="
            text-4xl
            md:text-5xl
            font-bold
            text-gray-900
            mt-3
            ">
              What Our Students Say
            </h2>


            <p className="
            text-gray-600
            mt-4
            max-w-2xl
            mx-auto
            ">
              Real experiences from students and professionals
              who improved their skills through our programs.
            </p>


          </div>


        </FadeIn>





        <div className="
        grid
        md:grid-cols-3
        gap-8
        ">


          {
            testimonials.map((item,index)=>(


              <FadeIn
                key={index}
              >


                <div

                  className="
                  bg-white
                  p-8
                  rounded-2xl
                  shadow-md
                  hover:shadow-xl
                  transition
                  duration-300
                  relative
                  "

                >


                  <Quote

                    size={42}

                    className="
                    text-blue-200
                    "

                  />




                  <p

                    className="
                    text-gray-600
                    mt-5
                    leading-relaxed
                    "

                  >

                    "{item.text}"

                  </p>





                  <div className="
                  flex
                  gap-1
                  mt-6
                  ">


                    {
                      [1,2,3,4,5].map((star)=>(

                        <Star

                          key={star}

                          size={18}

                          className="
                          fill-yellow-400
                          text-yellow-400
                          "

                        />

                      ))
                    }


                  </div>





                  <div className="
                  flex
                  items-center
                  gap-4
                  mt-6
                  ">


                    <div

                      className="
                      w-12
                      h-12
                      rounded-full
                      bg-blue-100
                      flex
                      items-center
                      justify-center
                      font-bold
                      text-blue-700
                      "

                    >

                      {
                        item.name.charAt(0)
                      }

                    </div>




                    <div>

                      <h4 className="
                      font-bold
                      text-gray-900
                      ">
                        {item.name}
                      </h4>


                      <p className="
                      text-sm
                      text-gray-500
                      ">
                        {item.role}
                      </p>


                    </div>


                  </div>



                </div>


              </FadeIn>


            ))
          }


        </div>



      </div>


    </section>

  );

}


export default Testimonials;