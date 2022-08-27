import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import Cart from "../cart/Cart";
import Wishlist from "../wishlist/Wishlist";
import logo from "./images/logo.png";
const Header = () => {
    return (
        <header className="header-cont">
            <nav className="align">
                <div className="head-title">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="head-links">
                    <ul className="align">
                        <li>
                            <Link to="products-view">Prodcuts List</Link>
                        </li>
                        <li>
                            <Link to="products-add">Products Add</Link>
                        </li>
                    </ul>
                </div>
                <div className="head-btns align">
                    <Wishlist />
                    <Cart />
                </div>
            </nav>
        </header>
    );
};

export default Header;
