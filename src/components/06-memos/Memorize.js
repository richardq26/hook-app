import React, { useState } from "react";
import "../02-useEffect/effects.css";
import useCounter from "../../hooks/useCounter";
import { Small } from "./Small";
export const Memorize = () => {
  const { state, increment } = useCounter(10);
  const [show, setShow] = useState(true);
  return (
    <>
      <h1>Memorize</h1>
      <hr />
      <h2> Counter: <Small value={state} /> </h2>
      <button className="btn btn-primary" onClick={ increment }>+1</button>
      <button className="btn btn-outline-primary ms-3" onClick={()=>{setShow(!show)}}>Mostrar / Ocultar {JSON.stringify(show)}</button>
      
    </>
  );
};
