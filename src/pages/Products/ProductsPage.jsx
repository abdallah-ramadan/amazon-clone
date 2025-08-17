import React from "react";
import ArrayProducts from "../../../ProductData";
import { Sidebar } from "../../components/Sidebar";
import { Products } from "./Products";

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
