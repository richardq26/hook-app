import React, { useLayoutEffect, useRef, useState } from "react";
import "./layout.css";
import useFetch from "../../hooks/useFetch";
import useCounter from "../../hooks/useCounter";
export const Layout = () => {
  const { state, increment } = useCounter(1);
  const { resp, loading } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${state}`
  );
  // Si hay data, extrae la de la posición 0
  const { quote } = (!loading && resp.data.length>0) && resp.data[0];

  const pTag = useRef();
    const [boxSize, setBoxSize] = useState({});
  useLayoutEffect(() => {
     setBoxSize(pTag.current.getBoundingClientRect());
  }, [quote]);

  return (
    <div>
      <h1>LayoutEffect</h1>
      <hr />

      <blockquote className="blockquote text-end">
        <p ref= {pTag} className="mb-3">{quote}</p>
        
      </blockquote>
        <pre>
            {/* replacer = null*/ }
            {JSON.stringify(boxSize, null, 3)}
        </pre>
      <button className="btn btn-primary" onClick={increment}>
        Siguiente quote
      </button>
    </div>
  );
};
