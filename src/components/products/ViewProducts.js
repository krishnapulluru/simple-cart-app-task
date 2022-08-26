import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import {
    FaRupeeSign,
    FaPen,
    FaTrash,
    FaCartPlus,
    FaHeart,
} from "react-icons/fa";
import "./products.css";

let firstRender = true;

const getLocalProducts = () => {
    let list = localStorage.getItem("products-list");

    if (list) {
        return JSON.parse(localStorage.getItem("products-list"));
    } else {
        return [];
    }
};

const ProductsView = () => {
    const productsStore = getLocalProducts();
    const [products, setProducts] = useState(getLocalProducts());
    const [deleteProd, setDeleteProd] = useState(null);
    const [searchData, setSearchData] = useState({
        productNameCat: "",
        priceFilter: "",
        ratigFilter: "",
    });
    const changeHandler = (e) => {
        setSearchData({ ...searchData, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        const newProducts = productsStore.filter(
            (product) =>
                product.productName
                    .toLowerCase()
                    .trim()
                    .includes(searchData.productNameCat.trim()) ||
                product.productCategory
                    .toLowerCase()
                    .trim()
                    .includes(searchData.productNameCat.trim())
        );
        setProducts(newProducts);
        if (searchData.priceFilter !== "") {
            if (searchData.priceFilter === "asc") {
                setProducts(
                    newProducts.sort((a, b) =>
                        a.productPrice > b.productPrice ? 1 : -1
                    )
                );
            } else {
                setProducts(
                    newProducts.sort((a, b) =>
                        a.productPrice < b.productPrice ? 1 : -1
                    )
                );
            }
        }
        if (searchData.ratigFilter !== "") {
            if (searchData.ratigFilter === "high") {
                setProducts(
                    newProducts.sort((a, b) =>
                        a.productRating < b.productRating ? 1 : -1
                    )
                );
            }
        }
    }, [searchData]);

    useEffect(() => {
        if (firstRender) {
            firstRender = false;
            return;
        }
        const products = JSON.parse(
            localStorage.getItem("products-list") || "[]"
        );
        const newProds = products.filter(
            (product) => product.id !== deleteProd
        );
        setProducts(newProds);
        localStorage.setItem("products-list", JSON.stringify(newProds));
    }, [deleteProd]);
    return (
        <div className="productsDisp">
            {productsStore.length > 0 && (
                <form className="search">
                    <input
                        type="text"
                        id="productNameCat"
                        name="productNameCat"
                        value={searchData.productNameCat}
                        onChange={changeHandler}
                        placeholder="Search with category / product Name"
                        required={true}
                    />
                    <select
                        id="priceFilter"
                        name="priceFilter"
                        value={searchData.priceFilter}
                        onChange={changeHandler}
                        required={true}
                    >
                        <option value="">Price Filter</option>
                        <option value="asc">Accending</option>
                        <option value="dsc">Descending</option>
                    </select>
                    <select
                        id="ratigFilter"
                        name="ratigFilter"
                        value={searchData.ratigFilter}
                        onChange={changeHandler}
                        required={true}
                    >
                        <option value="">Rating Filter</option>
                        <option value="high">High to low</option>
                    </select>
                </form>
            )}
            <div className="productsContainer">
                {products.length > 0 ? (
                    products.map((product) => {
                        const {
                            productName,
                            productImage,
                            productPrice,
                            productDisc,
                            productRating,
                            productCategory,
                            id,
                        } = product;
                        return (
                            <div className="product-card" key={id}>
                                <div className="product-image">
                                    <img
                                        src={productImage}
                                        alt={`${productName} ${id}`}
                                    />
                                    <span>{productCategory}</span>
                                    <div className="topbtn">
                                        <Link
                                            title="Edit Product"
                                            to={`/product-update/${id}`}
                                        >
                                            <FaPen />
                                        </Link>

                                        <button
                                            title="Delete Product"
                                            onClick={() => setDeleteProd(id)}
                                        >
                                            <FaTrash />
                                        </button>
                                    </div>
                                </div>
                                <div className="product-details">
                                    <div className="priceDisp">
                                        <h2>
                                            <span>
                                                {" "}
                                                <FaRupeeSign />
                                            </span>
                                            {Number.parseFloat(
                                                productPrice
                                            ).toFixed(2)}
                                        </h2>
                                        <Rating rating={productRating} />
                                    </div>
                                    <h1>{productName}</h1>
                                    <p>{productDisc}</p>
                                </div>
                                <div className="productBtns">
                                    <button
                                        className="btn"
                                        title="Add to Wishlist"
                                    >
                                        <FaHeart />
                                    </button>
                                    <button className="btn" title="Add to Cart">
                                        <FaCartPlus />
                                    </button>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <h3 className="products-emtpy">
                        Hey! There is no products available.
                    </h3>
                )}
            </div>
        </div>
    );
};

export default ProductsView;
