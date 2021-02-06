import React from "react";
import useCounter from "../../hooks/useCounter";

import "./CounterApp.css";
const CounterWithCustomHook = () => {
  const { state, increment, decrement, reset } = useCounter(100);
  return (
    <>
      <h1>Counter con customHook: { state } </h1>
      <hr />
      <button className="btn btn-primary me-2" onClick={()=>decrement(2)}>-2</button>
      <button className="btn btn-primary me-2" onClick={reset}>Reset</button>
      <button className="btn btn-primary" onClick={()=>increment()}>+1</button>
    </>
  );
};

export default CounterWithCustomHook;
