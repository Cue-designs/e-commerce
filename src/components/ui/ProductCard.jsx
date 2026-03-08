import React, { useState } from "react";

// format naira amounts with commas: 4500 → ₦4,500
const formatPrice = (amt) => `₦${amt.toLocaleString()}`;

import { FiShoppingCart, FiZoomIn } from "react-icons/fi";
import { Link } from "react-router-dom";

const ProductCard = ({ product, cartActions }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showSizeModal, setShowSizeModal] = useState(false);

  const handleAddToCart = (size = null) => {
    if (product.sizes.length > 1 && !size) {
      setShowSizeModal(true);
      return;
    }
    cartActions.addToCart(product, size || product.sizes[0]);
    setShowSizeModal(false);
  };

  return (
    <div className="group relative overflow-hidden bg-white rounded-xl border border-gray-100 hover:border-gray-300 transition-all duration-300 hover:shadow-lg">
      {/* Image Container */}
      <div
        className="relative h-72 overflow-hidden bg-gray-100"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-cover transition duration-300 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />

        {/* Overlay on Hover */}
        {isHovered && (
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center gap-3 transition duration-300">
            <button className="bg-yellow-400 text-black p-3 rounded-full hover:bg-yellow-500 transition transform scale-100 hover:scale-110 shadow-lg">
              <FiZoomIn size={20} />
            </button>
            <button
              onClick={() => handleAddToCart()}
              className="bg-white text-black px-6 py-2 font-bold rounded-lg hover:bg-yellow-400 transition transform scale-100 hover:scale-110 flex items-center gap-2 shadow-lg"
            >
              <FiShoppingCart size={18} />
              ADD
            </button>
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute top-3 right-3 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full uppercase">
          {product.category === "caps" ? "Cap" : "Apparel"}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-sm font-semibold text-gray-900 mb-1 line-clamp-2">
          {product.name}
        </h3>
        <p className="text-xs text-gray-500 mb-3">
          {product.style.charAt(0).toUpperCase() + product.style.slice(1)}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-yellow-500">
            {formatPrice(product.price)}
          </span>
          <span className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded border border-gray-200">
            {product.color}
          </span>
        </div>
      </div>

      {/* Size Modal */}
      {showSizeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 modal">
          <div className="bg-white text-gray-900 p-8 rounded-2xl max-w-md shadow-2xl">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Select Size</h2>
            <div className="grid grid-cols-3 gap-3 mb-6">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => {
                    cartActions.addToCart(product, size);
                    setShowSizeModal(false);
                  }}
                  className="border-2 border-gray-300 text-gray-900 font-bold py-3 rounded-lg hover:bg-yellow-400 hover:border-yellow-400 transition"
                >
                  {size}
                </button>
              ))}
            </div>
            <button
              onClick={() => setShowSizeModal(false)}
              className="w-full bg-gray-200 text-gray-900 py-3 rounded-lg hover:bg-gray-300 transition font-semibold"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
