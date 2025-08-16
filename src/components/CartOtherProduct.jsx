import React from 'react'
import CartOtherProductItem from '../components/CartOtherProductItem'

function CartOtherProduct() {
    return (
        <div className=' bg-white hidden lg:block px-5 pt-4'>
            <h2 className='mb-2.5 font-semibold text-[18px]'>Users also bought:</h2>
            <CartOtherProductItem />
            <CartOtherProductItem />
            <CartOtherProductItem />
        </div>
    )
}

export default CartOtherProduct