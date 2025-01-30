import React, { useState, useCallback } from 'react'
import ChildComponent1 from './ChildComponent1';

function UseCallback() {
    {/* useEffect Lifecyclemethod 
    usememo value return karta */}
    {/* useCallback  function return karta hai  har bar new value create nahi karta jab tak change n ho koyi value */ }
    {/* ChildComponent  ke andar ap ne agar function pass kar rakhe hai to ap ko call back use karna hoga */ }
    
    // Normal Example 1
    const [count1, setCount1] = useState(0);
    console.log("Parent Rendered!!");

    // Example 2
    const [count2, setCount2] = useState(0);
    const incrementCount = useCallback(() => {   //ye function return karega
        setCount2((prevCount) => prevCount + 1);
        console.log("useCallback Hook!!");
    }, []);
    return (
        <>
            <h1>useCallback</h1>
            {/* Example 1 */}
            <p>Count 1: {count1}</p>
            <button onClick={() => setCount1(count1 + 1)}>Increment Count</button>
            <br />
            <br />

            {/* Example 2 */}
            <p>Count 2: {count2}</p>
            <ChildComponent1 increment={incrementCount} /> 
            {/* function pass kar diya incrementCount */}

        </>
    )
}

export default UseCallback