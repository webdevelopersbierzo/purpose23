import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Menu from './components/menu'
import PurposeList from './components/PurposeList'
import { Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full bg-slate-900  h-screen text-white'>
      <Menu></Menu>
      <div className='flex flex-col  text-2xl '>
      <h2 className="text-3xl"> Mis propositos para esta 2023</h2>
      <Link to={'/profile'}> HAZ CLICK AQUI</Link>
      </div>
      
    </div>
  )
}

export default App
