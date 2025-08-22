import { configureStore } from "@reduxjs/toolkit";
import productDetailsReducer from "./productDetailsSlice.js";
import cartReducer from "./CartSlice.js";
import wishlistReducer from './WishlistSlice.js'


export const store = configureStore({
    reducer: {
        productDetails: productDetailsReducer,
        cart: cartReducer,
        wishlist: wishlistReducer,

    },
});