import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./mainStore";
import {useDispatch} from "react-redux";

export const fetchAllProducts = createAsyncThunk(
    "product/fetchAllProducts",
    async () => {
        const response = await fetch("http://localhost:3210/api/product");
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data);
        }

        return data;
    }
);

const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
        searchedProduct :null,
        foundSearchProducts:[],
        error: null as unknown,
        expiringProducts : []

    },
    reducers: {
        setProducts:(state, action)=>{
            state.products = action.payload
           setExpiredDate()
        },
        setSearchedProduct:(state, action)=>{
            state.searchedProduct = action.payload
            if(state.searchedProduct != null ){
                state.foundSearchProducts = state.products.filter((product:any) => `${product.product_name}`.toLowerCase().includes(state.searchedProduct.toLowerCase()));
            }
        },
        setErrorProducts:(state, action)=>{
            state.error = action.payload
        },
        setExpiredDate: (state, action) => {
            const today = new Date();
            const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
            state.expiringProducts = state.products.filter((product) => {
                const expirationDate = new Date(product.expiry_date);
                return expirationDate >= today && expirationDate <= nextMonth;
            }).sort((a, b) => new Date(b.expiry_date) - new Date(a.expiry_date));
            console.log(state.expiringProducts)
        }


    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllProducts.fulfilled, (state, action) => {
                state.products = action.payload;
            })
            .addCase(fetchAllProducts.rejected, (state, action) => {
                state.error = action.error.message;
            });
    },
});

export const productReducer = productSlice.reducer;
export const {setProducts,setErrorProducts,setSearchedProduct,setExpiredDate} = productSlice.actions
export const selectProduct = (state: RootState) => {
    if(state.product.searchedProduct){
        return {products : state.product.foundSearchProducts,
            error:state.product.error}
    }
    return {products : state.product.products,error:state.product.error}
};
export const selectNoProducts = (state: RootState) => state.product.products.length;

