import React, { useEffect, useRef, useState } from 'react'

function UseRef() {

  // Example 1
  const inputRef = useRef(null);
  console.log(inputRef)

  // Example 2
  const handleButtonClick = () => {
    const inputValue = inputRef.current.value;
    alert(`Input Value: ${inputValue}`);
    console.log(`Input Value: ${inputValue}`);
  };


  return (
    <>
      <h1>useRef In React.</h1>

      {/* Example 1 */}
      <input ref={inputRef} type="text" />
      <button onClick={handleButtonClick}>Get Input Value</button>




    </>
  )
}

export default UseRef