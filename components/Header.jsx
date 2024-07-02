import React from "react";
import { Link, NavLink } from "react-router-dom";
import imageUrl from "/assets/images/avatar-icon.png";
import "./Header.css";
import { FaSlideshare } from "react-icons/fa";

export default function Header() {
  const activeStyles = {
    fontWeight: "bold",
    color: "#161616",
  };

  function fakeLogOut() {
    localStorage.removeItem("loggedin");
  }

  return (
    <header>
      <Link className="site-logo" to="/">
        <FaSlideshare /> Borov.
      </Link>
      <nav>
        <NavLink
          to="/host"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Host
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          About
        </NavLink>
        <NavLink
          to="/items"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Products
        </NavLink>
        <Link to="login" className="login-link">
          <img src={imageUrl} className="login-icon" />
        </Link>
        <button onClick={fakeLogOut}>X</button>
      </nav>
    </header>
  );
}
