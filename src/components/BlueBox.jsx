import React from 'react'
import './style.css'
import { useSelector } from 'react-redux'

const BlueBox = () => {
    const blueBox =useSelector((state)=>state.colors.blueBox)
  return (
    <div className='boxes'>BlueBox
   { blueBox.map((elem)=> <div className="colorBox" style={{backgroundColor:elem.color, color:'white'}}>{elem.id}</div>)}
    
    </div>
  )
}

export default BlueBox