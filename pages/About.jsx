import React from "react";
import "./About.css";
import bgImg from "../assets/images/header.avif";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="about-page-container">
      <div className="about-hero-wrapper">
        <img src={bgImg} className="about-hero-image" alt="About Borov" />
        <div className="about-hero-overlay">
          <div className="about-page-content">
            <h1>Discover a New Way to Rent Items with Borov</h1>
            <p>
              At Borov, we're dedicated to revolutionizing how you access and
              rent items for everyday use. Our platform ensures that every item
              is inspected and ready for your needs.
            </p>
            <p>
              Join our community of renters and owners who believe in
              sustainable living and sharing economy.
            </p>

            <div className="about-page-cta">
              <h2>Start Renting Today!</h2>
              <Link className="link-button" to="/items">
                Explore Our Items
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
