import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  products: [],
  productDetails: {
    
  },
  cartList: [],
  wishList: [],
  relatedItems: [],
  categoryProducts: [],
  allProducts: []
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
    },
    removeFromWishList: (state, action) => {
      state.wishList = state.wishList.filter(item => item.ProductID !== action.payload);
    },
    setRelatedItems: (state, action) => {
      state.relatedItems = action.payload;
    },
    setCategoryProduct: (state, action) => {
      state.categoryProducts = action.payload;
    },
    setAllProducts: (state, action) => {
      state.allProducts = action.payload
    }
   
  },
});

export const { setProductList, setCartList, setWishList, setProductDetails, setRelatedItems, setCategoryProduct, setAllProducts, removeFromWishList } = productSlice.actions;
export default productSlice.reducer;
