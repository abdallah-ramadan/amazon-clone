import React from 'react'
import ProductCartItem from '../components/cart/ProductCartItem'
import CartTotalCard from '../components/cart/CartTotalCard'
import CartOtherProduct from '../components/cart/CartOtherProduct'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { addToWishlist, removeFromWishlist } from '../redux/WishlistSlice'
import "../components/products/Products.css"
import { StarRate } from '../components/products/StarRate'
import { addToCart, removeFromCart } from '../redux/CartSlice'

function Cart() {
    const { cartItems } = useSelector(state => state.cart)
    const { wishlistItems } = useSelector(state => state.wishlist)
    const dispatch = useDispatch()

    const handleSaveForLater = (item) => {
        // Add to wishlist
        dispatch(addToWishlist(item))
        // Remove from cart
        dispatch(removeFromCart({
            id: item.id,
            price: item.price,
            quantity: item.quantity
        }))
    }
    const handleMoveToCart = (item) => {
        // Add to cart
        dispatch(addToCart({ ...item, quantity: 1 }))
        // Remove from wishlist
        dispatch(removeFromWishlist(item))
    }

    let emptyCart = cartItems.length === 0 && wishlistItems.length === 0 ? true : false

    if (emptyCart) {
        return (
            <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-h-screen-minus-160 tw-text-center tw-p-4">
                <img src="/empty-cart.svg" alt="Empty Cart" className="tw-w-40 tw-mb-6" />
                <h2 className="tw-text-2xl tw-font-semibold tw-mb-2 tw-text-gray-800">
                    Your Amazon Cart is empty
                </h2>

                <p className="tw-text-gray-600 tw-mb-6">
                    Shop today's deals or sign in to your account for your saved items.
                </p>

                <div className="tw-flex tw-gap-3">
                    <NavLink
                        to="/"
                        className="tw-bg-yellow-400 hover:tw-bg-yellow-500 tw-text-gray-800 tw-font-medium tw-px-6 tw-py-2 tw-rounded tw-shadow tw-transition tw-cursor-pointer"
                    >
                        Continue Shopping
                    </NavLink>
                </div>
            </div>
        )
    }

    return (
        <div className='tw-bg-[#EAEDED] tw-py-3.5 tw-px-5 tw-min-h-screen'>
            <div className='tw-flex tw-gap-5 tw-flex-col-reverse lg:tw-flex-row'>
                <div className='tw-flex-1 tw-flex tw-flex-col tw-gap-y-5'>
                    <div className='tw-bg-white tw-pt-5 tw-pb-4'>
                        <div className='tw-px-5'>
                            <h1 className='tw-text-[28px] tw-font-medium tw-mb-2'>
                                Shopping Cart
                            </h1>
                            <div className='tw-border-t tw-border-[#E7E7E7]'>
                                {cartItems.map((ele) => {
                                    return (
                                        <ProductCartItem
                                            ele={ele}
                                            key={ele.id}
                                            onSaveForLater={() => handleSaveForLater(ele)}
                                        />
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Saved for Later Section */}
                    {wishlistItems.length > 0 && (
                        <div className='tw-bg-white tw-pt-5 tw-pb-4'>
                            <div className='tw-px-5'>
                                <h2 className='tw-text-[20px] tw-font-medium tw-mb-2'>
                                    Saved for later ({wishlistItems.length} items)
                                </h2>
                                <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-3 xl:tw-grid-cols-4   tw-gap-4">
                                    {wishlistItems.map((ele) => {
                                        return (
                                            <SavedForLaterItem
                                                ele={ele}
                                                key={ele.id}
                                                onMoveToCart={() => handleMoveToCart(ele)}
                                                onRemove={() => dispatch(removeFromWishlist(ele))}
                                            />
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className='lg:tw-w-[300px] tw-w-full tw-flex tw-flex-col tw-gap-y-5'>
                    <CartTotalCard />
                    <CartOtherProduct />
                </div>
            </div>
        </div>
    )
}

export default Cart


const SavedForLaterItem = ({ ele, onMoveToCart, onRemove }) => {
    return (
        <div className=" tw-p-2 tw-border tw-border-[#d9d9d9]" key={ele.id}>
            <NavLink
                to={`/product-details/${ele.id}`}
                className="product-link"
            >
                <div className="img-card-container">
                    <img src={ele.thumbnail || ele.images?.[0]} alt={ele.title} />
                </div>
                <div className="card-body">
                    <h6 className="card-title">{ele.title}</h6>

                    <div className="mb-2">
                        <p className="card-description tw-line-clamp-2">{ele.description}</p>
                    </div>
                    <div className="mb-2">
                        <StarRate currentRate={ele.rating} />
                        <span className="product-review-number">
                            {ele.stock?.toLocaleString() ?? 0} in stock
                        </span>
                    </div>

                    <div className="mb-2">
                        <span className="price">
                            EGP{ele.price?.toLocaleString("en-IN") ?? "N/A"}
                        </span>
                        <small className="ms-2">
                            <span className="discount-rate">
                                ({ele.discountPercentage ?? 0}% off)
                            </span>
                        </small>
                        <p className="discount-rate font-light">
                            Save extra with No Cost EMI
                        </p>
                    </div>

                    <p className="delivery-date">
                        FREE delivery by <span>Tomorrow</span>
                    </p>
                </div>
            </NavLink>

            <button
                className="btn my-btn px-4 mt-2 tw-w-full"
                onClick={onMoveToCart}
            >
                Move to cart
            </button>
            <button
                onClick={onRemove}
                className="btn my-btn px-4 mt-2 tw-w-full"
            >
                Remove
            </button>
        </div>
    )
}