import React from 'react'
import { useSelector } from 'react-redux'

const RedBox = () => {
    const blueBox =useSelector((state)=>state.colors.redBox)
  return (
    <div className='boxes'>RedBox
   { blueBox.map((elem)=> <div className="colorBox" style={{backgroundColor:elem.color, color:'white'}}>{elem.id}</div>)}
    
    </div>
  )
}

export default RedBox