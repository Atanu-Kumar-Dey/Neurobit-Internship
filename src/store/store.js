import { configureStore } from '@reduxjs/toolkit'
import step from './stateSlice'
import jsonData from './jsonDataSlice'
import dropdown from "./dropdownSlice"

export const store = configureStore({
    reducer: {
        step,
        jsonData,
        dropdown
    },
})