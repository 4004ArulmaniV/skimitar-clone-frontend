import FadeIn from "./FadeIn";
import {
  Eye,
  Target,
  ShieldCheck,
  Cpu,
  GraduationCap,
  Users,
  Headphones,
  Award,
  Lightbulb,
  Gem,
  HeartHandshake,
} from "lucide-react";
const whyChooseData = [

  {
    title:"Trusted Expertise",
    description:
    "Experienced professionals delivering reliable industrial automation and software solutions.",
    icon:ShieldCheck
  },

  {
    title:"Latest Technologies",
    description:
    "Working with PLC, SCADA, IoT, Embedded Systems, MERN Stack and modern digital technologies.",
    icon:Cpu
  },

  {
    title:"Practical Training",
    description:
    "Industry-oriented learning through live projects, practical sessions and expert mentoring.",
    icon:GraduationCap
  },

  {
    title:"Quality Services",
    description:
    "Delivering customized solutions with quality, reliability and industrial standards.",
    icon:Award
  },

  {
    title:"Client Focused",
    description:
    "Building long-term relationships through transparency, commitment and customer satisfaction.",
    icon:Users
  },

  {
    title:"Continuous Support",
    description:
    "Dedicated technical support before, during and after project completion.",
    icon:Headphones
  }

];

const coreValues = [

  {
    title:"Innovation",
    description:
    "Continuously adopting new technologies and creative approaches to solve industrial challenges.",
    icon:Lightbulb
  },

  {
    title:"Quality",
    description:
    "Maintaining excellence in every solution, service and training program we deliver.",
    icon:Gem
  },

  {
    title:"Integrity",
    description:
    "Following transparency, responsibility and ethical practices in every relationship.",
    icon:HeartHandshake
  },

  {
    title:"Customer First",
    description:
    "Prioritizing customer success through reliable solutions and continuous improvement.",
    icon:Target
  }

];

function About(){
return(
<FadeIn>
<section
id="about"
className="py-24 bg-gray-50 scroll-mt-24"
>
<div className="max-w-7xl mx-auto px-6">
{/* TOP ABOUT SECTION */}

<div className="grid md:grid-cols-2 gap-12 items-center">
{/* IMAGE */}

<div>

<img src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=1200"

alt="Industrial Automation"

className="rounded-2xl shadow-xl"

/>

</div>

{/* CONTENT */}

<div>

<h4 className="text-blue-700 font-semibold uppercase tracking-widest">

About Us

</h4>

<h2 className="text-4xl font-bold mt-3 mb-6 leading-tight">

Transforming Industries Through
Technology & Training

</h2>

<p className="text-gray-600 leading-8 mb-6">

Skimitar Hindusthan Pvt Ltd is committed to
delivering innovative industrial automation,
embedded systems, software development,
digital marketing and professional training
solutions that empower industries and
individuals with the latest technologies.

</p>

<p className="text-gray-600 leading-8 mb-8">

We bridge the gap between industrial
requirements and skilled professionals by
offering practical training, real-time project
exposure and customized engineering
solutions for businesses across multiple sectors.

</p>

{/* STATS */}

<div className="grid grid-cols-2 gap-6">

<div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:-translate-y-2 hover:shadow-2xl transition">

<h3 className="text-4xl font-bold text-blue-700">

2500+

</h3>

<p className="text-gray-600 mt-2">

Students Trained

</p>

</div>

<div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:-translate-y-2 hover:shadow-2xl transition">

<h3 className="text-4xl font-bold text-blue-700">

200+

</h3>

<p className="text-gray-600 mt-2">

Industry Clients

</p>

</div>

</div>

</div>

</div>

{/* VISION MISSION */}

<div className="grid md:grid-cols-2 gap-8 mt-24">

<div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition">

<Eye
className="text-blue-700 mb-5"
size={45}
/>

<h3 className="text-2xl font-bold mb-4">

Our Vision

</h3>

<p className="text-gray-600 leading-8">

To become a leading industrial automation
and technology company by delivering
innovative engineering solutions and
empowering future professionals through
quality education and practical learning.

</p>

</div>

<div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition">

<Target
className="text-blue-700 mb-5"
size={45}
/>

<h3 className="text-2xl font-bold mb-4">

Our Mission

</h3>

<p className="text-gray-600 leading-8">

To provide reliable automation, embedded,
software and digital solutions while offering
industry-oriented training that develops skilled
professionals ready for real-world challenges.

</p>

</div>

</div>

{/* WHY CHOOSE SECTION */}

<div className="mt-24">

<div className="text-center mb-14">

<h4 className="text-blue-700 font-semibold uppercase tracking-widest">

Why Choose Us

</h4>

<h2 className="text-4xl font-bold mt-3">

Why Choose Skimitar Hindusthan?

</h2>

<p className="text-gray-600 mt-4 max-w-3xl mx-auto leading-8">

We combine industrial expertise, modern
technologies and practical training to
deliver high-quality engineering solutions.

</p>

</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

{

whyChooseData.map((item,index)=>{

const Icon=item.icon;

return(

<div
key={index}
className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition"
>

<Icon
className="text-blue-700 mb-5"
size={42}
/>

<h3 className="text-xl font-bold mb-3">

{item.title}

</h3>

<p className="text-gray-600 leading-7">

{item.description}

</p>

</div>

)

})

}

</div>

</div>

{/* CORE VALUES */}

<div className="mt-24">

<div className="text-center mb-14">

<h4 className="text-blue-700 font-semibold uppercase tracking-widest">

Our Values

</h4>

<h2 className="text-4xl font-bold mt-3">

Core Values

</h2>
<p className="text-gray-600 mt-4 max-w-3xl mx-auto">
The principles that guide our innovation,
quality and customer relationships.
</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
{
coreValues.map((item,index)=>{
const Icon=item.icon;
return(
<div
key={index}
className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition"
>
<div className="flex justify-center">
<div className="bg-blue-700 text-white p-4 rounded-full mb-5">
<Icon size={32}/>
</div>
</div>
<h3 className="text-xl font-bold mb-3">
{item.title}
</h3>
<p className="text-gray-600 leading-7">
{item.description}
</p>
</div>
)
})
}
</div>
</div>
</div>
</section>
</FadeIn>
)
}
export default About;