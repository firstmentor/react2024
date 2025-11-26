import React from 'react'

function MapFunction() {
    const items = []
    return (
        <>
            <h1>Map Function</h1>
            <div>{items.length > 0 ? (
                <ul>
                    {
                        items.map((item,index) => (
                            <li key={index}>{item}</li>
                        ))
                    }
                </ul>


            ) : (
                <p>No Itesm to display</p>
            )}





            </div>



        </>
    )
}

export default MapFunction