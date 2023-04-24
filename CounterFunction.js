import React,   { useState }from "react";

function CounterFunction()
{

    let [number,setnumber] = useState(0)

function Increment()
{
    setnumber(++number)
}


    return
    (
        <div>
            <h3>functional componenet</h3>
            
            <h1>Counter = {number}</h1>
            <button onClick={e => Increment()}>Increment</button>
            <hr></hr>
        </div>  
    )
}
export default CounterFunction;

//wasi= readabilitiy

