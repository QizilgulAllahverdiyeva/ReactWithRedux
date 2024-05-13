import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { filteredBox } from '../redux/features/colors/colorsSlice'


const ColorBoxes = () => {
    const colors = useSelector((state) => state.colors.data)
    const dispatch = useDispatch()
    console.log(colors);
  return (
    <div className='colorBox'>
        {
            colors.map((elem)=>{
            return <div onClick={()=> {
                console.log(elem.color);
            dispatch(filteredBox(elem))
            }}
             key={elem.id} style={{backgroundColor:elem.color}} className='colorsBoxes'>{elem.color}</div>
            })
        }   
    </div>

  )
}

export default ColorBoxes