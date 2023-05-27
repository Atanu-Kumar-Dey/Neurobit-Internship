import { configureStore } from '@reduxjs/toolkit'
import step from './stateSlice'
import jsonData from './jsonDataSlice'

export const store = configureStore({
    reducer: {
        step,
        jsonData
    },
})