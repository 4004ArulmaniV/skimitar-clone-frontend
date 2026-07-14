import MarqueePackage from "react-fast-marquee";

import siemens from "../assets/partners/siemens.png";
import abb from "../assets/partners/abb.png";
import schneider from "../assets/partners/schneider.png";
import delta from "../assets/partners/delta.png";
import omron from "../assets/partners/omron.png";
import mitsubishi from "../assets/partners/mitsubishi.jpg";

const Marquee = MarqueePackage.default;
const partners = [
  {
    name: "Siemens",
    logo: siemens,
  },
  {
    name: "ABB",
    logo: abb,
  },
  {
    name: "Schneider Electric",
    logo: schneider,
  },
  {
    name: "Delta",
    logo: delta,
  },
  {
    name: "Omron",
    logo: omron,
  },
  {
    name: "Mitsubishi Electric",
    logo: mitsubishi,
  },
];


function Partners() {

  return (

    <section
      id="partners"
      className="py-24 bg-white overflow-hidden"
    >

      <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">


            <h4 className="text-blue-700 font-semibold uppercase tracking-widest">
              Trusted Technologies
            </h4>


            <h2 className="text-4xl font-bold mt-3 text-gray-900">
              Technologies We Work With
            </h2>


            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              We provide industrial automation and software solutions
              using globally recognized technologies and platforms.
            </p>


          </div>


          <Marquee
            speed={40}
            pauseOnHover={true}
            gradient={true}
            gradientWidth={60}
          >


            {
              partners.map((partner,index)=>(


                <div
                  key={index}
                  className="
                  mx-6
                  w-[220px]
                  h-32
                  bg-white
                  border
                  border-gray-200
                  rounded-xl
                  shadow-sm
                  hover:shadow-xl
                  transition
                  duration-300
                  flex
                  items-center
                  justify-center
                  "
                >


                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="
                    max-h-14
                    max-w-[150px]
                    object-contain
                    hover:scale-110
                    transition
                    duration-300
                    "
                  />


                </div>


              ))
            }


          </Marquee>



      </div>


    </section>

  );

}


export default Partners;