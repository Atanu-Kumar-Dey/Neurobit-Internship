import { configureStore } from '@reduxjs/toolkit'
import step from './stateSlice'
import jsonData from './jsonDataSlice'
import dropdown from "./dropdownSlice"
import channelSlice from "./channelSlice"

export const store = configureStore({
    reducer: {
        step,
        jsonData,
        dropdown,
        channelSlice
    },
})