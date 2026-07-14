import {
X,
Moon,
Sun
} from "lucide-react";


import {
motion,
AnimatePresence
} from "framer-motion";


import {
useTheme
} from "../../../context/ThemeContext";



function AppearanceModal({
show,
setShow,
}){


const {
darkMode,
setDarkMode
}=useTheme();



return (

<AnimatePresence>


{
show &&


<motion.div

initial={{
opacity:0
}}

animate={{
opacity:1
}}

exit={{
opacity:0
}}

className="
fixed
inset-0
bg-black/40
backdrop-blur-sm
flex
items-center
justify-center
z-[100]
"

>


<motion.div

initial={{
scale:.8
}}

animate={{
scale:1
}}

className="
bg-white
dark:bg-slate-900
text-gray-800
dark:text-white
w-[90%]
max-w-md
rounded-2xl
p-6
shadow-2xl
"

>


<div className="
flex
justify-between
items-center
mb-6
">


<h2 className="
text-xl
font-bold
">

Appearance

</h2>


<button

onClick={()=>setShow(false)}

>

<X/>

</button>


</div>




<div className="
flex
justify-between
items-center
bg-gray-100
dark:bg-slate-800
p-4
rounded-xl
">


<div className="
flex
items-center
gap-3
">


{
darkMode ?

<Moon/>

:

<Sun/>

}


<div>


<p className="
font-semibold
">

Dark Mode

</p>


<p className="
text-sm
text-gray-500
">

Change dashboard theme

</p>


</div>


</div>




<button

onClick={()=>{
 console.log("Dark:",!darkMode);
 setDarkMode(!darkMode);
}}

className={`
w-14
h-7
rounded-full
relative
transition
${
darkMode
?
"bg-blue-600"
:
"bg-gray-300"
}
`}

>


<span

className={`
absolute
top-1
w-5
h-5
bg-white
rounded-full
transition
${
darkMode
?
"left-8"
:
"left-1"
}
`}

/>


</button>


</div>



</motion.div>


</motion.div>

}


</AnimatePresence>

);


}


export default AppearanceModal;