import React from 'react'

function UpdateVaribale() {
    let data ="ram"

    const updateData=(a)=>{
        let data ="raj"
        alert(data)

    }
    console.log("render component")
  return (
    <>
      <h1>Update Varibale {data}</h1>

      <button onClick={updateData}>update data</button>
    
    </>
  )
}

export default UpdateVaribale