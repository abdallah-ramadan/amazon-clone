import {
  Star,
  ShoppingCart,
  CreditCard,
  Shield,
  Truck,
  CreditCardIcon,
} from "lucide-react";
import React, { useState } from "react";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  return (
    <div className="tw-p-5 tw-min-h-screen">
      {/* Breadcrumb */}
      <ul className="tw-text-sm tw-text-gray-500 tw-mb-4">
        Fashion / Women's / Clothing / Dresses
      </ul>

      <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-8">
        {/* Product Image Section */}
        <div className="tw-bg-white tw-p-8 tw-rounded-lg tw-shadow-sm">
          <div className="tw-relative">
            <img
              src="https://www.bonnersmusic.co.uk/cdn/shop/files/U3_With_Stool.jpg?v=1723213512"
              alt="LG Washing Machine"
              className="tw-w-full tw-h-auto tw-object-cover"
            />
            <div className="tw-absolute tw-top-4 tw-left-4 tw-bg-red-500 tw-text-white tw-px-2 tw-py-1 tw-rounded tw-text-sm tw-font-bold">
              -25%
            </div>
          </div>

          {/* Product thumbnails */}
          <div className="tw-flex tw-gap-2 tw-mt-4 tw-overflow-x-auto">
            <img
              onClick={() => setActiveImage(0)}
              src="https://i.ebayimg.com/images/g/YyAAAOSwGwFm3D1y/s-l140.webp"
              alt="Thumbnail"
              className={`tw-border-2 tw-transition tw-duration-300  ${activeImage === 0 ? "tw-border-blue-500" : "tw-opacity-70"
                }   tw-rounded`}
            />
            <img
              onClick={() => setActiveImage(1)}
              src="https://i.ebayimg.com/images/g/YyAAAOSwGwFm3D1y/s-l140.webp"
              alt="Thumbnail"
              className={`tw-border-2 tw-transition tw-duration-300 ${activeImage === 1 ? "tw-border-blue-500" : "tw-opacity-70"
                }   tw-rounded`}
            />
            <img
              onClick={() => setActiveImage(2)}
              src="https://i.ebayimg.com/images/g/YyAAAOSwGwFm3D1y/s-l140.webp"
              alt="Thumbnail"
              className={`tw-border-2 tw-transition tw-duration-300 ${activeImage === 2 ? "tw-border-blue-500" : "tw-opacity-70"
                }   tw-rounded`}
            />
          </div>
        </div>

        {/* Product Details Section */}
        <div className="tw-space-y-6">
          {/* Brand and Title */}
          <div>
            <p className="tw-text-blue-600 tw-text-sm tw-font-medium tw-mb-1">
              Brand: WHIRLSAA
            </p>
            <h1 className="tw-text-2xl tw-font-bold tw-text-gray-900 tw-leading-tight">
              LG 7 Kg, 5 Star, Direct Drive Technology, Steam Wash, AI Motion
              DD, Smart Diagnosis, Fully-Automatic Front Load
            </h1>
          </div>

          {/* Rating */}
          <div className="tw-flex tw-items-center tw-gap-2">
            <div className="tw-flex tw-items-center">
              <span className="tw-bg-green-600 tw-text-white tw-px-2 tw-py-1 tw-rounded tw-text-sm tw-font-bold">
                4.1 ★
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
              <span className="tw-text-3xl tw-font-bold tw-text-red-600">$203</span>
              <span className="tw-text-lg tw-text-gray-500 tw-line-through">$271</span>
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
              <button className="tw-w-full tw-transition tw-bg-yellow-500 hover:tw-bg-yellow-600 tw-text-white tw-font-bold tw-py-3 tw-rounded-lg tw-cursor-pointer">
                Add to Cart
              </button>
              <button className="tw-w-full tw-transition tw-bg-orange-500 hover:tw-bg-orange-600 tw-text-white tw-font-bold tw-py-3 tw-rounded-lg tw-cursor-pointer">
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

            <button className="tw-w-full tw-mt-3 tw-bg-red-500 tw-transition tw-text-white hover:tw-bg-red-600 tw-border tw-rounded-lg tw-py-2 tw-border-gray-300 tw-cursor-pointer">
              Add to Favorite
            </button>
          </div>

          {/* Product Details */}
          <div>
            <h3 className="tw-font-bold tw-text-lg tw-mb-3">About this item</h3>
            <ul className="tw-space-y-2 tw-text-sm tw-text-gray-700">
              <li>
                • Powerful wash that is Kind and soft, gentle on fabrics, yet
                tough on stains
              </li>
              <li>• Beat's dirty items</li>
              <li>• Smart tub clean alerts and 6 soft and comfortable</li>
              <li>• Fully automatic top loading, 460 mm, Wi-Fi enabled</li>
              <li>• Stainless cassual</li>
              <li>
                • Care beyond clean: Machine wash or professional dry clean
              </li>
            </ul>
          </div>
        </div>
        <div className="reviews"></div>
      </div>
    </div>
  );
};

export default ProductDetails;