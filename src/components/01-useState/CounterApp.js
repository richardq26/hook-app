import React, { useState } from "react";
import "./CounterApp.css";
const CounterApp = () => {
  const [state, setState] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
    counter4: 40,
  });
  // const { counter1, counter2 } = state;
  const handleAdd = () => {
    setState({ ...state, counter1: state.counter1 + 1 });
  };
  return (
    <>
      <hr />
      <h1>UseState</h1>
      <h2>Counter1 {state.counter1} </h2>
      <h2>Counter2 {state.counter2} </h2>
      <hr/>
      <button className="btn btn-primary" onClick={handleAdd}>
        Counter +1
      </button>
      <hr/>
    </>
  );
};

export default CounterApp;
