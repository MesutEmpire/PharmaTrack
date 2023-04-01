import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./mainStore";

const orderSlice = createSlice({
  name: "product",
  initialState: {
    orders: [],
    error: null as unknown,
    searchedOrder: null,
    foundSearchOrders: [],
  },
  reducers: {
    setOrders: (state, action) => {
      state.orders = action.payload;
    },
    setErrorOrders: (state, action) => {
      state.error = action.payload;
    },
    setSearchedOrder: (state, action) => {
      state.searchedOrder = action.payload;
      if (state.searchedOrder != null) {
        state.foundSearchOrders = state.orders.filter((order: any) =>
          `${order.id}`
            .toLowerCase()
            .includes(state.searchedOrder.toLowerCase())
        );
      }
    },
  },
});

export const orderReducer = orderSlice.reducer;
export const { setOrders, setSearchedOrder, setErrorOrders } =
  orderSlice.actions;
export const selectOrder = (state: RootState) => {
  if (state.order.searchedOrder) {
    return { orders: state.order.foundSearchOrders, error: state.order.error };
  }
  return { orders: state.order.orders, error: state.order.error };
};
