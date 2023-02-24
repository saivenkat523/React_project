import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import ComponentOne from "./ComponentOne";

function App() {

  let numberOne  = 0;
  const [number, setNumber] = useState(0);
  const [person, setPerson] = useState({
    name: "sai",
    age: 21
  })

  const [numberList, setNumberList] = useState([0])

  const increaseCount = () => {
    setNumber(number + 1);
  }

  const changeName = () => {
    setPerson(previousValue => {
      return {...previousValue, name: "ven"}
    })
  }

  const addValue = () => {
    setNumber(number+1);
    setNumberList(previousValue => {
      return [...previousValue, number]
    })
  }

  useEffect(() => {
    console.log("This component has mounted.")
  
    
    
  }, [])

  return (
    <div>
      <h1>Hello World</h1>
      <div>The name is {person.name} and age {person.age}</div>
      <div> This List contains {JSON.stringify(numberList)}</div>
      <button onClick = {addValue}>Click to increase count {number} </button>
      <ComponentOne />
    </div>
  )
}

export default App