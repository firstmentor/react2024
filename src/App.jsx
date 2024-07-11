import { useState } from 'react'
import './App.css'
import HideShowandToggle from './component/HideShowandToggle'
import Props from './component/Props'
import UpdateVaribale from './component/UpdateVaribale'
import UseState1 from './component/UseState1'
import UserState from './component/UserState'
import RenderMultipleElements from './component/ RenderMultipleElements'
import CSSStyling from './component/CSSStyling'
import Props12 from './component/props/Props12'
import Images from './component/Images'
import UseEffect from './component/Hooks/UseEffect'
import UseEffect1 from './component/Hooks/UseEffect1'
import CardComponent from './component/props/CardComponent'
import ConditionalRendering from './component/ConditionalRendering'
import DigitalClock from './component/Hooks/DigitalClock'
import HandlingEvents from './component/Hooks/HandlingEvents '
import ControlledandUncontrolled from './component/Hooks/ControlledandUncontrolled'

function App() {
  let data ="ravi"
  const [count,setCount] =useState(0)

  return (
    <>
     {/* <RenderMultipleElements/> */}
      {/* <UpdateVaribale/> */}
      {/* <UserState/> */}
      {/* <UseState1/> */}
      {/* <HideShowandToggle/> */}
      {/* <Props d={data} c={count}/> */}
      {/* <button onClick={()=>setCount(count+1)}>update count</button> */}
      {/* <CSSStyling/> */}
      {/* {<Props12 name={"ram"}/>} */}
      {/* <CardComponent/> */}
      {/* <ConditionalRendering/> */}
      {/* <Images /> */}
      {/* <UseState1/> */}
      {/* <UseEffect/> */}
      {/* <UseEffect1/> */}
      {/* <DigitalClock/> */}
      {/* <HandlingEvents/> */}
      <ControlledandUncontrolled/>
    </>
  )
}

export default App
