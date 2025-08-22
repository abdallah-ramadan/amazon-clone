import React from 'react'
import { NavLink } from 'react-router-dom'

function CartOtherProductItem({ id, title, description, price, image }) {
    return (
        <NavLink to={`/product-details/${id}`} className='tw-flex tw-mb-5 tw-items-center tw-cursor-pointer'>
            <img src={image || "/thumbnail.webp"} alt={title} className='tw-max-w-[100px] tw-max-h-[100px] tw-object-contain' />
            <div className='tw-flex-1 tw-ml-3'>
                <h3 className='tw-font-semibold tw-text-[13px] tw-mb-1.5 tw-line-clamp-1'>{title}</h3>
                <p className='tw-line-clamp-2 tw-text-sm tw-text-gray-600'>{description}</p>
                <p className='tw-mt-1'><span className='tw-font-bold tw-text-yellow-600'>EGP </span>{price}</p>
            </div>
        </NavLink>
    )
}

export default CartOtherProductItem