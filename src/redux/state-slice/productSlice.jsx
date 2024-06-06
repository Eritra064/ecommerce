import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  productDetails: {},
  cartList: [],
  wishList: [],
  relatedItems: [],
  categoryProducts: [],
  allProducts: [],
};

const calculateDiscountedPrice = (price, discountValue, discountType) => {
  if (discountType === "Percent") {
    return price - (price * discountValue) / 100;
  } else if (discountType === "Exact") {
    return price - discountValue;
  } else {
    return price;
  }
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProductList: (state, action) => {
      state.products = action.payload;
    },

    setCartList: (state, action) => {
      const product = action.payload;
      const discountedPrice = calculateDiscountedPrice(
        product.Price,
        product.DiscountValue,
        product.DiscountType
      );
      state.cartList.push({
        ...product,
        quantities: 1,
        initialPrice: discountedPrice,
        subTotal: discountedPrice,
      });
    },

    updateProductQuantities: (state, action) => {
      const { productId, quantities } = action.payload;
      const product = state.cartList.find(
        (product) => product.ProductID === productId
      );
      if (product) {
        product.quantities = quantities;
        product.subTotal = calculateDiscountedPrice(
          product.Price,
          product.DiscountValue,
          product.DiscountType
        ) * quantities;
      }
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
  updateProductQuantities
} = productSlice.actions;
export default productSlice.reducer;
