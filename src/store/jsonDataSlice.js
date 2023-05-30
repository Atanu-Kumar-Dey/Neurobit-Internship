import { createSlice } from "@reduxjs/toolkit";
import MenuItem from '@mui/material/MenuItem'

const initialState = {
    channels: null,
    optionals: null,
};

export const jsonDatSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        setData: (state, action) => {
            const { channels, optionals } = action.payload;
            state.channels = channels;
            state.optionals = optionals;
        },
        addSubRow: (state, action) => {
            const { rowId = 0, subrowId } = action.payload;
            if (typeof state.channels[rowId] === 'string') {
                state.channels[rowId] = [];
            }
            state.channels[rowId].push(subrowId);
            localStorage.setItem("channels", JSON.stringify(state.channels))
        },
        removeSubRow: (state, action) => {
            const { rowId = 0, subrowId } = action.payload;
            if (typeof state.channels[rowId] !== 'string') {
                if (state.channels[rowId][subrowId]) {

                }
            }
        },
    },
});

// Action creators are generated for each case reducer function
export const { setData, addSubRow } = jsonDatSlice.actions;

export default jsonDatSlice.reducer;