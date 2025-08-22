import React from "react";
import { FaCircleCheck } from "react-icons/fa6";

function CartTotalCard({ cart }) {
  // Calculate subtotal
  const subtotal = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="tw-bg-white tw-py-4">
      <div className="tw-w-full tw-px-5">
        <div className="tw-flex tw-gap-1.5 lg:tw-mb-6 tw-mb-4">
          <FaCircleCheck className="tw-text-green-600 tw-text-3xl -tw-mt-1" />
          <p className="tw-text-xs">
            <span className="tw-text-green-600 tw-font-medium">
              Your first order qualifies for FREE Delivery.
            </span>{" "}
            Select this option at checkout.{" "}
            <span className="tw-text-indigo-800 tw-cursor-pointer hover:tw-underline hover:tw-text-indigo-900">
              Details
            </span> 
          </p>
        </div>
        <div>
          <p className="tw-text-xl">
            Subtotal (<span>{cart.length}</span> items):{" "}
            <span className="tw-font-medium">EGP {subtotal.toFixed(2)}</span>
          </p>
          <button className="tw-bg-yellow-400 tw-w-full lg:tw-py-1 lg:tw-rounded-3xl tw-py-1.5 tw-rounded hover:tw-bg-yellow-500 tw-transition tw-cursor-pointer tw-mt-1.5 tw-text-sm tw-font-medium tw-shadow">
            Proceed to Buy
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartTotalCard;
