import React, { useState } from 'react'

function ControlledandUncontrolled() {
    const [fname,setFname] =useState("code")
    const getname =(event) =>{
        console.log(event.tarhet.value)
    }
  return (
    <>
     <form>
        <label htmlFor="">Enter firstname</label>
        <input type="text" onChange={getname} value={fname} />
     </form>
    
    
    </>
  )
}

export default ControlledandUncontrolled