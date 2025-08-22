import React from 'react'
import ProductCartItem from '../components/cart/ProductCartItem'
import CartTotalCard from '../components/cart/CartTotalCard'
import CartOtherProduct from '../components/cart/CartOtherProduct'

function Cart() {
  const user = getUser();
  const cartItems = user?.cart || [];

  if (cartItems.length === 0) {
    return (
      <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-h-screen-minus-160 tw-text-center tw-p-4">
        <img src="/empty-cart.svg" alt="Empty Cart" className="tw-w-40 tw-mb-6" />
        <h2 className="tw-text-2xl tw-font-semibold tw-mb-2 tw-text-gray-800">
          Your Amazon Cart is empty
        </h2>
        <p className="tw-text-gray-600 tw-mb-6">
          Shop today's deals or sign in to your account for your saved items.
        </p>
        <div className="tw-flex tw-gap-3">
          <button
            className="tw-bg-yellow-400 hover:tw-bg-yellow-500 tw-text-gray-800 tw-font-medium tw-px-6 tw-py-2 tw-rounded tw-shadow tw-transition tw-cursor-pointer"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }


export default Cart