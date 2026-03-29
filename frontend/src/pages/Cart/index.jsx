import React, { useState } from "react";

const Cart = () => {

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "All Natural Italian-Style Chicken Meatballs",
      price: 7.25,
      quantity: 2,
      image: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg"
    }
  ]);

  // Increase quantity
  const increaseQty = (id) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Decrease quantity
  const decreaseQty = (id) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Remove item
  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  // Remove all
  const clearCart = () => {
    setCartItems([]);
  };

  // Calculate totals
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const shipping = 5;
  const total = subtotal + shipping;

  return (
    <section className="bg-gray-50 min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* LEFT SIDE */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow">
          
          {/* Free shipping */}
          <div className="mb-6">
            <p className="text-sm mb-2">
              Add <span className="text-red-500 font-semibold">$35.50</span> to cart and get free shipping!
            </p>
            <div className="w-full bg-gray-200 h-2 rounded-full">
              <div className="bg-red-500 h-2 rounded-full w-1/3"></div>
            </div>
          </div>

          {/* Header */}
          <div className="grid grid-cols-4 font-semibold text-gray-600 border-b pb-2">
            <span>Product</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Subtotal</span>
          </div>

          {/* Products */}
          {cartItems.map((item) => (
            <div key={item.id} className="grid grid-cols-4 items-center py-4 border-b">
              
              {/* Product */}
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt="product"
                  className="w-14 h-14 rounded"
                />
                <span className="text-sm">{item.name}</span>
              </div>

              {/* Price */}
              <span>${item.price.toFixed(2)}</span>

              {/* Quantity */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="px-2 py-1 bg-gray-200 rounded"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => increaseQty(item.id)}
                  className="px-2 py-1 bg-gray-200 rounded"
                >
                  +
                </button>
              </div>

              {/* Subtotal */}
              <span className="flex justify-between items-center">
                ${(item.price * item.quantity).toFixed(2)}
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-gray-400 hover:text-red-500 ml-2"
                >
                  ✕
                </button>
              </span>
            </div>
          ))}

          {/* Coupon */}
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <input
              type="text"
              placeholder="Coupon code"
              className="border p-2 rounded w-full"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded">
              Apply coupon
            </button>
            <button
              onClick={clearCart}
              className="bg-blue-900 text-white px-4 py-2 rounded"
            >
              Remove All
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-white p-6 rounded-xl shadow h-fit">
          <h2 className="text-lg font-semibold mb-4">Cart Totals</h2>

          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          <div className="mb-4">
            <p className="mb-2 font-medium">Shipping</p>
            <div className="flex items-center gap-2 text-sm">
              <input type="radio" defaultChecked />
              <span>Flat rate: $5.00</span>
            </div>
          </div>

          <div className="flex justify-between font-semibold text-lg border-t pt-3 mb-4">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <button className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition">
            Proceed to checkout
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cart;