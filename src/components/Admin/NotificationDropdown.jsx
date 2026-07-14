import { useState, useEffect, useRef } from "react";
import { Bell, UserCircle, GraduationCap, CheckCircle } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";


function NotificationDropdown({
contacts=[],
enrollments=[],
handleMarkAllRead
}) {


  const [open, setOpen] = useState(false);

  const dropdownRef = useRef(null);


  // Combine notifications
  const notifications = [

    ...contacts
      .filter(contact => !contact.isRead)
      .slice(0,3)
      .map(contact => ({
        id: contact._id,
        type:"contact",
        title:"New Contact",
        subtitle:contact.name,
        message:contact.message,
        date:contact.createdAt
      })),


    ...enrollments
       .filter(
       (enrollment)=> !enrollment.isRead)
       .slice(0,3)
      .map(enroll => ({
        id: enroll._id,
        type:"enrollment",
        title:"New Enrollment",
        subtitle:enroll.name,
        message:enroll.course,
        date:enroll.createdAt
      }))

  ]
  .sort(
    (a,b)=> new Date(b.date)-new Date(a.date)
  )
  .slice(0,5);



  const unreadCount =
    notifications.length;



  // Outside click close

  useEffect(()=>{


    const handleClick=(event)=>{

      if(
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ){

        setOpen(false);

      }

    };


    document.addEventListener(
      "mousedown",
      handleClick
    );


    return ()=>{

      document.removeEventListener(
        "mousedown",
        handleClick
      );

    };


  },[]);

const getTimeAgo = (date)=>{

const seconds =
Math.floor(
(new Date()-new Date(date))
/1000
);


if(seconds < 60)

return "Just now";


const minutes =
Math.floor(seconds/60);


if(minutes < 60)

return `${minutes} mins ago`;


const hours =
Math.floor(minutes/60);


if(hours < 24)

return `${hours} hours ago`;


const days =
Math.floor(hours/24);


return `${days} days ago`;

};


return (

<div 
className="relative"
ref={dropdownRef}
>


<button

onClick={()=>setOpen(!open)}

className="relative p-2 rounded-full hover:bg-gray-100 transition"

>


<Bell size={22}/>



{
unreadCount > 0 && (

<span

className="
absolute
-top-1
-right-1
bg-red-500
text-white
text-xs
w-5
h-5
rounded-full
flex
items-center
justify-center
"

>

{unreadCount}

</span>

)

}


</button>




<AnimatePresence>


{
open && (

<motion.div

initial={{
opacity:0,
y:-10,
scale:0.95
}}

animate={{
opacity:1,
y:0,
scale:1
}}

exit={{
opacity:0,
y:-10,
scale:0.95
}}


transition={{
duration:0.2
}}


className="
absolute
right-0
mt-3
w-80
bg-white
rounded-xl
shadow-xl
border
z-50
overflow-hidden
"


>



<div
className="
px-4
py-3
border-b
flex
justify-between
items-center
"
>


<h3 className="font-semibold">

Notifications

</h3>



<button

onClick={handleMarkAllRead}

className="
text-xs
text-blue-600
hover:underline
"

>

Mark all read

</button>


</div>
<div
className="
max-h-96
overflow-y-auto
"
>



{
notifications.length === 0 ? (

<div
className="
p-6
text-center
text-gray-500
"
>

No notifications

</div>

)

:

notifications.map(item=>(


<div

key={item.id}

className="
p-4
border-b
hover:bg-gray-50
transition
flex
gap-3
"

>



<div>


{
item.type==="contact"
?

<div className="
bg-red-100
text-red-600
p-2
rounded-full
">

<UserCircle size={18}/>

</div>


:

<div className="
bg-green-100
text-green-600
p-2
rounded-full
">

<GraduationCap size={18}/>

</div>

}


</div>





<div className="flex-1">


<p className="font-medium text-sm">

{item.title}

</p>


<p className="text-sm">

{item.subtitle}

</p>

<div>

<p
className="
text-xs
text-gray-500
truncate
"
>

{item.message}

</p>


<p
className="
text-xs
text-gray-400
"
>

{getTimeAgo(item.date)}

</p>


</div>



</div>



</div>


))


}



</div>



<button

className="
w-full
py-3
text-sm
text-blue-600
hover:bg-gray-50
"

>

View All Notifications

</button>



</motion.div>

)

}


</AnimatePresence>


</div>

);

}


export default NotificationDropdown;