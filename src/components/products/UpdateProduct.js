import React from "react";
import { useParams } from "react-router-dom";

const getLocalProducts = () => {
    let list = localStorage.getItem("products-list");
    if (list) {
        return JSON.parse(localStorage.getItem("products-list"));
    } else {
        return [];
    }
};
let firstRender = 3;
const UpdateProduct = () => {
    const { productId } = useParams();
    const [prods, setProds] = React.useState(getLocalProducts());
    const selectProduct = prods.filter((product) => productId === product.id);
    const productImageRef = React.useRef("");

    const [data, setProductsData] = React.useState({
        productCategory: selectProduct[0].productCategory,
        productName: selectProduct[0].productName,
        productRating: selectProduct[0].productRating,
        productDisc: selectProduct[0].productDisc,
        productImage: selectProduct[0].productImage,
        productPrice: selectProduct[0].productPrice,
        id: selectProduct[0].id,
    });

    // Updating state values
    const changeHandler = (e) => {
        setProductsData({ ...data, [e.target.name]: e.target.value });
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
                    [e.target.name]: reader.result,
                    productImageName: productImageRef.current.value,
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
        const newProds = prods.map((item) => {
            if (item.id === data.id) {
                return {
                    ...item,
                    productCategory: data.productCategory,
                    productName: data.productName,
                    productRating: data.productRating,
                    productDisc: data.productDisc,
                    productImage: data.productImage,
                    productPrice: data.productPrice,
                };
            }
            return item;
        });
        setProds(newProds);
    };

    React.useEffect(() => {
        if (firstRender > 0) {
            firstRender--;
        } else {
            // setting updated list to local storage
            localStorage.setItem("products-list", JSON.stringify(prods));
            // Success Alert
            alert("Product Updated to Successfully");
        }
    }, [prods]);

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
                        <option value="Category1">Category1</option>
                        <option value="Category2">Category2</option>
                        <option value="Category3">Category3</option>
                        <option value="Category4">Category4</option>
                        <option value="Category5">Category5</option>
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
                        ref={productImageRef}
                        onChange={handleFile}
                    />
                </div>
                <div className="displayImage">
                    <img src={data.productImage} alt={productImageRef} />
                </div>
                <div>
                    <input type="submit" value="Update Product" />
                </div>
            </form>
        </div>
    );
};

export default UpdateProduct;
