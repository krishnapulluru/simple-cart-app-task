import { createSlice } from "@reduxjs/toolkit";

const wishListSlice = createSlice({
    name: "wishlist",
    initialState: {
        itemsList: [],
        showWishList: false,
        totalQuantity: 0,
    },
    reducers: {
        addToWishlist(state, action) {
            const newProduct = action.payload;

            const checkExistingItemIncart = state.itemsList.find(
                (item) => item.id === newProduct.id
            );
            if (checkExistingItemIncart) {
                state.itemsList = state.itemsList.filter(
                    (item) => item.id !== checkExistingItemIncart.id
                );
                state.totalQuantity--;
            } else {
                state.itemsList.push({
                    id: newProduct.id,
                    itemName: newProduct.name,
                    itemCategory: newProduct.category,
                });
                state.totalQuantity++;
            }
        },

        removeFromWishlist(state, action) {
            const id = action.payload;
            const existingProduct = state.itemList.find(
                (product) => product.id === id
            );

            if (existingProduct) {
                state.itemsList = state.itemsList.filter(
                    (item) => item.id !== existingProduct.id
                );
                state.totalQuantity--;
            }
        },

        setShowWishlist(state) {
            state.showWishList = !state.showWishList;
        },
    },
});

export const wishlistActions = wishListSlice.actions;

export default wishListSlice;
