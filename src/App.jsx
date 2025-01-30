import { useState } from "react"
import Generator from "./Generator"
export default function App() {

// WATCH THIS VID!! https://www.youtube.com/watch?v=91TIUURx5JM

const [val, setVal] = useState(0)
const [components, setComponents] = useState([])
// const click = () => {
//   console.log(val)
// }
const change = e => {
  // console.log(e.target.value)
  setVal(e.target.value)
  setComponents([])
}


const handleClick = () => {
  setComponents([])
  for (let i = 1; i <= val; i++){
    setComponents(components => [...components,
      <div key={i}>
        <h2>Planet {i}</h2>
          <Generator/>
      </div>
    ])
  }
  return components
}

  return (
    <>
      <h1>Planet Generator</h1>
      <div className="results">
        <p>How many planets would you like to generate? </p>
      <div className="inputButton">
        <input type="text" onChange={change}/> 
        <button onClick={handleClick}>Generate</button>
      </div>
        {components}
      </div>
    </>
  )
}
