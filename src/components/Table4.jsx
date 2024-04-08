"use client"
import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/navigation"
import api from "./axios"

const people = [
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },

  ]
  
  export default function Table4({surveyrequest,getalluserssurveyquest}) {
    const router =useRouter()
    const updateStatus =async(status,id)=>{
      try {
        const res = await api.put("/admin/surveyRequest/statusUpdate",{token:localStorage.getItem("token"),id:id,status:status})
         console.log(res);
        if(res.status ==200){
          alert("status updated succefully")
          getalluserssurveyquest()
        }
      } catch (error) {
        console.log(error)
      }    
    }

    return (
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-gray-900"> User  Approvals Request  </h1>
            <p className="mt-2 text-sm text-gray-700">
              A list of all the Surveys in your account including their name, title, email and role.
            </p>
          </div>
          {/* <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <button
              type="button"
              className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <Link  href={"/survey/addsurvey"}>
              Add Survey
              </Link>
            </button>
          </div> */}
        </div>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                       Survey 
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Email
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                       Approved
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Reject
                      </th>
                      {/* <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                        <span className="sr-only">Edit</span>
                      </th> */}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    { surveyrequest?.length > 0 ?  surveyrequest?.map((person) => (
                      <tr key={person._id}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                          {person?.surveyid?.title}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person?.userid?.email}</td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">${person?.surveyid?.pay}</td> 
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.instructions}</td> 
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                          <button onClick={()=>updateStatus("approved",person._id)}  className="text-indigo-600 hover:text-indigo-900">
                            Approved
                          </button> 
                          <button onClick={()=>updateStatus("rejected",person._id)} className="text-red-600 hover:text-indigo-900 m-4">
                            Reject
                          </button>
                        </td>
                      </tr>
                    )) : (                      <tr > <td className="text-gray-800 text-center text-xl font-bold  ">No Approvals Request Found </td></tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  