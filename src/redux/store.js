import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slides/counterSlide'


export default configureStore({
    reducer: {
        counter: counterReducer
    },
})