import React,{useState} from 'react'
import ChildComponent from './ChildComponent';

function Memo() {
    // Exmaple 1
    const [count, setCount] = useState(0);

    // Example 1
    console.log("parent component!!"); //rerender 
    return (
        <>
            <h1>Memo (Higher Order Component HOC)</h1>

            <ChildComponent count={count} />

            <h2>Count:{count}</h2>
            <button onClick={() => setCount(count + 1)}>Count+</button>

        </>
    )
}

export default Memo