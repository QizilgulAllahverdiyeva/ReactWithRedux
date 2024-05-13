import React from 'react'
import { useSelector } from 'react-redux'

const GreenBox = () => {
    const greenBox =useSelector((state)=>state.colors.greenBox)
  return (
    <div className='boxes'>GreenBox
   { greenBox.map((elem)=> <div className="colorBox" style={{backgroundColor:elem.color, color:'white'}}>{elem.id}</div>)}
    
    </div>
  )
}

export default GreenBox