import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  productDetails: {},
  cartList: [],
  wishList: [],
  relatedItems: [],
  categoryProducts: [],
  allProducts: [],
  updatedProduct: []
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
      state.wishList = state.wishList.filter(
        (item) => item.ProductID !== action.payload
      );
    },
    setRelatedItems: (state, action) => {
      state.relatedItems = action.payload;
    },
    setCategoryProduct: (state, action) => {
      state.categoryProducts = action.payload;
    },
    setAllProducts: (state, action) => {
      state.allProducts = action.payload;
    },

    removeFromCartList: (state, action) => {
      state.cartList = state.cartList.filter(
        (item) => item.ProductID !== action.payload
      );
    },

    setCartProductList: (state, action) => {
      const cartProduct = {
        id: action.payload,
        product: action.payload,
        quantity: action.payload,
        subTotal: action.payload
      }
      state.updatedProduct.push(cartProduct);
    }
  },
});

export const {
  setProductList,
  setCartList,
  setWishList,
  setProductDetails,
  setRelatedItems,
  setCategoryProduct,
  setAllProducts,
  removeFromWishList,
  removeFromCartList,
  setCartProductList
} = productSlice.actions;
export default productSlice.reducer;
