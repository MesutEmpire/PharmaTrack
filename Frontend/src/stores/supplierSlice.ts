import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./mainStore";

export const fetchAllSuppliers = createAsyncThunk(
    "supplier/fetchAllSuppliers",
    async () => {
        const response = await fetch("http://localhost:3210/api/supplier");
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data);
        }

        return data;
    }
);

const supplierSlice = createSlice({
    name: "supplier",
    initialState: {
        suppliers: [],
        error: null as unknown,
        searchedSupplier:null,
        foundSearchSuppliers:[]
    },
    reducers: {
        setSuppliers:(state, action)=>{
            state.suppliers = action.payload
        },
        setErrorSuppliers:(state, action)=>{
            state.error = action.payload
        },
        setSearchedSupplier:(state, action)=>{
            state.searchedSupplier = action.payload
            if(state.searchedSupplier != null ){
                state.foundSearchSuppliers = state.suppliers.filter((supplier:any) => `${supplier.supplier_name}`.toLowerCase().includes(state.searchedSupplier.toLowerCase()));
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllSuppliers.fulfilled, (state, action) => {
                state.suppliers = action.payload;
            })
            .addCase(fetchAllSuppliers.rejected, (state, action) => {
                state.error = action.error.message;
            });
    },
});

export const supplierReducer = supplierSlice.reducer;
export const {setSuppliers,setErrorSuppliers,setSearchedSupplier} = supplierSlice.actions
export const selectSupplier = (state: RootState) => {
    if(state.supplier.searchedSupplier){
        return {suppliers : state.supplier.foundSearchSuppliers,
            error:state.supplier.error}
    }
    return {suppliers : state.supplier.suppliers,error:state.supplier.error}
};