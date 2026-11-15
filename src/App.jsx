
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import "./App.css";

// Landing Page
function Home() {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Paradise Nursery</h1>
        <h2>Bring Nature Home</h2>

        <p>
          Welcome to Paradise Nursery, your destination for beautiful
          indoor plants and greenery. We believe that plants bring life,
          freshness, and positivity into every space. Explore our
          collection of carefully selected houseplants and find the
          perfect green companion for your home. Whether you are a
          beginner or an experienced plant lover, we are here to make
          your plant shopping experience simple and enjoyable.
        </p>

        <AboutUs />

        <Link to="/plants">
          <button className="get-started-btn">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}

// Temporary cart page; we will implement it in Question 7.
function CartPlaceholder() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Shopping Cart</h1>
      <p>Your shopping cart will be displayed here.</p>
      <Link to="/plants">Continue Shopping</Link>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartPlaceholder />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
