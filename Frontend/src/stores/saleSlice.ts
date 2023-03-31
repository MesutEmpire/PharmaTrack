import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./mainStore";

export const fetchAllSales = createAsyncThunk(
    "sale/fetchAllSales",
    async () => {
        const response = await fetch("http://localhost:3210/api/sale");
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data);
        }

        return data;
    }
);

const saleSlice = createSlice({
    name: "sale",
    initialState: {
        sales: [],
        error: null as unknown,
    },
    reducers: {
        setSales:(state, action)=>{
            state.sales = action.payload
        },
        setErrorSales:(state, action)=>{
            state.error = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllSales.fulfilled, (state, action) => {
                state.sales = action.payload;
            })
            .addCase(fetchAllSales.rejected, (state, action) => {
                state.error = action.error.message;
            });
    },
});

export const saleReducer = saleSlice.reducer;
export const {setSales,setErrorSales} = saleSlice.actions
export const selectSales = (state: RootState) => state.sale;