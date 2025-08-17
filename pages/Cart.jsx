import React from 'react'
import ProductCartItem from '../components/ProductCartItem'
import CartTotalCard from '../components/CartTotalCard'
import CartOtherProduct from '../components/CartOtherProduct'

function Cart() {
    let emptyCart = false
    if (emptyCart === true) {
        return (<>
            <div className="flex flex-col items-center justify-center h-screen-minus-160 text-center p-4">
                <img src="/empty-cart.svg" alt="Empty Cart" className="w-40 mb-6" />
                <h2 className="text-2xl font-semibold mb-2 text-gray-800">
                    Your Amazon Cart is empty
                </h2>

                <p className="text-gray-600 mb-6">
                    Shop today's deals or sign in to your account for your saved items.
                </p>

                <div className="flex gap-3">
                    <button
                        className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-medium px-6 py-2 rounded shadow transition cursor-pointer"
                    >
                        Continue Shopping
                    </button>
                </div>
            </div>
        </>
        )
    }
    return (
        <div className='bg-[#EAEDED] py-3.5 px-5 min-h-screen'>
            <div className='flex gap-5 flex-col-reverse lg:flex-row'>
                <div className='flex-1 flex flex-col gap-y-5'>
                    <div className=' bg-white pt-5 pb-4'>
                        <div className='px-5'>
                            <h1 className='text-[28px] font-medium mb-2'>
                                Shopping Cart
                            </h1>
                            <div className='border-t border-[#E7E7E7]'>
                                <ProductCartItem />
                                <ProductCartItem />
                                <ProductCartItem />
                            </div>
                        </div>
                    </div>
                    <div className='bg-white py-7'>
                    </div>
                </div>
                <div className=' lg:w-[300px] w-full flex flex-col gap-y-5'>
                    <CartTotalCard />
                    <CartOtherProduct />
                </div>
            </div>
        </div>
    )
}

export default Cart