import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./mainStore";
import {useDispatch} from "react-redux";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    productForm: {},
    // errorPost: null,
    searchedProduct: null,
    foundSearchProducts: [],
    error: {
      errorGet:null,
      errorPost: null,
      expiring:null,
      lowInventory:null

    },
    expiringProducts: [],
    lowInventoryProducts:[],
    showProductModal:false,
    editProduct:false,
    // errorExpiring:{
    //   expiring:null,
    //   lowInventory:null
    // }
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setProductsForm: (state, action) => {
      const { pharmacy_id } = JSON.parse(localStorage.getItem("currentUser"));
      state.productForm = {
        ...state.productForm,
        ...action.payload,
        pharmacy_id: pharmacy_id,
      };
    },
    setErrorPostProduct: (state, action) => {
      state.error.errorPost = action.payload;
    },
    setSearchedProduct: (state, action) => {
      state.searchedProduct = action.payload;
      if (state.searchedProduct != null) {
        state.foundSearchProducts = state.products.filter((product: any) =>
          `${product.product_name}`
            .toLowerCase()
            .includes(state.searchedProduct.toLowerCase())
        );
      }
    },
    setExpiringProducts: (state, action) => {
      state.expiringProducts = action.payload;
    },
    setLowInventoryProducts: (state, action) => {
      state.lowInventoryProducts = action.payload;
    },
    setErrorExpiringProducts: (state, action) => {
      state.error.expiring = action.payload;
    },
    setErrorLowInventoryProducts: (state, action) => {
      state.error.lowInventory = action.payload;
    },
    setErrorProducts: (state, action) => {
      state.error.errorGet = action.payload;
    },
    setShowProductModal:(state,action) => {
      state.showProductModal = action.payload
},
    setEditProduct:(state,action)=>{
      state.editProduct = action.payload
    }
  },
});

export const productReducer = productSlice.reducer;
export const {
  setProductsForm,
  setErrorPostProduct,
  setProducts,
  setErrorProducts,
  setSearchedProduct,
    setErrorLowInventoryProducts,
    setLowInventoryProducts,
    setErrorExpiringProducts,
    setExpiringProducts,
  setShowProductModal,
  setEditProduct
} = productSlice.actions;
export const selectProduct = (state: RootState) => {
  if (state.product.searchedProduct) {
    return {
      products: state.product.foundSearchProducts,
      error: state.product.error.errorGet,
    };
  }
  return { products: state.product.products, error: state.product.error.errorGet };
};
export const selectExpiredProducts = (state: RootState) => {

   return {expiredProducts: state.product.expiringProducts, expiryError: state.product.error.expiring}

}
export const selectLowInventoryProducts = (state: RootState) => {
  return {lowInventoryProducts: state.product.lowInventoryProducts, lowInvetoryError: state.product.error.lowInventory}
}


export const selectErrorProduct = (state: RootState) =>
  state.product.error;
export const selectProductFormData = (state: RootState) =>
  state.product.productForm;
export const selectShowProductModal = (state:RootState) =>
    state.product.showProductModal
export const selectEditProduct = (state:RootState)=>
    state.product.editProduct