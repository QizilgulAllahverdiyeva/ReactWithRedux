import { createSlice } from '@reduxjs/toolkit'

export const colorsSlice = createSlice({
  name: 'colors',
  initialState: {
    data: [
      {
          id:1,
          color: "red"
      },
      {
          id:2,
          color: "blue"
      },
      {
          id:3,
          color: "green"
      },
      {
          id:4,
          color: "green"
      },
      {
          id:5,
          color: "blue"
      },
      {
          id:6,
          color: "red"
      },
  ],
  redBox: [],
  greenBox:[],
  blueBox:[]
  },

  reducers: {
    filteredBox: (state,action) => {
      console.log(action.payload)
      if(action.payload.color == "red" ){
        state.redBox.push(action.payload)
      }
      else if (action.payload.color == "green"){
        state.greenBox.push(action.payload)
      }
      else{
        state.blueBox.push(action.payload)
      }
        
      state.data=[...state.data].filter((elem)=>elem.id!=action.payload.id)
    }

},
 
  },
)

// Action creators are generated for each case reducer function
export const { filteredBox } = colorsSlice.actions

export default colorsSlice.reducer