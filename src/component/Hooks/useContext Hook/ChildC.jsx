import React, { useContext } from 'react'
import { Data ,DataOne} from './UseContect1'

function ChildC() {
    const name = useContext(Data)
    const lastname = useContext(DataOne)
  return (
    <>
    <h1>Child C  {name} {lastname}</h1>

    </>
  )
}

export default ChildC