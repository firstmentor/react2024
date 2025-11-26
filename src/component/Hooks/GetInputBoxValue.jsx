import React, { useState } from 'react'

function GetInputBoxValue() {
    const [inputValue, setInputValue] =useState("")
    const [inputValueShow,setInputValueHide] =useState(false)
    const handleChange =(event)=>{
        console.log(event.target.value)
        setInputValue(event.target.value)

        //remove submit value
        setInputValueHide(false)
    }
  return (
    <> 
     {/* <h1>GetInputBoxValue {inputValue}</h1> */}
     <h1>
        {
            inputValueShow ? inputValue : ""
        }
     </h1>

     <input type="text"  onChange={handleChange}/>


     <button onClick={()=>setInputValueHide(true)}>Submit</button>
    
    </>
  )
}

export default GetInputBoxValue