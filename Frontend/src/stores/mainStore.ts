import { configureStore } from "@reduxjs/toolkit";
import {userReducer} from "./userSlice";
import {productReducer} from "./productSlice";
import {supplierReducer} from "./supplierSlice";
import {userAuthReducer} from "./userAuthSlice";
import {orderReducer} from "./orderSlice";
import {saleReducer} from "./saleSlice";
export const store = configureStore({
    reducer: {
        userAuth: userAuthReducer,
        product: productReducer,
        supplier:supplierReducer,
        user:userReducer,
        order:orderReducer,
        sale:saleReducer

    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;