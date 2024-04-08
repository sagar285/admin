"use client"
import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'
import axios from 'axios'
import {useRouter} from "next/navigation"
import { useAuthentication } from '@/context/UserContext'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [agreed, setAgreed] = useState(false)
  const {isuser} =useAuthentication()
  const [user,setuser]=useState({name:"",email:"",password:"",confirmpassword:""})
  const [error,seterror]=useState(false)
  const router  =useRouter()

  if(isuser){
    router.push("/")
  }

  const submitdata =async(e)=>{
    e.preventDefault()
    const {name,email,password,confirmpassword} =user
    try {
    if(!name || !email || !email.includes("@") || !password || !password==confirmpassword){
      seterror(true)
      return;
    }
       const res = await axios.post("http://localhost:8000/api/v1/admin/register",user);
       if(res?.data?.adminexist){
        alert("this email already exist pls login")
        router.push("/auth/login")
       }
       if(!res?.data?.adminexist){
        alert("email registerd succesfully");
        router.push("/auth/login")
       }
      }catch(error){
             console.log(error)
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
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Signup</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Aute magna irure deserunt veniam aliqua magna enim voluptate.
        </p>
      </div>
      <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
              Name
            </label>
            <div className="mt-2.5">
              <input
              value={user.name}
              onChange={(e)=>setuser({...user,name:e.target.value})}
                type="text"
                name="company"
                id="company"
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
                       {error && !user.name && <span className='text-red-800'>pls enter email</span>}

            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2.5">
              <input
              value={user.email}
              onChange={(e)=>setuser({...user,email:e.target.value})}
                type="text"
                name="company"
                id="company"
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
                       {error && !user.email && <span className='text-red-800'>pls enter email</span>}
              {error && user.email && !user.email.includes("@") && <span className='text-red-800'>enter valid email</span>}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              Password
            </label>
            <div className="mt-2.5">
              <input
              value={user.password}
              onChange={(e)=>setuser({...user,password:e.target.value})}
                type="password"
                name="password"
                id="password"
                autoComplete="password"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
               {error && !user.password && <span className='text-red-800'>pls enter password</span>}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
             Confirm Password
            </label>
            <div className="mt-2.5">
              <input
              value={user.confirmpassword}
              onChange={(e)=>setuser({...user,confirmpassword:e.target.value})}
                type="password"
                name="password"
                id="password"
                autoComplete="password"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {error && !user.email && <span className='text-red-800'>pls enter confirmpassword</span>}
              {error && user.password != user.confirmpassword && <span className='text-red-800'>wrong confirmpassword</span>}
            </div>
          </div>
        </div>
        <div className="mt-10">
          {/* <button
          onClick={submitdata}
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Let's talk
          </button> */}

          <button
          onClick={submitdata}
          className='w-full'
          >
          Lets talk
          </button>
        </div>
      </form>
    </div>
  )
}
