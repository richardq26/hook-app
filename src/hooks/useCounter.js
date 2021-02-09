import { useState } from "react";

const useCounter = (initialState = 10) => {
  // Por defecto es 10, si no recibe nada
  const [state, setState] = useState(initialState);

  const increment = () => {
    // Por defecto es 1, si no recibe nada
    setState(state + 1);
  };
  const decrement = () => {
    setState(state - 1);
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
