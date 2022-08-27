import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import "./cart.css";

const CartItems = () => {
    const cartitems = useSelector((state) => state.cart.itemsList);
    return (
        <div className="cart-container">
            <h2 className="cart-title">Your Cart</h2>
            {cartitems.length > 0 ? (
                cartitems.map((item) => {
                    return (
                        <CartItem
                            key={item.id}
                            id={item.id}
                            itemName={item.itemName}
                            price={item.price}
                            totalPrice={item.totalPrice}
                            quantity={item.quantity}
                        />
                    );
                })
            ) : (
                <h3 className="no-items">No Items</h3>
            )}
        </div>
    );
};

export default CartItems;
