import React from "react";
import { StarRateInput } from "./StarRateInput";
import './Sidebar.css';

export const Sidebar = ({ products, selectedBrands, setSelectedBrands, setSelectedPriceRange, setSelectedRating }) => {
    const brands = [...new Set(products.map((p) => p.brand).filter(Boolean))];

    {/* Calc The Range Price */ }
    const prices = products.map(p => p.price);
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);

    let divisions = 4;
    if ((maxPrice - minPrice) < 100) {
        divisions = 2;
    }

    const step = Math.ceil((maxPrice - minPrice) / divisions);
    const priceRanges = [];

    for (let i = 0; i < divisions; i++) {
        const start = minPrice + i * step;
        const end = i === divisions - 1 ? maxPrice : start + step;
        priceRanges.push([start, end]);
    }


    const handleRatingChange = (rate) => {
        setSelectedRating(rate);
    };

    const handlePriceChange = (range) => {
        setSelectedPriceRange(range);
    };

    const handleBrandChange = (brand) => {
        if (selectedBrands?.includes(brand)) {
            setSelectedBrands(selectedBrands.filter(b => b !== brand));
        } else {
            setSelectedBrands([...selectedBrands, brand]);
        }
    };

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
                <StarRateInput onChange={handleRatingChange} />
            </div>

            {brands.length > 0 ? (
                <div className="filter-section">
                    <h6>Brands</h6>
                    <div className="d-flex flex-md-column column-gap-4 row-gap-2 flex-wrap">
                        {brands.map((brand, index) => (
                            <div className="form-check" key={index}>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    checked={selectedBrands?.includes(brand)}
                                    onChange={() => handleBrandChange(brand)}
                                    id={`brand-${index}`}
                                />
                                <label className="form-check-label" htmlFor={`brand-${index}`}>
                                    {brand}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
            ) : null}

            <div className="filter-section">
                <h6>Price</h6>
                <div className="d-flex flex-md-column column-gap-4 row-gap-2 flex-wrap">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="price" id="priceall" onChange={() => handlePriceChange(null)} />
                        <label className="form-check-label" htmlFor="priceall">All</label>
                    </div>
                    {priceRanges.map(([start, end], index) => (
                        <div className="form-check" key={index}>
                            <input
                                id={`price${index}`}
                                className="form-check-input"
                                type="radio"
                                name="price"
                                onChange={() => handlePriceChange([start, end])}
                            />
                            <label className="form-check-label" htmlFor={`price${index}`}>
                                {start.toLocaleString()} - {end.toLocaleString()}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        </aside>
    );
};