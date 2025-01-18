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
import IncrementDecrement from './component/Hooks/IncrementDecrement'
import UseRef from './component/Hooks/UseRef'
import PropDrilling from './component/Hooks/Prop Drilling/PropDrilling'
import ContextAPI from './component/Hooks/ContextAPI/ContextAPI '
import UseContect1 from './component/Hooks/useContext Hook/UseContect1'
import UseMemo from './component/Hooks/UseMemo'
import Form from './component/Hooks/Form'
import GetInputBoxValue from './component/Hooks/GetInputBoxValue'
import Form1 from './component/Hooks/Form1'
import MapFunction from './component/Hooks/MapFunction'
import Lifecyclemethod from './component/Hooks/Lifecyclemethod'
import ArrayMapMethod from './component/Hooks/ArrayMapMethod'
import ReusableComponents from './component/Hooks/ReusableComponents'
import Memo from './component/Hooks/Memo'
import FetchAPI from './component/Fetch API/FetchAPI'

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
      {/* <Props d={data} c={count}/>
      <button onClick={()=>setCount(count+1)}>update count</button>  */}
       {/* <CSSStyling/>  */}
      {/* {<Props12 name={"ram"}/>} */}
      {/* <CardComponent/> */}
      {/* <ConditionalRendering/> */}
      {/* <Images /> */}
      {/* <UseState1/> */}
    
        {/* <UseEffect/> */}
      {/* <UseEffect1/>7 */}
      {/* <DigitalClock/> */}
      {/* <HandlingEvents/> */}
      {/* <ControlledandUncontrolled/> */}
      {/* <GetInputBoxValue/> */}
      {/* <Form/> */}
      {/* <Form1/> */}
      {/* <MapFunction/> */}
      {/* <IncrementDecrement/> */}
      {/* <Lifecyclemethod/> */}
      {/* <ArrayMapMethod/> */}
      {/* <ReusableComponents/> */}
      {/* <Memo/> */}
      <FetchAPI/>
      {/* <UseRef/> */}
      {/* <PropDrilling/> */}
      {/* <ContextAPI/> */}
      {/* <UseContect1/> */}
      {/* <UseMemo/> */}

    </>
  )
}

export default App
