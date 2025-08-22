import React, { useEffect, useState } from "react";
import ProductCartItem from "../components/cart/ProductCartItem";
import CartTotalCard from "../components/cart/CartTotalCard";
import CartOtherProduct from "../components/cart/CartOtherProduct";
import { getUser } from "../services/userServices";

function Cart() {
  const [cart, setCart] = useState([]);
  
  useEffect(()=>{

setCart[getUser().cart]

  },[])
  if (cart.length<1) {
    return (
      <>
        <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-h-screen-minus-160 tw-text-center tw-p-4">
          <img
            src="/empty-cart.svg"
            alt="Empty Cart"
            className="tw-w-40 tw-mb-6"
          />
          <h2 className="tw-text-2xl tw-font-semibold tw-mb-2 tw-text-gray-800">
            Your Amazon Cart is empty
          </h2>

          <p className="tw-text-gray-600 tw-mb-6">
            Shop today's deals or sign in to your account for your saved items.
          </p>

          <div className="tw-flex tw-gap-3">
            <button className="tw-bg-yellow-400 hover:tw-bg-yellow-500 tw-text-gray-800 tw-font-medium tw-px-6 tw-py-2 tw-rounded tw-shadow tw-transition tw-cursor-pointer">
              Continue Shopping
            </button>
          </div>
        </div>
      </>
    );
  }
  return (
    <div className="tw-bg-[#EAEDED] tw-py-3.5 tw-px-5 tw-min-h-screen">
      <div className="tw-flex tw-gap-5 tw-flex-col-reverse lg:tw-flex-row">
        <div className="tw-flex-1 tw-flex tw-flex-col tw-gap-y-5">
          <div className="tw-bg-white tw-pt-5 tw-pb-4">
            <div className="tw-px-5">
              <h1 className="tw-text-[28px] tw-font-medium tw-mb-2">
                Shopping Cart
              </h1>
              <div className="tw-border-t tw-border-[#E7E7E7]">{}</div>
            </div>
          </div>
          <div className="tw-bg-white tw-py-7"></div>
        </div>
        <div className="lg:tw-w-[300px] tw-w-full tw-flex tw-flex-col tw-gap-y-5">
          <CartTotalCard />
          <CartOtherProduct />
        </div>
      </div>
    </div>
  );
}

export default Cart;
