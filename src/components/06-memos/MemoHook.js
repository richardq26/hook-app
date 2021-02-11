import React, { useMemo, useState } from "react";
import "../02-useEffect/effects.css";
import useCounter from "../../hooks/useCounter";
import { procesoPesado } from "../../helpers/procesoPesado";
export const MemoHook = () => {
  const { state, increment } = useCounter(10);
  const [show, setShow] = useState(true);
  

  // Le paso el proceso pesado y el [] indica cuando debo volver a memorizar
  const memoProcesoPesado= useMemo(() => procesoPesado(state), [state])
  return (
    <>
      <h1>MemoHook</h1>
      <hr />
      <p>{memoProcesoPesado}</p>
      <h2> Counter: <small>{state} </small> </h2>
      <button className="btn btn-primary" onClick={ increment }>+1</button>
      <button className="btn btn-outline-primary ms-3" onClick={()=>{setShow(!show)}}>Mostrar / Ocultar {JSON.stringify(show)}</button>
      
    </>
  );
};