import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./mainStore";

export const fetchAllOrders = createAsyncThunk(
    "order/fetchAllOrders",
    async () => {
        const response = await fetch("http://localhost:3210/api/product");
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data);
        }

        return data;
    }
);

const orderSlice = createSlice({
    name: "product",
    initialState: {
        orders: [],
        error: null as unknown,
        searchedOrder:null,
        foundSearchOrders : []

    },
    reducers: {
        setOrders:(state, action)=>{
            state.orders = action.payload
        },
        setErrorOrders:(state, action)=>{
            state.error = action.payload
        },
        setSearchedOrder:(state, action)=>{
            state.searchedOrder = action.payload
            if(state.searchedOrder != null ){
                state.foundSearchOrders = state.orders.filter((order:any) => `${order.id}`.toLowerCase().includes(state.searchedOrder.toLowerCase()));
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllOrders.fulfilled, (state, action) => {
                state.orders = action.payload;
            })
            .addCase(fetchAllOrders.rejected, (state, action) => {
                state.error = action.error.message;
            });
    },
});

export const orderReducer = orderSlice.reducer;
export const {setOrders,setSearchedOrder,setErrorOrders} = orderSlice.actions
export const selectOrder = (state: RootState) => {
    if(state.order.searchedOrder){
        return {orders : state.order.foundSearchOrders,
            error:state.order.error}
    }
    return {orders : state.order.orders,error:state.order.error}
}