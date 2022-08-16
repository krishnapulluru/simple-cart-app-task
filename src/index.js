import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProducts from "./components/products/AddProducts";
import ViewProducts from "./components/products/ViewProducts";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="products-view" element={<ViewProducts />} />
                    <Route path="products-add" element={<AddProducts />} />
                    <Route
                        path="*"
                        element={
                            <div>
                                <h3 style={{ color: "red" }}>Oops! 404</h3>
                            </div>
                        }
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
