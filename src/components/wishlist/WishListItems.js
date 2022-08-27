import React from "react";
import { useSelector } from "react-redux";
import "./wishList.css";
import WishListItem from "./WishListItem";

const WishListItems = () => {
    const wishListItems = useSelector((wl) => wl.wishlist.itemsList);
    return (
        <div className="cart-container">
            <h2 className="cart-title">Your Wishlist</h2>
            {wishListItems.length > 0 ? (
                wishListItems.map((item) => {
                    return (
                        <WishListItem
                            key={item.id}
                            id={item.id}
                            name={item.itemName}
                            category={item.itemCategory}
                        />
                    );
                })
            ) : (
                <h3 className="no-items">No Items</h3>
            )}
        </div>
    );
};

export default WishListItems;
