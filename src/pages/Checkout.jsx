import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiCheck, FiArrowLeft } from "react-icons/fi";

const Checkout = ({ cartActions }) => {
  const { cart, getTotalPrice, clearCart } = cartActions;
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    cardName: "",
    cardNumber: "",
    cardExpiry: "",
    cardCVC: "",
  });

  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form
    if (Object.values(formData).some((field) => !field)) {
      alert("Please fill in all fields");
      return;
    }
    // Simulate order processing
    setOrderPlaced(true);
    clearCart();
  };

  const subtotal = getTotalPrice();
  const shipping = subtotal > 0 ? 10 : 0;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const formatPrice = (amt) => `₦${amt.toLocaleString()}`; // display helper

  if (cart.length === 0 && !orderPlaced) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 flex items-center justify-center">
        <div className="text-center">
          <p className="text-2xl text-gray-600 mb-8">Your cart is empty</p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-yellow-500 text-white px-8 py-3 font-bold rounded-lg hover:bg-yellow-600 transition"
          >
            <FiArrowLeft /> Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 flex items-center justify-center px-6 sm:px-8">
        <div className="max-w-md text-center">
          <div className="bg-green-500 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <FiCheck size={40} />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Order <span className="text-yellow-500">Confirmed</span>
          </h1>
          <p className="text-gray-600 mb-8">
            Thank you for your purchase! Your order has been confirmed and will
            be shipped to your address.
          </p>
          <div className="bg-white rounded-xl p-6 mb-8 border border-gray-200">
            <p className="text-gray-600 mb-2">Order Total</p>
            <p className="text-3xl font-bold text-yellow-500">
              {formatPrice(total)}
            </p>
          </div>
          <p className="text-gray-600 text-sm mb-8">
            You'll receive a confirmation email shortly with tracking
            information.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-yellow-500 text-white px-8 py-3 font-bold rounded-lg hover:bg-yellow-600 transition"
          >
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <Link
          to="/cart"
          className="inline-flex items-center gap-2 text-yellow-500 hover:text-yellow-600 transition mb-8 font-semibold"
        >
          <FiArrowLeft /> Back to Cart
        </Link>

        <h1 className="text-5xl font-bold text-gray-900 mb-12">
          Secure <span className="text-yellow-500">Checkout</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-6">
            {/* Shipping Information */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Shipping <span className="text-yellow-500">Details</span>
              </h2>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="col-span-1 bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-yellow-500 focus:outline-none transition"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="col-span-1 bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-yellow-500 focus:outline-none transition"
                  required
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-yellow-500 focus:outline-none transition mb-4"
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-yellow-500 focus:outline-none transition mb-4"
                required
              />

              <input
                type="text"
                name="address"
                placeholder="Street Address"
                value={formData.address}
                onChange={handleChange}
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-yellow-500 focus:outline-none transition mb-4"
                required
              />

              <div className="grid grid-cols-3 gap-4">
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                  className="col-span-2 bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-yellow-500 focus:outline-none transition"
                  required
                />
                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  value={formData.state}
                  onChange={handleChange}
                  className="col-span-1 bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-yellow-500 focus:outline-none transition"
                  required
                />
              </div>

              <input
                type="text"
                name="zip"
                placeholder="ZIP Code"
                value={formData.zip}
                onChange={handleChange}
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-yellow-500 focus:outline-none transition mt-4"
                required
              />
            </div>

            {/* Payment Information */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Payment <span className="text-yellow-500">Method</span>
              </h2>

              <input
                type="text"
                name="cardName"
                placeholder="Cardholder Name"
                value={formData.cardName}
                onChange={handleChange}
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-yellow-500 focus:outline-none transition mb-4"
                required
              />

              <input
                type="text"
                name="cardNumber"
                placeholder="Card Number"
                value={formData.cardNumber}
                onChange={handleChange}
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-yellow-500 focus:outline-none transition mb-4"
                maxLength="19"
                required
              />

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="cardExpiry"
                  placeholder="MM/YY"
                  value={formData.cardExpiry}
                  onChange={handleChange}
                  className="bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-yellow-500 focus:outline-none transition"
                  required
                />
                <input
                  type="text"
                  name="cardCVC"
                  placeholder="CVC"
                  value={formData.cardCVC}
                  onChange={handleChange}
                  className="bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-yellow-500 focus:outline-none transition"
                  maxLength="4"
                  required
                />
              </div>
            </div>
          </form>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 border border-gray-200 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Order Summary
              </h2>

              <div className="mb-6 pb-6 border-b border-gray-200 space-y-3 max-h-64 overflow-y-auto">
                {cart.map((item) => (
                  <div
                    key={`${item.id}-${item.size}`}
                    className="flex justify-between text-sm"
                  >
                    <span className="text-gray-600">
                      {item.name} {item.size && `(${item.size})`} x
                      {item.quantity}
                    </span>
                    <span className="text-gray-900 font-semibold">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>

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

              <button
                type="submit"
                onClick={handleSubmit}
                className="w-full bg-yellow-500 text-white font-bold py-4 rounded-lg hover:bg-yellow-600 transition uppercase tracking-wider"
              >
                Complete Purchase
              </button>

              <p className="text-xs text-gray-500 text-center mt-4">
                Your payment is secure and encrypted
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
