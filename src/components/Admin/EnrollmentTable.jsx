import {
  Trash2,
  Edit,
} from "lucide-react";


function EnrollmentTable({

  enrollments,

  handleDelete,

  handleStatusUpdate,

}) {


  const statusStyles = {

    Pending:
      "bg-yellow-100 text-yellow-700",

    Contacted:
      "bg-blue-100 text-blue-700",

    Approved:
      "bg-green-100 text-green-700",

    Rejected:
      "bg-red-100 text-red-700",

  };



  return (

    <div className="
      overflow-x-auto
      bg-white
      rounded-xl
      shadow
    ">


      <table className="w-full">


        <thead>


          <tr className="
            bg-slate-800
            text-white
          ">


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
              Course
            </th>


            <th className="p-4 text-left">
              Mode
            </th>


            <th className="p-4 text-center">
              Status
            </th>


            <th className="p-4 text-center">
              Actions
            </th>


          </tr>


        </thead>




        <tbody>


        {
          enrollments.length === 0 ?


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

                No Enrollments Found

              </td>


            </tr>


          )


          :


          enrollments.map((item)=>(


            <tr

              key={item._id}

              className="
              border-b
              hover:bg-gray-50
              "

            >



              <td className="p-4">

                {item.name}

              </td>




              <td className="p-4">

                {item.email}

              </td>




              <td className="p-4">

                {item.phone}

              </td>




              <td className="p-4">

                {item.course}

              </td>




              <td className="p-4">

                {item.mode}

              </td>




              <td className="p-4 text-center">


                <select

                  value={item.status}

                  onChange={(e)=>
                    handleStatusUpdate(
                      item._id,
                      e.target.value
                    )
                  }


                  className={`
                    px-3
                    py-2
                    rounded-full
                    text-sm
                    font-medium
                    outline-none
                    ${
                      statusStyles[item.status]
                    }
                  `}

                >


                  <option>
                    Pending
                  </option>


                  <option>
                    Contacted
                  </option>


                  <option>
                    Approved
                  </option>


                  <option>
                    Rejected
                  </option>


                </select>



              </td>





              <td className="p-4">


                <div className="
                  flex
                  justify-center
                ">


                  <button

                    onClick={()=>
                      handleDelete(item._id)
                    }


                    className="
                    bg-red-600
                    text-white
                    p-2
                    rounded-lg
                    hover:bg-red-700
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


export default EnrollmentTable;