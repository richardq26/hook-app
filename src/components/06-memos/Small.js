import React, { memo } from 'react';


// memo es una funcion que devuelve la forma memorizada del componente
// solo se dispara si las properties cambian, o sea value
export const Small = memo(({value}) => {
    console.log("Mostrando Small.js");
    return (
        <small>
            <small>{value}</small>
        </small>
    )
})
