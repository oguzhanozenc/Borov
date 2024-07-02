import React from "react";
import "./Footer.css";
import { FaSlideshare } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-links">
          <div>
            <li>
              <strong>Support</strong>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Cookie Policy</a>
            </li>
            <li>
              <a href="#">Purchasing Policy</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>{" "}
            <li>
              <a href="#">Career</a>
            </li>
          </div>
          <div>
            <li>
              <strong>Permalinks</strong>
            </li>

            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
          </div>
          <div>
            <li>
              <a href="#">
                <strong>Contact Us</strong>
              </a>
            </li>
            <li>
              <a href="#">Press</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
          </div>
        </div>
      </div>{" "}
      <div className="footer-left">
        <strong>
          &#169; 2024 <FaSlideshare /> Borov.
        </strong>
      </div>
    </footer>
  );
}
