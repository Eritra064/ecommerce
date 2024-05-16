import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    bestSellingProducts: []
}

const bestSellingSlice = createSlice({
    name: "bestSelling",
    initialState,
    reducers: {
        setBestSelling: (state, action) => {
            state.bestSellingProducts = action.payload
        }
    }
})

export const {setBestSelling} = bestSellingSlice.actions;
export default bestSellingSlice.reducer;