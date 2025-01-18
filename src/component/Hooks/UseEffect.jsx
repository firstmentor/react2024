import React, { useEffect, useState } from 'react'

function UseEffect() {

    //jab bhi hamara componet update ya render hota hai  useefffect run hota hai or call hota hai
    const [count, setCount] = useState(0);
    const [data, setdata] = useState(100);

    const getApi = () => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => console.log(json))
    }
    
    useEffect(() => {
        getApi()

        console.log("hello render useEffect")
    },[count])
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