import React, { useState } from "react";

function MyComponent() {
    
    const [count, setCount] = useState(0);

    
    const incrementCount = () => {
        setCount(count + 1);
        if(count===50){

            console.log("you have reached the 50th level")
        }
    };

    return (
        <div>
            <h1>Count NUMBERS: {count}</h1>
            <button onClick={incrementCount}>PLEASE CLICK ON THE BUTTON</button>
        </div>
    );
}

export default MyComponent;
