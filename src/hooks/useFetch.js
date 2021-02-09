import { useEffect, useRef, useState } from "react";
import axios from "axios";
const useFetch = (url) => {
  const isMounted = useRef(true);
  const [state, setState] = useState({
    resp: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setState({ resp: null, loading: true, error: null });
    axios.get(url).then((resp) => {
      if (isMounted.current) {
        setState({
          loading: false,
          error: null,
          resp,
        });
      }
    });
  }, [url]);

  return state;
};

export default useFetch;
