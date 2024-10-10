import React from 'react'
import { fname,lname } from './ContextAPI '

function ChildC() {
  return (
   <>  
    <h1>Child c</h1>
    <fname.Consumer>
      {
        (fname)=>{
          return(
            // <h1>My Name is {fname}</h1>
             <lname.Consumer>
              {
                (lname)=>{
                  return(
                    <h1>My Name is {fname} last {lname}</h1>
                  )
                }
              }


             </lname.Consumer>
          )

        }
      }
    </fname.Consumer>

   </>
  )
}

export default ChildC