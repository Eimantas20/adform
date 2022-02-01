import { createSlice } from "@reduxjs/toolkit";

const initialState = {}

export const campaignSlice = createSlice({
    name: "campaigns",
    initialState,
    reducers: {
        setCampaigns: (state, action) => {
            state.value = action.payload
        },
    }
})
export const { setCampaigns } = campaignSlice.actions

export default campaignSlice.reducer