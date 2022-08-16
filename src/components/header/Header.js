import React from "react";
import "./header.css";

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
                            <a href="#">Products</a>
                        </li>
                        <li>
                            <a href="#">Products List</a>
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
