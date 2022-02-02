import { createSlice } from "@reduxjs/toolkit";

const initialStateCampaigns = {
    isPending: false,
    value: [],
    eroor:'',
    search: ''
}

export const campaignSlice = createSlice({
    name: "campaigns",
    initialState: initialStateCampaigns,
    reducers: {
        setCampaigns: (state, action) => {
            state.value = action.payload;
            state.isPending = false

        },
    }
})
export const { setCampaigns } = campaignSlice.actions
export default campaignSlice.reducer


