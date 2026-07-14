import {
  CheckCircle,
  Trash2,
} from "lucide-react";


function ContactTable({

  contacts,

  handleMarkAsRead,

  handleDelete,

}) {


  return (

    <div className="overflow-x-auto">


      <table className="w-full">


        <thead>


          <tr className="bg-slate-800 text-white">


            <th className="p-4 text-left">
              Name
            </th>


            <th className="p-4 text-left">
              Email
            </th>


            <th className="p-4 text-left">
              Phone
            </th>


            <th className="p-4 text-left">
              Message
            </th>


            <th className="p-4 text-center">
              Status
            </th>


            <th className="p-4 text-center">
              Date
            </th>


            <th className="p-4 text-center">
              Action
            </th>


          </tr>


        </thead>



        <tbody>


        {
          contacts.length === 0 ?


          (

            <tr>

              <td

                colSpan="7"

                className="
                text-center
                py-10
                text-gray-500
                "

              >

                No Contacts Found

              </td>


            </tr>


          )


          :


          contacts.map((contact)=>(


            <tr

              key={contact._id}

              className="
              border-b
              hover:bg-gray-50
              "

            >


              <td className="p-4">

                {contact.name}

              </td>



              <td className="p-4">

                {contact.email}

              </td>



              <td className="p-4">

                {contact.phone}

              </td>



              <td className="
              p-4
              max-w-xs
              break-words
              ">

                {contact.message}

              </td>




              <td className="
              p-4
              text-center
              ">


              {

              contact.isRead ?


              (

              <span className="
              bg-green-100
              text-green-700
              px-3
              py-1
              rounded-full
              text-sm
              ">

                Read

              </span>


              )


              :


              (

              <span className="
              bg-red-100
              text-red-700
              px-3
              py-1
              rounded-full
              text-sm
              ">

                Unread

              </span>


              )

              }


              </td>





              <td className="
              p-4
              text-center
              ">


              {
                new Date(
                  contact.createdAt
                )
                .toLocaleDateString()

              }


              </td>




              <td className="
              p-4
              ">


              <div className="
              flex
              justify-center
              gap-2
              ">



              {

              !contact.isRead &&

              (

              <button

              onClick={()=>handleMarkAsRead(contact._id)}

              className="
              bg-blue-600
              text-white
              px-3
              py-2
              rounded-lg
              "

              >

                <CheckCircle size={18}/>

              </button>

              )


              }




              <button

              onClick={()=>handleDelete(contact._id)}

              className="
              bg-red-600
              text-white
              px-3
              py-2
              rounded-lg
              "

              >

                <Trash2 size={18}/>

              </button>



              </div>


              </td>



            </tr>


          ))

        }


        </tbody>


      </table>


    </div>

  );

}


export default ContactTable;