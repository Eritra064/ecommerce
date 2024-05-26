import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../redux/state-slice/productSlice"
import bestSellingReducer from "../redux/state-slice/bestSellingSlice"
import authReducer from "../redux/state-slice/authSlice"
import categoryReducer from "../redux/state-slice/categorySlice"

const store = configureStore({
    reducer: {
        category: categoryReducer,
        product: productReducer,
        bestSelling: bestSellingReducer,
        auth: authReducer
    }
})

export default store;
