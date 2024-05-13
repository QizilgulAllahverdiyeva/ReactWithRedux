import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BlueBox from './components/BlueBox'
import RedBox from './components/RedBox'
import GreenBox from './components/GreenBox'
import ColorBoxes from './components/ColorBoxes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ColorBoxes/>
      <div className='display'>
      <BlueBox/>
      <RedBox/>
      <GreenBox/>
      </div>
    </>
  )
}

export default App
