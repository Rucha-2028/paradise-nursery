
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";

function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate total quantity of all products
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        Paradise Nursery
      </Link>

      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/plants">Plants</Link>
        </li>

        <li>
          <Link to="/cart" className="cart-link">
            <FaShoppingCart size={20} />
            <span>Cart</span>
            <span className="cart-count">{totalItems}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
