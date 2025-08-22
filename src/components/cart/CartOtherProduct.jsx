import React, { useState, useEffect } from 'react'
import CartOtherProductItem from './CartOtherProductItem'

function CartOtherProduct() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true)
                const response = await fetch('https://dummyjson.com/products?limit=20&skip=10')
                const data = await response.json()

                if (data && data.products) {
                    setProducts(data.products)
                } else {
                    throw new Error('Invalid data format from API')
                }
            } catch (err) {
                setError(err.message)
                console.error('Error fetching products:', err)
            } finally {
                setLoading(false)
            }
        }

        fetchProducts()
    }, [])

    if (loading) {
        return (
            <div className='tw-bg-white tw-hidden lg:tw-block tw-px-5 tw-pt-4 tw-max-h-[500px] tw-overflow-y-auto tw-[scrollbar-color:#9ca3af_#f3f4f6]' style={{ scrollbarWidth: "thin" }}>
                <h2 className='tw-mb-2.5 tw-font-semibold tw-text-[18px]'>Users also bought:</h2>
                <div className="tw-space-y-4">
                    {[...Array(5)].map((_, index) => (
                        <div key={index} className="tw-flex tw-mb-5 tw-items-center tw-animate-pulse">
                            <div className="tw-w-[100px] tw-h-[100px] tw-bg-gray-300 tw-rounded"></div>
                            <div className="tw-flex-1 tw-ml-4">
                                <div className="tw-h-4 tw-bg-gray-300 tw-rounded tw-w-3/4 tw-mb-2"></div>
                                <div className="tw-h-3 tw-bg-gray-300 tw-rounded tw-w-full tw-mb-1"></div>
                                <div className="tw-h-3 tw-bg-gray-300 tw-rounded tw-w-5/6 tw-mb-2"></div>
                                <div className="tw-h-4 tw-bg-gray-300 tw-rounded tw-w-1/4"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div className='tw-bg-white tw-hidden lg:tw-block tw-px-5 tw-pt-4 tw-max-h-[500px] tw-overflow-y-auto tw-[scrollbar-color:#9ca3af_#f3f4f6]' style={{ scrollbarWidth: "thin" }}>
                <h2 className='tw-mb-2.5 tw-font-semibold tw-text-[18px]'>Users also bought:</h2>
                <div className="tw-text-red-500 tw-p-4 tw-bg-red-50 tw-rounded">
                    Error loading products: {error}
                </div>
            </div>
        )
    }

    return (
        <div className='tw-bg-white tw-hidden lg:tw-block tw-px-5 tw-pt-4 tw-max-h-[500px] tw-overflow-y-auto tw-[scrollbar-color:#9ca3af_#f3f4f6]' style={{ scrollbarWidth: "thin" }}>
            <h2 className='tw-mb-2.5 tw-font-semibold tw-text-[18px]'>Users also bought:</h2>
            {products.map(product => (
                <CartOtherProductItem
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    image={product.thumbnail}
                />
            ))}
        </div>
    )
}

export default CartOtherProduct