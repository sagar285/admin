"use client"
import {createContext,useState,useEffect,useContext} from "react"

 const UserContext =createContext();

 export const  DataType = [
    { id: 1, name: 'Text' },
    { id: 2, name: 'Images' },
  { id: 3, name: 'Audio' },
  { id: 4, name: 'Video' },
  { id: 5, name: 'Document' },
]

 const Userprovider = ({children})=>{
    const [isuser,setisuser] =useState(false);
    const [input,setinput]=useState(DataType[0])
const [output,setoutput]=useState(DataType[0])

    const getuser =async()=>{
        const user = localStorage.getItem("user")
        const token = localStorage.getItem("token")
        if(user && token){
            setisuser(true)
        }
    }
    useEffect(()=>{
          getuser();
    },[])

    return(
        <UserContext.Provider value={{isuser,setisuser,output,setoutput,input,setinput}}>
            {children}
        </UserContext.Provider>
    )
}

const useAuthentication = () => useContext(UserContext);

export { useAuthentication, Userprovider };

