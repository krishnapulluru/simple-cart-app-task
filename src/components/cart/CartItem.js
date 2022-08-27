import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";
import "./cart.css";

const CartItem = ({ quantity, itemName, price, id, totalPrice }) => {
    const dispatch = useDispatch();
    const removeHandler = () => {
        dispatch(cartActions.removeFromCart(id));
    };
    const addHandler = () => {
        dispatch(
            cartActions.addToCart({
                id,
                name: itemName,
                price,
            })
        );
    };
    return (
        <div className="cart-item">
            <h2> {itemName}</h2>
            <div className="cart-content">
                <p>
                    ₹{price} x {quantity}
                </p>
                <h4>₹{Number(totalPrice).toFixed(2)}</h4>
                <button className="cart-actions" onClick={removeHandler}>
                    -
                </button>
                <button className="cart-actions" onClick={addHandler}>
                    +
                </button>
            </div>
        </div>
    );
};

export default CartItem;
