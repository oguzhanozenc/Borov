import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <h1>Discover a New Way to Rent with Borov</h1>
      <p>
        Enhance your lifestyle by renting items with Borov. Whether you need
        tools, electronics, or recreational gear, Borov has you covered.
      </p>
      <Link to="/items">Explore Borov Items</Link>
    </div>
  );
}
