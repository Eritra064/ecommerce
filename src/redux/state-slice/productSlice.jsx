import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  productDetails: {
    
  },
  cartList: [],
  wishList: []
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProductList: (state, action) => {
      state.products = action.payload;
    },

    setCartList: (state, action) => {
      state.cartList.push(action.payload);
    },

    setWishList: (state, action) => {
      state.wishList.push(action.payload);
    },

    setProductDetails: (state, action) => {
      state.productDetails = action.payload;
    }
   
  },
});

export const { setProductList, setCartList, setWishList, setProductDetails } = productSlice.actions;
export default productSlice.reducer;
