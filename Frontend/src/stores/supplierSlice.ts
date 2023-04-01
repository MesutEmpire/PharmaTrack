import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./mainStore";

const supplierSlice = createSlice({
  name: "supplier",
  initialState: {
    suppliers: [],
    supplierForm: {},
    error: null as unknown,
    errorPost: null,
    searchedSupplier: null,
    foundSearchSuppliers: [],
    supplierAddProduct: [],
  },
  reducers: {
    setSuppliers: (state, action) => {
      state.suppliers = action.payload;
    },
    setSuppliersForm: (state, action) => {
      // const {pharmacy_id} = JSON.parse(localStorage.getItem('currentUser'))
      state.supplierForm = { ...state.supplierForm, ...action.payload };
    },
    setErrorSuppliers: (state, action) => {
      state.error = action.payload;
    },
    setErrorPostSupplier: (state, action) => {
      state.errorPost = action.payload;
    },
    setSearchedSupplier: (state, action) => {
      state.searchedSupplier = action.payload;
      if (state.searchedSupplier != null) {
        state.foundSearchSuppliers = state.suppliers.filter((supplier: any) =>
          `${supplier.supplier_name}`
            .toLowerCase()
            .includes(state.searchedSupplier.toLowerCase())
        );
      }
    },
    setAddSuppplierProduct: (state, action) => {
      state.supplierAddProduct = action.payload;
    },
  },
});

export const supplierReducer = supplierSlice.reducer;
export const {
  setAddSuppplierProduct,
  setErrorPostSupplier,
  setSuppliersForm,
  setSuppliers,
  setErrorSuppliers,
  setSearchedSupplier,
} = supplierSlice.actions;
export const selectSupplier = (state: RootState) => {
  if (state.supplier.searchedSupplier) {
    return {
      suppliers: state.supplier.foundSearchSuppliers,
      error: state.supplier.error,
    };
  }
  return { suppliers: state.supplier.suppliers, error: state.supplier.error };
};
export const selectSupplierFormData = (state: RootState) =>
  state.supplier.supplierForm;
export const selectErrorSupplierPost = (state: RootState) =>
  state.supplier.errorPost;

export const selectSupplierAddProduct = (state: RootState) =>
  state.supplier.supplierAddProduct;
