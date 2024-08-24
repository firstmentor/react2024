import React, { useEffect, useRef, useState } from 'react'

function UseRef() {
  const [val,setVal] =useState("")
  const [num,setNum] = useState(0)

  const refElem =useRef(0)  //object return karta hai key current
  //mutable value ko store kart hai or rerender nahi karta
  //console.log(refElem.current)

  const change =(event)=>{
    setVal(event.target.value)
    refElem.current =refElem.current+1
  }
  

  // useEffect(()=>{
  //   setNum(num+1)
  //   //console.log("hello")
  // },[val])

  
  return (
    <>
      <h1>Useref Hook:</h1>
      <input type="text" value={val} onChange={change}/>
      {/* <h1>count:{num}</h1> */}
      <h1>count : {refElem.current} </h1>


  
      
    </>
  )
}

export default UseRef