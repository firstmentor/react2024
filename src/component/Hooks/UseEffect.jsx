import React, { useEffect, useState } from 'react'

function UseEffect() {

    //jab bhi hamara componet update ya render hota hai  useefffect run hota hai or call hota hai
    const [count, setCount] = useState(0);
    const [data, setdata] = useState(100);

    useEffect(()=>{
        console.log("hello useeffect")
    },[])
    return (
        <>
            <p>You clicked {count} times</p>
            <p>You data {data} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <button onClick={() => setdata(data + 1)}>
                Click data
            </button>
        </>

    )
}

export default UseEffect