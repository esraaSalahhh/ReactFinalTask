import React, { useContext } from "react";
import CounterContext from "./../context/counterContext";
export default function Counter(props) {
    
    const { value, setValue } = useContext(CounterContext);
    console.log(props);
    return (
        <>
            <h1>Counter app Using Context</h1>
            <span>Count : </span>{value}
            <br />
            <br />
            <button className="btn btn-info " onClick={() => setValue(value+1)} >
               <b>+</b> 
      </button>
            <button className="btn btn-info ml-2" onClick={() => setValue(value===0?0:value-1)} >
             <b>-</b>   
      </button>
      <button className="btn btn-info ml-2" onClick={() => setValue(0)} >
                reset
      </button>
        </>
    )
}