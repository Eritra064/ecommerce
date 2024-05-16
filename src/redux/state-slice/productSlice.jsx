import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProductList: (state, action) => {
      state.products = action.payload;
    },
   
  },
});

export const { setProductList } = productSlice.actions;
export default productSlice.reducer;
