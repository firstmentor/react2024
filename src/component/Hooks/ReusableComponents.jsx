import React from 'react'
import ReusableButton from './ReusableButton';
import ReusableList from './ReusableList';

function ReusableComponents() {
    // Example 1
    const handleButtonClick = () => {
        console.log("Button Clicked!");
    };

    // Example 2
    const countries = ["USA", "Canada", "India", "UK", "Aust", "Sri" ,"pn"];
    return (
        <>
            <div className="App">
                <h1>Reuse Component In React.</h1>

                {/* Example 1 */}
                <ReusableButton text="Click Me" onClick={handleButtonClick} />
                <ReusableButton text="Submit" onClick={handleButtonClick} />

                {/* Example 2 */}
                <ReusableList items={countries} />
            </div>
        </>
    )
}

export default ReusableComponents