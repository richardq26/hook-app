import { useState } from "react";

const useCounter = (initialState = 10) => {
  // Por defecto es 10, si no recibe nada
  const [state, setState] = useState(initialState);

  const increment = (factor = 1) => {
    // Por defecto es 1, si no recibe nada
    setState(state + factor);
  };
  const decrement = (factor = 1) => {
    setState(state - factor);
  };
  const reset = () => {
    setState(initialState);
  };

  return {
    state,
    increment,
    decrement,
    reset,
  };
};

export default useCounter;
