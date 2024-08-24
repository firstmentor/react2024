import React from 'react'
import img from '../image/2.jpg'

function Images() {
  return (
    <>
     <img src={img} alt="" style={{width:"500"}} />
     
     <img src={"../../src/image/2.jpg"} alt="" style={{ width: 500 }} />

    
    </>
  )
}

export default Images


