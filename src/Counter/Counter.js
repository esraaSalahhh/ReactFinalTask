import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setCounterValue } from "../store/actions/actions";
export default function Counter() {
    const {
        coun: { counter },
    } = useSelector((state) => state);

    const dispatch = useDispatch();
    const increase = () => {
        dispatch(setCounterValue(counter + 1));
    };
    const decrease = () => {
      if(counter>0){
        dispatch(setCounterValue(counter - 1));
      }
    };
    const reset = () => {
        dispatch(setCounterValue(0));
    };
    return (
        <>
            <h1>Counter app</h1>
            <span>Count : </span>{counter}
            <br />
            <br />
            <button className="btn btn-info " onClick={increase} >
               <b>+</b> 
      </button>
            <button className="btn btn-info ml-2" onClick={decrease} >
             <b>-</b>   
      </button>
      <button className="btn btn-info ml-2" onClick={reset} >
                reset
      </button>
        </>
    )
}