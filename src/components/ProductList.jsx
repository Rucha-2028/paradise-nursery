
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";
import Navbar from "./Navbar";
import "./ProductList.css";


const plantCategories = [
  {
    category: "Air Purifying Plants",
    plants: [
      {
        id: 1,
        name: "Snake Plant",
        price: 299,
        image: "https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?w=600",
      },
      {
        id: 2,
        name: "Peace Lily",
        price: 349,
        image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=600",
      },
      {
        id: 3,
        name: "Spider Plant",
        price: 249,
        image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=600",
      },
      {
        id: 4,
        name: "Areca Palm",
        price: 499,
        image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=600",
      },
      {
        id: 5,
        name: "Rubber Plant",
        price: 399,
        image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=600",
      },
      {
        id: 6,
        name: "English Ivy",
        price: 279,
        image: "https://images.unsplash.com/photo-1509423350716-97f2360af7e4?w=600",
      },
    ],
  },
  {
    category: "Low Maintenance Plants",
    plants: [
      {
        id: 7,
        name: "ZZ Plant",
        price: 399,
        image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600",
      },
      {
        id: 8,
        name: "Money Plant",
        price: 199,
        image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=600",
      },
      {
        id: 9,
        name: "Jade Plant",
        price: 229,
        image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=600",
      },
      {
        id: 10,
        name: "Aloe Vera",
        price: 199,
        image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=600",
      },
      {
        id: 11,
        name: "Pothos",
        price: 249,
        image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600",
      },
      {
        id: 12,
        name: "Lucky Bamboo",
        price: 299,
        image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=600",
      },
    ],
  },
  {
    category: "Decorative Indoor Plants",
    plants: [
      {
        id: 13,
        name: "Monstera Deliciosa",
        price: 599,
        image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=600",
      },
      {
        id: 14,
        name: "Fiddle Leaf Fig",
        price: 699,
        image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=600",
      },
      {
        id: 15,
        name: "Calathea",
        price: 449,
        image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=600",
      },
      {
        id: 16,
        name: "Philodendron",
        price: 399,
        image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=600",
      },
      {
        id: 17,
        name: "Bird of Paradise",
        price: 799,
        image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=600",
      },
      {
        id: 18,
        name: "Chinese Evergreen",
        price: 349,
        image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600",
      },
    ],
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const isInCart = (plantId) =>
    cartItems.some((item) => item.id === plantId);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div className="product-page">
      <Navbar />

      <header className="product-header">
        <h1>Our Houseplant Collection</h1>
        <p>
          Discover plants that bring freshness, beauty, and life
          into your home.
        </p>
      </header>

      <main className="product-container">
        {plantCategories.map((category) => (
          <section className="plant-category" key={category.category}>
            <h2>{category.category}</h2>

            <div className="plant-grid">
              {category.plants.map((plant) => (
                <article className="plant-card" key={plant.id}>
                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="plant-image"
                  />

                  <div className="plant-details">
                    <h3>{plant.name}</h3>
                    <p className="plant-price">
                      ₹{plant.price}
                    </p>

                    <button
                      className="add-cart-btn"
                      onClick={() => handleAddToCart(plant)}
                      disabled={isInCart(plant.id)}
                    >
                      {isInCart(plant.id)
                        ? "Added to Cart"
                        : "Add to Cart"}
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default ProductList;
