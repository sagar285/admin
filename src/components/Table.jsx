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
  
  export default function Table({surveylist,getallsurveylist}) {
    const router =useRouter()

    const deletesurvey =async(surveyid)=>{
      try {
        const res = await api.post("/survey/deleteSurvey",{token:localStorage.getItem("token"),id:surveyid})
        if(res.status ==200){
          alert("survey deleted succefully")
          getallsurveylist()
        }
      } catch (error) {
        console.log(error)
      }    
    }

    return (
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-gray-900">Surveys</h1>
            <p className="mt-2 text-sm text-gray-700">
              A list of all the Surveys in your account including their name, title, email and role.
            </p>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <button
              type="button"
              className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <Link  href={"/survey/addsurvey"}>
              Add Survey
              </Link>
            </button>
          </div>
        </div>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                        Title
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Descripton
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Pay
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        instruction
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        qualification
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        input
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                       Output
                      </th>
                      <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {surveylist?.map((person) => (
                      <tr key={person._id}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                          {person?.title}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person?.description}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">${person?.pay}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person?.instructions}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person?.qualification}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person?.input}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person?.Output}</td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                          <button  className="text-indigo-600 hover:text-indigo-900">
                            <Link href={`/survey/editsurvey/${person._id}`}>
                            Edit<span className="sr-only">, {person?.userid?.name}</span>
                          </Link>
                          </button>
                          <button onClick={()=>deletesurvey(person._id)} className="text-red-600 hover:text-indigo-900 m-4">
                           
                            Delete<span className="sr-only">, {person?.userid?.name}</span >
        
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  