
import { auth } from "../../firebaseconfig";
import {
  Star,
  ShoppingCart,
  CreditCard,
  Shield,
  Truck,
  CreditCardIcon,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductDetails } from "../Redux/productDetailsSlice";
import { Loader } from "../components/Loader";
const ProductDetails = () => {

  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );
  const handleBuyNow = () => {
    if (!auth.currentUser) {
      navigate("/login");
    } else {
      navigate("/cart");
    }
  };
  useEffect(() => {
    if (id) {
      dispatch(fetchProductDetails(id));
    }
  }, [dispatch, id]);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  if (loading) return <Loader />
  if (error) return <div className="alert alert-danger w-75 m-auto mt-5" role="alert">Error:{error}</div>
  if (!product) return <p className="tw-text-center mt-5">No product found.</p>;

  return (
    <div className="tw-p-5 tw-min-h-screen">
      {/* Breadcrumb */}
      <ul className="tw-text-sm tw-text-gray-500 tw-mb-4">
        {product.category} / {product.brand}
      </ul>

      <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-8">
        {/* Product Image Section */}
        <div className="tw-bg-white tw-p-8 tw-rounded-lg tw-shadow-sm">
          <div className="tw-relative">
            <img
              src={product.images[activeImage] || product.thumbnail}
              alt={product.title}
              className="tw-w-full tw-h-auto tw-object-cover"
            />
            <div className="tw-absolute tw-top-4 tw-left-4 tw-bg-red-500 tw-text-white tw-px-2 tw-py-1 tw-rounded tw-text-sm tw-font-bold">
              -{Math.round(product.discountPercentage)}%
            </div>
          </div>

          {/* Product thumbnails */}
          <div className="tw-flex tw-gap-2 tw-mt-4 tw-overflow-x-auto">
            {product.images?.map((img, index) => (
              <img
                key={index}
                onClick={() => setActiveImage(index)}
                src={img}
                alt={`Thumbnail ${index}`}
                className={`tw-w-20 tw-h-20 tw-object-cover tw-border-2 tw-rounded cursor-pointer ${activeImage === index
                  ? "tw-border-blue-500"
                  : "tw-opacity-70"
                  }`}
              />
            ))}
          </div>
        </div>

        {/* Product Details Section */}
        <div className="tw-space-y-6">
          {/* Brand and Title */}
          <div>
            <p className="tw-text-blue-600 tw-text-sm tw-font-medium tw-mb-1">
              Brand: {product.brand}
            </p>
            <h1 className="tw-text-2xl tw-font-bold tw-text-gray-900 tw-leading-tight">
              {product.title}
            </h1>
          </div>

          {/* Rating */}
          <div className="tw-flex tw-items-center tw-gap-2">
            <div className="tw-flex tw-items-center">
              <span className="tw-bg-green-600 tw-text-white tw-px-2 tw-py-1 tw-rounded tw-text-sm tw-font-bold">
                {product.rating} ★
              </span>
            </div>
            <span className="tw-text-gray-600 tw-text-sm">Verified Purchase</span>
            <span className="tw-text-blue-600 tw-text-sm tw-cursor-pointer">
              See all reviews
            </span>
          </div>

          {/* Price Section */}
          <div className="tw-bg-gray-100 tw-p-4 tw-rounded-lg">
            <div className="tw-flex tw-items-baseline tw-gap-2 tw-mb-2">
              <span className="tw-text-3xl tw-font-bold tw-text-red-600">${product.price}</span>
              <span className="tw-text-lg tw-text-gray-500 tw-line-through">${(product.price + product.price * (product.discountPercentage / 100)).toFixed(2)}</span>
            </div>
            <p className="tw-text-sm tw-text-gray-600 tw-mb-2">All price includes VAT</p>
            <p className="tw-text-green-600 tw-text-sm tw-font-medium">
              Up to 8% cashback off with master credit cards.
            </p>
            <p className="tw-text-sm tw-text-gray-600">
              Enter code NEHARA at checkout. Discount by Amazon.
            </p>
          </div>

          {/* Features */}
          <div className="tw-flex tw-gap-6 tw-text-center">
            <div className="tw-flex tw-flex-col tw-items-center">
              <Truck className="tw-w-8 tw-h-8 tw-text-blue-600 tw-mb-1" />
              <span className="tw-text-xs tw-text-gray-600">Electronic</span>
              <span className="tw-text-xs tw-text-gray-600">payment Only</span>
            </div>
            <div className="tw-flex tw-flex-col tw-items-center">
              <Shield className="tw-w-8 tw-h-8 tw-text-blue-600 tw-mb-1" />
              <span className="tw-text-xs tw-text-gray-600">30 Days</span>
              <span className="tw-text-xs tw-text-gray-600">Free warranty</span>
            </div>
            <div className="tw-flex tw-flex-col tw-items-center">
              <CreditCardIcon className="tw-w-8 tw-h-8 tw-text-blue-600 tw-mb-1" />
              <span className="tw-text-xs tw-text-gray-600">Secure</span>
              <span className="tw-text-xs tw-text-gray-600">transaction</span>
            </div>
          </div>

          {/* Purchase Options */}
          <div className="tw-bg-white tw-p-4 tw-rounded-lg tw-border">
            <div className="tw-flex tw-items-center tw-justify-between tw-mb-4">
              <span className="tw-font-medium">Quantity:</span>
              <select
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="tw-border tw-rounded tw-px-3 tw-py-1"
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </select>
            </div>

            <div className="tw-space-y-3">
              <button  className="tw-w-full tw-transition tw-bg-yellow-500 hover:tw-bg-yellow-600 tw-text-white tw-font-bold tw-py-3 tw-rounded-lg tw-cursor-pointer" onClick={() => { navigate('/cart') }}>
                Add to Cart
              </button>
              <button className="tw-w-full tw-transition tw-bg-orange-500 hover:tw-bg-orange-600 tw-text-white tw-font-bold tw-py-3 tw-rounded-lg tw-cursor-pointer" onClick={handleBuyNow}>
                Buy Now
              </button>
            </div>

            <div className="tw-mt-4 tw-space-y-2 tw-text-sm tw-text-gray-600">
              <div className="tw-flex tw-justify-between">
                <span>Ships from:</span>
                <span>Provided by</span>
              </div>
              <div className="tw-flex tw-justify-between">
                <span>Sold by:</span>
                <span>Returned by</span>
              </div>
              <div className="tw-flex tw-justify-between">
                <span>Payment:</span>
                <span>Secure transaction</span>
              </div>
            </div>

            <button onClick={handleAddToFavorite} className="tw-w-full tw-mt-3 tw-bg-red-500 tw-transition tw-text-white hover:tw-bg-red-600 tw-border tw-rounded-lg tw-py-2 tw-border-gray-300 tw-cursor-pointer">
              Add to Favorite
            </button>
          </div>

          {/* Product Details */}
          <div>
            <h3 className="tw-font-bold tw-text-lg tw-mb-3">About this item</h3>
            <p className="tw-space-y-2 tw-text-sm tw-text-gray-700">
              {product.description}
            </p>
          </div>
        </div>
        <div className="reviews"></div>
      </div>
    </div>
  );
};
export default ProductDetails;