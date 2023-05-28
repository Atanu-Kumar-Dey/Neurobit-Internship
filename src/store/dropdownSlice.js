import { createSlice } from "@reduxjs/toolkit";

const dropdownSlice = createSlice({
    name: 'dropdown',
    initialState: {},
    reducers: {
        updateDropdownData: (state, action) => {
            const { divId, dropdownId, data } = action.payload;
            state[divId] = {
                ...state[divId],
                [dropdownId]: data,
            };
        },
    },
});

export const { updateDropdownData } = dropdownSlice.actions;
export default dropdownSlice.reducer;