"use client";

import IO from '@/components/IO'
import Output from '@/components/Output'
import api from '@/components/axios'
import { useAuthentication } from '@/context/UserContext'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function AddSurvey() {

    const {isuser,setisuser,input,output} =useAuthentication()
    const router =useRouter()
    const [survey,setsurvey]=useState({
     title:"",
    description:"",
    instructions:"",
    pay:0,
    qualification:"",
    token:""})
    const [error,seterror]=useState(false)
   


    useEffect(()=>{
      const token =localStorage.getItem("token")
      if(token){
      setsurvey({...survey,token:token})
      }
    },[])




    const submitdata =async(e)=>{
        e.preventDefault()
        try {
            const res = await api.post("/survey/addSurvey",{
                title:survey.title,
                description:survey.description,
                instructions:survey.instructions,
                pay:survey.pay,
                qualification:survey.qualification,
                input:input?.name,
                Output:output?.name,
                token:survey.token
            })
            console.log(res.data) 
            { 
                alert("survey created succefully")
                router.push("/");
            }
        } catch (error) {
            console.log(error.message)
            alert(error.message)
        }
    }

  return (

 <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Add Survey</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Aute magna irure deserunt veniam aliqua magna enim voluptate.
        </p>
      </div>
      <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
              Title
            </label>
            <div className="mt-2.5">
              <input
              value={survey.title}
              onChange={(e)=>setsurvey({...survey,title:e.target.value})}
                type="text"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
                       {error && !survey.title && <span className='text-red-800'>pls enter email</span>}

            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
              Description
            </label>
            <div className="mt-2.5">
              <textarea
              rows={3}
              value={survey.description}
              onChange={(e)=>setsurvey({...survey,description:e.target.value})}
                type="text"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
                       {error && !survey.description && <span className='text-red-800'>pls enter email</span>}
              {error && survey.description && !survey.description.includes("@") && <span className='text-red-800'>enter valid email</span>}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              Instructions
            </label>
            <div className="mt-2.5">
              <textarea
              rows={3}
              value={survey.instructions}
              onChange={(e)=>setsurvey({...survey,instructions:e.target.value})}
                type="text"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
               {error && !survey.instructions && <span className='text-red-800'>pls enter password</span>}
            </div>
            <div className="mt-2.5">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              qualification
            </label>
              <textarea
              rows={3}
              value={survey.qualification}
              onChange={(e)=>setsurvey({...survey,qualification:e.target.value})}
                type="text"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
               {error && !survey.instructions && <span className='text-red-800'>pls enter password</span>}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
             Payment
            </label>
            <div className="mt-2.5">
              <input
              value={survey.pay}
              onChange={(e)=>setsurvey({...survey,pay:e.target.value})}
                type="text"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {error && !survey.description && <span className='text-red-800'>pls enter confirmpassword</span>}
              {error && survey.instructions != survey.pay && <span className='text-red-800'>wrong confirmpassword</span>}
            </div>
          </div>
        </div>
      
        <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
           Input
            </label>
            <div className="mt-2.5">
            <IO/>
              {error && !survey.description && <span className='text-red-800'>pls enter confirmpassword</span>}
              {error && survey.instructions != survey.pay && <span className='text-red-800'>wrong confirmpassword</span>}
            </div>
          </div>
        <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
           OutPut
            </label>
            <div className="mt-2.5">
            <Output/>
              {error && !survey.description && <span className='text-red-800'>pls enter confirmpassword</span>}
              {error && survey.instructions != survey.pay && <span className='text-red-800'>wrong confirmpassword</span>}
            </div>
          </div>
   
        <div className="mt-10">
          <button
          onClick={submitdata}
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}