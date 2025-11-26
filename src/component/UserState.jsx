import React, { useState } from 'react'

function UserState() {
 
    const [data ,setData] =useState("raj")
  

    const updateData=()=>{
      setData("ram kumar")

    }
    console.log("render")
  return (
   <>
    <h1>Use State {data}</h1>
    <button onClick={updateData}>update data</button>
    <button onClick={()=>setData("hrll233")}>update data12</button>

   </>
  )
}

export default UserState