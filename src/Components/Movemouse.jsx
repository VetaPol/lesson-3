import React, {useState} from 'react'

function Movemouse() {
    const [coordinates, setCoordinates] = useState({ x:0, y:0 })
    const handleMouseMove = (e) => {
        // console.log(e.nativeEvent.clientX)
        setCoordinates({
            x: e.nativeEvent.clientX,
            y: e.nativeEvent.clientY,
        })
    }
 
    return (
    <div 
    onMouseMove={handleMouseMove}
    style={{width: "500px", height:"500px", border: "1px solid black" }}>
        Coordinates: x: {coordinates.x} y: {coordinates.y}
        
    </div>
  )
}

export default Movemouse