import React, { useEffect, useState } from 'react'

function UseEffect() {
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