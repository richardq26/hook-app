import React, { useContext } from 'react';
import { UserContext } from './UserContext';
export const HomeScreen = () => {
    /* Le decimos que busque la instancia en el arbol de componentes*/ 
    // const userContext = useContext(UserContext);
    const { user } = useContext(UserContext);
    console.log(user);
    return (
        <div>
            <h1>HomeScreen</h1>
            <hr/>
            <pre>
                {/* user, replacer, posiciones */}
                {JSON.stringify(user, null, 3)}
            </pre>
        </div>
    )
}
