import React from "react";
import "./wishList.css";

const WishListItem = ({ id, name, category }) => {
    return (
        <div className="cart-item">
            <h2> {name}</h2>
            <h4>{category}</h4>
        </div>
    );
};

export default WishListItem;
