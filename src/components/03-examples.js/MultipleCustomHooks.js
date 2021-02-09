import React from "react";
import "../02-useEffect/effects.css";
import useFetch from "../../hooks/useFetch";
import useCounter from '../../hooks/useCounter';
export const MultipleCustomHooks = () => {
  
  const { state, increment }= useCounter(1);
  const { resp, loading } = useFetch(`https://www.breakingbadapi.com/api/quotes/${state}`);
  
  // Si hay data, extrae la de la posición 0
  const { quote, author } = (!loading && resp.data.length>0) && resp.data[0];

  return (
    <div>
      <h1>Quotes de Breaking bad</h1>
      <hr />

      {loading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote text-end">
          <p className="mb-3">{quote}</p>
          <footer className="blockquote-footer">{ author }</footer>
        </blockquote>
      )}

      <button className="btn btn-primary" onClick={increment}> Siguiente quote</button>
    </div>
  );
};
