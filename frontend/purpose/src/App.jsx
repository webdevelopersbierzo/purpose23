import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Menu from './components/menu'
import PurposeList from './components/PurposeList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full'>
      <Menu></Menu>
      <PurposeList></PurposeList>
    </div>
  )
}

export default App
