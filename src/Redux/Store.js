import { configureStore } from "@reduxjs/toolkit";
import productDetailsReducer from "./productDetailsSlice.js";

export const store = configureStore({
    reducer: {
        productDetails: productDetailsReducer,
    },
});