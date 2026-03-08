import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import BrandStory from "./pages/BrandStory";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product, size = null) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.id === product.id && item.size === size,
      );
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prevCart, { ...product, size, quantity: 1 }];
    });
  };

  const removeFromCart = (productId, size = null) => {
    setCart((prevCart) =>
      prevCart.filter((item) => !(item.id === productId && item.size === size)),
    );
  };

  const updateQuantity = (productId, size, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId, size);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId && item.size === size
          ? { ...item, quantity }
          : item,
      ),
    );
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartActions = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
    getTotalItems,
    clearCart,
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Nav cartActions={cartActions} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home cartActions={cartActions} />} />
            <Route path="/shop" element={<Shop cartActions={cartActions} />} />
            <Route path="/brand-story" element={<BrandStory />} />
            <Route path="/cart" element={<Cart cartActions={cartActions} />} />
            <Route
              path="/checkout"
              element={<Checkout cartActions={cartActions} />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
