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
    <div className=" p-5  min-h-screen">
      {/* Breadcrumb */}
      <ul className="text-sm text-gray-500 mb-4">
        Fashion / Women's / Clothing / Dresses
      </ul>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Image Section */}
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <div className="relative">
            <img
              src="https://www.bonnersmusic.co.uk/cdn/shop/files/U3_With_Stool.jpg?v=1723213512"
              alt="LG Washing Machine"
              className="w-full h-auto object-cover"
            />
            <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">
              -25%
            </div>
          </div>

          {/* Product thumbnails */}
          <div className="flex gap-2 mt-4 overflow-x-auto">
            <img
              onClick={() => setActiveImage(0)}
              src="https://i.ebayimg.com/images/g/YyAAAOSwGwFm3D1y/s-l140.webp"
              alt="Thumbnail"
              className={`border-2 transition duration-300  ${
                activeImage === 0 ? "border-blue-500" : "opacity-70"
              }   rounded`}
            />
            <img
              onClick={() => setActiveImage(1)}
              src="https://i.ebayimg.com/images/g/YyAAAOSwGwFm3D1y/s-l140.webp"
              alt="Thumbnail"
              className={`border-2 transition duration-300 ${
                activeImage === 1 ? "border-blue-500" : "opacity-70"
              }   rounded`}
            />
            <img
              onClick={() => setActiveImage(2)}
              src="https://i.ebayimg.com/images/g/YyAAAOSwGwFm3D1y/s-l140.webp"
              alt="Thumbnail"
              className={`border-2 transition duration-300 ${
                activeImage === 2 ? "border-blue-500" : "opacity-70"
              }   rounded`}
            />
          </div>
        </div>

        {/* Product Details Section */}
        <div className="space-y-6">
          {/* Brand and Title */}
          <div>
            <p className="text-blue-600 text-sm font-medium mb-1">
              Brand: WHIRLSAA
            </p>
            <h1 className="text-2xl font-bold text-gray-900 leading-tight">
              LG 7 Kg, 5 Star, Direct Drive Technology, Steam Wash, AI Motion
              DD, Smart Diagnosis, Fully-Automatic Front Load
            </h1>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <span className="bg-green-600 text-white px-2 py-1 rounded text-sm font-bold">
                4.1 ★
              </span>
            </div>
            <span className="text-gray-600 text-sm">Verified Purchase</span>
            <span className="text-blue-600 text-sm cursor-pointer">
              See all reviews
            </span>
          </div>

          {/* Price Section */}
          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-3xl font-bold text-red-600">$203</span>
              <span className="text-lg text-gray-500 line-through">$271</span>
            </div>
            <p className="text-sm text-gray-600 mb-2">All price includes VAT</p>
            <p className="text-green-600 text-sm font-medium">
              Up to 8% cashback off with master credit cards.
            </p>
            <p className="text-sm text-gray-600">
              Enter code NEHARA at checkout. Discount by Amazon.
            </p>
          </div>

          {/* Features */}
          <div className="flex gap-6 text-center">
            <div className="flex flex-col items-center">
              <Truck className="w-8 h-8 text-blue-600 mb-1" />
              <span className="text-xs text-gray-600">Electronic</span>
              <span className="text-xs text-gray-600">payment Only</span>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="w-8 h-8 text-blue-600 mb-1" />
              <span className="text-xs text-gray-600">30 Days</span>
              <span className="text-xs text-gray-600">Free warranty</span>
            </div>
            <div className="flex flex-col items-center">
              <CreditCardIcon className="w-8 h-8 text-blue-600 mb-1" />
              <span className="text-xs text-gray-600">Secure</span>
              <span className="text-xs text-gray-600">transaction</span>
            </div>
          </div>

          {/* Purchase Options */}
          <div className="bg-white p-4 rounded-lg border">
            <div className="flex items-center justify-between mb-4">
              <span className="font-medium">Quantity:</span>
              <select
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="border rounded px-3 py-1"
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </select>
            </div>

            <div className="space-y-3 ">
              <button className="w-full transition bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 rounded-lg cursor-pointer">
                Add to Cart
              </button>
              <button className="w-full transition bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg cursor-pointer ">
                Buy Now
              </button>
            </div>

            <div className="mt-4 space-y-2 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Ships from:</span>
                <span>Provided by</span>
              </div>
              <div className="flex justify-between">
                <span>Sold by:</span>
                <span>Returned by</span>
              </div>
              <div className="flex justify-between">
                <span>Payment:</span>
                <span>Secure transaction</span>
              </div>
            </div>

            <button className="w-full mt-3 bg-red-500 transition text-white hover:bg-red-600 border rounded-lg py-2 border-gray-300 cursor-pointer">
              Add to Favorite
            </button>
          </div>

          {/* Product Details */}
          <div>
            <h3 className="font-bold text-lg mb-3">About this item</h3>
            <ul className="space-y-2 text-sm text-gray-700">
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
