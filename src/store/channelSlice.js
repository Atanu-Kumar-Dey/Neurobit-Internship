import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    channels: null,
};

export const channelSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        setChannel: (state, action) => {
            const { channels } = action.payload;
            state.channels = channels;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setChannel } = channelSlice.actions;

export default channelSlice.reducer;