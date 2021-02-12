import React, { useCallback, useState } from 'react'
import '../02-useEffect/effects.css';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(0);

    // const increment = () => {
    //     setCounter(counter +1);
    // }

    const increment = useCallback(
        (num) => {
            setCounter(c=> c+num);
        },
        [setCounter],
    )
    return (
        <div>
            <h1>UseCallbackHook</h1>
            <hr/>
            <h2>Counter: { counter } </h2>
            <ShowIncrement increment = {increment }/>
        </div>
    )
}
