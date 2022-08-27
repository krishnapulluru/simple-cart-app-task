import React from "react";
import "./cart.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cartSlice";

const Cart = () => {
    const quantity = useSelector((state) => state.cart.totalQuantity);
    const dispatch = useDispatch();
    const showCart = () => {
        dispatch(cartActions.setShowCart());
    };
    return (
        <button className="btn" onClick={showCart}>
            Cart : {quantity}
        </button>
    );
};

export default Cart;
