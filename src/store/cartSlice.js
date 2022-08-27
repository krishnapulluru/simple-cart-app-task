import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        itemsList: [],
        totalQuantity: 0,
        showCart: false,
    },
    reducers: {
        addToCart(state, action) {
            const newProduct = action.payload;

            const checkExistingItemIncart = state.itemsList.find(
                (item) => item.id === newProduct.id
            );
            if (checkExistingItemIncart) {
                checkExistingItemIncart.quantity++;
                checkExistingItemIncart.totalPrice =
                    parseFloat(checkExistingItemIncart.totalPrice) +
                    parseFloat(newProduct.price);
            } else {
                state.itemsList.push({
                    id: newProduct.id,
                    quantity: 1,
                    itemName: newProduct.name,
                    totalPrice: newProduct.price,
                    price: newProduct.price,
                });
            }
            state.totalQuantity++;
        },
        removeFromCart(state, action) {
            const id = action.payload;

            const existingProduct = state.itemsList.find(
                (product) => product.id === id
            );

            if (existingProduct.quantity === 1) {
                state.itemsList = state.itemsList.filter(
                    (item) => item.id !== existingProduct.id
                );
                state.totalQuantity--;
            } else {
                existingProduct.quantity--;
                existingProduct.totalPrice =
                    parseFloat(existingProduct.totalPrice) -
                    parseFloat(existingProduct.price);
                state.totalQuantity--;
            }
        },
        setShowCart(state) {
            state.showCart = !state.showCart;
        },
    },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
