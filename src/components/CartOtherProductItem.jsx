import React from 'react'

function CartOtherProduct() {
    return (
        <div className='flex mb-5 items-center cursor-pointer'>
            <img src="/thumbnail.webp" alt="image" className='max-w-[100px] max-h-[100px]' />
            <div className='flex-1'>
                <h3 className=' font-semibold text-[13px] mb-1.5 line-clamp-1'>Blue & Black Check Shirt</h3>
                <p className=' line-clamp-2 text-sm'>The Blue & Black Check Shirt is a stylish and comfortable men's shirt featuring a classic check pattern. Made from high-quality fabric, it's suitable for both casual and semi-formal occasions.
                </p>
                <p><span className=' font-bold text-yellow-600'>EGP </span>29.99</p>
            </div>
        </div>
    )
}

export default CartOtherProduct