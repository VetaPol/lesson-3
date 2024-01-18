import React, {useState} from 'react'

function ChangeColor() {
 const [backgroundcolor, setBackgroundcolor] = useState("yellow")
     
function randomColor() {
    const color = "#" + Math.floor(Math.random() * 16770000)
    toString(16)
    setBackgroundcolor(color)
}   
  return (
    <div
    onMouseOut={randomColor} onMouseOver={randomColor}
    style={{ backgroundColor: backgroundcolor, width: "500px", height:"500px", border:"1px solid black"}}>
    </div>
  )
}

export default ChangeColor