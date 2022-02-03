import { createSlice } from "@reduxjs/toolkit";

const initialStateCampaigns = {
    isPending: false,
    value: [],
    error:false,
    errorMsg: ''
}

export const campaignSlice = createSlice({
    name: "campaigns",
    initialState: initialStateCampaigns,
    reducers: {
        setCampaigns: (state, action) => {
            state.value = action.payload;
            state.isPending = false;
            state.error = false;
        },
        isPending: (state, action) => {
            state.isPending = true;
            state.error = false;
        },
        gotError: (state, action) => {
            state.isPending=false;
            state.error = true;
            state.errorMsg = action.payload;
        }
    }
})
export const { setCampaigns, isPending, gotError } = campaignSlice.actions
export default campaignSlice.reducer