import React from "react";
import { Products } from "../components/products/Products";
import ArrayProducts from "../../productData";
import { Sidebar } from "../components/products/Sidebar";

export const ProductsPage = () => {
    return (
        <main className="w-100 my-5">
            <div className="d-flex w-100 main-products-container">
                <Sidebar products={ArrayProducts} />
                <Products products={ArrayProducts} />
            </div>
        </main>
    );
};