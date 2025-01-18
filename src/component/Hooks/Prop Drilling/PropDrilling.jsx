import React from 'react'
import ChildA from './ChildA'
// import ChildC from './ChildC'

function PropDrilling() {
   let name = "pninfosy"

  return (
   <>
    <h1>Prop Drilling</h1>
    <ChildA name={name}/>
    
   
   </>
  )
}

export default PropDrilling