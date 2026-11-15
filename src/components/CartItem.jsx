
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeItem, updateQuantity } from "../redux/CartSlice";
import Navbar from "./Navbar";
import "./ProductList.css";
import "./CartItem.css";

function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate total quantity and total price
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalCost = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleIncrease = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1,
      })
    );
  };

  const handleDecrease = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity - 1,
      })
    );
  };

  const handleRemove = (itemId) => {
    dispatch(removeItem(itemId));
  };

  const handleCheckout = () => {
    alert("Coming Soon! Thank you for shopping at Paradise Nursery.");
  };

  return (
    <div className="cart-page">
      <Navbar />

      <main className="cart-container">
        <h1>Your Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <h2>Your cart is currently empty.</h2>
            <p>Explore our collection and find a plant for your home.</p>

            <Link to="/plants" className="continue-shopping-btn">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-summary">
              <p>
                Total Items: <strong>{totalItems}</strong>
              </p>
              <p>
                Total Cost: <strong>₹{totalCost.toFixed(2)}</strong>
              </p>
            </div>

            <div className="cart-items-list">
              {cartItems.map((item) => (
                <article className="cart-item-card" key={item.id}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-image"
                  />

                  <div className="cart-item-details">
                    <h2>{item.name}</h2>

                    <p>
                      Unit Price: ₹{item.price.toFixed(2)}
                    </p>

                    <p>
                      Subtotal: ₹{(item.price * item.quantity).toFixed(2)}
                    </p>

                    <div className="quantity-controls">
                      <button
                        type="button"
                        onClick={() => handleDecrease(item)}
                        aria-label={`Decrease quantity of ${item.name}`}
                      >
                        −
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        type="button"
                        onClick={() => handleIncrease(item)}
                        aria-label={`Increase quantity of ${item.name}`}
                      >
                        +
                      </button>
                    </div>

                    <button
                      type="button"
                      className="remove-item-btn"
                      onClick={() => handleRemove(item.id)}
                    >
                      Delete
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <div className="cart-footer">
              <h2>
                Grand Total: ₹{totalCost.toFixed(2)}
              </h2>

              <button
                type="button"
                className="checkout-btn"
                onClick={handleCheckout}
              >
                Checkout
              </button>

              <Link to="/plants" className="continue-shopping-btn">
                Continue Shopping
              </Link>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default CartItem;
