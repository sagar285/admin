// import { useState } from 'react'
// import { Listbox } from '@headlessui/react'

// const DataType = [
//     { id: 1, name: 'Text', unavailable: false },
//     { id: 2, name: 'Images', unavailable: false },
//   { id: 3, name: 'Audio', unavailable: false },
//   { id: 4, name: 'Video', unavailable: false },
//   { id: 5, name: 'Document', unavailable: false },
// ]

// export default function IO() {
//   const [selectedDatatype, setselectedDatatype] = useState(DataType[0])

//   return (
//     <Listbox value={selectedDatatype} onChange={setselectedDatatype}>
//       <Listbox.Button>{selectedDatatype.name}</Listbox.Button>
//       <Listbox.Options>
//         {DataType.map((datatype) => (
//           <Listbox.Option
//             key={datatype.id}
//             value={datatype}
//             disabled={datatype.unavailable}
//           >
//             {datatype.name}
//           </Listbox.Option>
//         ))}
//       </Listbox.Options>
//     </Listbox>
//   )
// }


import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { useinputOutputContext } from './IOContext'
import { useAuthentication } from '@/context/UserContext'

const DataType = [
    { id: 1, name: 'Text'  },
    { id: 2, name: 'Images' },
  { id: 3, name: 'Audio'  },
  { id: 4, name: 'Video' },
  { id: 5, name: 'Document' },
]

export default function IO() {
  const {input,setinput}=useAuthentication()
    // const {} =useinputOutputContext()


  return (
    <div className=" top-16 w-72">
      <Listbox value={input} onChange={setinput}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">{input.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className=" mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {DataType.map((datatype, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                    }`
                  }
                  value={datatype}
                >
                  {({ input }) => (
                    <>
                      <span
                        className={`block truncate ${
                          input ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {datatype.name}
                      </span>
                      {input ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}