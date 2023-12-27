import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './Greetings'
import Appp from './appp';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     // <Greeting/>
     <Appp/>
    </>
  )
}

export default App
