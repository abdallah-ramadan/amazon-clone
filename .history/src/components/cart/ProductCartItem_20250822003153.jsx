import React from 'react'
import { FaRegTrashAlt } from 'react-icons/fa';
import { FaMinus, FaPlus } from "react-icons/fa6";

function ProductCartItem(props) {
  const { }
    let amount = 1
    return (
        <div className='tw-border-b tw-border-[#E7E7E7] sm:tw-py-3 sm:tw-pl-3'>
            <div className='tw-flex tw-flex-col sm:tw-flex-row'>
                <img src="/thumbnail.webp" alt="" className='sm:tw-w-44 sm:tw-h-44 tw-w-full' />
                <div className='tw-flex tw-flex-col tw-gap-2 tw-w-full'>
                    <h3 className='tw-text-2xl tw-font-medium'>Blue & Black Check Shirt</h3>
                    <p className='tw-line-clamp-2'>
                        The Blue & Black Check Shirt is a stylish and comfortable men's shirt featuring a classic check pattern.
                        Made from high-quality fabric, it's suitable for both casual and semi-formal occasions.
                    </p>
                    <p className='tw-font-medium tw-text-[28px]'><span className='tw-text-yellow-600 tw-font-semibold'>EGP</span>29.99</p>
                    <p className='tw-text-green-700'>In Stock</p>
                    <div className='tw-flex tw-flex-col md:tw-flex-row md:tw-justify-between tw-justify-center tw-items-center'>
                        <div className='tw-flex tw-gap-5 tw-text-[12px] sm:tw-text-[16px]'>
                            <p><span className='tw-font-medium'>Sold By</span>: Fashion Trends</p>
                            <p className='tw-border-l-[1px] tw-pl-5 tw-border-gray-200'>
                                <span className='tw-font-medium'>Category</span>: mens-shirts
                            </p>
                        </div>
                        <div className='tw-flex tw-items-center tw-gap-3 tw-mr-3 tw-mt-2.5 tw-mb-2 sm:tw-mb-0'>
                            <div className='tw-flex tw-items-center tw-gap-5 tw-border tw-border-gray-300 tw-rounded-lg tw-px-3 tw-py-1'>
                                {amount > 1 ? (
                                    <FaMinus className='tw-cursor-pointer' />
                                ) : (
                                    <FaRegTrashAlt className='tw-cursor-pointer' />
                                )}
                                <span className='tw-font-bold tw-text-xl'>{amount}</span>
                                <FaPlus className='tw-cursor-pointer' />
                            </div>
                            <button className='tw-px-4 tw-py-2 tw-text-sm tw-rounded-lg tw-bg-gray-100 hover:tw-bg-gray-200 tw-text-gray-700 tw-font-medium tw-transition tw-cursor-pointer'>
                                Save for later
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCartItem