import React from 'react'
import CartOtherProductItem from './CartOtherProductItem'

function CartOtherProduct() {
    return (
        <div className='tw-bg-white tw-hidden lg:tw-block tw-px-5 tw-pt-4 tw-max-h-[500px] tw-overflow-y-auto  tw-[scrollbar-width:thin] tw-[scrollbar-color:#9ca3af_#f3f4f6]'>
            <h2 className='tw-mb-2.5 tw-font-semibold tw-text-[18px]'>Users also bought:</h2>
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