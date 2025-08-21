import React, { useEffect, useState } from "react";
import { Products } from "../components/products/Products";
import { Sidebar } from "../components/products/Sidebar";
import { useParams } from "react-router-dom";
import { Loader } from "../components/Loader";

export const ProductsPage = () => {
    const [loading, setLoading] = useState(true);
    const { category } = useParams();   
    const [products, setProducts] = useState([]);

    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedPriceRange, setSelectedPriceRange] = useState(null);
    const [selectedRating, setSelectedRating] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch(`https://dummyjson.com/products/category/${category}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data.products);
                setLoading(false);
            });
    }, [category]); 

    const getFilteredProducts = () => {
        return products.filter(product => {
            let matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
            let matchesPrice = true;
            if (selectedPriceRange) {
                const [min, max] = selectedPriceRange;
                matchesPrice = product.price >= min && product.price <= max;
            }
            let matchesRating = selectedRating ? product.rating >= selectedRating : true;

            return matchesBrand && matchesPrice && matchesRating;
        });
    };


    return (
        <main className="w-100 my-5">
            <div className="d-flex justify-content-center w-100 main-products-container">
                {
                    loading?
                        <Loader />
                    :
                        <>
                            <Sidebar 
                                products={products} 
                                selectedBrands={selectedBrands}
                                setSelectedBrands={setSelectedBrands}
                                setSelectedPriceRange={setSelectedPriceRange}
                                setSelectedRating={setSelectedRating}
                            />
                            <Products products={getFilteredProducts()} />
                        </>
                }
            </div>
        </main>
    );
};
