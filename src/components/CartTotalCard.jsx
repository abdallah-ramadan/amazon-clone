import React from 'react'
import { FaCircleCheck } from "react-icons/fa6";

function CartTotalCard() {
    return (
        <div className=' bg-white py-4'>
            <div className="w-full px-5">
                <div className=' flex gap-1.5 lg:mb-6 mb-4'>
                    <FaCircleCheck className=' text-green-600 text-3xl -mt-1' />
                    <p className=' text-xs'><span className=' text-green-600 font-medium'>Your first order qualifies for FREE Delivery.</span> Select this option at checkout. <span className=' text-indigo-800 cursor-pointer hover:underline hover:text-indigo-900'>Details</span></p>
                </div>
                <div>
                    <p className=' text-xl'>Subtotal (<span>1</span> item): <span className=' font-medium'>EGP 470.88</span></p>
                    <button className='bg-yellow-400 w-full lg:py-1 lg:rounded-3xl py-1.5 rounded hover:bg-yellow-500 transition cursor-pointer mt-1.5 text-sm font-medium shadow'>Proceed to Buy</button>
                </div>
            </div>
        </div>
    )
}

export default CartTotalCard
