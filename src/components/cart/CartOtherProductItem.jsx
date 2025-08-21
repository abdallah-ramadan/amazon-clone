import React from 'react'

function CartOtherProduct() {
    return (
        <div className='tw-flex tw-mb-5 tw-items-center tw-cursor-pointer'>
            <img src="/thumbnail.webp" alt="image" className='tw-max-w-[100px] tw-max-h-[100px]' />
            <div className='tw-flex-1'>
                <h3 className='tw-font-semibold tw-text-[13px] tw-mb-1.5 tw-line-clamp-1'>Blue & Black Check Shirt</h3>
                <p className='tw-line-clamp-2 tw-text-sm'>The Blue & Black Check Shirt is a stylish and comfortable men's shirt featuring a classic check pattern. Made from high-quality fabric, it's suitable for both casual and semi-formal occasions.
                </p>
                <p><span className='tw-font-bold tw-text-yellow-600'>EGP </span>29.99</p>
            </div>
        </div>
    )
}

export default CartOtherProduct