import React, { useState } from 'react'

function UserState() {
    const [data, setData] = useState("ram")

    const updateData = () => {
        setData("rohit")

    }
    const UpdateVaribale = (a) => {
        setData(a)

    }
    console.log("render")
    return (
        <>
            <h1>Use State {data}</h1>


            <button onClick={updateData}>update data</button>
            <button onClick={()=>setData("raj")}>update data12</button>
            <button onClick={()=>UpdateVaribale("pn")}>update data123</button>


        </>
    )
}

export default UserState