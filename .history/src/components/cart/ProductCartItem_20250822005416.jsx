import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { getUser, userInteraction } from "../../services/userServices";

function ProductCartItem({ product, onRemove }) {
  
  const handleDecrease = () => {
    const user = getUser();
    if (!user) return;

    if (product.quantity > 1) {
      // update quantity
      const updatedCart = user.cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      );
      userInteraction({ user: { ...user, cart: updatedCart } });
      onUpdateCart(updatedCart);

    } else {
      // remove if quantity is 1
      const updatedCart = user.cart.filter((item) => item.id !== product.id);
      userInteraction({ user: { ...user, cart: updatedCart } });
      onRemove?.(product);
    }
  };

  const handleIncrease = () => {
    const user = getUser();
    if (!user) return;

    const updatedCart = user.cart.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
    userInteraction({ user: { ...user, cart: updatedCart } });
  };

  return (
    <div className="tw-border-b tw-border-[#E7E7E7] sm:tw-py-3 sm:tw-pl-3">
      <div className="tw-flex tw-flex-col sm:tw-flex-row">
        {/* Product Image */}
        <img
          src={product.thumbnail}
          alt={product.title}
          className="sm:tw-w-44 sm:tw-h-44 tw-w-full tw-object-cover"
        />

        {/* Product Details */}
        <div className="tw-flex tw-flex-col tw-gap-2 tw-w-full">
          <h3 className="tw-text-2xl tw-font-medium">{product.title}</h3>

          <p className="tw-line-clamp-2">{product.description}</p>

          <p className="tw-font-medium tw-text-[28px]">
            <span className="tw-text-yellow-600 tw-font-semibold">EGP</span>
            {product.price}
          </p>

          <p className="tw-text-green-700">
            {product.stock > 0 ? "In Stock" : "Out of Stock"}
          </p>

          <div className="tw-flex tw-flex-col md:tw-flex-row md:tw-justify-between tw-justify-center tw-items-center">
            <div className="tw-flex tw-gap-5 tw-text-[12px] sm:tw-text-[16px]">
              <p>
                <span className="tw-font-medium">Sold By</span>:{" "}
                {product.brand || "Unknown"}
              </p>
              <p className="tw-border-l-[1px] tw-pl-5 tw-border-gray-200">
                <span className="tw-font-medium">Category</span>:{" "}
                {product.category}
              </p>
            </div>

            {/* Quantity Controls */}
            <div className="tw-flex tw-items-center tw-gap-3 tw-mr-3 tw-mt-2.5 tw-mb-2 sm:tw-mb-0">
              <div className="tw-flex tw-items-center tw-gap-5 tw-border tw-border-gray-300 tw-rounded-lg tw-px-3 tw-py-1">
                {product.quantity > 1 ? (
                  <FaMinus className="tw-cursor-pointer" onClick={handleDecrease} />
                ) : (
                  <FaRegTrashAlt
                    className="tw-cursor-pointer"
                    onClick={handleDecrease}
                  />
                )}
                <span className="tw-font-bold tw-text-xl">{product.quantity}</span>
                <FaPlus className="tw-cursor-pointer" onClick={handleIncrease} />
              </div>
              <button className="tw-px-4 tw-py-2 tw-text-sm tw-rounded-lg tw-bg-gray-100 hover:tw-bg-gray-200 tw-text-gray-700 tw-font-medium tw-transition tw-cursor-pointer">
                Save for later
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCartItem;
