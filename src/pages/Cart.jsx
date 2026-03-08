import React from "react";
import { Link } from "react-router-dom";
import { FiTrash2, FiMinus, FiPlus, FiArrowRight } from "react-icons/fi";

const Cart = ({ cartActions }) => {
  const { cart, removeFromCart, updateQuantity, getTotalPrice, clearCart } =
    cartActions;

  const subtotal = getTotalPrice();
  const shipping = subtotal > 0 ? 10 : 0;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const formatPrice = (amt) => `₦${amt.toLocaleString()}`; // display helper


  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
          Your <span className="text-yellow-500">Cart</span>
        </h1>
      </section>

      {cart.length === 0 ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <p className="text-xl text-gray-600 mb-8">Your cart is empty</p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-yellow-500 text-white px-8 py-3 font-bold rounded-lg hover:bg-yellow-600 transition"
          >
            Continue Shopping <FiArrowRight />
          </Link>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Items */}
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={`${item.id}-${item.size}`}
                    className="bg-white rounded-xl p-6 flex gap-6 border border-gray-200 hover:border-gray-300 transition"
                  >
                    {/* Image */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-32 h-32 object-cover rounded-lg flex-shrink-0"
                    />

                    {/* Details */}
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">
                        {item.color} {item.size && `• Size: ${item.size}`}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3 bg-gray-100 rounded-lg w-fit p-1">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.size,
                              item.quantity - 1,
                            )
                          }
                          className="p-2 hover:bg-gray-200 rounded transition"
                        >
                          <FiMinus size={16} className="text-gray-700" />
                        </button>
                        <span className="px-4 font-bold text-gray-900">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.size,
                              item.quantity + 1,
                            )
                          }
                          className="p-2 hover:bg-gray-200 rounded transition"
                        >
                          <FiPlus size={16} className="text-gray-700" />
                        </button>
                      </div>
                    </div>

                    {/* Price & Remove */}
                    <div className="flex flex-col items-end justify-between">
                      <div className="text-right">
                        <p className="text-2xl font-bold text-yellow-500">
                          {formatPrice(item.price * item.quantity)}
                        </p>
                        <p className="text-xs text-gray-500">
                          {formatPrice(item.price)} each
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id, item.size)}
                        className="text-red-500 hover:text-red-600 transition p-2"
                      >
                        <FiTrash2 size={20} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={clearCart}
                className="mt-6 text-red-600 hover:text-red-700 font-semibold text-sm transition"
              >
                Clear Cart
              </button>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl p-6 border border-gray-200 sticky top-24">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6 pb-6 border-b border-gray-200">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span>{formatPrice(shipping)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Tax (8%)</span>
                    <span>{formatPrice(tax)}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-6">
                  <span className="text-lg font-bold text-gray-900">TOTAL</span>
                  <span className="text-3xl font-bold text-yellow-500">
                    {formatPrice(total)}
                  </span>
                </div>

                <Link
                  to="/checkout"
                  className="w-full bg-yellow-500 text-white font-bold py-3 rounded-lg hover:bg-yellow-600 transition flex items-center justify-center gap-2 mb-3"
                >
                  CHECKOUT <FiArrowRight />
                </Link>

                <Link
                  to="/shop"
                  className="w-full border-2 border-gray-300 text-gray-900 font-bold py-3 rounded-lg hover:bg-gray-100 transition text-center"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
