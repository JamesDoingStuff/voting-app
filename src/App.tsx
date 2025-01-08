import { useState } from 'react'
import './App.css'
import Collage from './components/Collage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Collage />
  )
}

export default App
