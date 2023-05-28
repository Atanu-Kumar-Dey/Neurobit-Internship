import { createSlice } from "@reduxjs/toolkit";

const dropdownSlice = createSlice({
    name: 'dropdown',
    initialState: {},
    reducers: {
        updateDropdownData: (state, action) => {
            const { rowId, dropdownId, data } = action.payload;
            state[rowId] = {
                ...state[rowId],
                [dropdownId]: data,
            };
        },
    },
});

export const { updateDropdownData } = dropdownSlice.actions;
export default dropdownSlice.reducer;