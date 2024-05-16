import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../redux/state-slice/productSlice"
import bestSellingReducer from "../redux/state-slice/bestSellingSlice"

const store = configureStore({
    reducer: {
        product: productReducer,
        bestSelling: bestSellingReducer
    }
})

export default store;
