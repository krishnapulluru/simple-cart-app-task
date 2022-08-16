import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <header className="header-cont">
            <nav className="align">
                <div className="head-title">
                    <h2>Simple Cart</h2>
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
                    <button className="btn">Wishlist</button>
                    <button className="btn">Cart</button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
