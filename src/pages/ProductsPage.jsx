import React, { useEffect, useState } from "react";
import { Products } from "../components/products/Products";
import { Sidebar } from "../components/products/Sidebar";
import { useParams } from "react-router-dom";
import { Loader } from "../components/Loader";

export const ProductsPage = () => {
    const [loading, setLoading] = useState(true);
    const { category } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setLoading(true);
        fetch(`https://dummyjson.com/products/category/${category || "smartphones"}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data.products);
                setLoading(false);
            });
    }, [category]);
    return (
        <main className="w-100 my-5">
            <div className="d-flex justify-content-center w-100 main-products-container">
                {
                    loading ?
                        <Loader />
                        :
                        <>
                            <Sidebar products={products} />
                            <Products products={products} />

                        </>
                }
            </div>
        </main>
    );
};
