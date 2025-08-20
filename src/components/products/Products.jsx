import React from "react";
import "./Products.css";
import { StarRate } from "./StarRate";

export const Products = ({ products }) => {
    return (
        <section className="col-lg-10 col-md-9 px-2">
            <div className="products-grid">
                {products.map((product) => (
                    <div className="product-card" key={product.id}>
                        <div className="img-card-container">
                            <img src={product.image} alt={product.title} />
                        </div>
                        <div className="card-body">
                            <h6 className="card-title">{product.title}</h6>

                            <div className="mb-2">
                                <StarRate currentRate={product.rating} />
                                <span className="product-review-number">
                                    {product.reviews.toLocaleString()}
                                </span>
                                <p className="product-sales-number">
                                    {product.sales}+ bought in past month
                                </p>
                            </div>

                            <div className="mb-2">
                                <span className="price">
                                    ₹{product.currentPrice.toLocaleString("en-IN")}
                                </span>
                                <small>
                                    <span className="discount-rate">({product.discount}% off)</span>
                                </small>
                                <p className="discount-rate font-light">
                                    Save extra with No Cost EMI
                                </p>
                            </div>

                            <p className="delivery-date">
                                FREE delivery by <span>{product.deliveryDate}, {product.deliveryTime}</span>
                            </p>

                            <button className="btn px-4 mt-2">Add to cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};