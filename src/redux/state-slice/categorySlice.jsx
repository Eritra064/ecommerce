import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: []
}

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        setCategoryList: (state, action) => {
            state.categories = action.payload;
        }
    }
})

export const {setCategoryList} = categorySlice.actions;
export default categorySlice.reducer;