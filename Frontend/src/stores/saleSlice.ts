import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./mainStore";

const saleSlice = createSlice({
  name: "sale",
  initialState: {
    sales: [],
    error: null as unknown,
  },
  reducers: {
    setSales: (state, action) => {
      state.sales = action.payload;
    },
    setErrorSales: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const saleReducer = saleSlice.reducer;
export const { setSales, setErrorSales } = saleSlice.actions;
export const selectSales = (state: RootState) => state.sale;
