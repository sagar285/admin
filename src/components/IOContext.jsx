"use client"
import React ,{createContext, useState,useContext}from 'react'

const InputContext =createContext();

// export const  DataType = [
//     { id: 1, name: 'Text' },
//     { id: 2, name: 'Images' },
//   { id: 3, name: 'Audio' },
//   { id: 4, name: 'Video' },
//   { id: 5, name: 'Document' },
// ]

const IOContext = ({children}) => {

const [input,setinput]=useState()
const [output,setoutput]=useState()

  return (
   <InputContext.Provider value={{output,setoutput}}>
   {children}
   </InputContext.Provider>
  )
}



const useinputOutputContext = () => useContext(IOContext);

export { useinputOutputContext, IOContext };