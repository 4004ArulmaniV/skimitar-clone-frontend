import {
  X,
  Lock,
  Eye,
  EyeOff,
  Save,
} from "lucide-react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import { useState } from "react";


function ChangePasswordModal({
  show,
  setShow,
}) {


  const [showCurrent,setShowCurrent] =
    useState(false);


  const [showNew,setShowNew] =
    useState(false);


  const [showConfirm,setShowConfirm] =
    useState(false);



  const [passwords,setPasswords] =
    useState({

      current:"",
      newPassword:"",
      confirm:"",

    });



  const [error,setError] =
    useState("");



  const handleChange=(e)=>{


    setPasswords({

      ...passwords,

      [e.target.name]:
        e.target.value

    });


  };




  const handleSubmit=()=>{


    setError("");



    if(
      !passwords.current ||
      !passwords.newPassword ||
      !passwords.confirm
    ){

      setError(
        "All fields are required"
      );

      return;

    }



    if(
      passwords.newPassword !==
      passwords.confirm
    ){

      setError(
        "New password and confirm password do not match"
      );

      return;

    }



    if(
      passwords.newPassword.length < 6
    ){

      setError(
        "Password must contain minimum 6 characters"
      );

      return;

    }



    console.log(
      "Password Updated",
      passwords
    );


    alert(
      "Password changed successfully!"
    );


    setShow(false);



  };





  return (

<AnimatePresence>


{
show && (


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
scale:0.8,
y:40
}}


animate={{
scale:1,
y:0
}}


exit={{
scale:0.8,
y:40
}}



className="
bg-white
w-[90%]
max-w-md
rounded-2xl
shadow-2xl
overflow-hidden
"


>


{/* Header */}


<div className="
flex
justify-between
items-center
p-5
border-b
">


<div>


<h2 className="
text-xl
font-bold
text-gray-800
">

Change Password

</h2>


<p className="
text-sm
text-gray-500
">

Update your admin password

</p>


</div>



<button

onClick={()=>setShow(false)}

className="
p-2
rounded-full
hover:bg-gray-100
"

>

<X size={20}/>

</button>



</div>





{/* Body */}



<div className="
p-6
space-y-5
">


{
error &&

<div className="
bg-red-100
text-red-600
p-3
rounded-lg
text-sm
">

{error}

</div>

}





<PasswordInput

name="current"

placeholder="Current Password"

value={passwords.current}

onChange={handleChange}

show={showCurrent}

setShow={setShowCurrent}

/>



<PasswordInput

name="newPassword"

placeholder="New Password"

value={passwords.newPassword}

onChange={handleChange}

show={showNew}

setShow={setShowNew}

/>



<PasswordInput

name="confirm"

placeholder="Confirm Password"

value={passwords.confirm}

onChange={handleChange}

show={showConfirm}

setShow={setShowConfirm}

/>



</div>






{/* Footer */}



<div className="
px-6
pb-6
">


<button

onClick={handleSubmit}

className="
w-full
bg-blue-600
text-white
py-3
rounded-xl
flex
items-center
justify-center
gap-2
hover:bg-blue-700
"

>

<Save size={18}/>

Update Password

</button>


</div>




</motion.div>


</motion.div>


)

}


</AnimatePresence>

  );

}







function PasswordInput({

name,

placeholder,

value,

onChange,

show,

setShow,

}){


return (

<div className="
relative
">


<Lock

size={18}

className="
absolute
left-3
top-3.5
text-gray-400
"

/>



<input

type={
show
?
"text"
:
"password"
}

name={name}

value={value}

onChange={onChange}

placeholder={placeholder}

className="
w-full
border
rounded-xl
py-3
pl-10
pr-12
outline-none
focus:ring-2
focus:ring-blue-500
"

/>



<button

type="button"

onClick={()=>setShow(!show)}

className="
absolute
right-3
top-3
text-gray-500
"


>

{
show
?
<EyeOff size={20}/>
:
<Eye size={20}/>
}

</button>



</div>

);


}



export default ChangePasswordModal;