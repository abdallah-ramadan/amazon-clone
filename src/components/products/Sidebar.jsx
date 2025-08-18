import React from "react";
import { StarRate } from "./StarRate";
import './Sidebar.css';

export const Sidebar = ({ products }) => {
    const brands = [...new Set(products.map((p) => p.brand))];
    return (
        <aside className="sidebar">
            <div className="filter-section">
                <h6>Delivery Day</h6>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="delivery" id="delivery1" />
                    <label className="form-check-label" htmlFor="delivery1">
                        Get it in 2 Days
                    </label>
                </div>
            </div>

            <div className="filter-section">
                <h6>Customer Reviews</h6>
                <div className="rating-filter">
                    <span className="stars"><StarRate currentRate={4} /></span> & Up
                </div>
            </div>

            <div className="filter-section">
                <h6>Brands</h6>
                <div className="d-flex flex-md-column column-gap-4 row-gap-2 flex-wrap">
                    {brands.map((brand, index) => (
                        <div className="form-check" key={index}>
                            <input
                                className="form-check-input"
                                type="radio"
                                id={`brand-${index}`}
                            />
                            <label className="form-check-label" htmlFor={`brand-${index}`}>
                                {brand}
                            </label>
                        </div>
                    ))}
                </div>
            </div>

            <div className="filter-section">
                <h6>Price</h6>
                <div className="d-flex flex-md-column column-gap-4 row-gap-2 flex-wrap">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="price" id="price1" />
                        <label className="form-check-label" htmlFor="price1">
                            All
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="price" id="price2" />
                        <label className="form-check-label" htmlFor="price2">
                            ₹5900 to ₹10,000
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="price" id="price3" />
                        <label className="form-check-label" htmlFor="price3">
                            ₹10,000 to ₹20,000
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="price" id="price4" />
                        <label className="form-check-label" htmlFor="price4">
                            ₹20,000 to ₹30,000
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="price" id="price4" />
                        <label className="form-check-label" htmlFor="price4">
                            ₹30,000 to ₹45,000
                        </label>
                    </div>
                </div>
            </div>
        </aside>
    );
};