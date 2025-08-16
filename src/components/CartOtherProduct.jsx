import React from 'react'
import CartOtherProductItem from '../components/CartOtherProductItem'

function CartOtherProduct() {
    return (
        <div className=' bg-white hidden lg:block px-5 pt-4 max-h-[500px] overflow-y-auto  [scrollbar-width:thin] [scrollbar-color:#9ca3af_#f3f4f6]'>
            <h2 className='mb-2.5 font-semibold text-[18px]'>Users also bought:</h2>
            <CartOtherProductItem />
            <CartOtherProductItem />
            <CartOtherProductItem />
            <CartOtherProductItem />
            <CartOtherProductItem />
            <CartOtherProductItem />
            <CartOtherProductItem />
            <CartOtherProductItem />
        </div>
    )
}

export default CartOtherProduct