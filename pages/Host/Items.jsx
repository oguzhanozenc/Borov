import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getItems } from "../../api";
import "./Items.css";

export default function Items() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const typeFilter = searchParams.get("type");

  useEffect(() => {
    async function loadItems() {
      setLoading(true);
      try {
        const data = await getItems();
        setItems(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    loadItems();
  }, []);

  const displayedItems = typeFilter
    ? items.filter((item) => item.type === typeFilter)
    : items;

  const itemElements = displayedItems.map((item) => (
    <div key={item.id} className="item-tile">
      <Link
        to={item.id}
        state={{
          search: `?${searchParams.toString()}`,
          type: typeFilter,
        }}
      >
        <img src={item.imageUrl} alt={item.name} />
        <div className="item-info">
          <h3>{item.name}</h3>
          <p>
            ${item.price}
            <span>/day</span>
          </p>
        </div>
        <i className={`item-type ${item.type} selected`}>{item.type}</i>
      </Link>
    </div>
  ));

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>There was an error: {error.message}</h1>;
  }

  return (
    <div className="item-list-container">
      <h1>Explore our product options</h1>
      <div className="item-list-filter-buttons">
        <button
          onClick={() => handleFilterChange("type", "basic")}
          className={`item-type simple 
                        ${typeFilter === "basic" ? "selected" : ""}`}
        >
          Basic
        </button>
        <button
          onClick={() => handleFilterChange("type", "premium")}
          className={`item-type premium 
                        ${typeFilter === "premium" ? "selected" : ""}`}
        >
          Premium
        </button>

        {typeFilter ? (
          <button
            onClick={() => handleFilterChange("type", null)}
            className="item-type clear-filters"
          >
            Clear filter
          </button>
        ) : null}
      </div>
      <div className="item-list">{itemElements}</div>
    </div>
  );
}
