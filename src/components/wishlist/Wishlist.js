import React from "react";
import "./wishList.css";
import { useDispatch, useSelector } from "react-redux";
import { wishlistActions } from "../../store/wishList";

const Wishlist = () => {
    const quantity = useSelector((state) => state.wishlist.totalQuantity);
    const dispatch = useDispatch();
    const showWishlist = () => {
        dispatch(wishlistActions.setShowWishlist());
    };
    return (
        <button className="btn" onClick={showWishlist}>
            Wishlist : {quantity}
        </button>
    );
};

export default Wishlist;
