import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import wishListSlice from "./wishList";

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        wishlist: wishListSlice.reducer,
    },
});

export default store;
