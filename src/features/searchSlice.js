import { createSlice } from "@reduxjs/toolkit";

const initialStateSearch = {
    value: {
        startDate: 0,
        endDate: 0,
        nameFilter: ''
    }
}

export const searchSlice = createSlice({
    name: "search",
    initialState: initialStateSearch,
    reducers: {
        setSearch: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { setSearch } = searchSlice.actions;
export default searchSlice.reducer;