import React from 'react'
import '../index.css'

function CSSStyling() {
    const boxcss={
        color:"red",
        margin:"50px"
    }
    return (
        <>
            <h1 className='a'>
                CSS Styling
            </h1>
            <h2 style={{color:"red",backgroundColor:'green'}}>
                hello
            </h2>
            <h3 style={boxcss}>
                hwijd
            </h3>
        </>


    )
}

export default CSSStyling