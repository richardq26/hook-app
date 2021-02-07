import React, { useEffect, useState } from 'react'

const Message = () => {
    const [coords, setCoords] = useState({x:0, y:0});
    useEffect(() => {
        const mouseMove = (e)=>{
            const coordenadas = {x: e.x, y:e.y};
            setCoords(coordenadas);
        }
        window.addEventListener('mousemove', mouseMove)
        return () => {
            window.removeEventListener('mousemove', mouseMove);
        }
    }, [])

    return (
        <>
            <h3>Eres genial xd</h3>
            <p>
                Coordenada x: {coords.x} <br/>
                Coordenada y: {coords.y}
            </p>
        </>
    )
}

export default Message
