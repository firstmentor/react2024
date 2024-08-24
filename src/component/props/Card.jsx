import React from 'react'
import img from  '../../image/2.jpg'

export default function Card(props) {
    //props object return karte hai
    //console.log(props)
  return (
    <>
      <div className='card'>
        <img src={props.img} alt="" />
        <h1>Nature {props.title} Image</h1>
      </div>
    </>
  )
}
