import React from 'react'
import { FaRegTrashAlt } from 'react-icons/fa';
import { FaMinus, FaPlus } from "react-icons/fa6";

function ProductCartItem() {
    let amount = 1
    return (
        <div className='border-b border-[#E7E7E7] sm:py-3 sm:pl-3 '>
            <div className='flex flex-col sm:flex-row'>
                <img src="/thumbnail.webp" alt="" className='sm:w-44 sm:h-44 w-full' />
                <div className=' flex flex-col gap-2 w-full'>
                    <h3 className=' text-2xl font-medium'>Blue & Black Check Shirt</h3>
                    <p className=' line-clamp-2'>
                        The Blue & Black Check Shirt is a stylish and comfortable men's shirt featuring a classic check pattern.
                        Made from high-quality fabric, it's suitable for both casual and semi-formal occasions.
                    </p>
                    <p className=' font-semibold text-[28px]'>₹29.99.00</p>
                    <p className=' text-green-700'>In Stock</p>
                    <div className='flex flex-col md:flex-row md:justify-between justify-center items-center'>
                        <div className='flex gap-5 text-[12px] sm:text-[16px]'>
                            <p><span className=' font-medium'>Sold By</span>: Fashion Trends</p>
                            <p className='border-l-[1px] pl-5 border-gray-200'>
                                <span className=' font-medium '>Category</span>: mens-shirts
                            </p>
                        </div>
                        <div className='flex items-center gap-3 mr-3 mt-2.5 mb-2 sm:mb-0'>
                            <div className='flex items-center gap-5 border border-gray-300 rounded-lg px-3 py-1'>
                                {amount > 1 ? (
                                    <FaMinus className=' cursor-pointer' />
                                ) : (
                                    <FaRegTrashAlt className=' cursor-pointer' />
                                )}
                                <span className=' font-bold text-xl'>{amount}</span>
                                <FaPlus className=' cursor-pointer' />
                            </div>
                            <button className='px-4 py-2 text-sm rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium transition cursor-pointer'>
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