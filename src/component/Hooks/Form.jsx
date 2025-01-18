import React, { useState } from 'react'

function Form() {
    const [name,setName] =useState()
    const [email,setEmail] =useState("")

    const handleSubmit=(e)=>{
        e.preventDefault()
      
        console.log(name,email)

    }
    // console.log(name)
    
  return (
    <>
      <form onSubmit={handleSubmit}> 
        name:
        <input type="text" name='' onChange={(e)=>setName(e.target.value)} />
        <br /><br />
        email:
        <input type="text"  name='' onChange={(e)=>setEmail(e.target.value)}/>
        <br /><br />
        <button type='submit' >Submit</button>

      </form>
    
    </>
  )
}

export default Form