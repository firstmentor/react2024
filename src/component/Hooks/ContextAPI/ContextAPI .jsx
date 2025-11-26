import React, { createContext } from 'react'
import ChildA from './ChildA'

//context Api 
//createContext, Provider ,Consumer

const fname = createContext()
const lname = createContext()

function ContextAPI() {
  // let name = "pninfosys"
  return (
    <>
      <h1>Context API </h1>
      <fname.Provider value={"pninfosys"}>
        <lname.Provider value={"gwalior"}>
          
          <ChildA />

        </lname.Provider>
      </fname.Provider>

    </>
  )
}

export default ContextAPI

export { fname,lname }  