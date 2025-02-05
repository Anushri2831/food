import React, { useState } from "react";
import "./BurgerMenu.css";

// Category list with images
const categories = [
  { name: "Donuts", image: "https://th.bing.com/th/id/OIP.5jw_xIThV3j0DgEDbJSBJAAAAA?rs=1&pid=ImgDetMain" },
  { name: "Burger", image: "https://th.bing.com/th/id/R.d1a7153f003edfbf950ccddde37e726f?rik=as25KvDOwqFjig&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f16%2fBacon-Cheese-Burger-PNG-File.png&ehk=a8MfiNRfl1CgWEUCsTWQ0FznuGS%2f9ljO6U1%2fiB333EA%3d&risl=&pid=ImgRaw&r=0" },
  { name: "Ice", image: "https://th.bing.com/th/id/OIP.qYL4i9uvgmwsvT5-ThS7oAHaLT?w=184&h=281&c=7&r=0&o=5&pid=1.7" },
  { name: "Hot dog", image: "https://th.bing.com/th/id/OIP.ow7Z-ClXZTLmRW6Bpc70-wHaFf?rs=1&pid=ImgDetMain" },
  { name: "Chicken", image: "https://www.pngmart.com/files/22/KFC-PNG-HD-Isolated.png" }
];

// Burger items
const burgers = [
  { id: 1, name: "Vegetable Burger", price: 25, oldPrice: 30, rating: 2.5, image: "https://th.bing.com/th/id/OIP.lY0i3Du3564GKafBwLekqAHaFl?rs=1&pid=ImgDetMain"},
  { id: 2, name: "Meat Burger", price: 28, oldPrice: 35, rating: 2.5, image: "https://th.bing.com/th/id/OIP._WhnlKChCN5Cjxgtg-ShDQHaGW?rs=1&pid=ImgDetMain" },
  { id: 3, name: "Cheese Burger", price: 32, oldPrice: 38, rating: 2.5, image: "https://png.pngtree.com/png-clipart/20230502/original/pngtree-hot-cheesy-burger-isolated-on-transparent-background-png-image_9133351.png" },
  { id: 4, name: "Vegetable Burger", price: 30, oldPrice: 33, rating: 2.5, image: "https://th.bing.com/th/id/OIP.uIzNssI4ccRuFa9anCRlVwHaH_?w=138&h=180&c=7&r=0&o=5&pid=1.7" },
  { id: 5, name: "Bean Burger", price: 15, oldPrice: 20, rating: 2.5, image: "https://th.bing.com/th/id/OIP.SBBgxepcQy1ThobK71_0iQHaFK?w=256&h=180&c=7&r=0&o=5&pid=1.7"},
  { id: 6, name: "Wild Salmon Burger", price: 40, oldPrice: 50, rating: 2.5, image: "https://png.pngtree.com/png-clipart/20231003/original/pngtree-tasty-burger-png-ai-generative-png-image_13245907.png" }
];


const BurgerMenu = () => {
  const [activeCategory, setActiveCategory] = useState("Burger");

  return (
    <div className="burger-menu">
      {/* Heading */}
      <h2 className="explore-title">Explore Categories</h2>

      {/* Categories */}
      <div className="categories">
        {categories.map((category) => (
          <button 
            key={category.name} 
            className={`category-btn ${activeCategory === category.name ? "active" : ""}`}
            onClick={() => setActiveCategory(category.name)}
          >
            <img src={category.image} alt={category.name} className="category-icon" />
            {category.name}
          </button>
        ))}
      </div>

      {/* Tabs */}
      <div className="filter-tabs">
        <button className="active">Popular</button>
        <button>Recent</button>
      </div>

      {/* Burger List */}
      <div className="burger-list">
        {burgers.map((burger,) => (
          <div key={burger.id} className="burger-card">
            <img src={burger.image} alt={burger.name} className="burger-image" />
            <h3>{burger.name}</h3>
            <p className="price">
              ${burger.price} <span className="old-price">${burger.oldPrice}</span>
            </p>
            <p className="rating">⭐ {burger.rating}k</p>
            <div className="actions">
              <button className="wishlist">Wishlist</button>
              <button className="order-now">Order Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BurgerMenu;