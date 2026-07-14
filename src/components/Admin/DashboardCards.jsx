import {
  Mail,
  GraduationCap,
  Clock,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

import { motion } from "framer-motion";


function DashboardCards({
  totalContacts,
  totalEnrollments,
  todayContacts,
  weeklyContacts,
  unreadContacts,
  setActiveTab,
}) {


  const cards = [
  {
    title: "Total Contacts",
    value: totalContacts,
    icon: Mail,
    color: "bg-blue-600",
    tab: "contacts",
  },

  {
    title: "Unread Messages",
    value: unreadContacts,
    icon: Clock,
    color: "bg-red-500",
    tab: "contacts",
  },

  {
    title: "Total Enrollments",
    value: totalEnrollments,
    icon: GraduationCap,
    color: "bg-green-600",
    tab: "enrollments",
  },

  {
    title: "This Week Leads",
    value: weeklyContacts,
    icon: CheckCircle,
    color: "bg-yellow-500",
    tab: "dashboard",
  },
];



  return (

    <div className="
      grid
      md:grid-cols-2
      xl:grid-cols-4
      gap-6
      mb-8
    ">


      {
        cards.map((card,index)=>{


          const Icon = card.icon;


          return (

           <motion.div
  key={card.title}
  initial={{
    opacity: 0,
    y: 20,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    delay: index * 0.1,
  }}
  whileHover={{
    scale: 1.05,
    y: -8,
  }}
  whileTap={{
    scale: 0.98,
  }}
  onClick={() => {
    if (card.tab !== "dashboard") {
      setActiveTab(card.tab);
    }
  }}
  className={`
    ${card.color}
    text-white
    rounded-xl
    p-6
    shadow-lg
    hover:shadow-2xl
    duration-300
    transition-all
    ${
      card.tab !== "dashboard"
        ? "cursor-pointer hover:shadow-2xl"
        : ""
    }
  `}
>


              <div className="flex justify-between items-start">

  <div>

    <p className="text-sm opacity-90 font-medium">

      {card.title}

    </p>

    <h2 className="text-4xl font-bold mt-3">

      {card.value}

    </h2>

  </div>

  <div className="bg-white/20 p-3 rounded-xl">

    <Icon size={30} />

  </div>

</div>

{
  card.tab !== "dashboard" && (

    <div className="flex items-center justify-between mt-6 text-sm opacity-90">

      <span>
        Click to view
      </span>

      <ArrowRight size={18} />

    </div>

  )
}


            </motion.div>


          );


        })
      }


    </div>

  );

}


export default DashboardCards;