import React, { useEffect, useState } from 'react'

function UseEffect1() {
    const [count, setCount] = useState(0);
    const [data, setdata] = useState(100);

    
    useEffect(() => {
        console.log("hello count")

    }, [count])

    useEffect(() => {
        console.log("hello data")
    }, [data])


    return (
        <>
            <p>You clicked {count} times</p>
            <p>You data {data} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click count
            </button>
            <button onClick={() => setdata(data + 1)}>
                Click data
            </button>
        </>
    )
}

export default UseEffect1