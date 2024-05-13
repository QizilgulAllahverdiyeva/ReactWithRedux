import { configureStore } from '@reduxjs/toolkit'
import colorsReducer from '../redux/features/colors/colorsSlice'
import filteredReducer from '../redux/features/colors/colorsSlice'
export default configureStore({
  reducer: {
    colors : colorsReducer,
  },
})