import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0
};

export const stateSlice = createSlice({
    name: "step",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
            localStorage.setItem("state", state.value);
        },
        decrement: (state) => {
            state.value -= 1;
            localStorage.setItem("state", state.value);
        },
        reset: (state) => {
            state.value = 0;
            localStorage.setItem("state", state.value);
        },
    },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, reset } = stateSlice.actions;

export default stateSlice.reducer;