import { createSlice } from "@reduxjs/toolkit";

const dropdownSlice = createSlice({
    name: "dropdown",
    initialState: {},
    reducers: {
        updateDropdownData: (state, action) => {
            const { rowId, dropdownId = "dropdownId", subrowId = 0, data = "dropdown value" } = action.payload;
            if (!state[rowId]) {
                state[rowId] = {
                    [subrowId]: {},
                };
            }
            state[rowId][subrowId] = {
                ...state[rowId][subrowId],
                [dropdownId]: data,
            };

        },
    },
});

export const { updateDropdownData } = dropdownSlice.actions;
export default dropdownSlice.reducer;