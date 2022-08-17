import React, { useRef, useState } from "react";

export default function AddProducts() {
    // Reference are creating to the form file upload using useRef Hook
    const productImageRef = useRef("");

    // useState Hook is used to store the form Data
    const [data, setProductsData] = useState({
        productCategory: "",
        productName: "",
        productRating: "",
        productDisc: "",
        productImage: "",
        productPrice: "",
    });

    // Updating state values
    const changeHandler = (e) => {
        setProductsData({ ...data, [e.target.name]: [e.target.value] });
    };

    // This function is to handle the image , it checkes the image and converts to base64 string to store in local storage
    const handleFile = (e) => {
        let imageType = e.target.files[0].type;
        if (
            imageType === "image/jpeg" ||
            imageType === "image/jpg" ||
            imageType === "image/png"
        ) {
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                setProductsData({
                    ...data,
                    [e.target.name]: [reader.result],
                });
            });
            reader.readAsDataURL(e.target.files[0]);
        } else {
            alert(
                "Hey ! You are tryig to add restricted file type . please check and re-upload the product image."
            );
            return false;
        }
    };

    const submitHandler = (e) => {
        e.preventDefault();

        // Getting the product list from local storage. if products list is null then it returns empty array
        const products = JSON.parse(
            localStorage.getItem("products-list") || "[]"
        );
        //  Pushing the current product data to get array
        products.push(data);

        // setting updated list to local storage
        localStorage.setItem("products-list", JSON.stringify(products));
        // Success Alert
        alert("Product Saved to Storage");
        // Resetting form data
        setProductsData({
            ...data,
            productCategory: "",
            productName: "",
            productRating: "",
            productDisc: "",
            productImage: "",
            productPrice: "",
        });
        productImageRef.current.value = "";
    };
    return (
        <div className="form-cont">
            <form onSubmit={submitHandler}>
                <div>
                    <h1 className="form-title">Add Products</h1>
                </div>
                <div>
                    <label htmlFor="productCategory">Category</label>
                    <select
                        id="productCategory"
                        name="productCategory"
                        value={data.productCategory}
                        onChange={changeHandler}
                        required={true}
                    >
                        <option value="">Select Category</option>
                        <option value="cat-1">Category 1</option>
                        <option value="cat-2">Category 2</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="productName">Product Name</label>
                    <input
                        type="text"
                        id="productName"
                        name="productName"
                        value={data.productName}
                        onChange={changeHandler}
                        placeholder="Enter Product Name"
                        required={true}
                    />
                </div>
                <div>
                    <label htmlFor="productPrice">Price</label>
                    <input
                        type="number"
                        id="productPrice"
                        name="productPrice"
                        value={data.productPrice}
                        onChange={changeHandler}
                        placeholder="Enter Product Price"
                        required={true}
                    />
                </div>
                <div>
                    <label htmlFor="productRating">Rating</label>
                    <input
                        type="number"
                        id="productRating"
                        name="productRating"
                        value={data.productRating}
                        onChange={changeHandler}
                        min="0"
                        max="5"
                        placeholder="Enter Product Rating"
                        required={true}
                    />
                </div>
                <div>
                    <label htmlFor="productDisc">Description</label>
                    <textarea
                        id="productDisc"
                        name="productDisc"
                        value={data.productDisc}
                        onChange={changeHandler}
                        placeholder="Enter Product Description"
                        required={true}
                    ></textarea>
                </div>
                <div>
                    <label htmlFor="productImage">Product Image</label>
                    <input
                        type="file"
                        accept="image/png,image/jpeg,image/jpg"
                        id="productImage"
                        name="productImage"
                        required={true}
                        ref={productImageRef}
                        onChange={handleFile}
                    />
                </div>
                <div>
                    <input type="submit" value="Add Product" />
                </div>
            </form>
        </div>
    );
}
