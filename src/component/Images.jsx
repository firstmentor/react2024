import React from 'react'
import img from '../image/2.jpg'

function Images() {
  return (
    <>
     <img src={img} alt="" style={{width:"500"}} />
     <img src={require("../image/2.jpg")} alt="" />

    
    </>
  )
}

export default Images