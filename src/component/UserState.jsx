import React, { useState } from 'react'

function UserState() {
    const [data ,setData] =useState("Hello World")
    const updateData=()=>{
        setData("Hello React")

    }
    console.log("hello pn")
  return (
   <>
    <h1>Use State {data}</h1>
    <button onClick={updateData}>update data</button>
    <button onClick={()=>setData("hrll233")}>update data12</button>

   </>
  )
}

export default UserState