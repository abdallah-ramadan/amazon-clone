import React from "react";
import "./Products.css";
import { StarRate } from "./StarRate";
import { NavLink } from "react-router-dom";

export const Products = ({ products }) => {
  // const [u]

    const handleAddToCart = (product) => {
              e.stopPropagation();

    console.log(user);
    if (user) {
      toast.success("Added to Cart Successfully!");


      userInteraction({
        user: {
          ...user,
          cart: [...(user.cart || []), { ...product, quantity }],
        },
      });

      navigate("/cart");
    }
  };

    return (
        <section className="col-lg-10 col-md-9 px-2">
            <div className="products-grid">
                {products?.map((product) => (
                    <div
                        className="product-card"
                        key={product.id}
                    >
                      <NavLink                         to={`/product-details/${product.id}`}
>

                        <div className="img-card-container">
                            <img src={product.thumbnail || product.images?.[0]} alt={product.title} />
                        </div>
                      </NavLink>
                        <div className="card-body">
                            <h6 className="card-title">{product.title}</h6>

                            <div className="mb-2">
                                <p className="card-description">{product.description}</p>
                            </div>
                            <div className="mb-2">
                                <StarRate currentRate={product.rating} />
                                <span className="product-review-number">
                                    {product.stock?.toLocaleString() ?? 0} in stock
                                </span>
                            </div>

                            <div className="mb-2">
                                <span className="price">
                                    ₹{product.price?.toLocaleString("en-IN") ?? "N/A"}
                                </span>
                                <small className="ms-2">
                                    <span className="discount-rate">
                                        ({product.discountPercentage ?? 0}% off)
                                    </span>
                                </small>
                                <p className="discount-rate font-light">
                                    Save extra with No Cost EMI
                                </p>
                            </div>

                            <p className="delivery-date">
                                FREE delivery by <span>Tomorrow</span>
                            </p>

                            <button
                                className="btn my-btn px-4 mt-2"
                                onClick={(e) => handleAddToCart(e, product)}
                            >
                                Add to cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};