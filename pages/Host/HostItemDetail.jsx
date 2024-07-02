import React, { useState, useEffect } from "react";
import { useParams, Link, NavLink, Outlet } from "react-router-dom";
import { getItem } from "../../api";

export default function HostItemDetail() {
  const [currentItem, setCurrentItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function loadItems() {
      setLoading(true);
      try {
        const data = await getVan(id);
        setCurrentItem(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    loadItems();
  }, [id]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>There was an error: {error.message}</h1>;
  }

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <section>
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all items</span>
      </Link>
      {currentItem && (
        <div className="host-item-detail-layout-container">
          <div className="host-item-detail">
            <img src={currentItem.imageUrl} />
            <div className="host-item-detail-info-text">
              <i className={`item-type item-type-${currentItem.type}`}>
                {currentItem.type}
              </i>
              <h3>{currentItem.name}</h3>
              <h4>${currentItem.price}/day</h4>
            </div>
          </div>

          <nav className="host-item-detail-nav">
            <NavLink
              to="."
              end
              style={({ isActive }) => (isActive ? activeStyles : null)}
            >
              Details
            </NavLink>
            <NavLink
              to="pricing"
              style={({ isActive }) => (isActive ? activeStyles : null)}
            >
              Pricing
            </NavLink>
            <NavLink
              to="photos"
              style={({ isActive }) => (isActive ? activeStyles : null)}
            >
              Photos
            </NavLink>
          </nav>
          <Outlet context={{ currentItem }} />
        </div>
      )}
    </section>
  );
}
