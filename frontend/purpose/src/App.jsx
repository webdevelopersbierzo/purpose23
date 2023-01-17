import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1 className='text-violet-500'>Hola mundo</h1>
    </div>
  )
}

export default App
